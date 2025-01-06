---
title: Ubuntu 7.10安装手记 及 碰到的N多问题
description: 夜火：昨天说了要在实机上装Ubuntu7.10，趁着今天星期天，就给装上了，光盘昨天晚上已经刻出来了，早上11点才起（睡的晚哈~），起来就上Ubuntu中文论坛看看安装的时候还有什么要注意的地方，尤其是我很在意的本本安装ubuntu会不会有什么兼容性的问题。12点多用ubuntu的liveCD对机器进行了下测试，除了性能差点（和别人说的测试值略低），其他没有什么兼容性问题，显卡是集成的intel的。
date: 2008-03-17 09:20:55
category: 操作系统
tags: ['Linux', 'Ubuntu']
post_id: 411
alias: setup-Ubuntu-7.10-and-problem
ViewNums: 5158
---

[夜火](/blog/)[昨天说了](/blog/ubuntu-710)要在实机上装[Ubuntu](/tags/Ubuntu) 7.10，趁着今天星期天，就给装上了，光盘昨天晚上已经刻出来了，早上11点才起（睡的晚哈~），起来就上[Ubuntu中文论坛](http://forum.ubuntu.org.cn/)看看安装的时候还有什么要注意的地方，尤其是我很在意的本本安装ubuntu会不会有什么兼容性的问题。12点多用ubuntu的live CD对机器进行了下测试，除了性能差点（和别人说的测试值略低），其他没有什么兼容性问题，显卡是集成的intel的。

随后开始正式安装。分区整了好一会，因为我之前在机器上装了XP，sda1是XP的系统C盘，sda5，6，7分别是D,E,F盘，划出来的空间是从原来的分区里删出来的，给[linux](/tags/Linux)分区的时候先给/boot分了100M，然后想在分swap 1000M，分完之后发现剩下的空间不能分区了，比较郁闷，看了下/boot是sda3，swap分区是sda4，难道是被[windows](/tags/Windows)的分区给限制了？？不解~没办法，最后分了一个boot 然后剩余的空间都分给了/ 根目录。后来问了下[龍之冰點](http://www.hhacker.com)，说不分swap也没太大影响的。

剩下安装的时候除了慢了点也没啥，还有，中间如果有段时间没动键盘或鼠标，光驱就自动停下来不装了，我就一直按着键盘。。。。不知道是不是笔记本都这样还是我RPWT？

之后就安装完成，进去试了下那个果冻效果，很好玩~~ 在 系统 - 首选项 - 外观     visual effects标签  选到Extra，就能看到这个效果了

装是装好了，但是和我以前在虚拟机上装的不一样，鸟语变多了~，难道中文包没装好？看了下输入法，汗~什么鸟语都有，就是找不到中文，也不知道怎么ADSL上网的，还有我需要设GRUB默认为启动XP，老爹平常还要用，进到linux里他怎么用，汗个~，音乐是本子自带的音箱和插的耳机同时有声音，记得这个在论坛看到过，一时没找到。还有其他比较多的小问题，看来有的忙了~

下面是ubuntu7.10 设置ADSL（PPPOE）和更改GRUB默认启动系统的方法

### 配置 ADSL

打开**应用程序**菜单，依次选择**附件** - **终端**。

```
sudo pppoeconf
```

依照步骤提示进行，在输入用户名的时候注意把username清空後输入，否则可能会出现usernameXXXXX的现象。

### 防止 ADSL 掉线

在终端内

```
sudo  gedit /etc/network/interfaces
```

复制下面内容完全复盖即可

# /etc/network/interfaces
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

# The loopback network interface
auto lo
iface lo inet loopback

# This is a list of hotpluggable network interfaces.
# They will be activated automatically by the hotplug subsystem.
mapping hotplug
script grep
map eth1

# The primary network interface
iface eth1 inet static
address 10.0.0.139
netmask 255.255.255.0
network 10.0.0.0
broadcast 10.0.0.255
# dns-* options are implemented by the resolvconf package, if installed
dns-nameservers 211.162.32.1 211.162.32.20

dns-nameservers 是你的dns服务器地址，如果有路由器的同志可以打开路由器设置看看，把路由器上的默认dns服务器贴上。

### ADSL命令

*注意:以下命令不是设置步骤，只是教你如何进行adsl拨号的日常操作*

拨号 ADSL

```
sudo pon dsl-provider
```

断开 ADSL

```
sudo poff
```

查看拨号日志

```
sudo plog
```

对于 拨号 ADSL 和 断开 ADSL 可以在菜单编辑器中依照以上命令行建立相应的快捷方式以方便拨号。

### 如何设置动态域名(可选)

#首先去 http://www.3322.org 申请一个动态域名#然後修改 /etc/ppp/ip-up 增加拨号时更新域名指令sudo gedit /etc/ppp/ip-up#在最後增加如下行w3m -no-cookie -dump 'http://username:password@members.3322.org/dyndns/update?system=dyndns&hostname=yourdns.3322.org'

将username:password按格式替换为你的用户名和密码 hostname替换为你的域名，其他不必更改。以上设置将在拨号时自动将动态[域名](/tags/%E5%85%8D%E8%B4%B9%E5%9F%9F%E5%90%8D)解析挂载好。

### 如何更改 GRUB 菜单内开机系统的预设值?

```
sudo cp /boot/grub/menu.lst /boot/grub/menu.lst_backupsudo gedit /boot/grub/menu.lst
```

* 搜寻这一行文字

```
...default 0...
```

* 用下面这一行取代

```
default X_sequence
```

* 保存编辑过的文件

X_sequence的意思是你的操作系统条目的项数（从0开始计算，"Other operating system"之类的也算。）

上面的部分内容摘自[Ubuntu中文wiki](http://wiki.ubuntu.org.cn)

ubuntu还有210多个补丁我没打。。。。不知道挂一夜能搞定不~

更新：[Ubuntu 8.04 LTS 正式版下载](/blog/ubuntu-804-lts-download-xiazai)

