---
title: Laravel中tailwind.config.js读取.env环境变量值
uid: 202412022308
datetime: 2024-12-02 23:08
slug: latavel-tailwind-js-env
aliases: 
tags: 
  - php
  - laravel
source: 
link:

description: Laravel中tailwind.config.js读取.env环境变量值
date: 2024-12-02 23:08:00
category: 笔记
---
之前知道通过 dotenv 读取环境变量值

```javascript
require('dotenv').config();
let val = process.env.VALUE
```

但是始终不成功，找了各种资料也只是重复上面的说法。

直到在stackoverflow上看到了 simonw16 的回答

```javascript

let mix = require('laravel-mix');

require('dotenv').config();
let val = process.env.VALUE
```

记录一下，以备后查

注：上面的均需npm安装 laravel-mix 与 dotenv

参考:
https://stackoverflow.com/questions/35683562/how-to-access-the-laravel-env-variables-inside-javascript