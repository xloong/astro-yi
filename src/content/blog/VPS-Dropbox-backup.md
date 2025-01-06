---
title: 在VPS中命令行安装Dropbox实现网站的实时备份
description: post/VPS-Dropbox-backup.html">在VPS中安装Dropbox实现网站的实时备份是来自LazyHack.Net 的文章，对拥有VPS的朋友，应该很有用。关于post/Dropbox.html">Dropbox，不清楚的朋友可以看这里：post/Dropbox.html">Dropbox网盘-免费2G空间，可免费升级到10G。
date: 2010-04-19 10:46:34
category: 技术文章
tags: ['技术类', '技巧']
post_id: 1114
alias: VPS-Dropbox-backup
ViewNums: 4446
---

[在VPS中安装Dropbox实现网站的实时备份](/blog/vps-dropbox-backup)是来自 [LazyHack.Net](http://lazyhack.net/) 的文章，对拥有VPS的朋友，应该很有用。关于[Dropbox](/blog/dropbox)，不清楚的朋友可以看这里：[Dropbox 网盘-免费2G空间，可免费升级到10G](/blog/dropbox)。

这几天由于四处加共享，今天我的主用的那个Dropbox帐号空间满了，使用状态竟然是120%，我急了，情急之下我就自己邀请自己先加250M再说，可是它必须安装客户端，正常同步一次以后才给增加空间，我就想着我应该把它装到那里去，因为我平常能接触到的机器都留下了Dropbox的足迹。实在懒得折腾弄双开了。于是我就瞄准了我的VPS，举目四望我唯一没有装过Dropbox而我又能全权控制的机器就剩下它了…

可是现在难题来了，dropbox初次使用需要运行一个gtk的向导来关联你的帐号，可是我那小小的VPS哪能奢侈到去装个Xserver呀。不过想想它那个gtk的向导对于只使用dropbox命令行的模式只需要运行那么一次，而这一次看起来还是挺简单的，就是本机器与帐号 的绑定，那它的绑定信息肯定存在于某个文件之中……如果以上的假设成立的话，我只需要修改这个文件，填入我的帐号信息就ok了……

鉴于dropbox是个半开源的产物，有这样需求的肯定不止我一人，于是我就google之，看看有没有能直接使用的解决办法，你还别说，还真让我找到了，就是这个[dbmakefakelib.py](http://dl.dropbox.com/u/637552/Dropbox/dbmakefilelib.py)脚 本，从名字就可以看出它会创建一些虚假的lib来欺骗dropbox的gui向导，使其能够运行。

dropbox运行后会创建一个sqlite的db文件，里面就保存着本机器的一些信息，然后我们只需要手动将其与自己的帐号绑定就能实现同步了，逻辑说了一大堆，其实实际操作起来还是很简单的，我这就列下步骤：

**1、登陆进VPS或者是服务器，进入用户目录**

```
cd
```

**2、下载dropbox的客户端，要For [linux](/tags/Linux)那个而非For Nautilus的**

```
wget -O dropbox.tar.gz http://www.dropbox.com/download?plat=lnx.x86
```

这个是32位的，64位就这样

```
wget -O dropbox.tar.gz http://www.dropbox.com/download?plat=lnx.x86_64
```

**3、解压**

```
tar xzvf dropbox.tar.gz
```

**4、下载dbmakefilelib.py并运行**

```
wget http://dl.dropbox.com/u/637552/Dropbox/dbmakefilelib.pypython dbmakefilelib.py
```

如果出现以下信息，说明它运行正常

> adding library libgtk-x11-2.0.so.0
> adding library libgdk-x11-2.0.so.0
> adding library libatk-1.0.so.0
> adding library libgdk_pixbuf-2.0.so.0
> adding library libpango-1.0.so.0
> adding library libgobject-2.0.so.0
> adding library libgmodule-2.0.so.0
> adding library libgthread-2.0.so.0
> adding library libglib-2.0.so.0
> adding function gtk_tree_view_new
> adding function gtk_toolbar_new
> adding function g_threads_got_initialized
> adding function gtk_grab_remove
> adding function gtk_button_new
> adding function gtk_frame_new
> adding function gtk_major_version
> … lots more of this …
> adding function g_static_rw_lock_writer_unlock
> adding function g_value_set_boxed_take_ownership
> adding function g_boxed_type_register_static
> adding function g_datalist_clear
> dropboxd ran for 15 seconds without quitting – success?

看到它的提示了吗，dropbox已经启动了，让你运行15秒后再退出，这个过程就是dropbox生成机器信息并保存到db文件的，其实对于国外的vps来 说几秒时间就够了，我们ctrl－c将其退出，完成接下来的步骤

**5、进入dropbox的dot目录导出机器信息**

```
$ cd .~/.dropbox$ sqlite3 dropbox.dbSQLite version 3.6.22Enter ".help" for instructionsEnter SQL statements terminated with a ";"sqlite> .dump config
```

我们会在导出的信息中看到如下的一串字符

```
INSERT INTO "config" VALUES(4,'host_id','VmQ0NWFlMTdmYmQ3OGYzMzgyOTM0NWMzN2Q1MGFkOTIzCnAxCi4=');
```

这个host_id就是机器的唯一标识，我们需要用它来跟自己的账户进行匹配，不过在这之前还有个工作需要做，因为上面的那长串字符很明显可以看出是用base64编码后的结果，我们得先把它解码再说，注意这里dropbox耍了个小花招，这串字符串前面的那个”V“，是无用的，我们在解码后的把它忽略掉

**6、将base64字符串解码**

```
$echo mQ0NWFlMTdmYmQ3OGYzMzgyOTM0NWMzN2Q1MGFkOTIzCnAxCi4= ｜ base64 -dVd45ae17fbd78f33829345c37d50ad923p1
```

我的结果是Vd45ae17fbd78f33829345c37d50ad923
忽略掉”V“，就是 d45ae17fbd78f33829345c37d50ad923

**7、将账户信息与机器信息绑定**
这步很简单，只需要访问以下网址，并登陆
HOSTID替换成你刚才解码出来的那串字符就行了

```
https://www.dropbox.com/cli_link?host_id=HOSTID
```

**8、建立dropbox的同步目录**
dropbox的同步目录默认的是~/Dropbox

```
$ mkdir ~/Dropbox
```

**9、运行，开始你的同步**

```
$ ~/.dropbox-dist/dropboxd &
```

到这里dropbox就可以正常运行并同步了，文章标题说的是备份网站数据，那么我们就来使我们的网站数据能够同步到dropbox服务器上
其实很简单，就是建立符号连接而已，[windows](/blog/deepin-litexp-windows-xp-sp3-v62)之前是没有这个功能的
比如要备份/var/www这个目录

```
cd ~/Dropbox$ ln -s /var/www web_backup
```

这就可以了,或者要备份/etc目 录

```
$ cd ~/Dropbox$ ln -s /etc etc_backup
```

ok.发挥你的想象尽情的使用吧。

