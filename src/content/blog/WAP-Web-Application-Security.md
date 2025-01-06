---
title: WAP Web Application Security - WAP的Web应用安全
description: WAPWebApplicationSecurityAuthor:lake2[80sec]EMail:lake2#80sec.comSite:http://www.80sec.comDate:2008-6-10From:http://www.80sec.com/release/WAP-Web-Application-Security.txt———————————[目录]0×00纯属扯淡0×01WML与WMLScript0×02WML注入攻击0×03WML注入可以做什么0×04WAP站点会话安全0×05后记
date: 2008-06-12 09:01:19
category: 技术文章
tags: ['WAP', 'WML', '安全']
post_id: 521
alias: WAP-Web-Application-Security
ViewNums: 2773
---

|=———————————————————————————————–=|
|=———————-=[ **WAP Web Application Security** ]=————————=|
|=——————————————————————————————–=|
|=————————————-=[ By lake2 ]=-————————————=|
|=——————————-=[ lake2#80sec.com ]=——————————–=|
|=——————————————————————————————–=|

**WAP Web Application Security - WAP的Web应用安全**Author: lake2 [80sec]
EMail: lake2#80sec.com
Site: <http://www.80sec.com>
Date: 2008-6-10
From: <http://www.80sec.com/release/WAP-Web-Application-Security.txt>
———————————

[ 目录 ]

0×00 纯属扯淡
0×01 WML与WMLScript
0×02 WML注入攻击
0×03 WML注入可以做什么
0×04 WAP站点会话安全
0×05 后记

——————————–

0×00 纯属扯淡

因为本本借给小s美女了，只好用手机上网，发现WAP网站也有一定的市场，顺便也就学习了下[WAP](/tags/WAP)上的Web[安全](/tags/%E5%AE%89%E5%85%A8)。貌似还没有全面一点的关于WAP Web应用安全的文章，那我就不揣浅陋分享一下自己的一点经验，抛砖引玉，还望各位大牛指教。

0×01 WML与WMLScript

现在大多数WAP网站的页面都是使用的[WML](/tags/WML)，也有使用XHTML的，不过用的比较少，所以本文主要还是讨论WML。
WML是Wireless Markup Language（无线标记语言）的缩写，它同HTML类似，都是网页标记语言。不过HTML是让我们在电脑上用IE或firefox等[浏览器](/tags/%E6%B5%8F%E8%A7%88%E5%99%A8)进行阅读的，而WML语言则是专为手机等一些无线终端使用的。
当然，Opera浏览器目前是支持WML的，比如你可以使用Opera打开百度的WAP主页：<http://wap.baidu.com> ，但你用IE、firefox就看不到正常页面。
如果你的手机支持WAP上网的话，它的浏览器就是支持WML的。呃，或许您早就用手机浏览过WAP网站了吧。
嗯，一个简单的WML网页代码如下：
```
`<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.1//EN" "http://www.wapforum.org/DTD/wml_1.1.xml">
<wml>
<card id="no1" title="Card 1">
<p>Hello world!</p>
</card>
</wml>`
```
用支持WML的浏览器访问以上页面就可以看到Hello world字样。
不管是HTML还是WML，这些都是前端展示页面，其实它们的后台都是一样的，都可能是ASP、PHP、JSP或者ASP.Net，所以后台程序面临的安全问题还是SQL注入那些，本文不讨论。
呃，更多的关于WML语法请参考这里：<http://www.w3school.com.cn/wap/index.asp>
如果我们把WML比作HTML，那么有没有可以比作Javascript的WAP脚本语言呢？有，它就是WMLScript。不过同JS比起来，WMLScript功能上要弱很多，有兴趣可以看看这里：<http://www.w3school.com.cn/wmlscript/index.asp>

0×02 WML注入攻击

HTML页面面临的一个大的安全风险就是XSS，那是因为输出到页面的参数没有被妥善的处理导致攻击者可以向页面注入HTML或者Javascript代码。
类似的，对于后台程序处理到的参数如果没有做好处理，WML页面也可以被注入任何数据，这种方式可以叫做WML注入（WML Injection）。
好，看一个简单的例子，有这样一个PHP代码（为了更好的演示，假设magic_quotes_gpc=off）：
```
 `<?PHP
header("Content-Type: text/vnd.wap.wml");
echo "<?xml version="1.0"?>";
?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.1//EN" "http://www.wapforum.org/DTD/wml_1.1.xml">
<wml>
<card id="no1" title="Card 1">
<p>Hello <?PHP echo $_REQUEST['a']?>!</p>
</card>
</wml>`
```
呵呵，很明显，参数a没有被转义就直接输出到页面了，一个WML[注入](/tags/%E6%B3%A8%E5%85%A5)[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)就产生了。

0×03 WML注入可以做什么

先想一下，XSS可以做什么？
目前来看最大的问题是WML注入可以插入WML代码更改页面。好，还是前面那个代码，我提交这样的参数：
```
`http://127.0.0.1/wap/test.php?a=lake2</p><a` `href="http://www.baidu.com">点击登录</a><p>hi`
```
然后WAP浏览器里面就会显示出一个“点击登录”的链接，实际上是指向百度首页的。呵呵，有些WAP浏览器是没有地址栏和状态栏的。其实也不用让用户去点，WML有一个timer标签可以定时让页面自动转过去。
当然可以插入WMLScript，但不是每个浏览器都支持WMLScript，而且WMLScript功能很弱。如果浏览器是Opera的话倒可以利用WML注入来执行JS代码。
经典的弹cookie的框框哪里去了？是的，没有了，一是因为WML/WMLScript根本不能读写[Cookie](/tags/Cookies)，二是很多WAP浏览器根本不支持Cookie-_-

0×04 WAP会话安全

是的，由于多数WAP浏览器不支持Cookie，WAP网站的解决办法就是把标识会话的字符串在URL或者表单中传送。这个字符串就相当于是Cookie了，只要拿到它就能以用户身份访问WAP网站了。
会话标识放在URL中从来都是危险的，呵呵，您应该知道HTTP协议里面的referer是干什么的吧。哈哈，这里是一片蓝海，因为好多WAP网站都是这样的。当然，有些WAP浏览器会发送referer字段，有些又不发送——没有统一的标准很是麻烦。
如果会话标识放在表单中，那就比较安全了，WMLScript也拿不到页面内容，除非我们能够控制表单提交的URL——貌似一般情况下WML注入不容易修改到这个。不过这样的设置也比较少见。

0×05 后记

现在各大门户都有自己的WAP站点，基本上大业务都有对应的WAP页面，但是很少人关注WAP站点的安全，所以，这一部分是有很多安全问题挖掘的。除了前面提到的比较常见的WML注入和会话劫持，也存在其他很多攻击面，比如，可能在传统HTML页面登陆的地方有验证码，但是在WAP登陆入口却没有，这里就产生了一个暴力破解密码的隐患——这些就要看具体的业务应用逻辑了。对于WAP站点来讲，如何更好的保证Web应用程序的安全呢，这是它的安全部门的问题:)
不局限于WAP，手机是通过GPRS网关连出去的，所以IP地址就是网关的，如果以手机为终端进行攻击，在追溯来源上应该比PC更困难。而且可以以手机为Modem，电脑通过手机使用GPRS网关上网。
随着3G的发展，以后肯定会攻击手机客户端，也会出现手机上的[木马](/tags/%E6%9C%A8%E9%A9%AC)、流氓软件，无线终端安全又是一个新的挑战。面对挑战，您准备好了吗？

