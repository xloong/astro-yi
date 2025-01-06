---
title: 如何把Android自带系统程序移动到SD卡内
description: 这是在wzyboy那看到的文章，介绍post/android-xitongchengxuyidongdaoSDka.html">如何把Android自带系统程序移动到SD卡内以腾出system分区空间，想必其他朋友也会有用到的地方，就共享出来了。一、为什么要腾出/system分区主要是为了替换系统字体。/tags/Android">Android的字体文件是存放在/system/fonts目录下的，自带的字体很小，但是替换的字体往往非常大，有的甚至有十几、二十M，不腾出空间是没有办法替换的。……
date: 2010-08-09 09:35:27
category: Android
tags: ['Android', '技巧']
post_id: 1202
alias: android-xitongchengxuyidongdaoSDka
ViewNums: 6179
---

这是在[wzyboy](http://wzyboy.im/post/247.html)那看到的文章，介绍[如何把Android自带系统程序移动到SD卡内](/blog/android-xitongchengxuyidongdaosdka)以腾出system分区空间，想必其他朋友也会有用到的地方，就共享出来了。

## 一、为什么要腾出 /system 分区

主要是为了[替换系统字体](http://wzyboy.im/post/234.html)。[Android](/tags/Android)的字体文件是存放在 /system/fonts 目录下的，自带的字体很小，但是替换的字体往往非常大，有的甚至有十几、二十M，不腾出空间是没有办法替换的。

## 二、思路

/system 分区下有什么东西是可以删除的？应用程序。系统自带的应用程序，比如Gmail, Calendar, Talk, Email, Alarm等都是存放在 /system/app 目录下的，这些程序可以让它们挪窝，移到别的地方去。移到哪里去呢？刚才说过，系统自带的程序（包括一些修改版ROM的内置的第三方程序）都是在 /system/app 目录下的，而用户安装的程序，都是在 /data/app 目录下，做过Apps2SD的用户，则是在 /system/sd/app 目录下或者是 /sd-ext/app 目录下（CM4是前者，CM5和CM6是后者）。那就让这些系统自带的程序移到用户目录里去吧，比如 /sd-ext/app ，存储卡里的空间大着呢。

怎么移动呢？

## 三、方法

以移动系统自带的Calculator程序为例，步骤如下：

1. 用Root explorer打开 /system/app 目录。这个目录里的程序都是以一眼就能看懂的名字命名的。找到Calculator.apk这个文件，点击之，会有一个对话框，选择Install安装，然后确认安装。
2. 安装完成后回到Root explorer，删除Calculator.apk。（先确认已经 mount as r/w ）
3. 搞定。

步骤很简单吧，这时你再到 /sd-ext/app 目录下看看，是不是已经多出来一个 com.android.calculator2.apk 的文件呢？这就是移动后的程序了，所有的数据都还是在的。

## 四、注意事项

建议只移动一些“不常用”的程序，而一些常用的东西就不要移了。所谓常用与不常用都是相对而言的，是指它被系统调用次数的多少和对系统的重要性。比如 launcher 程序，我就不建议移动。如果你和我一样是Gmail, Gtalk狂人的话，这两个程序我也不建议移动。但是一些不需要经常开出来的程序却是可以移动的，比如Maps，比如Alarm，甚至是Calendar等。而一些有关“手机”的根本使用的程序，比如Phone，Contacts等也不建议移动。至于一些纯粹娱乐性质的程序就大胆地移吧，比如Vpnservices，比如YouTube，比如Music。（听歌狂人可以不移）

