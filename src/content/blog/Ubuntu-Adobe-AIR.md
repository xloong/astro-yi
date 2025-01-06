---
title: 在Ubuntu中安装Adobe AIR
description: twitter的不少客户端都是基于AIR的，在linux下缺少AIR怎么能行，下面转一篇EraElite写的在Ubuntu中安装AdobeAIR：
date: 2009-08-18 08:45:05
category: 应用软件
tags: ['Ubuntu', 'AIR']
post_id: 945
alias: Ubuntu-Adobe-AIR
ViewNums: 7180
---

[twitter](https://twitter.com)的不少客户端都是基于AIR的，在[linux](/tags/Linux)下缺少AIR怎么能行，下面转一篇[Era Elite](http://imee.cn/)写的[在Ubuntu中安装Adobe AIR](/blog/ubuntu-adobe-air)：

Linux下有不少Twitter客户端，不过功能都很简陋，在Twitter的客户端列表中看到了Spaz.AIR,不过需要安装Adobe AIR,于是就折腾一下。

首先[下载Adobe AIR安装程序](http://get.adobe.com/air/),双击运行时安装文件AdobeAIRInstaller.bin, 按照屏幕提示完成安装。

如果您不是以管理员身份登录, 则调用安装程序时, 会提示您输入管理员密码 (Debian 系统为 sudo 用户密码, 其它系统为 root 用户密码)。另请注意以下事项:

* 需要向 bin 文件授予执行权限 (chmod +x AdobeAIRInstaller.bin)。
* 运行时将以本机软件包的形式进行安装。即, 在基于 rpm 的发行版中以 rpm 的形式安装, 在 Debian 发行版中以 deb 的形式安装。AIR 当前不支持任何其它软件包格式, 因此无法在 Slackware 等发行版上进行安装。
* Linux 上的 Adobe AIR 由两个软件包组成 — adobeair1.0 和 adobe-certs。运行 AdobeAIRInstaller.bin 时, 它会安装这两个软件包。
* 运行时将安装到以下位置: /opt/Adobe AIR/Versions/1.0

[![Adobe AIR Steup 1](http://farm3.static.flickr.com/2489/3734682444_fd3e367f44_o_d.png)](/blog/ubuntu-adobe-air)

[![Adobe AIR install complete](http://farm3.static.flickr.com/2590/3734682482_699436c122_o.png)](/blog/ubuntu-adobe-air)

接着[下载Spaz.AIR](http://funkatron.com/apps/spaz/AIR/SpazAIR.air),双击SpazAIR.air进行安装

[![Insall Spaz.AIR](http://farm3.static.flickr.com/2515/3734682606_e8ec23cc2d_o.png)](/blog/ubuntu-adobe-air)

安装时可选择在桌面创建启动项和程序安装完成后启动

[![Installing Spaz.AIR](http://farm4.static.flickr.com/3492/3734706850_c942b3f7cb_o.png)](/blog/ubuntu-adobe-air)

默认情况下，程序安装在/opt文件夹下，可以自己创建文件夹，在终端执行命令：

```
$ sudo mkdir -p /opt/<你的文件夹名字> #如果名字中有空格，需要用转义，例如:AIR Applications
```

安装完成后，启动程序，按Ctrl+6或点选工具图标设置你的twitter帐户

[![Setup Account in Spaz](http://farm3.static.flickr.com/2481/3734682648_7565085e09_o.png)](/blog/ubuntu-adobe-air)

设置完成后，点下面的保存按钮，按Ctrl+1稍等一下就可以看到你的tweets了

[![view tweets in Spaz.AIR](http://farm4.static.flickr.com/3432/3733884127_6f6ea822f5_o.png)](/blog/ubuntu-adobe-air)

附：Adobe AIR御载
如果你是御载单个AIR程序，可以双击你的AIR程序安装包，或者直接到程序的安装目录删除文件夹

[![Uninstall Spaz.AIR](http://farm4.static.flickr.com/3492/3733935397_6402a1f325_o.png)](/blog/ubuntu-adobe-air)

如果要御载Adobe AIR,就到/usr/share/applications文件夹中找到Adobe AIR Uninstaller双击运行

[![Uninstall Adobe AIR](http://farm3.static.flickr.com/2491/3733883787_db0ec5fb18_o.png)](/blog/ubuntu-adobe-air)

