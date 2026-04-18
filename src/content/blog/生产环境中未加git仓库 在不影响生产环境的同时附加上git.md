---
title: 生产环境中未加git仓库 在不影响生产环境的同时附加上git
uid: 202604161409
datetime: 2026-04-16 14:09
slug: production-environment-add-repo
aliases: []
tags: 
  - git
source:
link:

description: 如何在不影响生产环境中添加git仓库
date: 2026-04-16 14:09:00
category: 笔记
---
### 项目目录初始化并关联

```bash
# 进入程序目录
cd /var/www/your-project

# 1. 初始化 git 环境
git init

git config --global --add safe.directory /var/www/your-project
# 2. 关联你已有的远程仓库
git remote add origin <你的仓库地址.git>
# PAT方式 只能https
# git remote set-url origin https://<TOKEN>@github.com/username/repo.git


# 3. 从远程获取索引（不修改本地文件）
git fetch

# 4. 强制将本地分支重置为远程状态（但保持文件内容不变）
# 这一步是为了让 Git 认为本地文件已经和远程对齐
git reset --mixed origin/main
# 若发现生产环境有些不一样 又无关紧要 就
git reset --hard origin/main

```

### 同步状态

此时，如果你运行 `git status`，可能会看到一堆“已修改”或“未追踪”的文件。
- **如果服务器代码和远程完全一致**：`git status` 会显示干净。
- **如果服务器代码有细微改动**：你可以选择 `git checkout .` 放弃服务器上的改动（强制对齐远程），或者 `git add . && git commit` 把服务器上的改动提交上去。
### 后续如何“无感”部署？

#### **方案 A：手动拉取（最稳）**

```bash
git pull origin main
# 如果是 Laravel，记得清理缓存
php artisan config:cache
```

#### **方案 B：使用 Webhook（全自动）**

你可以配置 GitHub/Gitee 的 Webhook。当你推送到 `main` 分支时，仓库会自动通知你的生产服务器执行 `git pull`。
