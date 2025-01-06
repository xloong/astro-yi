---
title: wdcp v2.1 - Linux服务器管理系统
description: post/wdcp-v2.1.html">wdcp2.1 (WDlinuxControlPanel)是一套用PHP开发的/tags/Linux">Linux服务器管理系统,旨在易于使用和管理Linux服务器,可以在线通过网页管理服务器和虚拟主机.简单,方便,易操作.只有Linux版本,没有/tags/Windows">windows版本,让你方便地使用和管理Linux服务器,让不懂Linux的人也可以用Linux做服务器了.支持post/Centos-6.0.html">CentOS//tags/RedHat">RedHat版本,其它Linux版本尚未测试,欢迎测试!……
date: 2011-12-09 10:08:33
category: 应用软件
tags: ['wdcp', 'Linux']
post_id: 1282
alias: wdcp-v2.1
ViewNums: 2669
---

[wdcp 2.1](/blog/wdcp-v21) (WDlinux Control Panel) 是一套用PHP开发的[Linux](/tags/Linux)服务器管理系统,旨在易于使用和管理Linux服务器,可以在线通过网页管理服务器和虚拟主机.简单,方便,易操作.只有Linux版本,没有[windows](/tags/Windows)版本,让你方便地使用和管理Linux服务器,让不懂Linux的人也可以用Linux做服务器了.支持[CentOS](/blog/centos-60)/[RedHat](/tags/RedHat)版本,其它Linux版本尚未测试,欢迎测试!

2.0开始
1 重写了大部分内核,调整了部分页面结构
2 wdcp管理后台服务独立，以保证操作错误仍可操作后台，特别是对小白，很实用
3 更换原来的vsftpd服务为pureftpd服务器端软件，以易操作权限，避免网站安装权限，FTP不能删除网站后台生成的文件
4 完美支持lnamp,也就是linux+nginx+apache+mysql+php组合，所谓的n前端a后端
5 创建站点时与FTP,mysql帐号分开创建，可针对站点或目录，创建多个FTP帐号及多个mysql数据库和用户
6 站点创建实时生效可访问
7 支持多用户，普通用户可创建站点，FTP，mysql
8 完善二级域名绑定，可绑定顶级域名，可设置默认首页
9 全部页面模板化，方便页面修改和定制设计

演示 [http://demo.wdlinux.cn:8080](http://demo.wdlinux.cn:8080/)
用户密码:admin/wdlinux.cn
详细功能列表 <http://www.wdlinux.cn/wdcp>

20111207
1 增加智能DNS应用模块
2 增加应用模块结构及应用显示控制
3 使用新模板和页面
4 修复PHP优化设置中修改禁用函数不生效的问题
5 增加站点时，增加默认使用顶级域名
6 增加禁止蜘蛛爬行
7 修复关闭站点时的错误

2.0的升级方法，直接在后台可升级
1.X的升级，请看下面描述

卸载或重装
rm -fr /www/wdlinux (有重要数据切换备份)
reboot
再运行sh in.sh即可

下载安装
wget <http://dl.wdlinux.cn:5180/lanmp_last.tar.gz>
tar zxvf lanmp_last.tar.gz
安装全部
sh in.sh

只安装lamp/lnmp/lnamp集成环境
sh lanmp.sh

只安装wdcp管理系统
sh wdcp_ins.sh

1.X的升级
sh wdcp1t2_up.sh

执行完后，登录后台查看.升级后管理员密码变为默认的初始密码：wdlinux.cn,请登录修改

注意：
1 1.X的升级时间比较久，因为要安装wdcp的后台服务，也就是一个wdapache,wdphp,需要编译安装
2 如果在1.X版本的站点目录，FTP目录，或FTP用户名等中含有点号".",将会自动替换为下划线"_",升级后注意检查，如果密码不对，可修改密码再测试
3 版本2.0比1.X较占内存，具体请看 <http://www.wdlinux.cn/bbs/thread-66-1-1.html>

如有问题，请将问题详细描述或截图，系统版本等
发至论坛 <http://www.wdlinux.cn/bbs/forum-3-1.html>

