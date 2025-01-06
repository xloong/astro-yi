---
title: 开启Android 之旅
description: 夜火入手HTCmagic（G2）有10来天了，7月20号送到的，开箱照就不帖了，非常非常模糊，几乎只能看到砖头一样的白色物体。。。G2的详细图片、价格和参数，请移驾PConline。今天正式在blog里增加了Android分类，以后会发一些关于Android的文章，还有我使用的过程中感到比较好的应用，会发出来跟大家分享。我当前设置的Androidhome界面，虽然没用aHome什么的，但是也很有feel了~
date: 2009-08-03 11:57:05
category: Android
tags: ['Android']
post_id: 929
alias: Android
ViewNums: 3586
---

[夜火](/blog/)入手HTC magic（G2）有10来天了，7月20号送到的，开箱照就不帖了，非常非常模糊，几乎只能看到砖头一样的白色物体。。。G2的详细图片、价格和参数，请移驾[PConline](http://product.pconline.com.cn/mobile/htc/280871.html)。今天正式在[blog](/blog/)里增加了[Android分类](http://www.15897.com/category/12)，以后会发一些关于[Android](/tags/Android)的文章，还有我使用的过程中感到比较好的应用，会发出来跟大家分享。

[![我的 HTC magic 的 home 界面](http://i638.photobucket.com/albums/uu102/xloong/blog/screenshot1249127303972.png)](/blog/android)
我当前设置的Android home界面，虽然没用aHome什么的，但是也很有feel了~

为什么今天才开始发关于G2 和 [Android](/tags/Android) 的文章呢？因为这些天，我主要做初步试用和刷机等设置了。

**先是刷机**

刚入手的时候ROM是安卓网的2.2版本，现在已经刷到了2.56版，说实话，一些功能不如2.2版本好用。刷机的时候我是千小心万小心，几乎是用对待核弹头的待遇，生怕一个不小心，新入手的G2就变砖头了，还好没什么大问题。

为了避免出现不必要的问题，我是一点一点刷的，2.2->2.5->2.55->2.56，刷的过程中不像网上说的很慢，我刷机的时候5分钟就刷好了。

**然后是app2sd**

这一步折腾了我2天，其实是第一天半夜至第2天凌晨再加第2天的晚上。

要做app2sd就要有一个ext2的分区，可是我用Acronis Disk Director Suite 分了好几次，就是分不出来，读卡器插上也读不出来了，只能插手机进行分区。折腾到凌晨4点，还是一直不成功。便去睡了，想第2天请教请教高手的。

第2天晚上，把手机连上电脑，进入shell，习惯性的查看下，输入了busybox df -h，哪知传说中 ext2 格式的 /system/sd 分区就那么出来了，让我纳闷了好久，怎么突然就出来了。接下来输入几条命令便搞定了app2sd，手机空闲内存从30~40M，蹦到了100多M。

**使用感受**

恩。。。。不愧是google出的系统，和google自身的服务组合的很好，Gmail、Gtalk、google地图、picasa等等等等，总之很好用就是。

其中我最佩服的就是Gtalk了，某一个艳阳高照的下午，手机突然响了起来，我以为又是谁发的短信那，打开一看，直接打开了Gtalk，是[ellck](http://www.ellck.com/)给我发的Gtalk消息。。。我并没有打开Gtalk程序啊，后来发现手机只要连网了，就会有自动提示，不止Gtalk，Gmail也有这样的提示，很是方便，不过碰到烦人的垃圾就囧大了~

2009-08-03 update：在menu的更多里发现了设置，在里面可以设置是否即时消息通知，Gmail也可以设置。

[![Android Gtalk](http://i638.photobucket.com/albums/uu102/xloong/blog/screenshot1248678486113.png)](/blog/android)
当时收到ellck 的Gtalk消息时候的截图，体现不了不开GT也能收到GT消息的感觉（很神奇，很强大）

还有数据同步功能，gmail、日历、联系人都可以同步，google的日历我没用过，不做评价，联系人就方便多了，把手机上的联系人同步到gmail的通讯录里，在里面修改、分组，然后再同步回手机里，非常强大，而且可以选择需要同步的用户组，不想同步的划分到一个组里就OK了。

更多值得称赞的功能有待我去发掘……to be continue

**下面是我用G2拍的2张照片：**

[![my computer](http://i638.photobucket.com/albums/uu102/xloong/blog/2009_08_01_204457.jpg)](/blog/android)
我的显示器近照，下面那几个绿灯是我的无线WIFI路由，吼吼~。
光线比较暗，G2没闪光灯，没办法，拍起来都很暗。

[![](http://i638.photobucket.com/albums/uu102/xloong/blog/imag0001.jpg)](/blog/android)
这个是登陆无线路由的时候把IP输错了，应该是192.168.1.1，我输成了192.168.0.1

