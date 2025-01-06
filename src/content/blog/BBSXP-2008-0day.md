---
title: BBSXP2008存在后台注射漏洞
description: 漏洞预警中心小组应急事件响应公告测试系统：BBSXP2008ACCESS版本目前为最新版安全综述：BBSXP为一款简单的ASP+SQL与ACCESS开发的多风格论坛目前最新版本为BBSXP2008漏洞描述：Manage.asp文件的ThreadID没有经过任何过滤便放入SQL语句中执行导致注射漏洞发生
date: 2008-02-19 10:03:34
category: 漏洞信息
tags: ['0day', '漏洞信息', '注入']
post_id: 374
alias: BBSXP-2008-0day
ViewNums: 4497
---

By:Neeao[B.C.T]

[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)预警中心小组应急事件响应公告

测试系统：
BBSXP2008 ACCESS版本 目前为最新版

[安全](/tags/%E5%AE%89%E5%85%A8)综述：
BBSXP为一款简单的ASP+SQL与ACCESS开发的多风格论坛 目前最新版本为BBSXP2008
漏洞描述：
Manage.asp文件的ThreadID没有经过任何过滤便放入SQL语句中执行 导致[注射](/tags/%E6%B3%A8%E5%85%A5)漏洞发生

漏洞代码:
<%
if CookieUserName=empty then error("您还未<a href=""javascript:BBSXP_Modal.Open('Login.asp',380,170);"">登录</a>论坛")

if Request_Method <> "POST" then error("<li>提交方式错误！</li><li>您本次使用的是"& Request_Method&"提交方式！</li>")

ForumID=RequestInt("ForumID")
ThreadID=Request("ThreadID") // 这里不知道程序员是不是晚上床上劳累过度
If IsNumeric(ThreadID) then
ThreadID=int(ThreadID) //这里虽然进行数字型判断 但是我们有办法直接跳出这里 继续执行下面的SQL语句
ForumID=Execute("Select ForumID From ["&TablePrefix&"Threads] where ThreadID="&ThreadID&"")(0)
End If
if BestRole<>1 then
Moderated=Execute("Select Moderated From ["&TablePrefix&"Forums] where ForumID="&ForumID&" ")(0)
%><!-- #include file="Utility/ForumPermissions.asp" --><%
end if
if BestRole=1 and ForumID<1 then
ForumIDSql=""
else
ForumIDSql=" and ForumID="&ForumID&""
end if
select case Request("menu")
case "Top"
if BestRole = 1 then
for each ho in Request("ThreadID")
ho=int(ho)
Execute("update ["&TablePrefix&"Threads] Set ThreadTop=2,StickyDate=DateAdd("&SqlChar&"yyyy"&SqlChar&", 3, "&SqlNowString&") where ThreadID="&ho&ForumIDSql&"")
next
succtitle="批量公告主题，主题ID："&Request("ThreadID")&""
else
error("您的权限不够")
end if
case "UnTop"
if BestRole = 1 then
for each ho in Request("ThreadID")
ho=int(ho)
Execute("update ["&TablePrefix&"Threads] Set ThreadTop=0,StickyDate="&SqlNowString&" where ThreadID="&ho&ForumIDSql&"")
next
succtitle="批量取消公告，主题ID："&Request("ThreadID")&""
else
error("您的权限不够")
end if
....这里省略部分代码
next
UpdateThreadStatic(ThreadID)
succtitle="批量删除帖子，帖子ID："&Request.Form("PostID")&""

case "UnDelPost"
for each ho in Request.Form("PostID")
ho=int(ho)
Rs.open "select * from ["&TablePrefix&"Posts] where ThreadID="&ThreadID&" and PostID="&ho&"",Conn,1,3
if not Rs.eof then
Rs("Visible")=1
Rs.update
if Rs("ParentID")=0 then Execute("update ["&TablePrefix&"Threads] Set Visible=1 where ThreadID="&Rs("ThreadID")&"")
end if
Rs.close
next
UpdateThreadStatic(ThreadID)
succtitle="批量还原帖子，帖子ID："&Request.Form("PostID")&""

'''''''''''''''''''''''''''''''''''帖子管理 End''''''''''''''''''''''''''''''''''
end select
if succtitle="" then error("无效指令")

Log(""&succtitle&"")
Message="<li>"&succtitle&"</li>"
succeed Message,""
%>

第231行到第235行代码如下
Rs.open "select * from ["&TablePrefix&"Posts] where ThreadID="&ThreadID&" and PostID="&ho&"",Conn,1,3
if not Rs.eof then
Rs("Visible")=2
Rs.update
if Rs("ParentID")=0 then Execute("update ["&TablePrefix&"Threads] Set Visible=2 where ThreadID="&Rs("ThreadID")&"")

可以看到ThreadID，没有经过任何过滤变放入查询 导致漏洞发生

测试方法：
可以看到文件头限制了只能进行post提交方式，所以直接在IE进行测试是不允许的。使用WS抓包用NC提交就可以了。

