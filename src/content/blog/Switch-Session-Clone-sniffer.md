---
title: Switch Session Clone - 首款基于MAC+Port理论的hack工具
description: 首款基于mac+port理论的hack工具。交换环境下无arp欺骗的会话复制软件利用mac+port欺骗方式实现sniffer．通过过滤(url)中的cookie信息复制出相同的会话．适用于任何http协议．比"黑帽"聚会中的hamster功能更加强大。可以成功的穿过各种反arp工具。经过实验，可以成功突破antiarp和360arp的防护。使用说明：
date: 2008-03-05 08:16:04
category: 安全工具
tags: ['Switch', 'session', '工具共享', 'ARP', 'sniffer']
post_id: 393
alias: Switch-Session-Clone-sniffer
ViewNums: 6285
---

来源：cncert

首款基于mac+port理论的hack[工具](/tags/%E5%B7%A5%E5%85%B7%E5%85%B1%E4%BA%AB)。
交换环境下无[arp](/tags/ARP)欺骗的会话复制软件
利用mac+port欺骗方式实现sniffer．
通过过滤(url)中的cookie信息复制出相同的会话．适用于任何http协议．比 "黑帽"聚会中的hamster功能更加强大。可以成功的穿过各种反arp工具。
经过实验，可以成功突破[antiarp](/blog/crantiarp42) 和 360arp的防护。

**使用说明：**
1、设置参数
首如果本机含有多个网卡或者ip的话，需要选择主机的网卡和子网掩码。程序会自动探测出相应的主机ip和网关ip以及mac地址。
2、开始监听
点击start按钮，进行数据的监听。注意观察下方的Console窗口，操作的每一步都会有详细的提示。
监听到数据后，会在左方的DomainList列表中以url方式出现。
在URL列表中选择相应的监听到的连接，下方会给出详细的信息，包括cookie等信息。
双击连接即可以相应的身份进入被攻击者的访问页面。
3、结果分析
可以将结果保存以文件方式导入和导出

**高级功能**
1、选择数据sniffer模式。
程序共有两种模式。大于5台主机可使用paasvity模式，小型网络和测试建议使用active模式。两种模式的区别就是passive模式在劫持到数据之后不主动恢复链路网络会自动恢复。这样可以减少本机的发包量。
2、设置URLFilter。
过滤器是url包含过滤，可以监听特定的URL的信息。也可不设置。
3、设置Packet/s。此参数为发包率。
设置越大，监听到的信息越多。同时也会造成网络流量的增加。也可不设置。
因为在一次会话过程中，会有很多次的请求，只要截获其中的一次请求的数据，就可获得被劫持者的身份。所以，不需要过大的发包率。
4、设置Proxy Host。也可不设置。如果选择Proxy Host可进一步提高隐藏性。（本功能为高级功能，即使不选，现在的工具也无法监控到。）
首先点击scan按钮，扫描出网络中的主机，然后选择相应的主机，即可成功设置proxy。
5、设置Use Pcap
在程序的右下角有个api mode。通过双击可以修改为pcap模式。
pcap模式依赖选择的网卡,该模式可将session设置到外部浏览器。推荐使用默认的api模式。

其他更多功能请自行发现。谢谢！
Bug To cncert.net@gmail.com
![](http://pic.yupoo.com/sunlei/8549652f7eef/7io8sn43.jpg)

[点击进入 Switch Session Clone 下载页面](/blog/download.asp?id=57

注意：需要.net 2.0支持 ，不支持无线网卡。

