---
title: Ubuntu 8.04 LTS RC升级手册[转]
description: 夜火：距离Ubuntu linux8.04LTS正式发布还有1周的时间，Ubuntu8.04LTSRC本计划于今日发布,不过因为软件包打包的一个小问题,要延误一天.这只是针对全新安装的用户来说的,假如你只是想将原有的Ubuntu系统升级至最新的Ubuntu8.04LTSTS,那么你可以开始行动了!因为网络上已经准备好了!本文是从Ubuntu7.10下进行升级,Ubuntu7.04、Ubuntu6.10等系统类似.
date: 2008-04-18 10:58:19
category: 操作系统
tags: ['Ubuntu', 'Linux', '教程']
post_id: 455
alias: Ubuntu-8.04-LTS-RC-update-handbook
ViewNums: 4487
---

[夜火](/blog/)距离[Ubuntu](/tags/Ubuntu) [linux](/tags/Linux) 8.04 LTS正式发布还有1周的时间， [Ubuntu](/tags/Ubuntu) 8.04 LTS RC本计划于今日发布,不过因为软件包打包的一个小问题,要延误一天.

这只是针对全新安装的用户来说的,假如你只是想将原有的Ubuntu系统升级至最新的Ubuntu 8.04 LTS TS,那么你可以开始行动了!因为网络上已经准备好了!本文是从Ubuntu 7.10下进行升级,Ubuntu 7.04、Ubuntu 6.10等系统类似.

**一、准备工作**

在升级至Ubuntu 8.04 RC时，请确保你备份了重要文件，以避免升级失败带来的损失。

另外请保证根目录有大量剩余空间（至少2GB以上），因为升级过程中将下载大量新版本的软件包（视你原系统的软件包数量），最后，保证网络畅通即可。

**二、开始升级**

打开你的终端，输入update-manager -c -d（不需要sudo），然后“更新管理器”即会启动，进行发行版的检测。如果正常的话，将会显示“新发行版 ‘8.04 LTS’ 可用”。如下图：

![](http://pic.yupoo.com/tualatrix/0366956a7e4c/rv9tnyjq.jpg)

点击“升级”后，将会弹出发布说明，你会看到你升级的目标，Ubuntu 8.04 Hardy Heron 的Release Candidate，确认后，再点“升级”。

![](http://pic.yupoo.com/tualatrix/7117756a7f84/medium.jpg)

接下来都是比较智能的升级过程，只有很少的交互动作。

需要注意的是，在获取完新的软件包，开始安装之前，你随时可以“取消”升级，如果一旦软件包下载完毕开始升级了，你就不能再取消了。

更新升级工具，从网上下载最新的升级工具，以确保升级顺利

![](http://pic.yupoo.com/tualatrix/6991456a7f85/oq3l53s4.jpg)

准备升级

![](http://pic.yupoo.com/tualatrix/9554756a7f85/e4b8ol3k.jpg)

如果你事先没有修改过sources.list的话，将会出现下面的对话框，毫无疑问，选择“是”，这样软件源都将更新为hardy的版本。

![](http://pic.yupoo.com/tualatrix/9958856a7f85/sfq56zmp.jpg)

自动设定完源后，就开始更新软件频道，相当于我们在终端下执行apt-get update。

![](http://pic.yupoo.com/tualatrix/7298156a7f85/g6978nyl.jpg)

更新完后会有软件包支持方面的提示

![](http://pic.yupoo.com/tualatrix/4493856a7f85/3lnvrrgz.jpg)

经过短暂的计算以后，更新管理器将会显示升级的详细信息，包括将被删除的软件包，将新进的软件包和将升级的软件包。

值得注意的是，大概是中文翻译的问题，升级的时间是有误的。应该是2小时0分，它居然显示2天0小时，这个错误从6.10开始就被“继承”下来了。

![](http://pic.yupoo.com/tualatrix/2503856a7f85/v28v7bvp.jpg)

接着就开始获取新的软件包了，这是你最后能后悔的时候，不想升级就点“取消”吧。过了这里就要跟旧的Ubuntu说拜拜了，当然你也可以强制重启来取消升级。

![](http://pic.yupoo.com/tualatrix/6984356a7f85/sqh8qg3z.jpg)

经过了“1天28小时”以后，软件包获取完毕，正式开始升级。这次显示正常了，依软件包的数量，大概需要30分钟到1个小时之间。

![](http://pic.yupoo.com/tualatrix/5881556a95b1/m5bql29u.jpg)

经过了又一段漫长的等待，终于快安装完成了，最后一个步骤是：清理废旧软件包。

![](http://pic.yupoo.com/tualatrix/3632756aad45/6i9lpm33.jpg)

确保列表里的软件包你都不需要了，然后移除吧！

![](http://pic.yupoo.com/tualatrix/6782256aad45/3rvw4d0l.jpg)

不要犹豫了，现在就重启吧！

![](http://pic.yupoo.com/tualatrix/2897156aad46/uschcfce.jpg)

假如，一切顺利的话！重启后，登入你的帐户，全新的Firefox 3将会自动打开，并以Welcome to Ubuntu 8.04 LTS的主页来欢迎你！

恭喜你进入Ubuntu 8.04的世界！

![](http://pic.yupoo.com/tualatrix/3825656aad46/medium.jpg)

**后记：**

我自Ubuntu 6.10开始使用Ubuntu，每当新版本发布时，我也都采用这种升级方式。不过从6.10到7.04，从7.04到7.10的两次升级，均未成功过，只好完全重装。

不过这次从7.10升级至8.04，非常顺利，升级后的系统非常稳定，之前所有的应用都完整的继承了下来（Apache2、Mysql等）。

不知能否说明Ubuntu的版本升级功能越来越完善了呢？还有待大家的考验！

更新： [Ubuntu 8.04 LTS 正式版下载](/blog/ubuntu-804-lts-download-xiazai)

