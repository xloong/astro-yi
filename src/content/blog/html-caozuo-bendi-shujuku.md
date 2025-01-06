---
title: html操作本地数据库
description: 来源：vbs小铺用JavaScript写服务器端连接数据库的代码示例
date: 2008-02-29 09:36:12
category: 技术文章
tags: ['数据库', '脚本Script']
post_id: 386
alias: html-caozuo-bendi-shujuku
ViewNums: 5196
---

来源：vbs小铺
```html
<script language="javascript">
　 //用 JavaScript 写服务器端连接数据库的代码示例
　 var conn = new ActiveXObject("ADODB.Connection");
　 conn.Open("DBQ=c:\a.mdb;DRIVER={Microsoft Access Driver (*.mdb)};");
　 var rs = new ActiveXObject("ADODB.Recordset");
　 var sql="select * from friends_infor";
　 rs.open(sql, conn);
　shtml = "<table width='100%' border=1>";
　shtml +="<tr bgcolor='#f4f4f4'><td>au_id</td><td>au_lname</td><td>au_fname</td></tr>";
　 while(!rs.EOF)
　 {
　shtml += "<tr><td>" + rs("friend_id") + "</td><td>" + rs("friend_name") + "</td><td>" + rs("friend_nickname") + "</td></tr>";
　rs.moveNext;
　 }
　 shtml += "</table>";
　 document.write(shtml);
　 rs.close();
　 rs = null;
　 conn.close();
　 conn = null;
　</script>
```