---
title: 彻底杜绝Autoruninf自动运行
description: 　　通过注册表编辑器与权限控制结合的办法，可以彻底杜绝双击盘符情况下的Autoruninf调用。　　具体的办法如下：　　1.开始——运行——regedit；　　2.定位到　　HKEY_CURRENT_USER/Software/Microsoft/Windows/CurrentVersion/Explorer/MountPoints2
date: 2007-11-05 10:01:26
category: 技术文章
tags: ['Windows', '安全', '病毒Virus', 'Autoruninf']
post_id: 234
alias: Autoruninf
ViewNums: 4197
---

通过注册表编辑器与权限控制结合的办法，可以彻底杜绝双击盘符情况下的Autoruninf调用。

具体的办法如下：

1.开始——运行——regedit；

2.定位到

HKEY_CURRENT_USER / Software / Microsoft / Windows / CurrentVersion / Explorer / MountPoints2

　　3.在MountPoints2上右键——权限；

4.添加——输入everyone——检查名称——确定；

5.选择完全控制栏的拒绝，应用，对安全警告回答是；

应该算是比较完美的方案了：经过这样的权限设置，任何情况下的Autoruninf调用将被屏蔽，在默认状态下，带autorun的光盘和优盘被装载的时候，目录会被打开，双击盘符的结果是打开目录，而不是执行程序，同时，右键也不会出现任何形式的自动运行菜单。

分析一下，那个键值应该就是Windows用来记录和管理双击盘符和盘符上的右键菜单的，在里面查找，然后决定执行什么操作，仔细查看的话，你会发现更多的内容。我们把这个键值的操作权限对everyone屏蔽之后，系统无法访问到这个对应表，于是只有打开的操作。

这样就应该可以彻底的解决自动运行、以及双击盘符带来的染毒问题了。

更多请查看：[**Autoruninf**完全操作手册](/blog/autoruninf-handbook)

