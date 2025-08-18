# Deploy flowopsai.coreai.co.in

## 1) DNS
Create a DNS record:
- Type: CNAME (or A if you use a server IP)
- Host: flowopsai
- Target: coreai.co.in (or your server IP for A record)

## 2) Build and run the site container
```bash
cd flowopsai_site
docker build -t flowopsai-site:latest .
docker run -d --name flowopsai-site -p 8080:8080 flowopsai-site:latest
```

## 3) Reverse proxy on your host (recommended Nginx on host)
Create `/etc/nginx/sites-available/flowopsai.coreai.co.in`:

```
server {
    server_name flowopsai.coreai.co.in;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable and reload:
```bash
ln -s /etc/nginx/sites-available/flowopsai.coreai.co.in /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

## 4) HTTPS (Let's Encrypt)
```bash
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d flowopsai.coreai.co.in --redirect --non-interactive --agree-tos -m hello@coreai.co.in
```

Done ✅
