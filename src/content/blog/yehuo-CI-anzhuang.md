---
title: 跟夜火学CodeIgniter - 安装
description: CodeIgniter的安装非常简单，只需上传程序到服务器，然后修改下配置文件就行了，不需编译，非常便利。 下载最新版CodeIgniter下载地址：http://codeigniter.org.cn/download当前即本教程使用的版本为2.1.4服务器要求PHP 版本5.1.6或更新的版本。大多数Web应用程序需要数据库。当前支持
date: 2014-02-24 11:31:30
category: 教程与电子书
tags: ['CodeIgniter', 'PHP']
post_id: 1510
alias: yehuo-CI-anzhuang
ViewNums: 3955
---

[CodeIgniter](/blog/yehuo-ci-xu-mulu)的安装非常简单，只需上传程序到服务器，然后修改下配置文件就行了，不需编译，非常便利。

### 下载

最新版CodeIgniter下载地址：<http://codeigniter.org.cn/download>

当前即本教程使用的版本为2.1.4

**服务器要求**

* [PHP](/tags/PHP) 版本 5.1.6 或更新的版本。
* 大多数 Web 应用程序需要数据库。当前支持的数据库为：MySQL (4.1+), MySQLi, MS SQL, Postgres, Oracle, SQLite 和 ODBC。

至于配置服务器什么的，不在本文讨论之列，[windows](/tags/Windows)系统有很多本地一键PHP环境搭建软件，如[WampServer](http://www.wampserver.com/en/#download-wrapper)  等，可自行查找相关知识。

### 访问

将[CodeIgniter](/tags/CodeIgniter)解压并上传到服务器根目录之后，什么都不用配置也可以使用。直接用浏览器访问框架所在根目录，如本地，则访问localhost 或 127.0.0.1 均可，就应该会出现类似下图的“Welcome to CodeIgniter!”页面，说明CI运行正常。

[![CodeIgniter 默认初始页面](/upload/CI-01-01.jpg)](/blog/yehuo-ci-anzhuang)

已经成功了一大步了，不是吗？

### 压缩包内文件的简单介绍

**user_guide** 用户指南，一些案例，教程等，在实际生产环境中可以删掉。

**system** CodeIgniter框架主要文件，系统自带类库、函数等，一般里面的文件都不需要改动。

**application** 我们的程序目录，自己所写的模型、模板、控制器、自定义类库、函数等都存放在这个目录，这个是主要要用到的。

**index.php** 这个是程序的入口，CI是单一入口的框架，即无论访问程序什么页面，都是要访问这个页面的，也许你看到这里有些糊涂，没关系，先跳过，继续往后面看，慢慢会了解的。

**license.txt** 协议

**.travis.yml**

**.gitignore** 这2个文件，应该是代码托管用到的，似乎生产环境用不到，我也不是太懂，望高手指点。

### 配置

虽然CodeIgniter不配置也可以使用，但还是推荐配置一下，让CI运行的更稳健。

application/config/config.php 设置网站的域名或根URL，还没确定的话，留空也行。

如下：
```php
 $config['base_url'] = '';
 $config['index_page'] = 'index.php';
```
注释虽然都是英文，不过都很具有参考意义，会告诉你填什么内容，什么格式，或者有哪些选项。

需要使用数据库的话，配置下另外一个文件

application/config/database.php 设置程序连接数据库的参数

如果是用mysql数据库，服务器连接校对是utf8_general_ci的话，基本改下面4个就行了，若有其他情况，根据自身需要修改
```php
 $db['default']['hostname'] = 'localhost'; //数据库服务器地址，基本都是localhost本地
 $db['default']['username'] = ''; //数据库用户名
 $db['default']['password'] = ''; //数据库密码
 $db['default']['database'] = ''; //数据库名
```
至此，CodeIgniter的安装配置过程已完成，是不是非常简单？

进阶内容可参见官方手册 - 安装指导 <http://codeigniter.org.cn/user_guide/installation/index.html>

上一节：[序+目录](/blog/yehuo-ci-xu-mulu)     下一节：[用CodeIgniter发布静态页](/blog/yehuo-ci-jingtaiye)

