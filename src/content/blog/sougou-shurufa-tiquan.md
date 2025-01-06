---
title: 搜狗拼音输入法提权的应用
description: 朋友post/sougou-shurufa-tiquan.html">提权上遇到困难，2003系统，常规方法都无效。能访问的目录只有网站目录和C:ProgramFiles。所以我仔细看了下ProgramFiles的所有文件夹，post/sougou-shurufa-tiquan.html">搜狗输入法的目录(C:ProgramFilesSogouInput4.3.0.3315)是唯一一个有权限写入编辑的目录。那么替换里面的执行文件就是目前唯一方法了。
date: 2010-01-09 10:22:58
category: 技术文章
tags: ['搜狗', '输入法', '提权', 'Windows']
post_id: 1045
alias: sougou-shurufa-tiquan
ViewNums: 4306
---

朋友[提权](/blog/sougou-shurufa-tiquan)上遇到困难，2003系统，常规方法都无效。能访问的目录只有网站目录和C:Program Files。所以我仔细看了下Program Files的所有文件夹，[搜狗输入法](/blog/sougou-shurufa-tiquan)的目录( C:Program FilesSogouInput4.3.0.3315 )是唯一一个有权限写入编辑的目录。那么替换里面的执行文件就是目前唯一方法了。

乍看这目录，显然自动升级程序 pinyinup.exe 应该是首选，在自己机器上测试了一下，用计算器替换了源文件，不过等了半天不运行，重启也一样。虽然肯定会运行，但还是希望有更有效率的方法。仔细看了一下，每次启动系统后，搜狗的ImeUtil.exe 都会启动，那就替换它了，结果肯定是成功的。但感觉不够，越多可换的就越好。让效率达到最高。这时觉得这种简单的事情应该有人已经做过了，百度一下取取经，不出所料，已经有人这么做过了，这位仁兄替换的也是[PinyinUp.exe](/blog/sougou-shurufa-tiquan)，但这样就满足了，没有继续了。

除了imeutil.exe ， pinyinup.exe 之外还有几个DLL文件。肯定是要加载的。找了popup.dll下手，做好的popup.dll 替换了原先的，重启测试，执行了。如果替换3个的话，我想达到效果的速度会快一些

做了个imeutil.exe 和 popup.dll ，供懒人使用，建议替换之前先备份原文件，达到目的后恢复原状。成功执行的话会在系统中添加一个管理员，用户名和密码都是sunwear

【下载地址】
<http://chinakernel.org/sogo.rar>

作者：[sunwear](http://hi.baidu.com/patricksunwear/)

