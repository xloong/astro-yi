---
title: 宝塔面板部署 laravel 10 blade+tailwindcss 笔记
uid: 202409101716
datetime: 2024-09-10 17:16
slug: baota-laravel10-blade-tailwindcss
aliases: 
tags: 
  - 宝塔
  - laravel
  - blade
  - tailwindcss
source: 
link:

description: 宝塔面板部署 laravel 10 blade+tailwindcss 笔记
date: 2024-09-10 17:16:00
category: 笔记
---
## php

`php 8.1`
安装php扩展
`fileinfo`
应该还有一个 忘记是什么了

## 上传

上传时，应不带以下2个目录，这2个目录为安装的依赖，通常很大（小了百M，大了上G），能在线安装还是推荐在线安装
`node_modules`  
`vendor`

## .env 文件

数据库连接等配置

## 站点配置

网站目录 运行目录 `/public`
伪静态规则选 laravel5

```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

## nodejs

宝塔软件商店 -> Node.js版本管理器 -> 只显示LTS版本
nodejs 16.2
这里是因为服务器环境原因 选择的版本比较低

终端在网站目录 运行
`npm install` 会自动生成`node_modules`文件夹
`npm run build`

### 若无法成功安装

上传本地安装好的`node_modules`文件夹
本地运行 `npm run build` 或 `vite build`
上传文件夹
`public/build/`

## composer

如果未安装`composer`需先安装

在网站目录运行 安装php依赖 会自动生成`vendor`文件夹
`composer install`

## 删除 public目录下的hot文件

不然访问网站会表现为丢失样式的样子

## 根据需要开启路由等缓存

路由缓存，视图缓存，配置缓存
```shell
php artisan route:cache
php artisan view:cache
php artisan config:cache
```

清除缓存
```shell
php artisan route:clear
php artisan view:clear
php artisan config:clear
```

## 结束