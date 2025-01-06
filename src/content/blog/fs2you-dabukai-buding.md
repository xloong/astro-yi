---
title: fs2you打不开上不去的解决办法和补丁下载
description: 记得夜火我在前2天发的PacketTracerv5.0正式版的最后说到fs2you打不开了？当时是转向到了网通的一个页面，就以为是被网通搬掉了，后来在网上看到一些消息，说fs2you是被DNS服务商给屏蔽了，不知道为什么，如此出色的网盘也会给屏蔽，误操作？在网上也看到了一些解决fs2you打不开/fs2you上不去的解决补丁，给需要的朋友提供出来
date: 2008-08-13 10:38:20
category: 网络资源
tags: ['fs2you', '网络硬盘']
post_id: 569
alias: fs2you-dabukai-buding
ViewNums: 15898
---

记得[夜火](/blog/)我在前2天发的[Packet Tracer v5.0 正式版](/blog/packet-tracer-v50-finalhtml "packet tracer v50 正式版下载")的最后说到[fs2you打不开了](/blog/fs2you-dabukai-buding？当时是转向到了网通的一个页面，就以为是被网通搬掉了，后来在网上看到一些消息，说[fs2you](/blog/xiazaigongju-xiazai-fs2you-javascript)是被DNS服务商给屏蔽了，不知道为什么，如此出色的网盘也会给屏蔽，误操作？

在网上也看到了一些解决fs2you打不开/fs2you上不去的解决补丁，给需要的朋友提供出来

**Fs2You上传下载补丁 v1.3**

* 本补丁用于添加[www.Fs2You.com](http://www.Fs2You.com)相关域名的本地解析，不会对你的系统造成任何危害
* 已经应用过此补丁，不需要重新应用
* 你可以随时关闭窗口，中断补丁运行
* 修复了能进网站无法下载的错误。
* Writen By  vadera@pdahd.cn，SENG
* 修正补丁已经更新到1.3版，解决了1.1版会出现只能看望也不能下载等问题。
* 更新1.3版，封装为exe程序
* 新增恢复hosts文件功能

推荐所有人重新应用此补丁，已经安装过较低版本或者其它修改版本的建议更新，先选2清除原来版本，再选1安装

1. 新增还原hosts文件功能
2. 解决某些机器因为文件只读权限无法改写的问题
3. 解决肚皮的版本如果手动改回hosts文件，再次安装时会提示已安装检测不准问题
4. 相较修改版多保留26个节点服务器，可以web上传文件
5. 相对1.1版本，增加cache服务器解析。
6. 补丁应用之后，会回复文件的只读属性，增强[安全](/tags/%E5%AE%89%E5%85%A8)性！

**下载：**[**Fs2You上传下载补丁 v1.3**](/blog/download.asp?id=123

熟悉的朋友应该看出来了，这个fs2you补丁就是修改hosts文件的脚本而已，因为修改系统的hosts，瑞星报病毒，属于正常，我把瑞星关掉，然后打上补丁再查看了下hosts文件，增加了一长串Fs2you相关的静态解析。随后访问<http://www.fs2you.com/> 就可以正常打开了，需要的朋友抓紧下载哦~。

[如何用迅雷等下载工具下载fs2you的资源](/blog/xiazaigongju-xiazai-fs2you-javascript)

[**fs2you已经启用新域名新地址了**](/blog/fs2you-rayfilecom)

