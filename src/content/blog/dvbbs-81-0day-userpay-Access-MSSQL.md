---
title: Dvbbs8.1 0DAY（通杀access和mssql版本）
description: Author:Tr4c3[at]126[dot]CoMhttp://www.nspcn.org；http://www.tr4c3.com这几天真是无聊的很啊，晚上实在不知道要做什么了，就下了套dvbbs8.1，然后翻着玩，一不小心翻到了一个注入漏洞。看来上帝还是很可怜我的。废话不说了。看代码UserPay.asp行12-64
date: 2008-01-09 12:51:45
category: 漏洞信息
tags: ['0day', '漏洞信息', '注入']
post_id: 325
alias: dvbbs-8.1-0day-userpay-Access-MSSQL
ViewNums: 4114
---

Author:Tr4c3[at]126[dot]CoM
[http://www.nspcn.org](http://www.nspcn.org/ "http://www.nspcn.org")
[http://www.tr4c3.com](http://www.tr4c3.com/ "http://www.tr4c3.com")

这几天真是无聊的很啊，晚上实在不知道要做什么了，就下了套dvbbs 8.1，然后翻着玩，一不小心翻到了一个注
入漏洞。看来上帝还是很可怜我的。废话不说了。
看代码UserPay.asp行12-64

If Request("raction")="alipay_return" Then
AliPay_Return()
Dvbbs.Footer()
Response.End
ElseIf Request("action")="alipay_return" Then
AliPay_Return()
Dvbbs.Footer()
Response.End
'ElseIf Request("action")="Re_inmoney" Then
' Re_inmoney()
' Dvbbs.Footer()
' Response.End
End If
无论用户提交的raction为alipay_return还是action为alipay_return都调用了AliPay_Return()过程。AliPay_Return()的代码原型在行329-351，代码如下：

Sub AliPay_Return()
If Dvbbs.Forum_ChanSetting(5) <> "0" Then
AliPay_Return_Old()
Exit sub
Else
Dim Rs,Order_No,EnCodeStr,UserInMoney
Order_No=Request("out_trade_no")
Set Rs = Dvbbs.Execute("Select * From [Dv_ChanOrders] Where O_IsSuc=3 And O_PayCode='"&Order_No&"'")
If not(Rs.Eof And Rs.Bof) Then
AliPay_Return_Old()
Exit sub
End if
Response.Clear
Set Rs = Dvbbs.Execute("Select * From [Dv_ChanOrders] Where O_IsSuc=0 And O_PayCode='"&Order_No&"'")
If Rs.Eof And Rs.Bof Then
Response.Write "N"
Else
Response.Write "Y"
Dvbbs.Execute("Update Dv_ChanOrders Set O_IsSuc=3 Where O_ID = " & Rs("O_ID"))
End If
Response.End
End If
End Sub

如果Dvbbs.Forum_ChanSetting(5) <> "0" 就执行下面的sql语句，我们来看看数据库里默认的Forum_ChanSetting吧。

1,1,0,0,pay@aspsky.net,0,b63uvb8nsvsmbsaxszgvdr6svyus0l4t,1,1,1,1,1,1,1,100,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
Forum_ChanSetting(5)缺省为0，好了你接着看就会笑了

Order_No=Request("out_trade_no")
Set Rs = Dvbbs.Execute("Select * From [Dv_ChanOrders] Where O_IsSuc=3 And O_PayCode='"&Order_No&"'")
直接把获取的Order_No放到sql里面去了。
回顾一下DVbbs8.0的Userpay.asp同样一个函数看代码

Sub AliPay_Return()
If Dvbbs.Forum_ChanSetting(5) <> "0" Then
AliPay_Return_Old()
Else
Response.Clear
Dim Rs,Order_No,EnCodeStr,UserInMoney
Order_No = Dvbbs.CheckStr(Request("order_no"))
Set Rs = Dvbbs.Execute("Select * From Dv_ChanOrders Where O_IsSuc=0 And O_PayCode = '"&Order_No&"'")
If Rs.Eof And Rs.Bof Then
Response.Write "N"
可以看出Order_No用CheckStr处理了，不存在sql注入漏洞，为什么到了新版本反而就直接放行了呢？莫非是笔误？
如果你和我一样懒，并不想精心构造语句去搞破坏，只是试图去说明这个地方不安全，用下面的链接验证下看看
吧(需要登录)

[http://www.tr4c3.com/UserPay.asp?raction=alipay_return&out_trade_no=1&#39;](http://www.tr4c3.com/UserPay.asp?raction=alipay_return&out_trade_no=1&#39; "http://www.tr4c3.com/UserPay.asp?raction=alipay_return&out_trade_no=1&#39;")

本地测试返回图示（**[夜火](/blog/)**PS：因为截图都太大了，做了点处理，点击图片打开新页面，再点击图片查看完整原图）
[![](http://www.shareapic.net/preview2/005466519.jpg)](http://www.shareapic.net/content.php?id=5466519&owner=xloong)
[![](http://www.shareapic.net/preview2/005466523.jpg)](http://www.shareapic.net/content.php?id=5466523&owner=xloong)
如果想再深入点，看看动画吧，懒得打字了。:-)
由于本人没下载到dvbb8.1的sql版本，也懒得去网上找，所以无法判断其版本也存在该漏洞，有条件的朋友看看反馈
下。
动画下载:

[http://www.tr4c3.com/upload/200801080917104654.rar](http://www.tr4c3.com/upload/200801080917104654.rar "http://www.tr4c3.com/upload/200801080917104654.rar")

经过群里的淫棍樱木花盗测试官方确认mssql版本也受此漏洞影响
[![](http://www.shareapic.net/preview2/005466526.jpg)](http://www.shareapic.net/content.php?id=5466526&owner=xloong)
[![](http://www.shareapic.net/preview2/005466528.jpg)](http://www.shareapic.net/content.php?id=5466528&owner=xloong)

