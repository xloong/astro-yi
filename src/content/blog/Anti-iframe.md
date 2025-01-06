---
title: 如何杜绝iframe挂马
description: 来源:Secker'sBLog因为FF(Firefox)不怕IFRAME，于是就拿IE开刀，不知道比尔有没有奖发。我只写了一句代码，就搞定了，哈，痛快。就是IEonly（特有的）的CSS中的属性e-xpression，插进去试试，果然那些IFRAME不起作用了。代码如下：.............................
date: 2007-11-27 08:28:52
category: 技术文章
tags: ['安全', '技术类']
post_id: 267
alias: Anti-iframe
ViewNums: 3906
---
来源:Secker's BLog

因为FF(Firefox)不怕IFRAME，于是就拿IE开刀，不知道比尔有没有奖发。我只写了一句代码，就搞定了，哈，痛快。就是IE only（特有的）的CSS中的属性e­xpression，插进去试试，果然那些IFRAME不起作用了。

代码如下：
```html
<style type="text/css" media="all" id="[http://safe3.cn](http://safe3.cn/ "http://safe3.cn")">
/*<![CDATA[*/
iframe{
v:e­xpression(this.src='about:blank',this.outerHTML='');/*使用IE Only 的样式会除所有　IFRAME　*/
}
#f126{v:e­xpression() !important} //如果要使自己的IFRAME可以执行，在自己的IFRAME里加上ID="f126"；
/*]]>*/
</style>
```
分析：
前缀:```e­xpression(表达式);```

　　这个前缀是可以随意更换的，我上面取名为"v"，例如我可以换成：```abc123:e­xpression(this.src='about: blank',this.outerHTML='');``` 挂木马的家伙得先看你的CSS里这个前缀,然后挂马的时候写成这样
```html
<iframe style="abc123:e­xpression() !important" src="URL"></iframe>
```
那个前缀一定要是和你的网站一样的(abc123)，才能挂到马，哈哈哈！如果把前缀做成动态的，就非常OK了，看你怎么挂！

优点：

可以解决一些站长的烦恼，无须去理会人家插了多少IFRAME木马，那些IFRAME都不起作用；

保护了访客的安全，这些IFRAME不执行，不下载，就不会破坏到访问的电脑；

代码简单，仅一句CSS样式，不管你是ASP,ASP.NET,JSP,PHP还是RUBY，都通用；

缺点：

只适合防御目前的挂IFRAME方案；

使得人家挂马的方式要改变了，挂马者可以构造这样的代码
```html
<iframe style="v:e­xpression() !important" src="URL"></iframe>
```
使我的防御方式失效，不过挂马都一定得看我的CSS里e­xpression前面的这个"v" 字母，我可以换成任意的如：xgz:e­xpression(...)，哈哈哈，他也拿我没办法，再如，如果我这个前缀是变化的，是不是也行吖 *_*

不能防御其他标记的马，如
```html
<script>、<applet>、<object>
```
等。
到那时候再来找我吧，呵呵～ 网页里插入的IFRAME还是存在，只是不起作用了；

再加固防线，加入以下JS代码——其实这个代码可以完全不用：
```html
<script type="text/javascript" language="javascript">
//<![CDATA[
function killfrm()
{
var xgzfrm=document.getElementsByTagName("iframe");
for(var i=0;i<xgzfrm.length;i++)//循环检查所有IFRAME标记，把所有IFRAME的URL都改为空白页，然后删除IFRMAE标记；
{
xgzfrm[i].src='about:blank';
xgzfrm[i].outerHTML='';
}
}
window.onload=killfrm;//一边加载页面，一边执行这个JS方法；
//]]>
</script>
```
另外转一种解决方案——这种方案不知道管不管用,没试过,方法如下：

在网页最后加入
```html
<xmp>
```
,再用css控制它的显示方式，如：
```css
xmp {
width:1px;
overflow:hidden;
text-overflow:clip;
white-space: nowrap;
clear: none;
float: none;
line-height: 0px;
display: inline;
}
```
这样的方式
