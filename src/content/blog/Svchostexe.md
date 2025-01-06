---
title: Svchost.exe进程之谜
description: 　　svchost.exe是nt核心系统的非常重要的进程，对于2000、xp来说，不可或缺。很多病毒、木马也会调用它。所以，深入了解这个程序，是玩电脑的必修课之一。　　　　大家对windows操作系统一定不陌生，但你是否注意到系统中“svchost.exe”这个文件呢？细心的朋友会发现windows中存在多个“svchost”进程（通过“ctrl+alt+del”键打开任务管理器，这里的“进程”标签中就可看到了），为什么会这样呢？下面就来揭开它神秘的面纱。
date: 2007-12-02 03:52:15
category: 杂七杂八
tags: ['Windows', '安全', '技巧', '技术类']
post_id: 274
alias: Svchost.exe
ViewNums: 7686
---
转：<http://www.pccourse.cn/html/13/n-5613.html>

　　svchost.exe是nt核心系统的非常重要的进程，对于2000、xp来说，不可或缺。很多病毒、木马也会调用它。所以，深入了解这个程序，是玩电脑的必修课之一。

　　大家对windows操作系统一定不陌生，但你是否注意到系统中“svchost.exe”这个文件呢？细心的朋友会发现windows中存在多个 “svchost”进程（通过“ctrl+alt+del”键打开任务管理器，这里的“进程”标签中就可看到了），为什么会这样呢？下面就来揭开它神秘的面纱。

　　发现
　　在基于nt内核的windows操作系统家族中，不同版本的windows系统，存在不同数量的“svchost”进程，用户使用“任务管理器”可查看其进程数目。一般来说，win2000有两个svchost进程，winxp中则有四个或四个以上的svchost进程（以后看到系统中有多个这种进程，千万别立即判定系统有病毒了哟），而win2003 server中则更多。这些svchost进程提供很多系统服务，如：rpcss服务（remote procedure call）、dmserver服务（logical disk manager）、dhcp服务（dhcp client）等。

　　如果要了解每个svchost进程到底提供了多少系统服务，可以在win2000的命令提示符窗口中输入“tlist -s”命令来查看，该命令是win2000 support tools提供的。在winxp则使用“tasklist /svc”命令。

　　svchost中可以包含多个服务

　　深入
　　windows系统进程分为独立进程和共享进程两种，“svchost.exe”文件存在于“%systemroot% system32”目录下，它属于共享进程。随着windows系统服务不断增多，为了节省系统资源，微软把很多服务做成共享方式，交由 svchost.exe进程来启动。但svchost进程只作为服务宿主，并不能实现任何服务功能，即它只能提供条件让其他服务在这里被启动，而它自己却不能给用户提供任何服务。那这些服务是如何实现的呢？

　　原来这些系统服务是以动态链接库（dll）形式实现的，它们把可执行程序指向 svchost，由svchost调用相应服务的动态链接库来启动服务。那svchost又怎么知道某个系统服务该调用哪个动态链接库呢？这是通过系统服务在注册表中设置的参数来实现。下面就以rpcss（remote procedure call）服务为例，进行讲解。

　　从启动参数中可见服务是靠svchost来启动的

　　实例
　　以windows xp为例，点击“开始”/“运行”，输入“services.msc”命令，弹出服务对话框，然后打开“remote procedure call”属性对话框，可以看到rpcss服务的可执行文件的路径为“c:windowssystem32svchost -k rpcss”，这说明rpcss服务是依靠svchost调用“rpcss”参数来实现的，而参数的内容则是存放在系统注册表中的。

　　在运行对话框中输入“regedit.exe”后回车，打开注册表编辑器，找到[hkey_local_machine systemcurrentcontrolsetservicesrpcss]项，找到类型为“reg_expand_sz”的键“magepath”，其键值为“%systemroot%system32svchost -k rpcss”（这就是在服务窗口中看到的服务启动命令），另外在“parameters”子项中有个名为“servicedll”的键，其值为“% systemroot%system32rpcss.dll”，其中“rpcss.dll”就是rpcss服务要使用的动态链接库文件。这样 svchost进程通过读取“rpcss”服务注册表信息，就能启动该服务了。

　　解惑
　　因为svchost进程启动各种服务，所以病毒、木马也想尽办法来利用它，企图利用它的特性来迷惑用户，达到感染、入侵、破坏的目的（如冲击波变种病毒“w32.welchia.worm”）。但windows系统存在多个svchost进程是很正常的，在受感染的机器中到底哪个是病毒进程呢？这里仅举一例来说明。

　　假设windows xp系统被“w32.welchia.worm”感染了。正常的svchost文件存在于“c:windowssystem32”目录下，如果发现该文件出现在其他目录下就要小心了。“w32.welchia.worm”病毒存在于“c:windowssystem32wins”目录中，因此使用进程管理器查看svchost进程的执行文件路径就很容易发现系统是否感染了病毒。windows系统自带的任务管理器不能够查看进程的路径，可以使用第三方进程管理软件，如“windows优化大师”进程管理器，通过这些工具就可很容易地查看到所有的svchost进程的执行文件路径，一旦发现其执行路径为不平常的位置就应该马上进行检测和处理。