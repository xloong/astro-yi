---
title: pinyShop - 本地构建基于nginx的PHP环境
description: 为了方便同学们开发php，mysql应用，NginxHome特发布pinyShop：快速绿色nginx+php+mysql+memcache运行环境。目前的软件版本是Nginx-0.8.19、mysql-5.1.39、memcache1.2.1、php5.3.0、xdebug，nginx是一个高性能WEB服务/反向代理服务软件，被很多大型网站所采用，具有良好的性能。相对于apache+php+mysql，目前nginx+php+mysql的配套运行环境比较少也比较不成熟。由于nginx文档较少，配置方式对用户也比较陌生，所以阻挡了用户学习的脚步。pinyShop目的在于推进nginx的应用。特色有：可定制性，保证用户通过简单的步骤即可满足各自的要求简单即是美，BAT即可启动/关闭软件便捷的虚拟主机，新建文件夹即是新建虚拟主机适合调试使用，集成了xdebug，默认适合调试的php.ini文件pinyShopv0.2 在“更方便,更简单”这一pinyShop的目标上进行了升级
date: 2009-10-25 11:31:04
category: 应用软件
tags: ['pinyShop', 'nginx', 'PHP']
post_id: 1010
alias: pinyShop
ViewNums: 2751
---

为了方便同学们开发php，mysql应用，NginxHome特发布[pinyShop](/blog/pinyshop)：快速绿色[nginx+php+mysql+memcache](/blog/pinyshop)运行环境。目前的软件版本是Nginx-0.8.19、mysql-5.1.39、memcache1.2.1、php5.3.0、xdebug，[nginx](/tags/nginx)是一个高性能WEB服务/反向代理服务软件，被很多大型网站所采用，具有良好的性能。

相对于[apache](/tags/Apache)+php+mysql，目前[nginx+php+mysql](/blog/pinyshop)的配套运行环境比较少也比较不成熟。由于[nginx](/tags/nginx)文档较少，配置方式对用户也比较陌生，所以阻挡了用户学习的脚步。

[pinyShop](/blog/pinyshop)目的在于推进nginx的应用。特色有：

* 可定制性，保证用户通过简单的步骤即可满足各自的要求
* 简单即是美，BAT即可启动/关闭软件
* 便捷的虚拟主机，新建文件夹即是新建虚拟主机
* 适合调试使用，集成了xdebug，默认适合调试的php.ini文件

[**pinyShop v0.2**](/blog/pinyshop) 在“更方便,更简单”这一[pinyShop](/blog/pinyshop)的目标上进行了升级
解决了用户反馈的几个问题
web目录设置到nginx0.8.20/html中
将mysql、php、nginx放到单独的目录中，版本的更换将更便捷
nginx升级到0.8.20
PHP版本为php5.3.0 vc++6 x86,兼容没有安装visual c++ 2008运行库的系统。
php.ini放到php目录中，不再设conf目录统一放置配置文件
修正子目录中的文件不能在xdebug中输出profile的BUG
删除了常用bat目录，因为这几个bat并不常用
更新了常见问题的说明

【[**pinyShop下载地址**](/blog/pinyshop)】
[pinyShop - 本地构建基于nginx的PHP环境](/blog/download.asp?id=368

