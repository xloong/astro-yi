---
title: FireFox和Opera发现处理BMP文件漏洞 可泄漏用户访问信息
description: Firefox和Opera浏览器在处理图形文件的方式中存在一个安全漏洞,能够让攻击者看到用户访问的网站.Vexillium.org公司的GynvaelColdwind发表了一个视频录像,介绍了这个安全漏洞的情况,他说,这个安全漏洞与这两种浏览器处理“.BMP”图形文件有关.一个恶意的.BMP文件能够提取浏览器缓存中的其它信息.有些信息可能是随机的,但是,有些信息是有价值的.
date: 2008-02-20 03:54:55
category: 业界新闻
tags: ['浏览器', '漏洞信息']
post_id: 375
alias: FireFox-Opera-BMP-loudong
ViewNums: 3530
---

Firefox和Opera[浏览器](/tags/%E6%B5%8F%E8%A7%88%E5%99%A8)在处理图形文件的方式中存在一个[安全](/tags/%E5%AE%89%E5%85%A8)漏洞,能够让攻击者看到用户访问的网站.

Vexillium.org公司的Gynvael Coldwind发表了一个视频录像,介绍了这个安全[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)的情况,他说,这个安全漏洞与这两种浏览器处理“.BMP”图形文件有关.一个恶意的.BMP文 件能够提取浏览器缓存中的其它信息.有些信息可能是随机的,但是,有些信息是有价值的.

Vexillium.org称,搜集到的数据包含各种信息,包括其它网站的部分信息、用户偏爱和历史以及其它信息.利用这两种浏览器支持的“canvas”HTML标记,攻击者能够捕获数据,然后利用JavaScript程序把数据发送到远程服务器.

这个安全漏洞还能够造成火狐浏览器崩溃.这个安全漏洞影响到火狐2.0.0.11和以前版本的浏览器以及Opera 9.50测试版.

