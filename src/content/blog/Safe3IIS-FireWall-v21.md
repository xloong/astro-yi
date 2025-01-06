---
title: Safe3IF v2.1 免费的IIS FireWall
description: 你的网站是否经常遭到非法攻击?是否因盗链或P2P多线程下载而耗尽带宽资源?是否没钱购买网上的此类软件?那么请使用Safe3IISFireWall吧！Safe3IISFireWall是一款完全免费的IIS防护软件，内置如下功能，主要防止黑客攻击和多线程下载占用带宽。Safe3IISFireWall的功能：防止SQL注入式攻击；防止溢出代码攻击；防止特殊字符构成的URL利用；防止XSS跨站提交；防止构造危险的Cookie；防止迅雷等p2p多线程下载(限制只能用IE下载)
date: 2008-07-26 10:39:31
category: 安全工具
tags: ['Safe3IF', 'IIS-FireWall', '工具共享']
post_id: 553
alias: Safe3IIS-FireWall-v2.1
ViewNums: 3215
---

你的网站是否经常遭到非法攻击?是否因盗链或[P2P](/blog/shareaza-41042580-p2p)多线程下载而耗尽带宽资源?是否没钱购买网上的此类[软件](/tags/%E8%BD%AF%E4%BB%B6)?那么请使用**Safe3 IIS FireWall**吧！Safe3 IIS FireWall是一款完全免费的IIS防护软件，内置如下功能，主要防止黑客攻击和多线程下载占用带宽。

**Safe3 IIS FireWall的功能：**

防止SQL[注入](/tags/%E6%B3%A8%E5%85%A5)式攻击；
防止[溢出](/blog/buffer-overflow-tutorial-ebook-iso-download)代码攻击；
防止特殊字符构成的URL利用；
防止[XSS](/blog/xss-worm-defense-hibaidu)跨站提交；
防止构造危险的[Cookie](/blog/cookie-injection-how-the)；
防止迅雷等p2p多线程[下载](/tags/%E4%B8%8B%E8%BD%BDDownload)(限制只能用IE下载)

**安装：**

1 新建c:[windows](/tags/Windows)Safe3和c:windowsSafe3log目录，将Safe3IF.dll， Safe3IF.ini复制到c:windowsSafe3(你也可以复制到其它适当的文件夹下面，注意若不能加载通常是权限问题，给这两个文件everyone完全控制权限就可以了)。
2 打开IIS管理器,选择“默认网站”，右击“属性”，选择“ISAPI筛选器”，点击“添加”，输入筛选器名称：Safe3IF，可执行文件选择上面复制到c:windowsSafe3下面的Safe3IF.dll文件，点“确定”。
3重启IISADMIN service服务。（在计算机管理----windows服务里面,或使用命令net stop w3svc ,net start w3svc）
4 完成。

**日志:**

Safe3 IIS FireWall能够将INI配置文件加载，[黑客](/blog/309a)攻击记录都会保存到指定的日志文件里。因为它具有很大的性能开销，因此建议将它日志的记录等级设为0，只有需要查看攻击的时候，可以设置为110。
#非法日志记录位置
Safe3Log       c:windowsSafe3logSafe3 (会生成 例如：Safe3.1078.log，注意不能生成日志是对该目录没有写权限,日志不要和Safe3IF.dll放于同目录)
#日志的记录等级
Safe3LogLevel  110
改为其它值则不记录日志

**防迅雷下载：**

Safe3AllowMultiDown 0
设为0则阻止，1则放过
阻止所有多线程下载软件，如果文件被下载，你可以看下详细下载地址，这是[迅雷](/blog/thunder-v575421-tuzi-vs-ayu)从其它地方下载的。(对人解释真麻烦！还是简单说下吧！)

**文件防盗链：**(考虑效率问题，耗资源，而且网上也有免费的，所以去掉了)

可实现gif/jpg/png等图片或文件的防盗链，盗链页面显示的是/blocked.png。blocked.png放到网站根目录，我们可以在上面打上自己网站的版权标志和防盗链声明。
具体可查看Safe3IF.ini文件
#防盗链规则(允许自己的网站和搜索引擎)
#下面第一条规则改为自己的网站，去掉前面的#号就可以防盗链了
#RewriteCond %{HTTP_REFERER} ^(?!https?://(?:www.)safe3.cn/)   [I]
RewriteCond %{HTTP_REFERER} ^(?!https?://(?:www.)google.com/)   [I]
RewriteCond %{HTTP_REFERER} ^(?!https?://(?:www.)baidu.com/)    [I]
RewriteRule .(?:gif|jpg|jpeg|png|bmp)$ /blocked.png   [I,L]
要允许一些例外的网站比如google,baidu以及其它一些友情链接的网站引用。本方法基于HTTP_REFERER判断，但对盗链已经足够了。

**反黑客：**

Safe3UrlLenth  128
请求的URL长度，超过此长度则阻止

内置如下功能
防止[SQL注入](/blog/pangolin-v130630)式攻击；
防止溢出代码攻击；
防止特殊字符构成的URL利用；
防止XSS跨站提交；
防止构造危险的Cookie；

具体部分攻击记录就放在日志里，很强大，不多言了，自己测试去。

**url重写：**(考虑效率问题，耗资源，而且网上也有免费的，所以去掉了)

我也不在详细介绍。具体有关正则的说明大家可以用GOOGLE搜索，主要有利于搜索优化。

格式：
RewriteRule <url-pattern> <replacement-string> [<modifiers>]
url-pattern：匹配的正则表达式(必需)
replacement-string:要替换的字符串（必需）
modifiers：有关对RewriteRule的操作标记。可选选项。

[点此进入下载页面](/blog/download.asp?id=113

Web：<http://www.safe3.cn/> Email:s0_6@hotmail.com

