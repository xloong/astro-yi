---
title: 文件夹删不掉 无法删除文件无法读源文件或磁盘 如何删除的方法
description: 最近夜火我有2个文件夹删不掉，一点删除就提示“无法删除文件：无法读源文件或磁盘”，CMD下也删除不掉，提示“找不到文件”，搞的郁闷死了，还好里面的文件都能拉出来，只能先另存为，再另想办法。目前发现的共同症状是文件夹结尾带空格，不知道是不是特殊字符，都是迅雷下载的时候设置生成的。 最终功夫不负有心人，这个文件夹不能删除无法读源文件或磁盘的
date: 2012-04-12 20:58:45
category: 技术文章
tags: ['技巧']
post_id: 1311
alias: wufaduquyuanwenjianhuocipan
ViewNums: 3632
---

最近[夜火](http://www.15897.com)我有2个文件夹删不掉，一点删除就提示“[无法删除 文件：无法读源文件或磁盘](/blog/wufaduquyuanwenjianhuocipan)”，CMD下也删除不掉，提示“[找不到文件](/blog/wufaduquyuanwenjianhuocipan)”，搞的郁闷死了，还好里面的文件都能拉出来，只能先另存为，再另想办法。目前发现的共同症状是文件夹结尾带空格，不知道是不是特殊字符，都是迅雷下载的时候设置生成的。

最终功夫不负有心人，这个[文件夹不能删除](/blog/wufaduquyuanwenjianhuocipan) [无法读源文件或磁盘](/blog/wufaduquyuanwenjianhuocipan)的问题终于让我找到解决办法了。

其他尝试失败的方法就不说了，直接提供[解决文件夹删不掉的方法](/blog/wufaduquyuanwenjianhuocipan)：

cmd下dir列名录的命令，有个/x的参数：

dir /x
参数说明：使用此参数即“DIR/X”列文件、目录时，会对长文件名同时显示“8.3”格式的文件名。”

于是，从cmd进入[删不掉的文件](/blog/wufaduquyuanwenjianhuocipan)所在目录，然后执行 dir /x ，这样该文件夹下所有文件及文件夹的8.3格式文件名就都列出来了，找到[不能删除的文件夹](/blog/wufaduquyuanwenjianhuocipan)，复制8.3格式文件名，然后rd或del删除之，例：

rd Z在盛~1

rd THEDAY~1

rd G功夫~1.CHI

注意：删除之前先确认下文件夹里是否还有东西，以免悲剧发生。不过cmd应该会有提示，附加参数才能删带文件的文件夹，我没尝试

