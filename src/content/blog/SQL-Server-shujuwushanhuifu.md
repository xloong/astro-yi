---
title: SQL Server数据库误删恢复方法
description: SQLServer数据误删时，若数据库做过完整备份且恢复模式为完整，恢复非常简单，只需做一次事务日志备份，再还原到误删前时间点即可
date: 2013-07-02 09:48:28
category: 技术文章
tags: ['SQL']
post_id: 1477
alias: SQL-Server-shujuwushanhuifu
ViewNums: 3166
---

[SQL Server数据误删](/blog/sql-server-shujuwushanhuifu)时，若数据库做过完整备份且恢复模式为完整，恢复非常简单，只需做一次事务日志备份，再还原到误删前时间点即可：

--backup database test to disk=N'd:ackup est.bak'
backup log test to disk=N'd:ackup est.trn' with norecovery
restore database test from disk=N'd:ackup est.bak' with norecovery,replace
restore log test from disk=N'd:ackup est.trn' with stopat=N'2013-06-20 21:41:00',recovery

以上代码在SQL Server2000/2008测试通过，再强调一次，误删可以[数据库回复](/blog/sql-server-shujuwushanhuifu)的条件是数据库做过完整备份且恢复模式为完整。

常见问题

问：为什么在SQL Server2008执行backup log后数据库显示为正在还原且无法使用？
答：这是由于使用norecovery参数的缘故，待执行restore log(带recovery参数)后即可恢复正常，也可以单独执行下边语句让[数据库恢复](/blog/sql-server-shujuwushanhuifu)正常：

restore database test with recovery