---
title: MySQL内存占用优化 - 低内存VPS必备
description: Linode提供了一个用于低内存服务器的post/MySQL-neicun-zhanyong-youhua.html">MySQL内存占用优化建议，可以用来参考。配置文件:post/MySQL-neicun-zhanyong-youhua.html">/etc/my.cnf...
date: 2010-03-05 11:27:45
category: 技术文章
tags: ['MySql', 'VPS', '技术类']
post_id: 1085
alias: MySQL-neicun-zhanyong-youhua
ViewNums: 6033
---

[Linode](http://www.linode.com/)提供了一个用于低内存服务器的[MySQL内存占用优化](/blog/mysql-neicun-zhanyong-youhua)建议，可以用来参考。

配置文件: [/etc/my.cnf](/blog/mysql-neicun-zhanyong-youhua)

[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
user=mysql
# Default to using old password format for compatibility with mysql 3.x
# clients (those using the mysqlclient10 compatibility package).
old_passwords=1

# Low memory optimizations
skip-bdb
skip-innodb
skip-networking
server-id = 1
key_buffer = 256K
max_allowed_packet=1M
thread_stack = 64K
table_cache = 4
sort_buffer_size = 64K
read_buffer_size = 256K
read_rnd_buffer_size = 256K
net_buffer_length = 2K
thread_stack = 64K
query_cache_limit=256K
query_cache_size = 2M

[mysqld_safe]
log-error=/var/log/mysqld.log
pid-file=/var/run/my

via [秋天博客](http://www.fallday.org/)

