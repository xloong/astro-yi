---
title: ASP ADODB.Recordset 错误 '800a0bb9' 参数类型不正确，或不在可以接受的范围之内，或与其他参数冲突。的解决方法
description: post/ASP-ADODB.Recordset-800a0bb9.html">ADODB.Recordset错误'800a0bb9'参数类型不正确，或不在可以接受的范围之内，或与其他参数冲突。分析、解决:……
date: 2010-05-14 10:18:35
category: 技术文章
tags: ['ASP', '技术类', '技巧']
post_id: 1139
alias: ASP-ADODB.Recordset-800a0bb9
ViewNums: 12630
---

错误提示信息:

错误类型：
[ADODB.Recordset (0x800A0BB9)](/blog/asp-adodbrecordset-800a0bb9)
[参数类型不正确，或不在可以接受的范围之内，或与其他参数冲突。](/blog/asp-adodbrecordset-800a0bb9)

或

[ADODB.Recordset 错误 '800a0bb9'](/blog/asp-adodbrecordset-800a0bb9)

参数类型不正确，或不在可以接受的范围之内，或与其他参数冲突。

分析、解决:
是游标类型不支持分页。
使用rs.open sql,conn,3,3

游标说明：
RS.OPEN SQL,CONN,A,B
参数A为设定游标的类型，其取值为：
0 仅向前游标，只能向前浏览记录，不支持分页、Recordset、BookMark
1 键集游标，其他用户对记录说做的修改将反映到记录集中，但其他用户增加或删除记录不会反映到记录集中。支持分页、Recordset、BookMark
2 动态游标功能最强，但耗资源也最多。用户对记录说做的修改，增加或删除记录都将反映到记录集中。支持全功能浏览。
3 静态游标，只是数据的一个快照，用户对记录说做的修改，增加或删除记录都不会反映到记录集中。支持向前或向后移动

参数B为记录集的锁定类型，其取值为：
1 锁定类型，默认的，只读，不能作任何修改
2 当编辑时立即锁定记录，最安全的方式
3 只有在调用Update方法时才锁定记录集，而在此前的其他操作仍可对当前记录进行更改、插入和删除等
4 当编辑时记录不会被锁定，而更改、插入和删除是在批处理方式下完成的

打开数据记录集方法其实不止一种，但是我们用的最多的就是
rs.open sql,1,1的方法，可是后面的数字参数很多人不解其意，下面我们来介绍一下。
其实open方法后面有多个参数
CursorType LockType CommandType
比如 rs.open sql,1,1
也可以写成
```
rs.cursorType = 1
rs.LockType = 1
rs.open sql
```
其中CursorType代表从一个表或者一个SQL查询结果返回的记录。
这个参数有四个值分别是：
adOpenForwardOnly 表示只允许在记录集内的记录间往前移动。这个是缺省值。
adOpenKeyset 反映由其它用户所做的对记录的改变或者删除动作，但并不反映由其它用户做作的添加新记录的动作。
adOpenDynamic 反映由其它用户所做的对记录的改变或者删除动作，包括添加的新记录
adOpenStatic 不反映其它用户对记录所做的修改，添加，删除动作。
这四个值VBSCRIPT预定义位
```
adOpenForwardOnly = 0
adOpenKeyset = 1
adOpenDynamic = 2
adOpenStatic = 3
```
lockType 表示当打开记录集时，数据提供者用于锁定数据库的类型：
adLockReadOnly 数据不能改变，这是缺省值！
adLockPessimistic 数据提供者在开始编辑数据的时候锁定记录
adLockOptimistic 仅当调用update方法时，数据提供者锁定记录
adLockBatchOptimistic 用于批处理修改
他们的常量值定义分别是：
```
adLockReadOnly = 1
adLockPessimistic = 2
adLockOptimistic = 3
adLockBatchOptimistic = 4
```
PS：夜火最近在狂赶毕业设计，文章只能间歇性发一下，希望答辩之前能把毕业设计和毕业论文都赶出来吧~

