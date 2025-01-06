---
title: 上网无忧电子眼 - Web浏览安全工具
description: 这几天夜火我一直在找类似HIPS的软件，可以让我彻底抛弃杀毒软件，又不用像真正的HIPS那样设置那么麻烦，今天刚好在趋势科技上看到了上网无忧电子眼这么个软件：
date: 2008-08-12 06:53:33
category: 安全工具
tags: ['趋势科技', '安全', '工具共享']
post_id: 567
alias: Trend-Micro-DianZiYan
ViewNums: 6203
---

这几天[夜火](/blog/)我一直在找类似[HIPS](/tags/HIPS)的软件，可以让我彻底抛弃[杀毒软件](http://www.virus-info.asia/virus/AntiVirus/)，又不用像真正的HIPS那样设置那么麻烦，今天刚好在[趋势科技](http://cn.trendmicro.com/cn/home/)上看到了**[上网无忧电子眼](http://www.trendmicro.com.cn/sp/smb/wpao/download)**这么个软件：

> *趋势科技™上网无忧电子眼是一套轻量型的Web威胁防御工具，大小仅8兆，可与任何防毒品牌的产品共同协作，弥补现有防病毒解决方案的不足，即时制止用户访问可能有害的站点。*

看上去很不错，下载下来安装。第一次在安装网络驱动程序接口规范驱动程序的地方卡死了，搞的我直接掉网，看来搞的蛮底层的。重启后重新安装，无问题。如下图：

![趋势科技上网无忧电子眼](http://i3.6.cn/cvbnm/98/13/20/c4aa8db48e14559f46dad13806afc1fd.jpg)

可以看到很好的在工作了，上网无忧电子眼采用趋势科技革命性的互联网实时服务 (in-the-cloud) [安全](/tags/%E5%AE%89%E5%85%A8)技术来监控网页请求。这套实时防护能主动扫瞄来自互联网的恶意威胁，避免使用者浏览遭到入侵、攻击或挂马的网站。其中的互联网 Bot 程序行为分析技术，能侦测秘密控制您计算机以从事网络犯罪的僵尸、傀儡程序等可疑行为，避免渗透或特殊网站上的恶意威胁软件加害计算机，免遭僵尸病毒秘密控制您的计算机以从事犯罪行为。

上图中的“全球Web威胁统计报告”是趋势科技24小时云计算处理全球恶意网页的实时效果图：<https://securecloud.com/reputation/report>

上网无忧电子眼的安全设置如下，Bot扫描可以监视HTTP ，SMTP，IRC，DNS等信息，相关功能还是比较全的。

![电子眼安全设置](http://i3.6.cn/cvbnm/7e/04/b5/6dfb0b829c6e61c158d4ab650737fc39.jpg)

为什么说是比较全？因为我对上网无忧电子眼的功能还不是很满意，总感觉功能比较少，在我使用过程中只拦截了51.la的一些地址(感觉像误报，但不影响正常浏览)，可能是我没浏览很多脚本的页面吧；

在安装的时候自动安装到“C:Program FilesTrend Micro上网无忧电子眼”目录，不可以自己选择，用户体验不够好；

还有拦截脚本的时候，给的提示太简单了，有广告的嫌疑(这个没截图)，感觉自己掌握到的信息太少，不知道上网无忧电子眼究竟做了些什么，有点不放心。

总的来说，这个上网无忧电子眼还是不错的，兼容很好，不会和其他防护[软件](/blog/sumo-v20049-beta)冲突，相当于机器多了一道安全保障

[![](http://cn.trendmicro.com/imperia/md/content/cn/products/banner5.gif)**上网无忧电子眼下载地址**](http://general-p.activeupdate.trendmicro.com.cn/activeupdate/china/product/WebProtect_1061_SC_Repack.zip)

