---
title: aptitude 命令快速参考 - Debian系统中另一个强大的包管理工具
description: aptitude与apt-get同样是Debian及其衍生系统中功能极其强大的包管理工具。很多命令都类似于apt-get，因此很容易掌握。但与apt-get不同的是，aptitude在处理依赖问题上更佳一些。像aptitude在删除一个包时，会同时删除本身所依赖的包。这样，系统中不会残留无用的包，整个系统更为干净。以下是一些常用aptitude命令，仅供参考：……
date: 2009-05-11 09:24:07
category: 技术文章
tags: ['aptitude', 'apt-get', '包管理', '技巧']
post_id: 862
alias: aptitude
ViewNums: 3836
---

[aptitude](/blog/aptitude) 与 [apt-get](/tags/apt-get) 同样是 [Debian](/tags/Debian) 及其衍生系统中功能极其强大的包管理工具。很多命令都类似于 apt-get ，因此很容易掌握。

但与 [apt-get](/tags/apt-get) 不同的是，aptitude 在处理依赖问题上更佳一些。像 [aptitude](/blog/aptitude) 在删除一个包时，会同时删除本身所依赖的包。这样，系统中不会残留无用的包，整个系统更为干净。

以下是一些常用 [aptitude 命令](/blog/aptitude)，仅供参考：

| 命令 | 作用 |
| --- | --- |
| aptitude update | 更新可用的包列表 |
| aptitude upgrade | 升级可用的包 |
| aptitude dist-upgrade | 将系统升级到新的发行版 |
| aptitude install pkgname | 安装包 |
| aptitude remove pkgname | 删除包 |
| aptitude purge pkgname | 删除包及其配置文件 |
| aptitude search string | 搜索包 |
| aptitude show pkgname | 显示包的详细信息 |
| aptitude clean | 删除下载的包文件 |
| aptitude autoclean | 仅删除过期的包文件 |
|

via [UbuntuSky.cn](http://UbuntuSky.cn)

