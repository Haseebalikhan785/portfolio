#!/usr/bin/env python3
import json
import subprocess
import os
import sys

def run_cmd(cmd, check=True):
    print(f"==> Running: {cmd}")
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if check and res.returncode != 0:
        print(f"Error ({res.returncode}):\nSTDOUT:\n{res.stdout}\nSTDERR:\n{res.stderr}")
        sys.exit(res.returncode)
    return res

def main():
    print("1. Fetching Lightsail access credentials...")
    res = run_cmd("aws lightsail get-instance-access-details --instance-name portfolio-server --region ap-south-1")
    data = json.loads(res.stdout)["accessDetails"]
    ip = data["ipAddress"]
    user = data["username"]
    cert = data["certKey"]
    key = data["privateKey"]

    key_path = "/tmp/lightsail_id_rsa"
    cert_path = "/tmp/lightsail_id_rsa-cert.pub"

    with open(key_path, "w") as f:
        f.write(key + "\n")
    os.chmod(key_path, 0o600)

    with open(cert_path, "w") as f:
        f.write(cert + "\n")
    os.chmod(cert_path, 0o600)

    ssh_opts = f"-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i {key_path} -o CertificateFile={cert_path}"

    print(f"2. Preparing remote directory on {ip}...")
    run_cmd(f'ssh {ssh_opts} {user}@{ip} "sudo mkdir -p /var/www/portfolio && sudo chown -R {user}:{user} /var/www/portfolio"')

    print("3. Packaging dist directory...")
    portfolio_dir = "/Users/haseeb/Documents/Codex/portfolio"
    dist_dir = os.path.join(portfolio_dir, "dist")
    if not os.path.exists(dist_dir):
        print(f"ERROR: {dist_dir} does not exist. Build first!")
        sys.exit(1)

    tar_path = "/tmp/portfolio_dist.tar.gz"
    run_cmd(f"tar -czf {tar_path} -C {dist_dir} .")

    print(f"4. Uploading build tarball to {ip}...")
    run_cmd(f"scp {ssh_opts} {tar_path} {user}@{ip}:/tmp/portfolio_dist.tar.gz")

    print("5. Extracting on remote server...")
    run_cmd(f'ssh {ssh_opts} {user}@{ip} "tar -xzf /tmp/portfolio_dist.tar.gz -C /var/www/portfolio"')

    print("6. Configuring Nginx on port 8080...")
    nginx_conf = """server {
    listen 8080;
    server_name _;

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|pdf)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}"""
    local_nginx_path = "/tmp/portfolio_nginx.conf"
    with open(local_nginx_path, "w") as f:
        f.write(nginx_conf)

    run_cmd(f"scp {ssh_opts} {local_nginx_path} {user}@{ip}:/tmp/portfolio_nginx.conf")
    remote_setup_cmd = (
        'sudo mv /tmp/portfolio_nginx.conf /etc/nginx/sites-available/portfolio && '
        'sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio && '
        'sudo nginx -t && '
        'sudo systemctl reload nginx'
    )
    run_cmd(f'ssh {ssh_opts} {user}@{ip} "{remote_setup_cmd}"')

    print("7. Verifying HTTP response from AWS public IP...")
    verify_res = run_cmd(f"curl -I http://{ip}:8080/", check=False)
    print(verify_res.stdout)
    if "200 OK" in verify_res.stdout:
        print(f"SUCCESS: Portfolio live at http://{ip}:8080/")
    else:
        print(f"Warning: Unexpected response:\n{verify_res.stdout}")

if __name__ == "__main__":
    main()
