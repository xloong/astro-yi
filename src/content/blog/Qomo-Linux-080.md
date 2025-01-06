---
title: Qomo Linux 0.8.0 正式版下载
description: 经过QomoLinux开发团队近一个月的努力，post/Qomo-Linux-0.8.0.html">QomoLinux0.8.0正式版发布了，此版本基于6月18日发布的Qomo0.7，在此基础上进行了Bug修复，新功能的添加，并将体积成功精简为一张CD的容量。……
date: 2010-07-25 09:42:11
category: 操作系统
tags: ['Qomo', 'Linux']
post_id: 1194
alias: Qomo-Linux-0.8.0
ViewNums: 3034
---

经过Qomo Linux开发团队近一个月的努力，[Qomo Linux 0.8.0正式版](/blog/qomo-linux-080)发布了，此版本基于6月18日发布的Qomo 0.7，在此基础上进行了Bug修复，新功能的添加，并将体积成功精简为一张CD的容量。

[Qomo Linux 0.8.0正式版](/blog/qomo-linux-080)较0.7的主要更新：
1. 采用lzma压缩， 实现700M以内LiveCD ISO， 含有[office](/blog/microsoft-office-2007-sp2-single-file)等组件
2. 集成ibus输入法框架, 默认支持拼音输入法, 可yum install ibus-table-chinese 安装更多的汉语输入法
3. 去掉了[QQ](/tags/QQ) 以及 amsn组件, 引入pidgin ，openfetion, flashget等组件
4. 集成firefox prism扩展功能, 实现了WebQQ, Gmail桌面化, 实现系统托盘消息提示功能
5. 更新xine-lib, 解决开关机没有系统声音, 无法正常关机,注销,重启问题
6. 更新kde-settings, 解决任务栏没有100%自适应长度问题
7. 修正了一些yum update冲突问题, 解决scim与[firefox](/blog/portable-firefox-v20010)更新后崩溃现象
8. 暂时没有加入Qomo官方的主题风格, 而使用KDE默认设置, 如果想继续使用0.7的风格,可安装如下几个包:
图标 主题: kde-settings-redflag-icons
KDM主题: rfthemes-kdm
Ksplash主题: rfthemes-ksplash
壁纸: rfthemes-wallpapers

Qomo 0.8.0 ChangeLog：
一. bug修复
01. 添加grub编译依赖glibc- static
02. 解决 systemsettings中"地区和语言"点击崩溃的问题
03. 解决lame包相关冲突
04. 解决scim导致firefox以及系统假死问题。
05. 更新poppler，加入 poppler-data, 解决部分pdf中文乱码
06. xine-lib替代了libxine, 提供wav解码库, 解决开关机没有系统声音, 无法正常关机,注销,重启问题
07. 修改plasma-destktop-appletsrc默认设置， 解决任务栏不能100%自适应长度问题
08. 移除了gnome-icon-theme主题包，同时修正Networkmanager对其图标的依赖
09. 汉化了k3b提示窗口
10. office文件打开优先级修正
11. 修正升级导致看图软件图标残留问题
12. 修正 java库无法被firefox找到的问题
13. 修改了root目录权限，解决其不能写操作的问题
14. 增加Ralink官方3090驱动到系统盘，提供rt2860,rt2870, rt3070,rt3071,rt3090等firmware.
15. 添加了xorg-x11-drv-nouveau，解决N卡默认使用nv驱动而进不了桌面的问题
16. 修改plasma-destktop-appletsrc默认设置，使系统托盘中设备通知器自动显示
17. 笔记本进入KDE桌面后屏幕亮度有所调整.
18. 离开系统或离开会话时不能使用回车键继续
19. 升级完成后，收藏夹－qomo release点击无效
20. 星际译王不能发声
21. 系统设置－地区和语言双击后崩溃
22. 安装程序向导用户设置时root用户密码无法使用特殊字符

二. 新功能增加
01. 添加patch，使stardict 可TTS语音朗读
02. 添加ntfs-3g到系统盘
03. 输入法：移除im-choorse和 imsettings，并给scim和ibus添加启动配置文件。
04. 添加包linux-firmware。
05. 添加包pptp
06. 集成ibus输入法框架, 默认支持拼音，五笔输入法，修改词排列方式为水平
07. 增加pidgin, openfetion等组件
08. 集成firefox prism扩展功能, 实现WebQQ, Gmail, 三国杀桌面化, 系统托盘消息提示功能
09. 对内核移植了lzma相关patch， 以使livecd实现%17的压缩比例
10. 增加qomolinux-menus包，以子菜单的方式显示qomo相关的项目。
11. 升级yum，可使用yum-buildrep安装编译依赖，支持命令行自动补全
12. setbright加入sudo列表
13. 加入了版本控制包qomo-scm
14. 增加c++ IDE codeblocks

三. 更新及其它
01. 升级KDE到4.4.4
02. 搭建系统基础Base，启动到X层， 大小控制在250M左右
03. [QQ](/blog/3366com) 以及 amsn组件放到了工具盘,
04. 拆分仓库增加了uniqrpm脚本，对同一个软件的多个版本，只在仓库中保留最新的版本，减少同步时的成本及仓库空间。
05. 移除gfxboot, 改为使用grub背景图片
06. 升级wine到1.2.0正式版本
07. 除去不用的图片减少qomo-about的体积
08. 打包升级ffmpeg
09. 基于Base，重新构建上层KDE组件及应用，主要的拆分，裁剪，变动如下：

kdegraphics拆分为：
   kdegraphics-okular (默认)
   kdegraphics-gwenview (默认)
   kdegraphics-kolourpaint (默认)
   kdegraphics-kruler
   kdegraphics-doc

kdegames拆分为：
   kdegames
   kdegames-minimal (默认)(含有 KMines, Katomic, KSnake, Bomber)

kdenetwork拆分为：
   kdenetwork-kget
   kdenetwork-kopete
   kdenetwork-kppp
   kdenetwork-krfb (默认)
   kdenetwork-krdc (默认)
   kdenetwork-doc

kdeaccessibility拆分为:
   kdeaccessibility-kmag
   kdeaccessibility-kmousetool
   kdeaccessibility- kmouth  (独立出festival一堆的依赖问题)
   kdeaccessibility-kttsd
   kdeaccessibility-doc

kdeutils拆分为:
   kdeutils (默认)
   kdeutils-extras (含有 irkick, kcharselect, kdf, kfloppy,  kgpg, ktimer,
   kwalletmanager, kwikdisk, okteta, superkaramba )
   kdeutils-doc

kdemultimedia拆分为：
   kdemultimedia (默认)
   kdemultimedia-extras (含有 dragonplayer, juk)

kde-settings拆分出
   kde-settings-redflag-icons  (默认使用kde oxygen图标主题)

rfthemes拆分出：
   rfthemes-kdm       (默认使用kde的circles主题
   rfthemes-ksplash     (默认使用kde的ksplash)
   rfthemes-wallpapers  (默认使用了社区loverf一张墙纸)
10. 升级wine到1.2.0正式版本
11. 升级了realtek驱动,内核加入patch

【[**Qomo Linux 0.8.0正式发布**](/blog/qomo-linux-080)】
下载地址
md5sum: d51b13abe41c25372be8b131b63574a1

