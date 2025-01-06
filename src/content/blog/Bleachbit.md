---
title: 用 Bleachbit 来给 Ubuntu 9.04 “减肥”
description: 最近夜火因为实习的事搞的很不顺心，这些天和别人说了很多了，不想再提了。因为这件事也没什么心情发文章了，前2天都是轨迹发的，那个惨不忍睹啊。。。还是我自己来吧~。这篇文章，是来教大家如何在Ubuntu9.04系统下，安装BleachBit ，来清理系统没用的垃圾文件。这个软件能够清理诸如缓存文件，隐私文件，网页历史，临时文件以及无效的快捷方式。这样就能给硬盘空间节省好多地方了。它同样支持在Ubuntu系统下，对一些常见软件产生的垃圾文件进行清理，比如AdobeReader,APT,Bash,Beagle,Chromium,Epiphany,Firefox,Flash,GIMP,GoogleEarth,Java,KDE,OpenOffice.org,Opera,RealPlayer,SecondLifeviewer,Skype,VIM,XChat,Yum。看看其中是不是有你正在使用的软件？
date: 2009-07-15 10:09:49
category: 应用软件
tags: ['Ubuntu', '工具共享']
post_id: 912
alias: Bleachbit
ViewNums: 4510
---

最近[夜火](/blog/)因为实习的事搞的很不顺心，这些天和别人说了很多了，不想再提了。因为这件事也没什么心情发文章了，前2天都是[轨迹](/blog/)发的，那个惨不忍睹啊。。。还是我自己来吧~。

[用 Bleachbit 来给 Ubuntu 9.04 “减肥”](/blog/bleachbit)

文章来自[ownlinux](http://www.ownlinux.cn)的[Solar](http://www.ownlinux.cn/author/solar/)：

这篇文章，是来教大家如何在[Ubuntu 9.04 系统](/blog/ubuntu-904-final)下，安装 [BleachBit](/blog/bleachbit) ，来清理系统没用的垃圾文件。这个软件能够清理诸如缓存文件，隐私文件，网页历史，临时文件以及无效的快捷方式。这样就能给硬盘空间节省好多地方了。它同样支持在Ubuntu系统下，对一些常见软件产生的垃圾文件进行清理，比如Adobe Reader, APT, Bash, Beagle, Chromium, Epiphany, Firefox, Flash, GIMP, Google Earth, Java, KDE, OpenOffice.org, Opera, RealPlayer, Second Life viewer, Skype, VIM, XChat, Yum。看看其中是不是有你正在使用的软件？

行了，废话不多说了。开始吧。

**一. BleachBit的安装**

从面板“System（系统）” —“Administration（系统管理）”—“Synaptic Package Manager（新立德软件包管理器”，来运行这个新立得。运行后会要求你输入密码的。进去后是这样：

[![用 Bleachbit 来给 Ubuntu 9.04 “减肥”](http://lh5.ggpht.com/_zlRoDtFS1d4/Sik4vChThCI/AAAAAAAAAIk/38Zgn-pbNgY/s512/1.jpeg)](/blog/bleachbit)

现在，我们在“Quick Search（快速搜索框）”里面输入： BleachBit，回车后就能找到了。

[![Bleachbit](http://www.ownlinux.cn/wp-content/uploads/2009/06/2.jpeg)](/blog/bleachbit)

在找到的“bleachbit”上面，点击“mark for install（标记以便安装）”。然后稍等一会儿，点击界面里面的“应用”，就能开始安装了。过程看图。一步一步的来。

[![Ubuntu 9.04 “减肥”](http://www.ownlinux.cn/wp-content/uploads/2009/06/3.jpeg)](/blog/bleachbit)

[![用 Bleachbit 来给 Ubuntu 9.04 “减肥”](http://www.ownlinux.cn/wp-content/uploads/2009/06/4.jpeg)](/blog/bleachbit)

[![Bleachbit](http://www.ownlinux.cn/wp-content/uploads/2009/06/5.jpeg)](/blog/bleachbit)

行了，至此就安装完成了。关了“新立德软件包管理器吧”

额，顺便补充说一下吧。如果你想卸载这个软件，还是上面的方法，在“新立德软件包管理器”里面，找到它，点击右键，选择“标记以便彻底删除”，就是了。

**二.软件的使用**

先说一下，很遗憾，这个软件是英文版。虽然软件带了很多语言，但是唯独没有中文。这个很郁闷。不过大家可以放心，里面的英文很少很少，而且都超级简单。当然，为了方便实在不懂鸟语的，我后面会给出软件里面的全部英文的翻译。

从面板的“Application（应用程序）”-“System tools（系统工具）”，里面找到bleachbit，发现有2个，一个快捷方式是：bleachbit，另外一个是blea用 Bleachbit 来给 Ubuntu 9.04 “减肥”chbit(as root）。第二个的意思是“以管理员身份运行bleachbit”。我们就用第2个吧~，点击运行，软件第一次运行，就弹出“设置窗口”，如图：

[![用 Bleachbit 来给 Ubuntu 9.04 “减肥”](http://www.ownlinux.cn/wp-content/uploads/2009/06/6.jpeg)](/blog/bleachbit)

这个设置窗口，没什么可看的。直接点击close（关闭）吧。

我来简单说下这个软件。软件功能单一，因此使用起来也是超级方便。从上面的图里，我们能看到。

1. 软件的左边（一大列），罗列出了能够清理的各种垃圾，虽然都是英文的，我后面会给出翻译，大家放心。先知道就行了。

2. 右边最大框里面，就会根据你左边的选择（采用勾选的形式，想清理什么，勾选什么，右边就有提示）

3. 勾选好，软件左边上面，有个 delete（删除）按钮。点击就能执行。

4. 点击删除后，有个警告，不用看，直接点击“删除”吧。

5. 最后删除完毕了，右边大框里面，出个 Done（完成），就ok拉~

简单不？我来举一个例子，大家就明白了。现在我来清除firefox网页浏览器的“垃圾缓存文件”（cache）

在左边列找到firefox，勾选里面的 cache。看图，勾选后，右边就显示出了详细信息，不用看没用的~

[![Bleachbit Ubuntu 9.04 “减肥”](http://www.ownlinux.cn/wp-content/uploads/2009/06/7.jpeg)](/blog/bleachbit)

现在，点击”Delete“按钮，执行删除操作，就出现了警告框，看图：

[![Bleachbit给Ubuntu 9.04 减肥](http://www.ownlinux.cn/wp-content/uploads/2009/06/8.jpeg)](/blog/bleachbit)

点击”删除“，我们继续。。。。。。。。。。很快就完成了，看下面的图，有个”Done”吧~

[![用 Bleachbit 来给 Ubuntu 9.04 “减肥”](http://www.ownlinux.cn/wp-content/uploads/2009/06/9.jpeg)](/blog/bleachbit)

当然，你可以一次性选择所有的项目进行系统的“垃圾大清理”~嘿嘿

**三. 最后给出软件里面的英文翻译**

file: 文件
edit：编辑
help：帮助
Delete：删除
Preview：预览（好像软件能预览选中的，要删除的文件，不过我觉得这个功能没用~）
name：名字
Active： 激活（勾选就等于激活了，要删除）
Adobe Reader：Adobe 公司那个PDF文件浏览器
Bash：linux都内置的一个程序编译器，它偶尔也会产生垃圾喔！
Beagle：一个搜索软件，估计很少有人听说。你可以理解为：”Google桌面搜索“类似的软件
Epiphany；网页浏览器。不常见。呵呵，知道就行了。
cache：缓存，纯粹没用的东西
Cookies：隐私（比如你上网，网站上的那些帐号密码，都是由cookies来保存。）
Download history： 下载历史（firefox不是自带下载管理器么？和那个类似，管理器里面的信息）
Passowrd：其他的一些密码信息
Place：位置。类似上网的时候，浏览器的网站记录
firefox：用ubuntu的，有不知道的么？
session restore： firefox不是能恢复崩溃前的网站信息么？这东西就是那些信息。应该都没用吧？
URL history： 访问过的网站
Vacuum：这个我也不知道是啥。。。。有待考证，有兴趣的兄弟们，帮我研究下好不？
Flash： flash的残留信息
GIMP: ubuntu里面的画图软件，如果你用它处理图片，应该有垃圾留下的
Google Earch： Google那个地球软件。。。。查位置的。
Java： 编程的东西，你要是安装了，就顺便清理下吧
KDE：桌面管理器，普通的ubuntu用的不是这个，是gnome，所以一般人没用
Temporay files：临时文件
OpenOffice.org：这个都知道吧，[ubuntu](/tags/Ubuntu)自带的办公套装。
RealPlayer：地球人都知道~
rpmbuild：这个对ubuntu几乎没用，是rpm包的相关垃圾文件。
Second Life viewer：一个帮助查看器。搞不懂，我也没用过，如果你有就清理，不知道是什么，就别理会了
System：系统
Clipboard：剪切板里面的历史信息
Broken desktop entries：桌面上无效的快捷方式
Localizations：位置信息。没用的东西。
Trush：系统的垃圾桶。。。。
Recent document list： 近期访问的文件（历史记录）
thumbanails：（图片）的缓存文件，索引文件。
VIM：知道这个不？嘿嘿，linux下很知名的一个文本编辑器。
winetricks：一个安装[Windows](/blog/deepin-litexp-windows-xp-sp3-v62)有关库和软件的小程序。一般没人用到，除非你比我还理解它的作用。
Xchat：IRC聊天软件，什么？不知道是干嘛的？在ownlinux上找文章吧，有介绍的。
Perferences：选项设置
General：总体
overwrite files to hide contents：覆盖文件来因此其内容。
Language：语言。别看了，没cn。。。。。。。。。。可惜。
quit：退出~

够了吧？，全翻译了。呵呵，希望这篇文章，以及我的翻译，能对你有所帮助~

