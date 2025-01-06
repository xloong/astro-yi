---
title: BitTorrent Sync - 分布式P2P点对点数据同步
description: BitTorrentSync 是BitTorrentLabs推出的实验性项目，可以在多台电脑间进行点对点自动分享/同步文件，由于没有中间服务器，传输过程加密，安全自己掌握，并且文件大小仅受到硬盘限制。夜火表示，BitTorrentSync 是跨平台、大型细碎工作分布式协作的必备神器。可设置完整权限同步或者让接收方只读，还可以发送24小时有效期的密钥，过期作废。一个
date: 2013-05-25 10:37:53
category: 应用软件
tags: ['软件']
post_id: 1460
alias: BitTorrent-Sync
ViewNums: 3028
---

[BitTorrent Sync](/blog/bittorrent-sync) 是 BitTorrent Labs 推出的实验性项目，可以在多台电脑间进行点对点自动分享/同步文件，由于没有中间服务器，传输过程加密，安全自己掌握，并且文件大小仅受到硬盘限制。[夜火](http://www.15897.com/)表示，[BitTorrent Sync](/blog/bittorrent-sync) 是跨平台、大型细碎工作分布式协作的必备神器。

可设置完整权限同步或者让接收方只读，还可以发送 24 小时有效期的密钥，过期作废。一个私人性质的 Dropbox 诞生，只需要持续开启一台电脑。支持 [Windows](/blog/windows-server-2008-x86-dvd-chs)/[Mac OS X](/tags/Mac)/[Linux](/tags/Linux)。

[![xx_001](http://wowubuntu.com/wp-content/uploads/2013/05/xx_001.png)](/blog/bittorrent-sync)

[![BitTorrent Sync 分布式私密无限数据分享/同步[图] | 小众软件](http://img3.appinn.com/images/201304/2013-04-25-11-55-17.png/o "BitTorrent Sync 分布式私密无限数据分享/同步[图] | 小众软件")](/blog/bittorrent-sync)

BitTorrent Sync 适合于对数据安全性比较在意但又需要数据分享/同步的用户，不经过任何第三方服务器而直接传输数据可以避免很多潜在的风险。

设置分享后会得到三个不同的密钥，分别别完整权限、只读以及一次性密钥：

[![BitTorrent Sync 分布式私密无限数据分享/同步[图] | 小众软件](http://img3.appinn.com/images/201304/2013-04-25-2-30-26.png/o "BitTorrent Sync 分布式私密无限数据分享/同步[图] | 小众软件")](/blog/bittorrent-sync)

只需将密钥输入其他电脑的 BitTorrent Sync 中，就可以同步文件了。电脑玩物提供了[图文教程](http://playpcesor.blogspot.com/2013/04/bittorrent-sync-bt-dropbox.html)（需要翻wall）。

P2P 始终作为挑战者而存在，比如 BitTorrent Sync 流行开后，文件分享将变得更加私密及简便，如果你拍了一部纪录片/微电影木有地方发布，就试试 BitTorrent Sync 吧。

[**Linux版BitTorrent Sync**](/blog/bittorrent-sync)：

Linux 版的客户端没有 GUI ，只有 Web UI ，启动后需在浏览器中输入 [http://localhost:8888](http://localhost:8888/) 进行访问。

通过以下命令可以生成配置文件样本：

```
./btsync --dump-sample-config > sync.conf
```

修改配置文件后，启动时需指定配置文件。

```
./btsync --config sync.conf
```

官方[详细指南](http://labs.bittorrent.com/experiments/sync/get-started.html)。

【[**BitTorrent Sync - 分布式P2P点对点数据同步下载地址**](/blog/bittorrent-sync)】
[下载地址](http://labs.bittorrent.com/experiments/sync.html)

via
www.appinn.com/bittorrent-sync/
wowubuntu.com/bittorrent-sync.html

