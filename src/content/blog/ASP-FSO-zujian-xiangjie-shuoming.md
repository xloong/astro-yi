---
title: ASP的FSO组件操作详解说明
description: 夜火：最近学校里讲了ASP的FSO组件，没听太懂。。。上课打瞌睡了~，以前自己也看过一些关于ASP的书，所以就算打瞌睡最后的作业也顺利完成交上去了。学校教的进度实在是不敢恭维，还是自己多找点关于FSO的东西来充实下，顺便当作笔记，以备后查
date: 2008-04-26 11:27:55
category: 技术文章
tags: ['ASP', 'FSO', '技术类']
post_id: 464
alias: ASP-FSO-zujian-xiangjie-shuoming
ViewNums: 11497
---

[夜火](/blog/)最近学校里讲了[ASP](/tags/ASP)的[FSO](/tags/FSO)组件，没听太懂。。。上课打瞌睡了~，以前自己也看过一些关于ASP的书，所以就算打瞌睡最后的作业也顺利完成交上去了。学校教的进度实在是不敢恭维，还是自己多找点关于FSO的东西来充实下，顺便当作笔记，以备后查

**FSO**是**FileSystemObject** 或 **Scripting.FileSystemObject** 的缩写，为 IIS 内置组件，用于操作磁盘、文件夹或文本文件。FSO 的对象、方法和属性非常的多，这里用示例的方式列出常用的，注意：《VBScript 语言参考》或《JScript 语言参考》中的：《FileSystemObject 用户指南》和《Scripting 运行时库参考》便是微软给出的 FileSystemObject 完整参考。

FSO 不能操作二进制文件，要操作二进制文件，使用：[ADODB.Stream](http://www.cftea.com/c/2006/09/B8V6AUPYDKWNTYR3.asp)。

**创建文件**
```
dim fso, f
set fso = server.CreateObject("Scripting.FileSystemObject")
set f = fso.CreateTextFile("C: est.txt", true) '第二个参数表示目标文件存在时是否覆盖
f.Write("写入内容")
f.WriteLine("写入内容并换行")
f.WriteBlankLines(3) '写入三个空白行（相当于在文本编辑器中按三次回车）
f.Close()
set f = nothing
set fso = nothing
```

**打开并读文件**
```
dim fso, f
set fso = server.CreateObject("Scripting.FileSystemObject")
set f = fso.OpenTextFile("C: est.txt", 1, false) '第二个参数 1 表示只读打开，第三个参数表示目标文件不存在时是否创建
f.Skip(3) '将当前位置向后移三个字符
f.SkipLine() '将当前位置移动到下一行的第一个字符，注意：无参数
response.Write f.Read(3) '从当前位置向后读取三个字符，并将当前位置向后移三个字符
response.Write f.ReadLine() '从当前位置向后读取直到遇到换行符（不读取换行符），并将当前位置移动到下一行的第一个字符，注意：无参数
response.Write f.ReadAll() '从当前位置向后读取，直到文件结束，并将当前位置移动到文件的最后
if f.atEndOfLine then
   response.Write("一行的结尾！")
end if
if f.atEndOfStream then
    response.Write("文件的结尾！")
end if
f.Close()
set f = nothing
set fso = nothing

**打开并写文件**dim fso, f
set fso = server.CreateObject("Scripting.FileSystemObject")
set f = fso.OpenTextFile("C: est.txt", 2, false) '第二个参数 2 表示重写，如果是 8 表示追加
f.Write("写入内容")
f.WriteLine("写入内容并换行")
f.WriteBlankLines(3) '写入三个空白行（相当于在文本编辑器中按三次回车）
f.Close()
set f = nothing
set fso = nothing

**判断文件是否存在**dim fso
set fso = server.CreateObject("Scripting.FileSystemObject")
if fso.FileExists("C: est.txt") then
    response.Write("目标文件存在")
else
    response.Write("目标文件不存在")
end if
set fso = nothing
```

**移动文件**
```
dim fso
set fso = server.CreateObject("Scripting.FileSystemObject")
call fso.MoveFile("C: est.txt", "D: est111.txt") '两个参数的文件名部分可以不同
set fso = nothing
```

**复制文件**
```
dim fso
set fso = server.CreateObject("Scripting.FileSystemObject")
call fso.CopyFile("C: est.txt", "D: est111.txt") '两个参数的文件名部分可以不同
set fso = nothing
```

**删除文件**
```
dim fso
set fso = server.CreateObject("Scripting.FileSystemObject")
fso.DeleteFile("C: est.txt")
set fso = nothing
```

**创建文件夹**
```
dim fso
set fso = server.CreateObject("Scripting.FileSystemObject")
fso.CreateFolder("C: est") '目标文件夹的父文件夹必须存在
set fso = nothing
```

**判断文件夹是否存在**
```
dim fso
set fso = server.CreateObject("Scripting.FileSystemObject")
if fso.FolderExists("C:Windows") then
    response.Write("目标文件夹存在")
else
    response.Write("目标文件夹不存在")
end if
set fso = nothing
```

**删除文件夹**
```
dim fso
set fso = server.CreateObject("Scripting.FileSystemObject")
fso.DeleteFolder("C: est") '文件夹不必为空
set fso = nothing
```

