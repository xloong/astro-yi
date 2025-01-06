---
title: Furius ISO Mount - Ubuntu 上挂载 ISO 镜像的前端软件
description: 对于CLI老鸟来说，挂载ISO镜像根本无需第三方程序，只需下面一行命令就可搞定。（嘛~">夜火我使用命令总是莫名其妙的失败。。。）sudomount-oloop/path/to/foo.iso/mnt但对于很多适应了图形化工具的新手来说，他们更想要的是能有一款图形化工具来解决这一问题，而post/Furius-ISO-Mount.html">FuriusISOMount就是这样一个工具，可以帮助对CLI命令不太熟悉的用户来挂载ISO光盘镜像文件。它支持ISO,IMG,BIN,MDF和NRG等格式的镜像文件，可自动创建挂载点，并具备检验及刻录等增强功能。
date: 2010-09-02 09:47:42
category: 应用软件
tags: ['Ubuntu', '软件']
post_id: 1210
alias: Furius-ISO-Mount
ViewNums: 3186
---

via [Wow!Ubuntu](http://wowubuntu.com/)

PS:[夜火](http://www.15897.com/)最近一直在忙工作的事，9月下旬可能会封闭式培训，更新没办法保证了。

对于 CLI 老鸟来说，挂载 ISO 镜像根本无需第三方程序，只需下面一行命令就可搞定。（嘛~夜火我使用命令总是莫名其妙的失败。。。）

> sudo mount -o loop /path/to/foo.iso /mnt

但对于很多适应了图形化工具的新手来说，他们更想要的是能有一款图形化工具来解决这一问题，而 [Furius ISO Mount](/blog/furius-iso-mount) 就是这样一个工具，可以帮助对 CLI 命令不太熟悉的用户来挂载 ISO 光盘镜像文件。

它支持 ISO, IMG, BIN, MDF 和 NRG 等格式的镜像文件，可自动创建挂载点，并具备检验及刻录等增强功能。

[![Furius ISO Mount - Ubuntu 上挂载 ISO 镜像的前端软件](http://wowubuntu.com/wp-content/uploads/2010/08/sc2010262834000.png)](/blog/furius-iso-mount)

项目主页：<https://launchpad.net/furiusisomount/>

# Ubuntu 上安装：官方源里就有，可以在软件中心中搜索 [Furius ISO Mount](/blog/furius-iso-mount) 来安装，或者通过 CLI

> sudo apt-get install furiusisomount

