---
title: 如何用Launchpad里的PPA源安装新软件
description: 作为一个初级的Ubuntu用户，夜火我只用apt-get装过软件，没试过用Launchpad的PPA源安装新软件，如果你和夜火一样，来看看下面来自LDCN的文章吧。作为一个Ubuntu用户，你可能有如下的经历：当你用“sudoapt-getinstallarora ”时，你会发现安装好的Arora浏览器是Arora0.7.0版的，而不是最新的Arora0.8.0版的。当你用“sudoapt-getinstallamule”时，你会发现安装好的aMule是aMule2.2.4版的，而不是最新的aMule2.2.5版的。当你用“sudoapt-getinstallXXXX”时，你发现终端提示“无法找到软件包XXXX”。这时你就需要依靠Launchpad里的ppa源来帮你安装，下面以安装Arora0.8.0为例说明如何用Launchpad安装最新的软件。
date: 2009-08-28 11:14:06
category: 技术文章
tags: ['技巧', 'Launchpad', 'PPA', 'Linux']
post_id: 954
alias: Launchpad-PPA-install-software
ViewNums: 6789
---

作为一个初级的[Ubuntu](/tags/Ubuntu)用户，[夜火](/blog/)我只用[apt-get](/tags/apt-get)装过软件，没试过[用Launchpad的PPA源安装新软件](/blog/launchpad-ppa-install-software)，如果你和夜火一样，来看看下面来自[LDCN](http://linuxdesktop.cn/)的文章吧。

作为一个Ubuntu用户，你可能有如下的经历：

当你用“sudo apt-get install arora ”时，你会发现安装好的Arora浏览器是Arora 0.7.0版的，而不是最新的Arora 0.8.0版的。

当你用“sudo apt-get install amule”时，你会发现安装好的aMule是aMule2.2.4版的，而不是最新的aMule2.2.5版的。

当你用“sudo apt-get install XXXX”时，你发现终端提示“无法找到软件包XXXX”。

这时你就需要依靠[Launchpad里的ppa源](/blog/launchpad-ppa-install-software)来帮你安装，下面以安装Arora 0.8.0 为例说明如何用Launchpad安装最新的软件。

**Launchpad是**Ubuntu母公司Canonical有限公司所架设的网站，是一个提供维护、支援或连络Ubuntu开发者的平台.

**Launchpad的网址**：<https://launchpad.net/>

**针对ubuntu而言**用 [https://launchpad.net/ubuntu/+ppas](https://launchpad.net/ubuntu/%2Bppas) 搜索比较精确。

**第一步：**在搜索框里输入软件的名称，或相关内容，如：ppa arora

[![Launchpad-搜索软件](http://farm4.static.flickr.com/3446/3784002184_7f949c707e_o.png)](/blog/launchpad-ppa-install-software "flickr 上 喜欢你2009 的 launchpad-搜索软件"

**第二步：**通过标题，可以寻找到你要的软件源

[![Launchpad-选择稳定版本](http://farm3.static.flickr.com/2437/3784002186_d8fedccaaf_o.png)](/blog/launchpad-ppa-install-software "flickr 上 喜欢你2009 的 launchpad-选择稳定版本"

**第三步：**选择符合你的Ubuntu版本的源

[![Launchpad-选择符合你Ubuntu版本的源-02](http://farm4.static.flickr.com/3533/3784002192_caeb29097e_o.png)](/blog/launchpad-ppa-install-software "flickr 上 喜欢你2009 的 launchpad-选择符合你ubuntu版本的源-02"

**第四步：添加源：**

可以用Ubuntu Tweak的源编辑器添加：

[![Launchpad-Ubuntu-Tweak的添加源编辑器](http://farm3.static.flickr.com/2440/3784215467_a40ac00df7_o.png)](/blog/launchpad-ppa-install-software "flickr 上 喜欢你2009 的 launchpad-ubuntu-tweak的添加源编辑器"

也可以在终端输入：

`sudo gedit /etc/apt/sources.list`

然后粘贴后保存。

**第五步(01)：****添加公钥的第一种方法：**选择**“Signing Key:  1024R/”**后的那段数字，然后在前面添加：

`sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com`

[![launchpad-添加公钥-01](http://farm4.static.flickr.com/3589/3784002196_e3afba9346_o.png)](/blog/launchpad-ppa-install-software "flickr 上 喜欢你2009 的 launchpad-添加公钥-01"

**第五步(02):添加公钥的第二种方法**：也可以点击链接后，会出现’ox*******’,选择**“OX”**后的数字，然后添加：

`sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com`

[![Launchpad-添加公钥-02](http://farm4.static.flickr.com/3510/3784382960_7471c5c496_o.png)](/blog/launchpad-ppa-install-software "flickr 上 喜欢你2009 的 launchpad-添加公钥-02"

**第六步： 更新与安装**

在终端输入:

`sudo apt-get update`

`sudo apt-get install arora`

**另外**,如果你在“sudo apt-get update”时遇到：

> W: GPG签名验证错误： http://ppa.launchpad.net jaunty Release: 由于没有公钥，下列签名无法进行验证： NO_PUBKEY 5A9BF3BB4E5E17B5
> W: 您可能需要运行 apt-get update 来解决这些问题

这个提示说需要添加公钥，解决方案就是添加”5A9BF3BB4E5E17B5″这个公钥：
在终端输入：

`sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com 5A9BF3BB4E5E17B5`

有很多类似的有关添加公钥的问题，均可用以上方案解决。

