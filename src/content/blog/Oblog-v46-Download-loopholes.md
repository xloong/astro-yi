---
title: Oblog文件下载漏洞 愚人节的礼物
description: 今天是愚人节嘛，大家不是愚人，不用我做解释。一眼就可以看出来。漏洞存在版本4.6sql+access，一路跟踪下去吧漏洞文件：attachment.asp<!--#includefile="inc/inc_syssite.asp"--><%DimPath,rs,FileID,ShowDownErr,uid,file_ext
date: 2008-04-02 09:21:57
category: 漏洞信息
tags: ['0day', '漏洞信息', '愚人节', '下载Download']
post_id: 434
alias: Oblog-v4.6-Download-loopholes
ViewNums: 4616
---

今天是[愚人节](/tags/%E6%84%9A%E4%BA%BA%E8%8A%82)嘛，大家不是愚人，不用我做解释。一眼就可以看出来。[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)存在版本4.6sql+access，一路跟踪下去吧

漏洞文件：attachment.asp
<!-- #include file="inc/inc_syssite.asp" -->
<%
Dim Path,rs,FileID,ShowDownErr,uid,file_ext
Dim SQL
Path = Trim(Request("path"))
FileID = Trim(Request("FileID"))
If FileID ="" And Path = "" Then
    Response.Write "参数不足"
    Response.End
End If
If CheckDownLoad Then
    If Path = "" Then
        set rs = Server.CreateObject("ADODB.RecordSet")
        link_database
        SQL = ("select file_path,userid,file_ext,ViewNum FROM oblog_upfile Where FileID = "&CLng(FileID))
        rs.open sql,conn,1,3
        If Not rs.Eof Then
            uid = rs(1)
            file_ext = rs(2)
            rs("ViewNum") = rs("ViewNum") + 1
            rs.Update
            downloadFile Server.MapPath(rs(0)),0
        Else
            Response.Status=404
            Response.Write "该附件不存在!"
        End If
        rs.Close
        Set rs = Nothing
    Else
        If true_domain    =    1 Then
        downloadFile Server.MapPath(Replace(Path,blogurl,"")),1
        else
        downloadFile Server.MapPath(Path),1
        End If
    End If
Else
    '如果附件为图片的话，当权限检验无法通过则调用一默认图片，防止<img>标记无法调用，影响显示效果
    If Path = "" Then
        Response.Status=403
        Response.Write ShowDownErr
        Response.End
    Else
        downloadFile Server.MapPath(blogdir&"images/oblog_powered.gif"),1
    End if
End if

Set oblog = Nothing

Sub downloadFile(strFile,stype)
    On Error Resume Next
    Server.ScriptTimeOut=9999999
    Dim S,fso,f,intFilelength,strFilename
    strFilename = strFile
    Response.Clear
    Set s = Server.CreateObject(oblog.CacheCompont(2))
    s.Open
    s.Type = 1
    Set fso = Server.CreateObject(oblog.CacheCompont(1))
    If Not fso.FileExists(strFilename) Then
        If stype = 0 Then
            Response.Status=404
            Response.Write "该附件已经被删除!"
            Exit Sub
        Else
            strFilename = Server.MapPath(blogdir&"images/nopic.gif")
        End if
    End If
    Set f = fso.GetFile(strFilename)
    intFilelength = f.size
    s.LoadFromFile(strFilename)
    If Err Then
         Response.Write("<h1>错误: </h1>" & Err.Description & "<p>")
        Response.End
    End If
    Set fso=Nothing
    Dim Data
    Data=s.Read
    s.Close
    Set s=Nothing
    Dim ContentType
    select Case LCase(Right(strFile, 4))
    Case ".asf"
        ContentType = "video/x-ms-asf"
    Case ".avi"
        ContentType = "video/avi"
    Case ".doc"
        ContentType = "application/msword"
    Case ".zip"
        ContentType = "application/zip"
    Case ".xls"
        ContentType = "application/vnd.ms-excel"
    Case ".gif"
        ContentType = "image/gif"
    Case ".jpg", "jpeg"
        ContentType = "image/jpeg"
    Case ".wav"
        ContentType = "audio/wav"
    Case ".mp3"
        ContentType = "audio/mpeg3"
    Case ".mpg", "mpeg"
        ContentType = "video/mpeg"
    Case ".rtf"
        ContentType = "application/rtf"
    Case ".htm", "html"
        ContentType = "text/html"
    Case ".txt"
        ContentType = "text/plain"
    Case Else
        ContentType = "application/octet-stream"
    End select
    If Response.IsClientConnected Then
        If Not (InStr(LCase(f.name),".gif")>0 or InStr(LCase(f.name),".jpg")>0 or InStr(LCase(f.name),".jpeg")>0 or InStr(LCase(f.name),".bmp")>0 or InStr(LCase(f.name),".png")>0 )Then
            Response.AddHeader "Content-Disposition", "attachment; filename=" & f.name
        End If
        Response.AddHeader "Content-Length", intFilelength
        Response.CharSet = "UTF-8"
        Response.ContentType = ContentType
        Response.BinaryWrite Data
        Response.Flush
        Response.Clear()
    End If
End Sub
'验证下载权限
Function CheckDownLoad()
    On Error Resume Next
    CheckDownLoad = False
    '如果不允许游客下载附件
    If oblog.CacheConfig(67) = "1" Then
        If oblog.ChkPost = False Then
            ShowDownErr = "无浏览附件权限"
            Exit Function
        End If
    Else
        If oblog.CheckUserLogined = False Then
            If oblog.CacheConfig(82) = "0" Then
                ShowDownErr = "游客无浏览附件权限"
                Exit Function
            End if
        Else
            '如果此浏览者为上传者则返回True
            If uid = oblog.l_uid Then
                CheckDownLoad = True
                Exit Function
            End if
            '如果当前用户组不允许下载附件
            If oblog.l_Group(35,0) = "0" Then
                ShowDownErr = "当前用户组无浏览附件权限"
                Exit Function
            Else
                '如果下载附件需扣除积分
                If oblog.CacheScores(21) >"0" Then
                    '如果当前积分小于下载附件需扣除的积分
                    If oblog.l_uScores < Int(oblog.CacheScores(21)) Then
                        ShowDownErr = "积分不足，无浏览附件权限"
                        Exit Function
                    Else
                        '执行扣分操作
                        oblog.GiveScore "",-1*Abs(oblog.CacheScores(21)),""
                        Session ("CheckUserLogined_"&oblog.l_uName) = ""
                        Oblog.CheckUserLogined()
                        ShowDownErr = ""
                    End If
                End If
            End if
        End If
    End If
    If Err Then
        CheckDownLoad = False
        ShowDownErr = Err.Description
        Err.Clear
    End If
    CheckDownLoad = True
End Function
%>

From：<http://www.52cmd.cn>

