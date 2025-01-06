---
title: Linux Deepin 11.06 正式版下载
description: /tags/%E6%B7%B1%E5%BA%A6">深度出的东西一直都很好用，像之前发的post/Deepin-LiteXP-Windows-XP-SP3-V6.2.html">深度技术WindowsXPSP3完美精简版v6.2，post/Deepin-GHOST-XP-SP3-V9.0-ISO.html">深度DeepinGHOSTXPSP3快速装机V9.0修正版ISO等，都非常好用，精简6.2，我更是一直使用到现在。虽然/tags/LinuxDeepin">LinuxDeepin 夜火我没用过，不过相信也是非常好用的。post/Linux-Deepin-11.06.html">LinuxDeepin11.06正式版终于和大家见面了。post/Linux-Deepin-11.06.html">LinuxDeepin11.06 基于 post/Ubuntu-11.04-Final.html">Ubuntu11.04，开发了自己的软件中心，首次提供了“APT代理”，首次提供了64位版本，首次使用了XZ压缩技术，首次提供English和繁体中文版本，首次对Mac电脑的Broadcom无线网卡提供了支持，ISO镜像首次启用了Hybrid模式。软件方面，首次和永中合作，将永中集成Office2011放进了软件中心。……
date: 2011-07-05 09:38:39
category: 操作系统
tags: ['LinuxDeepin', 'Linux', '深度']
post_id: 1259
alias: Linux-Deepin-11.06
ViewNums: 3380
---

[深度](/tags/%E6%B7%B1%E5%BA%A6)出的东西一直都很好用，像之前发的[深度技术Windows XP SP3 完美精简版v6.2](/blog/deepin-litexp-windows-xp-sp3-v62)，[深度Deepin GHOST XP SP3 快速装机V9.0 修正版ISO](/blog/deepin-ghost-xp-sp3-v90-iso)等，都非常好用，精简6.2，我更是一直使用到现在。虽然[Linux Deepin](/tags/LinuxDeepin) [夜火](http://www.15897.com/)我没用过，不过相信也是非常好用的。

[Linux Deepin 11.06 正式版](/blog/linux-deepin-1106)终于和大家见面了。[Linux Deepin 11.06](/blog/linux-deepin-1106) 基于 [Ubuntu 11.04](/blog/ubuntu-1104-final)，开发了自己的软件中心，首次提供了“APT 代理”，首次提供 了 64 位版本，首次使用了 XZ 压缩技术，首次提供 English 和繁体中文版本，首次对 Mac 电脑的 Broadcom 无线网卡提供了支持，ISO 镜像首次启用了 Hybrid 模式。软件方面，首次和永中合作， 将永中集成 Office 2011 放进了软件中心。

版本说明
外观变化
* 系统采用了新的皮肤
* 响应用户的呼声，系统字号改为了 10 号，Panel 高度改成了 26 像素
* 统一了整个引导过程的背景图

仍然使用 Gnome 2 作为桌面
经过测试、评估，这次我们并未采用 Unity 或 Gnome 3，因为它们尚不完善。

软件中心（Deepin Software Center）
感谢开发者 LazyCat （王勇），他加 入 Linux Deepin 团队后，迅速把“软件中心”的设想做出了雏形。深度 Linux 软件中心是一个界面友好、功能强大的软件管理程序。1.0 版本包括以下特性：
* 简洁的用户界面
* 一键式的安装、升级、卸载操作
* 多线程设计， 保证操作的流畅快速
* 多镜像、多协议、多线程下载， 加速软件包下载
* 支持软件包全文搜索， 帮你更快速地找到所需的软件
* 系统更新
* 软件评分
* 显示软件截图
* 社区分享
* 完备的软件介绍文档（目前支持英文、简体中文、繁体中文，感谢志愿者们的辛勤翻译！）
* 还有更多……  ;-)

此外，我们将在软件中心 2.0 版开发“评论”功能。

办公软件
系统默认安装了 LibreOffice，但我们特别在“软件中心”集成了“永中集成 Office 2011”，您可以从软件中心安装它。
十分感恩“百慕大永中科技”（Evermore Software，Ltd）的曹总和工程师徐工等，在不平常的处境下，他们还特别为 Linux Deepin 制作了“永中集成 Office 2011”版本，并积极修复 bug，令我们团队十分感动。

输入法
感谢 Yong 输入法的作者 dgod 协助我们将输入法升级到最新的 1.6.0 版本。感谢 yenting0107，在他的推荐下，我们系统携带了繁體中文輸入法 ibus-chewing（新酷音輸入法）。
感谢郑少伟，他为输入法提供了“花渡”皮肤。

媒体播放
视频播放器改为 Gnome-Mplayer，兼容格式多，定位快。我们提供了默认配置，以支持字幕的自动加载。
音乐播放器继续使用 DeaDBeeF（升级到 0.5.1 版本，并打了乱码补丁）。继续使用 DeaDBeeF 的原因是，IcePlayer 尚不稳定，其它几款播放器对歌词支持并不理想（虽然 DeaDBeeF 也不支持歌词）。像上个版本一样，我们的系统携带了一首好听的钢琴曲，您一打开 DeaDBeeF，就可以聆听到……

网络软件
浏览器：Firefox 5，精选鼠标手势等插件。Flash 播放器为最新的 10.3。通过 flashgot 扩展使用 uget 进行下载，不再使用 DownThemAll 扩展。
邮件客户端：更换为 Thunderbird，它可以跟 Gmail 更好地整合。我们还特地为 Thunderbird 配置了一套全新的皮肤。
下载管理器：Uget+Aria2，支持断点 续传，支持 BT 和 Metalink。

Compiz 降级
由于 Ubuntu 11.04 的 Compiz 0.9 是专为 Unity 优化的，我们不得不将 Compiz 降级为 0.8，以启用桌面效果、隐藏标题栏 （如果显卡不支持，将无法启用，比如在虚拟机中）。

CD 中不包含的软件
原则：普通用户不常用的，不放到 CD 中，放到“软件中心”让用户自己安装；功能重复的，只保留一个。
不包含的软件：视频转码软件，小熊猫，Flashget，BT 客户端（Uget 可以实现）。Mint Update 已经被软件中心取代（软件中心有“系统更新”功能）。APT 代理 我们在使用一些非 Ubuntu 官方软件源时，下载速度往往很慢。为了解决这个问题、提示用户体验，我们将所有用到的非 Ubuntu 官方软件源（如：Google 软件，LinuxMint 相关软件，Medibuntu 相关软件，各种 PPA，以及 VirtualBox）全部 Cache 到了 [packages.linuxdeepin.com](http://packages.linuxdeepin.com/)。 采用 XZ 进行镜像压缩 XZ (LZMA 2) 比 GZ 有更高的压缩比，使得我们的 CD 可以多带 90M 的软件。 ISO 镜像启用 Hybrid 模式 该模式的好处是，可以方便 U 盘/移动硬盘引导，不需要专门工具来来让 U 盘、移动硬盘能引导了。比如，在 Linux 中，您可以用下面的命令，直接把 iso 的内容复制到 U 盘： dd  if=./deepin_11.06_i3686.iso of=/dev/sdx （请注意您的 U 盘设备名，比如 /dev/sdb 或者 /dev/sdc） 要了解 Hybrid 模式，请搜索“HYBRID ubuntu”。 64位版本 从 11.06 开始，Linux Deepin 提供 32 位、64 位两种版本。 注：64 位版本没有携带 Wine，如有需要，请自行安装（由于 64 位版本的 Wine 依赖于一个非常大的库文件，导致 ISO 过大，所以我们不得不将其移出 ISO。） 硬件驱动的增强 解决了对 Broadcom 无线网卡的支持问题。 国际化 提供 3 种语言：English、简体中文、繁体中文。简体中文是默认语言。 如果要用 English 或者繁体中文，请在光盘启动时，按 F2 选择语言。
（很遗憾的是，由于时间仓促，“软件中心”的界面语言目前只有简体中文版。我们将在年底发布的 Linux Deepin 11.12 中提供软件中心的 English 和繁体中文界面。）

从旧版本升级
1. 点击开始菜单的 LD 图标，选“终端”； 2. 在“终端”中，输入下面的命令，进行升级： wget http://linuxdeepin.com/tmp/upgrade.sh; chmod +x upgrade.sh; ./upgrade.sh 3. 注销，重新登录
已知问题

* 全局菜单： Libreoffice、Firefox、Thunderbird 等不是“真正的 GTK2 程序”，所以不支持 （Unity 的 Appmenu 可以支持，但是经常出错,提示“面板载入'IndlcatorAppletFactory::IndlcatorApplet'时遇 到问题。您是否想要从配置中删除该小程序？”,因此无法使用）
* 弹出窗口要密码时，如果输错密码，不会提示错误(上游bug) [https://bugs.launchpad.net/ubuntu/+source/libgksu/+bug/773284](https://bugs.launchpad.net/ubuntu/%2Bsource/libgksu/%2Bbug/773284)
* 虚拟机中，由于显卡驱动的问题，可能无法隐藏最大化窗口的标题栏
* 虚拟机中，有可能会丢失主题，原因尚不明确

下载
<http://sf.net/projects/deepin/files/11.06/>
03131c31635c1e778fb7a3c17ea4f383  deepin_11.06_amd64.iso  635M
83bc6aa0586c7562dfaa6191375fc421  deepin_11.06_i386.iso  655M

附: 特别感谢“软件中心”翻译贡献者

用上 Linux Deepin 11.06 的朋友应该会发现，系统预装的“深度软件中心”的很多软件都带有了完整的中文简介，这在 Linux 下的此类软件中应该算得上是第一次。在软件中心的开发过程中，十几位来自互联网的志愿者们共同翻译、整理了约1900款软件的中文简介，并整合进软件中 心。
我们相信，自由软件应该给用户这样的自由，那就是：能够以自己喜欢的语言使用它们。而制作一个带有中文软件介绍的软件中心，对于自由软件在中文用户群 中的推广无疑是大有益处的。我们会把翻译结果和软件中心提交到到 Ubuntu、Debian 以及其它发行版中，以方便更多的中文用户。
由于此次翻译、整理工作时间仓促——一共只有约20天的时间，并且许多志愿者有自己的事情要忙——软件介绍难免有出错之处。希望有更多热心的用户加入我们的社区，一同完善软件中心以及 Linux Deepin 未来的软件项目。

至于如何加入我们，我们将着手建立一套机制，请留意我们稍后发布的新闻。
以下是这次参与软件中心制作的主要贡献者名单:
==============================
Cheng Zhang < stephenpcg@gmail.com>
Xilin Sun < s.sn.giraffe@gmail.com>
bigslowfat < bigslowfat@gmail.com>
WeiHong Chen < whchen@qq.com>
WeiWei Shen < shenweiwei6@qq.com>
linuxboy < linuxboy2008@gmail.com>
znetor < znetor@gmail.com>
YuanChen Xie < yuanchen.gm@gmail.com>
red appred < redkissme@gmail.com>
Can Liu < liucan007@gmail.com>
Chengze Li < ljsabc@gmail.com>
GaoXin Lian < lgxwqq@gmail.com>
Echo Shao < shaojiaqi@gmail.com>
Wei Li
Hao Peng
向他们致敬！Linux Deepin 的发展离不开这些志愿者的贡献，以及其它许许多多的自由软件项目。

