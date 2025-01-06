---
title: IIS5.1中碰到的8ffe2740和Server Application Error错误
description:        今天为了更好的学习《精通脚本黑客》和测试体验即将到来的z-blog1.8，在本地机装了IIS5.1，但是问题不断，在此总结下，为以后会碰到同样问题的朋友写写经验（怎么这话听着这么别扭，貌似我多高手是的，其实俺是菜鸟，汗一个先~）。       我这台机器上装的是专业版的XP，IIS信息服务没有隐藏，免去了恢复显示的麻烦，勾选，安装，都比较顺利。可是安装完成后却访问不了http://localhost，在管理中看了下，默认站点没有启动，手动启动，提示错误：IIS 无法启动 发生意外错误 8ffe2740用baidu搜了下相关的内容，很多人说是80端口被占用了，有好几个人是被web迅雷给占了，但是我从来都不用web迅雷的，那玩意是适合普通用户的“低级”产品，我当然要用“专业级”的去广告的迅雷了，难不成这个也占用80端口？
date: 2007-11-04 08:10:09
category: 技术文章
tags: ['Windows', '技术类']
post_id: 232
alias: IIS5.1-8ffe2740-ServerApplicationError
ViewNums: 7378
---

摘要：解决**IIS**中的**Server Application Error错误** ，**8ffe2740错误**，以及**Server Application Error的8004EOOF错误**

        今天为了更好的学习《[精通脚本黑客](/blog/215a)》和测试体验即将到来的z-blog1.8，在本地机装了**IIS5.1**，但是问题不断，在此总结下，为以后会碰到同样问题的朋友写写经验（怎么这话听着这么别扭，貌似我多高手是的，其实俺是菜鸟，汗一个先~）。

        我这台机器上装的是专业版的XP，IIS信息服务没有隐藏，免去了恢复显示的麻烦，勾选，安装，都比较顺利。可是安装完成后却访问不了[http://localhost](http://localhost/)，在管理中看了下，默认站点没有启动，手动启动，提示错误：

**IIS 无法启动 发生意外错误 8ffe2740**

        用baidu搜了下相关的内容，很多人说是80端口被占用了，有好几个人是被web迅雷给占了，但是我从来都不用web迅雷的，那玩意是适合普通用户的“低级”产品，我当然要用“专业级”的[去广告的迅雷](/blog/thunderv573389ddr106)了，难不成这个也占用80端口？

进入“开始->运行”，输入 cmd，进入 dos 窗口，输入如下命令查看端口使用情况：
**netstat  -ano**

        找到本应属于 IIS 使用的 80 端口的使用信息：

**Proto  Local Address          Foreign Address        State           PID
TCP    XXX.XXX.XXX.127:80     59.XX.X.39:1281      ESTABLISHED     1448
TCP    XXX.XXX.XXX.127:80     59.XX.X.27:3700      ESTABLISHED     1448**

        占用80端口的 PID 是 1448。

        然后打开任务管理器，选择“进程”标签项，然后点击菜单“查看->选择列”，打勾选择“PID(进程标识符)”项，在“进程”列表中，出现了 PID 列，点击之，按 PID 从小到大排列，找到 PID = 1448 所对应的“映像名称”，一看，果然也是迅雷惹的祸。

        IIS的80端口被其他程序占用了，当然要出错了，知道是什么出的问题就好办多了，要么改迅雷的端口要么改IIS的端口，IIS习惯的都是80，就改迅雷的吧。

        打开 迅雷界面，点击“配置->BT/端口设置”，看到其 TCP 端口设置是80（如下图），将这个端口改成不常用的端口就行了，或用后面的“随即生成”，我是手动改的9999，保存。

![](http://photo5.yupoo.com/20071103/204204_507965273_ccjktwcn.jpg)

关闭迅雷，重新打开，使刚刚的设置生效，空出80端口，IIS就能正常启动了。

         可惜，这该死的IIS就是跟我过不去，能启动了就是不正常显示，提示：

**Server Application Error The server has encountered an error**

**while loading an application during the processing of your request. Please refer to the event log for**

**more detail information. Please contact the server administrator for assistance.**

        它就是欺负我鸟语不好，NND，继续baidu，找到了**解决方法**：

**1。**右键我的电脑--管理--本地用户和组，给IUSR_机器名和IWAM_机器名两个用户设置密码，要一样。

**2。**开始--运行--输入cmd，
然后cd c:InetpubAdminScripts
然后cscript.exe adsutil.vbs set w3svc/wamuserpass 你的密码，
然后cscript.exe adsutil.vbs set w3svc/anonymoususerpass 你的密码

看一下，行了没有？如果还不行，那么
cscript.exe synciwam.vbs -v，
然后iisreset

**Server Application Error续,8004EOOF错误**

发现运行C:InetpubAdminScriptssynciwam.vbs时报8004EOOF错误,晕死,网上搜索了下,发现是

MSDTC的问题: msdtc服务没有正常启动。 找到原因就好办啦^_^

**Step1**

删除注册表中的键：

HKEY_LOCAL_MACHINESYSTEMCurrentControlSetServicesMSDTC

HKEY_LOCAL_MACHINESOFTWAREMicrosoftMSDTC

HKEY_CLASSES_ROOTCID

**Step2**

停止 MSDTC服务：net stop msdtc

**Step3**

卸载MSDTC服务：msdtc -uninstall

**Step4**

重新安装MSDTC服务：

msdtc -install

然后再按照原来的解决Server Application Error的方法就可以了

如果还不行的话，这时把IIS卸掉，重新安装就可以了啊

        我一直做到最后一步，重装IIS，才搞定，累死俺也~~

![IIS5.1终于搞定~](http://photo5.yupoo.com/20071103/204205_1768978381_rwyleere.jpg)

        希望此文能对碰到类似问题的朋友有所帮助，也不枉这IIS为难了我那么久（我知道自己很菜，大家知道就不用说出来了哈~）

