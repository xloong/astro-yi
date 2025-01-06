---
title: Cookie注入是怎样产生的
description: 现在很多网站都加了防注入系统代码，你输入注入语句将无法注入~~感觉这样的防注入系统不错，但防注入系统没有注意到 Cookies 的问题！所以就有了Cookies注入~~
date: 2008-04-06 08:47:12
category: 技术文章
tags: ['Cookies', '注入', '技术类']
post_id: 439
alias: Cookie-injection-how-the
ViewNums: 7985
---

作者：[啊D](http://www.d99net.net/)

现在很多[网站](/tags/%E7%AB%99%E7%82%B9%E6%94%B6%E9%9B%86)都加了防[注入](/tags/%E6%B3%A8%E5%85%A5)系统代码，你输入注入语句将无法注入~~
感觉这样的防注入系统不错，但防注入系统没有注意到 [Cookies](/tags/Cookies) 的问题！
所以就有了Cookies注入~~

我们来研究一下怎样情况下才会有Cookies注入!
如果你学过ASP
你应该会知道 Request.QueryString (GET) 或 Request.Form (POST)!
呵，没错，这就是我们用于读取用户发给WEB服务器的指定键中的值!
我们有时为了简化代码，会写成
ID=Request("ID")
这样写法是简单了，但问题就来了~~~
我们先看WEB服务是怎样读取数据的,他是先取GET中的数据，没有再取POST中的数据,还会去取Cookies中的数据(晕,书上没有这么说,这是和小高交流时才知道~~看来书说的不全~~)

我们再看看防注入系统,他会检测GET和POST中的数据，如果有特殊字符(这里当然是注入字符了)!
就禁止数据的提交! 但他没有检测Cookies的数据！问题就来了~~~
那我们怎样测试是否有Cookies注入问题~

请先看下面的的连接(示例用,所以连接不是真的)

http://www.xxx.com/1.asp?id=123

如果我们只输 http://www.xxx.com/1.asp

时，就不能看到正常的数据，因为没有参数!
我们想知道有没有Cookies问题(也就是有没有Request("XXX")格式问题),
先用IE输入
http://www.xxx.com/1.asp
加载网页,显示不正常（没有输参数的原因)
之后在IE输入框再输入
```
javascript:alert(document.cookie="id="+escape("123"));
```
按回车,你会看到弹出一个对话框 内容是: id=123
之后，你刷新一个网页，如果正常显示，表示是用
Request("ID") 这样的格式收集数据~~~~,这种格式就可以试Cookies注入了

在输入框中输入
```
javascript:alert(document.cookie="id="+escape("123 and 3=3"));
```
刷新页面,如果显示正常,可以再试下一步(如果不正常,就有可能也有过滤了)

```
javascript:alert(document.cookie="id="+escape("123 and 3=4"));
```
刷新一下页面
如果不正常显示，这就表示有注入了~~~

如果程序员是用
```
Request.QueryString
```
或
```
Request.Form
```
收集数据的话，是无法利用Cookies绕过防注入系统进行注入的，因为服务程序是直截从GET或POST中读取数据的，Cookies是否有数据,WEB服务器是不理的,所以就无法利用了！~

--------------------------------------------------------------------------
为了方便不懂的朋友了解
```
javascript:alert(document.cookie="id="+escape("123"));
```
的意思,我说明一下
```
document.cookie="id="+escape("123") 
```
就是把 123 保存到Cookies 的 ID 中
alert(xxx) 就是弹对话框

后话
==========================================================
Cookie注入已不算是什么新技术，但还算是很管用的方法,或者有一天，防注入系统会加入Cookies注入检测!

