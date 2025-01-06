---
title: 一句话完成SQL多条件数据库查询
description: 例如有这么一张表：有时我们需要根据名字进行查询；有时我们需要根据年龄进行查询；有时又需要根据名字和年龄进行查询；
date: 2009-09-14 10:58:59
category: 技术文章
tags: ['数据库', 'SQL', '技术类']
post_id: 973
alias: yijuhua-wancheng-SQL-duotiaojian-shujuku-chaxun
ViewNums: 4357
---

例如有这么一张表：

[![一句话完成SQL多条件数据库查询](http://www.mzwu.com/pic/200908/020.gif)](/blog/yijuhua-wancheng-sql-duotiaojian-shujuku-chaxun)

有时我们需要根据名字进行查询；
有时我们需要根据年龄进行查询；
有时又需要根据名字和年龄进行查询；

以前都是通过拼接sql语句完成：

declare @sql nvarchar(500)

set @sql = 'select * from table1 where 1=1'

if(not @name is null)
    set @sql = @sql + ' and name=''' + @name + ''''
if(not @age is null)
    set @sql = @sql + ' and age>' + convert(varchar,@age)

今天发现不用拼接sql语句，[一句话就能完成sql多条件查询](/blog/yijuhua-wancheng-sql-duotiaojian-shujuku-chaxun)：

MSSQL版：

select * from table1 where ([name]=@name or @name is null) and ([age]>@age or @age is null)

ACCESS版：

select * from table1 where (name=[@name] or isnull([@name])) and (age>[@age] or isnull([@age]))

via [木子屋](http://www.mzwu.com/)

