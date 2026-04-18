---
title: Laravel部署在网站子目录中的nginx伪静态规则
uid: 202411282057
datetime: 2024-11-28 20:57
slug: laravel-subfolder-nginx-config
aliases: 
tags: 
  - php
  - laravel
source: 
link:

description: Laravel部署在网站子目录中的nginx伪静态规则
date: 2024-11-28 20:57:00
category: 笔记
---
最近有个项目是需要独立的laravel程序放在已有网站的子目录内，伪静态规则让我一顿好找啊，记录一下。

如果是laravel独立站点，那不用管那么多了，一条规则足够
```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

如果是子目录还需要放独立的laravel程序，则需要在后面加
```nginx
location ^~ /laravel {
    alias /www/wwwroot/xxxxcom/laravel/public;
    try_files $uri $uri/ @laravel;
    
    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_split_path_info ^(.+\.php)(.*)$;
        fastcgi_param SCRIPT_FILENAME $request_filename;
        fastcgi_pass unix:/tmp/php-cgi-81.sock;
    }
}
location @laravel {
  rewrite /laravel/(.*)$ /laravel/index.php?/$1 last;
}
```

参考：
https://stackoverflow.com/questions/27785372/config-nginx-for-laravel-in-a-subfolder
Hamid Naghipour 的回答