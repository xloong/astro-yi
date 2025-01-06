---
title: 七剑 deZender 绿色版 1.2
description: 七剑deZender绿色版是用来解密Zend加密过的PHP文件
date: 2008-02-09 10:50:53
category: 安全工具
tags: ['工具共享', 'PHP']
post_id: 362
alias: 7jian-deZender-1.2
ViewNums: 5517
---

From:<http://1v1.name/>

**七剑 deZender 绿色版**是用来解密Zend加密过的PHP文件

![](http://1v1.name/attachments/date_200801/thumb_816d8d2bfdf981121ec71b4d47f52450.png)

1.支持批量解密
2.集成到右键解密
3.支持部分自定义参数

内核来自<http://dll.newz.cc/dezend/>

集成右键的功能写的很郁闷,因为之前没有写过这样的东西,而且在写的过程发现一个奇怪的问题,用注册表的%1来传递要解密的文件路径,如果本身程序目录有空间的话,就能正确的传递,如果没有,那就不行,遇到空格就会截断.比如C:Documents and SettingsAdministrator桌面 est.php 如果程序所在目录没有空间的话,就会传递出错,会变成C:Documents,谁遇到到这样的问题?怎么解决捏?我的解决方法?嘿嘿..很黄,很暴力的,看代码

Delphi代码

1. if pos(' ',ExpandFileName( paramstr( 0 ) ))<1 then  MessageBox( 0,'校验目录出错,程序目录必须包含空格', '提示' ,0);

用主程序批量解密和单文件解密就不会出现这样的问题,路径支持空格,支持中文文件名,只所以写这个东西是因为前几天要用到这个解密程序,下载了一个外壳程序,好像不支持子目录,不能入到桌面上用,不能集成到右键,这个很重要.

20080125更新

更新到1.2解决传递参数出错的问题,感谢gzlazy

[点击进入下载页面](/blog/download.asp?id=44

