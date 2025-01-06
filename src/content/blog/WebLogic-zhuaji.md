---
title: WebLogic简单抓鸡大法
description: 题目：WebLogic简单抓鸡大法作者：Mickey[I.S.T.O.]&hackest[H.S.T.]此文章已发表在《黑客X档案》2008年第11期杂志上后经作者发布在博客上，如转载请务必保留此信息！Tomcat估计给很多人带来了N多肉鸡服务器了吧，直接扫描弱口令，进入Tomcat管理后台，上传Webshell就得到一台肉鸡服务器了，操作之简单，效率之高，实在是抓鸡必备！不过这次要介绍的是一个类似于Tomcat的JSP支持平台WebLogic漏洞的简单利用（其实也是默认口令），相比Tomcat会稍微复杂一些，不过操作起来也是比较容易的。
date: 2008-11-29 09:55:13
category: 技术文章
tags: ['WebLogic', '抓鸡', '技术类']
post_id: 697
alias: WebLogic-zhuaji
ViewNums: 3735
---

题目：[WebLogic简单抓鸡大法](/blog/weblogic-zhuaji)
作者：Mickey [I.S.T.O.]&hackest [H.S.T.]

此文章已发表在《黑客X档案》2008年第11期杂志上
后经作者发布在博客上，如转载请务必保留此信息！

Tomcat估计给很多人带来了N多肉鸡服务器了吧，直接扫描弱口令，进入Tomcat管理后台，上传Webshell就得到一台肉鸡服务器了，操作之简单，效率之高，实在是抓鸡必备！不过这次要介绍的是一个类似于Tomcat的JSP支持平台WebLogic漏洞的简单利用（其实也是默认口令），相比Tomcat会稍微复杂一些，不过操作起来也是比较容易的。

一、寻找目标

1、批量扫描WebLogic缺省的WEB管理端口（http为7001，https为7002），开放这两个端口的一般都是安装有WebLogic的主机。
2、Google搜索关键字“WebLogic Server Administration Console inurl:console”，URL后面是console结尾的，一般为目标。
3、IISput批量扫描，当发现[HTTP](/blog/46a) banner下显示“WebLogic Server”字样的一般为使用WebLogic的网站，如图1。

[![](http://www.hackest.cn/images/30/1.jpg)](/blog/weblogic-zhuaji)

二、默认口令攻击

在找到的目标URL后面加上console，回车就会自动跳转到管理登录页面。默认的缺省密码有以下几组：
1、用户名密码均为：weblogic
2、用户名密码均为：system
3、用户名密码均为：portaladmin
4、用户名密码均为：guest
如果尝试完了都不能登录，可以交叉换用用户名和密码，比如用户名为weblogic，密码为system，这个可以自己灵活变通，当然也可以做个字典文件暴破。示例目标的用户名密码均为weblogic，分别在Username和Password填入weblogic，即可进入管理后台（需要安装jre，否则看不到正面介绍的内容），如图2。

[![](http://www.hackest.cn/images/30/2.jpg)](/blog/weblogic-zhuaji)

然后找到“mydomain”->“Deployments”->“Web Application Modules”->“Deploy new Web Application Moudule...”，如图3。

[![](http://www.hackest.cn/images/30/3.jpg)](/blog/weblogic-zhuaji)

再点选图4里的“upload your file(s)”，在跳转后的页面上传war包（war包和Tomcat弱口令利用的包一样，注意马的免杀即可），如图4、图5。

[![](http://www.hackest.cn/images/30/4.jpg)](/blog/weblogic-zhuaji)

[![](http://www.hackest.cn/images/30/5.jpg)](/blog/weblogic-zhuaji)

然后在upload目录下找到刚才上传的mickey.war并选中，再点击“Target Module”
，然后“Deploy”，如图6、图7。

[![](http://www.hackest.cn/images/30/6.jpg)](/blog/weblogic-zhuaji)

[![](http://www.hackest.cn/images/30/7.jpg)](/blog/weblogic-zhuaji)

部署完毕后就会在“Web Application Modules”下面看到mickey项，如图8。

[![](http://www.hackest.cn/images/30/8.jpg)](/blog/weblogic-zhuaji)

最后就可以访问Webshell了，URL格式为：http://www.xxx.com/mickey/j1.jsp（j1.jsp为JSP后门文件名，这个是在war包里面设置的），[Windows](/blog/deepin-litexp-windows-xp-sp3-v62)系统下为system权限，Unix/[Linux](/tags/Linux)下为root权限，如图9、图10。

[![](http://www.hackest.cn/images/30/9.jpg)](/blog/weblogic-zhuaji)

[![](http://www.hackest.cn/images/30/10.jpg)](/blog/weblogic-zhuaji)

三、攻击防范

可以防火墙设置过滤7001、7002端口，也可以设置只允许访问后台的IP列表，如果非要远程管理WebLogic，就要设置一个比较强壮的密码口令。点击“Security”->“myrealm”->“Users”->“要更改密码的用户名”，然后在“New Password”填入新密码，在“Retype to Confirm”再次填入新密码，然后“Apply”即可更改密码，如图11。

[![](http://www.hackest.cn/images/30/11.jpg)](/blog/weblogic-zhuaji)

四、补充知识

在Unix/Linux系统环境下，按上述方法得到的JSP Webshell的文件列表功能不可用。除非文件位于war包之外，也就是说可以把war包内的JSP木马复制到Web服务器的另一个单独的目录里即可正常使用。

