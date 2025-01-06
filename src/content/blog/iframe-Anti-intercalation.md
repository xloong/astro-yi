---
title: iframe的防插与强插
description: iframe的防插与强插，网上通用的防插那版是（子）：if(top.location!=self.location){top.location=self.location;}强插方案为（父）： varlocation="";其中这个location是对被赋值的top.location方法的覆盖，导致方法失效。......
date: 2009-03-04 11:14:46
category: 技术文章
tags: ['iframe', '技术类']
post_id: 803
alias: iframe-Anti-intercalation
ViewNums: 2499
---

[iframe的防插与强插](/blog/iframe-anti-intercalation)，网上通用的防插那版是（子）：
```js
if(top.location != self.location){
top.location = self.location;
}
```
强插方案为（父）：
```js
var location="";
```
其中这个location是对被赋值的top.location方法的覆盖，导致方法失效。

昨天又遇到另外一个版本（子）：
```js
if(window!=parent){
parent.navigate(location);
}
```
强插方案为（父）：
```js
var navigate="";
```
即是对parent.navigate方法的覆盖，导致再次引用失效。

那么两个和在一起的强插方案是，在iframe之前加入：
```html
<script>var location="";var navigate="";</script>
```
介绍了“市面上”能见到的两种防御被iframe的方法，以及相应的变态突破方法。

貌似把“受害人”逼上绝路了，我们再来看看这两个方法：

它们都能够判断出自己已经被XX了，可是它们是怎么做的呢？

方法一说：先生，请您出去。

方法二说：同志，请您出去！

然而这先生也说了句：“我就不出去！”

因为“受害人”和这位先生又不是一家子，似乎通过命令对方还无可奈何 —— 同源策略！

但事实上，“请您出去”这种方式显然是针对君子不对小人的，所以Monyer教你一种好方法——“乱棍打出去！”
```html
<script>
window.onload = function(){
if(top!=self){
var f = document.createElement("form");
f.action=location;
f.target="_parent";
document.body.appendChild(f);
f.submit();
}
};
</script>
```
目前我个人还没有找到突破的方法，所以至少比以上两种方法更暴力一些！

作者：[Monyer](http://hi.baidu.com/monyer/blog/item/1551b68f453f78e9f11f3667.html)

