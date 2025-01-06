---
title: eWebEditor v6.0.0 版本漏洞
description: 今天和静流聊天，他说eWebEditorv6.0.0出了最新漏洞。于是就是检测一下，这个程序爆漏洞一般都是直接上传的漏洞，不过没错就是上传漏洞。首先在本地搭建一个ASP环境重命名一个木马名字例如：1.gif.asp这样的就OK了。那么接下来完美本地搭建一个环境你可以用WEB小工具搭建一个，目的就是让远程上传。【这里如果上传asp文件的话，使用IIS的话，应该取消asp的解析，使其成为一个可以下载的asp文件，如果解析了，可能就只是解析后的html文件了，Neeao注】......
date: 2009-02-23 11:40:22
category: 漏洞信息
tags: ['eWebEditor', '漏洞信息']
post_id: 794
alias: eWebEditor-v6.0.0-Loophole
ViewNums: 3546
---

今天和静流聊天，他说[**eWebEditor v6.0.0出了最新漏洞**](/blog/ewebeditor-v600-loophole)。于是就是检测一下，这个程序爆漏洞一般都是直接上传的漏洞，不过没错 就是上传漏洞。首先在本地搭建一个ASP环境重命名一个木马名字例如：1.gif.asp这样的就OK了。

那么接下来完美本地搭建一个环境你可以用WEB小工具搭建一个，目的就是让远程上传。

【这里如果上传asp文件的话，使用IIS的话，应该取消asp的解析，使其成为一个可以下载的asp文件，如果解析了，可能就只是解析后的html文件了，Neeao注】

http://127.0.0.1/1.gif.asp

搭建好了，在上传的地方，图片来源是网络，加上网络地址[![eWebEditor v6.0.0 版本漏洞](http://www.hackeye.com/attachments/2009/02/12.jpg)](/blog/ewebeditor-v600-loophole)

然后确定，这里是最关键的一部！

[![eWebEditor v6.0.0](http://www.hackeye.com/attachments/2009/02/22.jpg)](/blog/ewebeditor-v600-loophole)

这里点了“远程文件自动上传”以后，再提交得到木马地址[![eWebEditor v6.0.0 版本漏洞](http://www.hackeye.com/attachments/2009/02/12.jpg)](/blog/ewebeditor-v600-loophole)

由于官方在图片目录做了限制 导致不能执行ASP脚本而没能拿到WEB权限。

属于安全检测漏洞版本ewebeditor v6.0.0

来源：zake’s blog

