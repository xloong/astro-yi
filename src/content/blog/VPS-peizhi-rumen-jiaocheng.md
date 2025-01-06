---
title: VPS配置入门教程
description: 作者：herolee原题目：《PhotonVPS安装配置全记录》链接：http://www.fishnote.net/?p=186前几天，在PhotonVPS买了一款512M内存的/tags/VPS">VPS，使用优惠码“TENOFF”打九折后每月为$9.86。目前，我的博客和推特中文圈都放在了这个VPS上。购买这个/tags/VPS">VPS的原因主要是有中文客服，就是hostloc.com上的PhotonVPS-Jasmi。一般来说，post/VPS-peizhi-rumen-jiaocheng.html">VPS都是最小化安装的，很多服务，比如/tags/PHP">php，mysql，ftp等等，都需要自己手动安装。VPS可以算是一台独立的主机，开放了root权限，和一般的虚拟主机相比，post/VPS-peizhi-rumen-jiaocheng.html">配置起来很有乐趣，自由度很高。我对/tags/Linux">linux也不是很熟悉，有些资料也是google来的，对于新手来说，post/VPS-peizhi-rumen-jiaocheng.html">配置好LAMP环境后看到网站正常运行，一定会觉得很有成就感。注：其他使用post/CentOS-5.4.html">CentOS5的VPS应该也和这个类似。
date: 2010-03-25 06:46:29
category: 教程与电子书
tags: ['Linux', 'VPS', 'CentOS']
post_id: 1096
alias: VPS-peizhi-rumen-jiaocheng
ViewNums: 14753
---

作者：[herolee](http://www.fishnote.net/) 原题目：《PhotonVPS安装配置全记录》 链接：<http://www.fishnote.net/?p=186>

前几天，在[PhotonVPS](http://www.photonvps.com/)买了一款512M内存的[VPS](/tags/VPS)，使用优惠码 “TENOFF”打九折后每月为$9.86。目前，我的[博客](http://www.fishnote.net/)和[推特中文圈](http://twitter.fishnote.net/)都放在了这个VPS上。购买这个[VPS](/tags/VPS)的原因主要是有中文客服，就是[hostloc.com](http://www.hostloc.com/)上的 PhotonVPS-Jasmi。

一般来说，[VPS](/blog/vps-peizhi-rumen-jiaocheng)都是最小化安装的，很多服务，比如[php](/tags/PHP)，mysql，ftp等等，都需要自己手动安装。VPS可以算是一台独立的主机，开放了 root 权限，和一般的虚拟主机相比，[配置](/blog/vps-peizhi-rumen-jiaocheng)起来很有乐趣，自由度很高。我对[linux](/tags/Linux)也不是很熟悉，有些资料也是google来的，对于新手来说，[配置好 LAMP环境](/blog/vps-peizhi-rumen-jiaocheng)后看到网站正常运行，一定会觉得很有成就感。注：其他使用[CentOS 5](/blog/centos-54) 的VPS应该也和这个类似。

以下的一些安装信息使用了[VPS侦探](http://www.vpser.net/)的相关教程和资源，先表示感谢。

### **一、修改时区**

1.运行tzselect，选择Asina/shanghai
2.运行cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime，会提示是否覆盖，覆盖即可

### **二、配置IP封禁，阻止ssh暴力破解**

如果没有修改默认的SSH端口，就会遭到一些黑客的扫描和恶意破解root密码，配合logwatch（后有安装教程），可以把相关的IP加到封禁列表， 提高安全性。
运行vim /etc/hosts.deny
加入：
sshd:114.203.35.2:deny
其中，114.203.35.2就是你要阻止登陆的IP

### **三、安装php**

由于在[CentOS](/tags/CentOS)上用yum安装的PHP版本为5.1，现在很多程序需要5.2的运行环境，所以需要修改相关配置才能安装5.2版本的PHP
1.rpm –import http://www.jasonlitka.com/media/RPM-GPG-KEY-jlitka
2.vim /etc/yum.repos.d/CentOS-Base.repo

在最后增加下面信息：
[utterramblings]
name=Jason’s Utter Ramblings Repo
baseurl=http://www.jasonlitka.com/media/EL$releasever/$basearch/
enabled=1
gpgcheck=1
gpgkey=http://www.jasonlitka.com/media/RPM-GPG-KEY-jlitka

3.安装php：yum install php
4.安装gd扩展：yum install php-gd
5.安装mysql扩展：yum install php-mysql
6.安装其他扩展：yum install php-mcrypt php-mbstring

### **四、安装mysql**

1.yum install mysql-server
2.yum install mysql-devel
3.运行ntsysv，在mysqld前加*号，将其加入系统服务
4.运行service mysqld start，测试是否能够成功启动mysql
5.运行mysqladmin -u root password **** 修改mysql的root密码，将****替换为你重新设置的密码

**[扩展阅读]** [MySQL内存占用优化 - 低内存VPS必备](/blog/mysql-neicun-zhanyong-youhua "mysql内存占用优化 - 低内存vps必备")

### **五、安装gcc**

由于安装一些软件时，需要自行编译后再安装，而PhotonVPS默认没有安装gcc，因此也需要安装。
运行yum install gcc安装。

### **六、安装日志分割软件**

使用apche的默认设置会使日志过于臃肿，会占用大量的磁盘空间，解决办法就是用cronolog分割日志，便于管理。
1.下载：wget http://cronolog.org/download/cronolog-1.6.2.tar.gz
2.建立安装目录：mkdir -p /usr/local/cronolog
3.解压缩：tar zxvf cronolog-1.6.2.tar.gz
4.进入解压缩的目录：cd cronolog-1.6.2
5.编译，安装：
./configure –prefix=/usr/local/cronolog
make
make install
6.检查是否正确安装：
cd /usr/local/cronolog/sbin
./cronolog -V
如果显示：cronolog version 1.6.2，则表示已经安装成功了。

### **七、apache虚拟主机配置**

1.建立配置文件：vim /etc/httpd/conf.d/hosts.conf
2.输入以下内容：
NameVirtualHost *:80
<VirtualHost *:80>
DocumentRoot /var/www/www.fishnote.net
ServerName fishnote.net
ErrorLog logs/error_log
CustomLog “|/usr/local/cronolog/sbin/cronolog /var/log/httpd/www.fishnote.net-access.log.%Y%m%d” combined
</VirtualHost>

其中，每组<VirtualHost *:80></VirtualHost>就是一个网站配置，按照上面的设置，CustomLog是按照日期分割的：每天产生一个日志文件，文件名包含当天日期。

### **八、开启自定义.htaccess支持**

默认情况下，apache已经开启Rewrite支持，我们还需要打开支持自定义.htaccess。
vim /etc/httpd/conf/httpd.conf
找到
<Directory />
Options FollowSymLinks
AllowOverride All
</Directory>
将AllowOverride None修改为AllowOverride All

**[扩展阅读]** [.htaccess文件使用权威指南](/blog/htaccess-shiyongzhinan "htaccess文件使用权威指南")

### **九.安装配置logwatch**

1.安装：yum install logwatch
2.修改/usr/share/logwatch/default.conf/logwatch.conf
如果需要将报告发送到邮箱，把MailTo root中的root修改为email地址即可。
如果只需要特定服务的报告，先在Service = All前加#将其注释，然后，如果需要sshd报告，则在后面加上：Service = sshd
在/usr/share/logwatch/default.conf/services目录下可以查看logwatch支持的所有服务名称。
如果需要查看更详细的报告，可以修改Detail的值，High为最高。
3.运行logwatch –print，可以直接查看报告。

### **十、安装流量监控**

为了便于观察每天的流量，可以选择安装流量监控。
1.安装vnsta
(1)下载：wget http://soft.vpser.net/status/vnstat/vnstat-1.9.tar.gz
(2)解压，进入目录
tar zxvf vnstat-1.9.tar.gz
cd vnstat-1.9
(3)编译，安装：
make
make install
2.安装vnstat PHP frontend
(1)下载：http://soft.vpser.net/status/vnstat/vnstat_php_frontend- 1.4.1.tar.gz
(2)解压文件夹改名为vnstat，然后上传到某个网站根目录下，这样就可以用http://www.yourdomain.com/vnstat访问
3.建立流量数据库:
(1)运行ifconfig，查看需要监控的网卡，如：venet0
(2)生成数据库:
/usr/bin/vnstat -u -i venet0
(3)设置定时更新数据库,通过cron的方式：
vim /etc/cron.d/vnstat
输入以下内容，每5分钟分析一次：
0-55/5 *        * * *   root   vnstat -u -i venet0
0-55/5 *        * * *   root   vnstat –dumpdb -i venet0 >/var/lib/vnstat/vnstat_dump_venet0
(4)修改vnstat中的config.php相关内容
$iface_list = array(‘venet0′);
$iface_title['venet0'] = ‘Photon VPS’;
$vnstat_bin = ‘/usr/bin/vnstat’;
$data_dir = ‘/var/lib/vnstat/’;

至此，安装完成，可以通过http://www.yourdomain.com/vnstat访问。

