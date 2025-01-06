---
title: 在Ubuntu上安装运行傲游(Maxthon)的方法
description: 夜火：按预期算，Wine1.0正式版应该6月1日就发布的，可是一直没听到Wine1.0正式版发布的消息。今天在CB看到这个在UbuntuLinux下wine（动词）遨游Maxthon浏览器的小教程，发来给大家共享，我一直在用maxthon，苦于在linux下没有像maxthon那么趁手的浏览器，一直屈就于火狐2.。。。
date: 2008-06-07 10:12:02
category: 操作系统
tags: ['Ubuntu', 'Maxthon', 'Wine', 'Linux', '浏览器']
post_id: 516
alias: ubuntu-linux-wine-maxthon
ViewNums: 10737
---

[夜火](/blog/)按预期算，[Wine 1.0正式版应该6月1日就发布的](/blog/wine-10-date-of-release)，可是一直没听到[Wine](/tags/Wine) 1.0正式版发布的消息。今天在CB看到这个在Ubuntu Linux下wine（动词）遨游Maxthon[浏览器](/tags/%E6%B5%8F%E8%A7%88%E5%99%A8)的小教程，发来给大家共享，我一直在用[maxthon](/tags/Maxthon)，苦于在linux下没有像maxthon那么趁手的浏览器，一直屈就于火狐2.。。。

虽然整个过程有的朋友会觉得毫无意义，但是配置过程有很多值得学习的地方，希望大家能参考一下。
由于设置很复杂，给大家提供几个重点以供参考。。。

环境:vista SP1 + [Ubuntu](/tags/Ubuntu) 8.04双系统.全部打上最新补丁。
第一步，安装wine
在ubuntu上，安装wine.
注意，一定要最新版,0.9.61以上，旧版不行。

![ubuntu linux下wine 遨游maxthon浏览器](http://61.156.238.38:9999/wp-content/files/u1.png)

这个东西是一个能让[linux](/tags/Linux)和MACOS运行windows程序的中间层，不是虚拟机。
剽悍的玩意！装好就可以直接双击exe运行了。。。
wine1.0RC应该也可以，没有测试，
不过根据wine每月都更新的风格，这个东西只会每月更强悍，肯定比旧版本稳定。
安装wine的方法很多。[google一下](http://www.google.cn),铺天盖地。
注意要运行wine的傻瓜设置包，默认wine装上后，是毛病多多的。主要解决中文乱码和
速度慢的问题。以及装一些必要的支持。
最后记得运行 sudo apt-get install cabextract rar unrar
装上解压的工具，不然下一步走不动.

第二步,安装IE6
这里使用ies4linux来安装IE6.新版已经可以安装IE7内核了。
至于安装方法，还是那句话，google一下，铺天盖地。
注意安装的时候用命令行安装，别用图形界面，99.999%崩溃。。。
注意，一定要把语言设置成CN.使用命令行安装。
具体命令，运行ie4slinux --help查看帮助。
一定要安装flash9插件支持，默认是安装的。
最后，拷贝缺少的DLL文件
从vista的system32目录里复制mfc42.dll、msvcp60.dll到
~/.ies4linux/ie6/drive_c/windows/system32下
这里要注意，安装wine后，也会产生一个~/.wine/drive_c/windows/system32目录，
这个是wine的中间层环境。而~/.ies4linux/ie6/drive_c/windows/system32目录是安
装ies4linux后产生了另外一个中间环境，用来支持IE6的。这两个假的"windows"不同
，也是运行傲游的关键.

第三步,安装傲游.
这里，先说明一个问题，刚此提到的两个不同的"windows"中间环境，wine产生的那个
，是不带IE6支持的环境，而ies4linux产生的这个，是带IE6支持的!!大家都知道[傲游](/blog/aoyou-maxthon-21-release)
是基于IE内核的，没有IE，傲游铁定不能运行。于是，我们需要把遨游安装在
ies4linux产生的环境中!切忌！
安装方法，先运行IE6,然后用IE6的"文件"-"打开"菜单命令，来找到傲游的安装文件进
行安装。这样就可以让把马桶装到带IE6支持的中间环境中了。其实也可以使用命令来
达到同样的目的，过程是：
先运行:env WINEPREFIX="/home/你的主文件夹/.ies4linux/ie6" 来告诉系统我要使用
ies4linux产生的中间环境来运行。
然后运行:wine "c:傲游安装文件.exe" (这里的C:指的是.ies4linux环境中的C盘)
安装过程中，安装程序会自动去傲游网站下载几个文件。。这点很怪异。。。正常
windows环境下安装，是不会有这个动作的。。。。难道???
不用管，等他装完。

第四步,配置傲游程序
这时候铁定是不能运行的。因为缺少几个dll.至于缺少什么，可以用命令行运行一下安
装好的傲游，根据错误提示，把缺少的dll从vista中拷贝到
~/.ies4linux/ie6/drive_c/windows/system32目录中就可以了。
如果缺少的dll系统里面没有,那就google一下，铺天盖地!
运行傲游的方法:
首先 env WINEPREFIX="/home/你的主文件夹/.ies4linux/ie6" 设定环境
然后 wine "c:Maxthon2Maxthon.exe"

第五步,配置中间层版本
当按照第四步的方法，找到所有缺少的dll,并拷贝
~/.ies4linux/ie6/drive_c/windows/system32中以后，傲游就可以运行了，不过运行
后会弹出提示错误对话框(windows的。哈哈，接近了)。
不能用！主要是因为ies4linux模拟出的中间层环境没有经过配置,默认是模拟的win98!
我倒！！傲游2不能在win98下运行...。
这里是最关键的一步！看好了。
打开wine的配置窗口(wine的使用和配置，google去),添加傲游安装好后的可执行文件
，然后设定兼容性为"winxp"或以上版本也行。
然后，在"Drives"选项卡中，将第一个c:盘的映射路径改成"/home/你的主文件
夹/.ies4linux/ie6/drive_c",保存。原来映射的是wine产生的中间层，现在，我们改
成了ies4linux产生的中间层。这是我们就可以用wine的配置工具，来配置我们
ies4linux中间层了。只有这样才能把ies4linux中间层强行从win98变成vista!!

配置如图:

![ubuntu linux下用wine安装遨游maxthon浏览器](http://61.156.238.38:9999/wp-content/files/u2.png)

**大功搞成!用第四步中的命令，启动傲游....成功了！**
不过，这样模拟出来的傲游，虽然运行速度很快，也可以正常浏览网页，不过会偶尔出
一些小毛病。。。。哎，毕竟能用了,早晚有一天，傲游可以在linux下完美运行的。
hoho...傲游可是我不能舍弃[winodws](/tags/Windows)的唯一动力哦。。。还有一个奇怪的地方,在
ubuntu下安装的傲游，窗体标题上竟然多出来几个字:"傲游(Maxthon)2.1 特别版"....
非常奇怪..

根据网友的资料。在ubuntu环境下，可以用[wine](/tags/Wine)运行的程序越来越多。包括:
office2007
QQ2008
RTX
迅雷
电驴
photoshop CS3
Dreamweaver CS3
flash8
是不是很有诱惑力.....

相关：[Ubuntu 8.10 Intrepid Ibex 正式版下载](/blog/ubuntu-810-intrepid-ibex "ubuntu 8.10 intrepid ibex 正式版下载"

