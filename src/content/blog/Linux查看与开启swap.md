---
title: Linux查看与开启swap
uid: "20260422001018"
datetime: 2026-04-22 00:10:18
slug: linux-swap
aliases: []
tags:
  - linux
source:
link:
description: Linux查看与开启swap
date: 2026-04-22 00:10:18
category: 笔记
---
```bash
# 若swap的值是0  则没开启swap
free -h

# 创建一个 4G 的 swap 文件
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
# 永久生效需写入 /etc/fstab: /swapfile swap swap defaults 0 0
echo '/swapfile swap swap defaults 0 0' | sudo tee -a /etc/fstab

# 不报错即代表格式正确
sudo mount -a
```