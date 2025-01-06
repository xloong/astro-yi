---
title: NaviCat for MySQL - MySQL的企业管理器
description: post/NaviCat-for-MySQL.html">NaviCatforMySQL 是个类似SQLServer企业管理器的 post/NaviCat-for-MySQL.html">MySQL的企业管理器，很直观，操作也方便，比在线的phpMyAdmin好用多了，之前都是在本地学习/tags/MySQL">MySQL时用一下，今天试一下连接远程数据库，居然给我搞成功了，记一下步骤。post/NaviCat-for-MySQL.html">
date: 2011-06-26 11:53:24
category: 应用软件
tags: ['SQL', 'MySql']
post_id: 1258
alias: NaviCat-for-MySQL
ViewNums: 4214
---

[NaviCat for MySQL](/blog/navicat-for-mysql) 是个类似SQL Server 企业管理器的 [MySQL的企业管理器](/blog/navicat-for-mysql)，很直观，操作也方便，比在线的phpMyAdmin好用多了，之前都是在本地学习[MySQL](/tags/MySQL)时用一下，今天试一下连接远程数据库，居然给我搞成功了，记一下步骤。

[![NaviCat for MySQL - MySQL的企业管理器](http://unix-cd.com/vc/attachment/100810/567d6a2240.jpg)](/blog/navicat-for-mysql)

1、打开NaviCat，文件，创建连接

[![NaviCat for MySQL - MySQL的企业管理器](http://www.zfnn.com/upload/73701-NaviCat.jpg)](/blog/navicat-for-mysql)

主机名IP地址，填写LocalHost；

用户名、密码，填写你的数据库用户名与密码。

连接名，随便你写了。

这时候还不能连接数据库的，需要通过Http通道的形式进行数据库连接。

2、点击连接属性标签栏中的Http，如下图所示：

[![NaviCat for MySQL - MySQL的企业管理器](http://www.zfnn.com/upload/73702-NaviCat.jpg)](/blog/navicat-for-mysql)

勾选使用Http通道后，在通道地址一栏输入你的网址与后台文件地址，这里要重点说明一下。

因为服务器数据库不允许远程连接，这个HTTP通道应该就是Navicat的HTTP数据接口

当你的ISP不允许直接连线到他们的MySQL server但允许建立HTTP连线时，Navicat可以提供你使用HTTP穿隧(Tunneling)功能。 HTTP穿隧(Tunneling)使用与网站服务器相同协定(http://)及相同端口(port 80)以连接到一个MySQL server。

ntunnel_mysql.php哪里有？Navicat安装好后，在安装目录有一个文件：ntunnel_mysql.php，将其上传到网站根目录就可以了。

通道地址，填写http://www.yourdomain.com/ntunnel_mysql.php

代理服务器，因为我这上网通过代理服务器上网，所以就填了，你视情况而定吧。

最后试一下，连接测试就可以了，远程过程有点慢，由于它要通过PHP文件连到网站服务器，并且要返回信息所以需要稍等一下，有点耐心哦。

【[**NaviCat for MySQL - MySQL的企业管理器下载地址**](/blog/navicat-for-mysql)】
 [下载地址](download.asp?id=460)

via [荆棘鸟](http://www.zfnn.com/)

