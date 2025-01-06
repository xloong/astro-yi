---
title: Pangolin-你见过最好的SQL注入工具-ZwelL出品
description: Pangolin是一款Windows平台下的自动化SQL注入渗透测试工具。他实现了从检测到利用完成一体化的渗透攻击动作，尽可能的将SQL注入攻击效果最大化。很明显，他是个大男人。;)
date: 2008-01-26 12:21:56
category: 安全工具
tags: ['Pangolin', '注入', '工具共享', '牛人', '渗透测试']
post_id: 346
alias: Pangolin-1.2.4.584-ZwelL
ViewNums: 28482
---

[夜火](/blog/)**ZwelL**牛牛又出好东西了-**Pangolin**，**Pangolin**在老多地方都有介绍了~，刚刚下载简单的试了下，真的很快，很强，很自动化（相对来说），如果再修改下的话，其他的[注入](/tags/%E6%B3%A8%E5%85%A5)软件可以下岗咯~

**说明：Pangolin在经过一些朋友提出宝贵的修改建议之后已经比较稳定了，但是还有许多功能尚在开发当中，现在先提供一份1.2.4.584版本的下载地址。由于马上要过年了，最近也比较忙，因此在年前不再提供版本升级，年后添加一些新功能再统一提供升级版本。**

**在这里也做个申明：Pangolin开发的初衷是用于给渗透测试人员进行安全评估测试时使用，请勿在未授权的情况下使用他进行攻击操作，否则一切后果自负。**

Name: **Pangolin**
Version: 1.2.4.584
Author: [ZwelL](http://www.nosec.org)
Updated: 2008.01.22
Link: <http://www.nosec.org/web/index.php?q=pangolin>Download: [点击进入下载页面](/blog/download.asp?id=41

# **一、简介**

Pangolin是一款[Windows](/tags/Windows)平台下的自动化SQL注入[渗透测试](/tags/%E6%B8%97%E9%80%8F%E6%B5%8B%E8%AF%95)工具。他实现了从检测到利用完成一体化的渗透攻击动作，尽可能的将SQL[注入](/tags/%E6%B3%A8%E5%85%A5)攻击效果最大化。很明显，他是个大男人。; )

使用平台：Windows XP SP1/SP2; Windows 2003 Server SP1; Windows Vista; 其他平台未测试，有测试过运行无误的朋友还望告知，谢谢。

# **二、功能**

## 1.支持的数据库类型

| **数据库类型** | **目标信息获取** | **其他** |
| --- | --- | --- |
| MS SQL | 服务器版本、服务器名称、数据库名称、当前用户、当前用户权限、数据库列表 | 执行系统命令、读取注册表、读文件、写文件、下载远程文件、导出数据到指定的数据库服务器 |
| Oracle | 版本信息、IP地址、当前用户、当前会话权限、主机名、实例名称、用户帐号信息、外部IP地址 | 帐号破解、注入提权（adding） |
| Mysql | 版本、GPC判断、数据库列表、临时目录、当前用户、操作系统信息、用户帐号 | 读文件、写文件 |
| Access | 数据库路径、根目录、磁盘信息 | 只能暴力 |
| PostgreSQL | 版本信息、数据库、当前用户、当前会话用户、端口、数据路径、搜索路径 | 读文件 |
| DB2 | 待整理 | 待整理 |
| Sybase | 待整理 | 待整理 |
| Informix | 待整理 | 待整理 |
| Sqlite | 待整理 | 待整理 |

## 2.详细功能

待整理

## 3.总结

数据库全：基本上覆盖目前所有的数据库类型

速度快：应用了联合查询语句，在关闭了所有错误提示的情况下也能迅速获取数据，而绝不是一个字母一个字母的猜解功能多：

每个数据库类型都会对应几乎最大化的功能利用

检查方式准确：手工操作最少的情况下有最大的准确度。独创的根据返回内容大小来尽可能的避免关键字;从1.2.3.577版本开始加入了一个非常有用的功能: 能够自动分析关键字(无需用户手动输入） ; )

另外，本工具还有以下一些特点：

* 独创的“关键字自动分析”技术
* 能够绕过某些输入过滤防火墙
* 独创的valide size判断技术
* 支持代理
* 支持手动设置任何HTTP标题头，包括User-Agent以及Cookie等信息。这个在一些需要登录的网站且存在验证码时很有用。
* 支持HTTPS

# **三、配置**

1. 配置HTTP标题头
2. 配置代理
3. 配置扫描项
4. 配置高级项

# **四、贡献者列表**

在Pangolin的开发过程中，得到了许多朋友的支持和帮助，这里特别要感谢如下人员：

* SuperHei <SuperHei@ph4nt0m.org>
* Trace <tr4c3@126.com>
* kj021320 <kj021320@gmail.com>
* 4ngle <4ngel@21cn.com>
* 鬼仔 <guizaicn@gmail.com>
* 牛博明 <phproot@gmail.com>
* 趙桂德 <zgdwyjsl@gmail.com>
* 傲少 <kankanwo@gmail.com>
* hiicome <hiicome@qq.com>

# **五、使用问题集**

1. 如何使用代理？
2. 目标系统不允许使用空格，这种情况下还能测试吗？
3. 如何对需要登录的系统进行测试？
4. 目标系统不允许使用select关键字，这种情况下还能测试吗？
5. 为什么有些系统测试起来速度很快，而有些系统只能一个字符一个字符这样的猜呢？

参考：[关于使用pangolin工具的一些说明](http://www.nosec.org/web/index.php?q=node/82)

# **六、用实际行动支持Pangolin**

你可以通过邮件zwell@sohu.com联系我，或者加我的MSN:zwell@yeah.net一起探讨如何对Pangolin进行不断的改进。

当然，我也希望有兴趣的安全公司对我进行“非精神方面”的支持，；）这样您能在第一时间内获取到最新版本，最全功能的Pangolin。

# **七、下载**

[点击进入下载页面](/blog/download.asp?id=41

# **八、软件截图**

（[夜火](/blog/)图片有点大~，点击看大图）

[![](http://www.shareapic.net/preview2/005954713.jpg)](http://www.shareapic.net/content.php?id=5954713&owner=xloong)  [![](http://www.shareapic.net/preview2/005954756.jpg)](http://www.shareapic.net/content.php?id=5954756&owner=xloong)  [![](http://www.shareapic.net/preview2/005954761.jpg)](http://www.shareapic.net/content.php?id=5954761&owner=xloong)

[![](http://www.shareapic.net/preview2/005954762.jpg)](http://www.shareapic.net/content.php?id=5954762&owner=xloong)  [![](http://www.shareapic.net/preview2/005954899.jpg)](http://www.shareapic.net/content.php?id=5954899&owner=xloong)  [![](http://www.shareapic.net/preview2/005954900.jpg)](http://www.shareapic.net/content.php?id=5954900&owner=xloong)

[![](http://www.shareapic.net/preview2/005954901.jpg)](http://www.shareapic.net/content.php?id=5954901&owner=xloong)  [![](http://www.shareapic.net/preview2/005955057.jpg)](http://www.shareapic.net/content.php?id=5955057&owner=xloong)  [![](http://www.shareapic.net/preview2/005955058.jpg)](http://www.shareapic.net/content.php?id=5955058&owner=xloong)

[![](http://www.shareapic.net/preview2/005955098.jpg)](http://www.shareapic.net/content.php?id=5955098&owner=xloong)  [![](http://www.shareapic.net/preview2/005955100.jpg)](http://www.shareapic.net/content.php?id=5955100&owner=xloong)  [![](http://www.shareapic.net/preview2/005955116.jpg)](http://www.shareapic.net/content.php?id=5955116&owner=xloong)

2008-06-07更新：[Pangolin v1.3.0.630 下载](/blog/pangolin-v130630 "pangolin v1.3.0.630 - zwell开发的号称最好的sql注入工具"

