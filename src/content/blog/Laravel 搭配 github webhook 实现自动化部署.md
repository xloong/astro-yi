---
title: Laravel 搭配 github webhook 实现自动化部署
uid: 202604162312
datetime: 2026-04-16 23:12
slug: laravel-github-webhook
aliases: []
tags: 
  - php
  - laravel
  - git
source:
link:

description: Laravel 搭配 github webhook 实现自动化部署
date: 2026-04-16 23:12:00
category: 笔记
---
`/opt/scripts/deploy.sh`

```bash
#!/bin/bash

# 配置变量
TARGET_DIR="/var/www/your-project"
BRANCH="deploy"

echo "Starting deployment at $(date)"

cd $TARGET_DIR || exit

# 1. 强制拉取指定分支，确保不产生冲突
git fetch origin $BRANCH
git reset --hard origin/$BRANCH

# 2. 如果是 Laravel 项目，执行必要操作
if [ -f "artisan" ]; then
    composer install --no-dev --optimize-autoloader
    npm install
	npm run build
    php artisan migrate --force
    php artisan config:cache
    php artisan route:cache
fi

# 3. 如果有服务需要重启
# sudo systemctl restart xxx.service

echo "Deployment finished at $(date)"
```
**注意：** 记得给脚本执行权限：`chmod +x /opt/scripts/deploy.sh`。

### 配置 Webhook 接收器
需要一个程序来监听 GitHub 发来的请求。对于 Linux 服务器，最轻量且强大的工具是 **`webhook`** (Go 编写)。
```bash
# Ubuntu/Debian
sudo apt install webhook
# CentOS/Fedora
sudo dnf install webhook
```

```bash
# 腾讯云的OpenCloudOS需要手动安装
# 1. 下载最新版本 (x86_64 架构)
curl -L https://github.com/adnanh/webhook/releases/download/2.8.1/webhook-linux-amd64.tar.gz -o webhook.tar.gz

# 2. 解压
tar -xvf webhook.tar.gz

# 3. 移动到系统 bin 目录以便全局调用
sudo mv webhook-linux-amd64/webhook /usr/local/bin/

# 4. 清理
rm -rf webhook-linux-amd64 webhook.tar.gz

# 5. 验证
webhook --version
```

**配置 `hooks.json`：** 创建一个配置文件（如 `~/hooks.json`）
```json
[
  {
    "id": "redeploy-app",
    "execute-command": "/opt/scripts/deploy.sh",
    "command-working-directory": "/var/www/your-project",
    "pass-arguments-to-command": [
      {
        "source": "payload",
        "name": "ref"
      }
    ],
    "trigger-rule": {
      "and": [
        {
          "match": {
            "type": "payload-hmac-sha1",
            "secret": "你的Webhook密钥",
            "parameter": {
              "source": "header",
              "name": "X-Hub-Signature"
            }
          }
        },
        {
          "match": {
            "type": "value",
            "value": "refs/heads/deploy",
            "parameter": {
              "source": "payload",
              "name": "ref"
            }
          }
        }
      ]
    }
  }
]
```

这个配置确保了只有当推送的分支是 `refs/heads/deploy` 且密钥正确时，才会执行脚本。
运行 Webhook 服务
```bash
webhook -hooks ~/hooks.json -verbose
```
(生产环境建议将其写成 systemd 服务在后台运行)
```bash
sudo vim /etc/systemd/system/webhook.service
```

```ini
[Unit]
Description=Webhook listener for GitHub Deploy
After=network.target

[Service]
Type=simple
# 注意：这里 -hooks 指向你存放 hooks.json 的绝对路径
# -verbose 参数方便你在调试时通过 journalctl 查看详细日志
ExecStart=/usr/local/bin/webhook -hooks /root/hooks.json -verbose -hotreload
Restart=always
RestartSec=5
User=root
# 如果你的脚本需要特定环境变量，可以在这里添加
# Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```
**配置项解释：**
- `-hotreload`：非常实用。开启后，你修改 `hooks.json` 无需重启服务，它会自动重载配置。
- `Restart=always`：保证服务高可用。
### 启动并设置自启
```bash
# 重载系统服务配置
sudo systemctl daemon-reload

# 启动 webhook 并设置为开机自启
sudo systemctl enable --now webhook

# 检查服务状态
sudo systemctl status webhook
```
如果看到 **`active (running)`**，说明服务已经稳稳地跑在后台了。

### 如何查看运行日志？
```bash
# 查看实时滚动日志
journalctl -u webhook -f
```
### GitHub 端：配置 Webhook

1. 进入你的 GitHub 仓库 -> `Settings` -> `Webhooks` -> `Add webhook`。
2. **Payload URL**: `http://你的服务器IP:9000/hooks/redeploy-app`。
3. **Content type**: `application/json`。
4. **Secret**: 填写你在 `hooks.json` 中设置的“你的Webhook密钥”。
5. **Which events**: 选择 `Just the push event`。

