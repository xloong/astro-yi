---
title: 不用命令在Ubuntu下使用支付宝
description:  支付宝的安全控件在Ubuntu9.04里曾经歇菜过一段时间，现在在Ubuntu9.10的Firefox3.5.5里又可以用了。支付宝官方日志里的安装教程要使用命令行，对菜鸟不友好，我来帮他们写篇无命令版吧。1、在支付宝的官方日志《支付宝针对Linux下Firefox的安全控件》（http://blog.alipay.com/301.html）里下载安全控件。2、验证控件的
date: 2009-12-24 03:31:43
category: 技术文章
tags: ['Ubuntu', 'FireFox']
post_id: 1037
alias: ubuntu-alipay
ViewNums: 2738
---

支付宝([alipay.com](https://www.alipay.com/))的安全控件在[Ubuntu 9.04](/blog/ubuntu-904-final)里曾经歇菜过一段时间，现在在[Ubuntu 9.10](/blog/ubuntu-910-final)的Firefox 3.5.5里又可以用了。支付宝官方日志里的安装教程要使用命令行，对菜鸟不友好，我来帮他们写篇无命令版吧。

1、在支付宝的官方日志《支付宝针对 [Linux](/tags/Linux) 下 [Firefox](/tags/FireFox) 的安全控件》（<http://blog.alipay.com/301.html>）里下载安全控件。

2、验证控件的md5。不验证也可以，但验证更安全。验证方法请参考：<http://ubuntuabc.com/123/?p=85>

3、右键单击控件文件aliedit.tar.gz，选“解压缩到此处”。

4、以管理员身份打开文件夹“/usr/lib/mozilla/plugins/”，把解压缩得到的两个文件aliedit.so和aliedit.xpt复制到文件夹里。（参考<http://ubuntuabc.com/123/?p=119>）

5、重启Firefox。就可以登录支付宝了。

作者：Jandy
来自：[UbuntuABC](http://ubuntuabc.com/)

