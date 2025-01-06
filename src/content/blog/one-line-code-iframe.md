---
title: 一行代码解决iframe挂马（服务器端注入、客户端ARP注入等）
description: 一行代码解决iframe挂马（包含服务器端注入、客户端ARP注入等）本文原创：linr@cncert.net请转载时保留版权信息相信大多数朋友都是iframe木马的受害者，有朋友的网站被注入了N回iframe，心情可想而知。而且现在ARP攻击，注入iframe也是轻而易举的事，仅局域网里都时刻面临威胁，哎，什么世道。灵儿曾经在经典论坛上发过贴子：《一行代码解决网站防挂IFRAME木马方案》http://bbs.blueidea.com/thread-2785512-1-1.html，有不少朋友都联系了灵儿，有的表示感谢，不过更多的是疑问了，今天把原理细细地讲一下吧：
date: 2007-12-22 12:29:37
category: 技术文章
tags: ['技术类', '安全', '木马']
post_id: 301
alias: one-line-code-iframe
ViewNums: 8760
---

一行代码解决**iframe**挂马（包含服务器端注入、客户端**ARP**注入等）
本文原创：linr@cncert.net 请转载时保留版权信息

相信大多数朋友都是iframe木马的受害者，有朋友的网站被注入了N回iframe，心情可想而知。而且现在ARP攻击，注入iframe也是轻而易举的事，仅局域网里都时刻面临威胁，哎，什么世道。

灵儿曾经在经典论坛上发过贴子：《一行代码解决网站防挂IFRAME木马方案》[http://bbs.blueidea.com/thread-2785512-1-1.html](http://bbs.blueidea.com/thread-2785512-1-1.html "http://bbs.blueidea.com/thread-2785512-1-1.html") ，有不少朋友都联系了灵儿，有的表示感谢，不过更多的是疑问了，今天把原理细细地讲一下吧：

IE Only——一般只有IE害怕iframe这样的挂马,所以灵儿就拿IE开刀。

在阅读本文之前，我们先了解一下expression；

IE5及其以后版本支持在CSS中使用expression，用来把CSS属性和JavaScript脚本关联起来，这里的CSS属性可以是元素固有的属性，也可以是自定义属性。就是说CSS属性后面可以是一段JavaScript表达式，CSS属性的值等于Javascript表达式执行的结果。在表达式中可以直接引用元素自身的属性和方法，也可以使用其他浏览器对象。这个表达式就好像是在这个元素的一个成员函数中一样。

很多朋友都知道CSS可以直接描述一个可视标记的外观。例如：
```css
p{color:red}
```
则网页里所有p标记里的文字颜色都会变成红色;iframe不也是一个标记吗？开始跟灵儿写代码吧，呵呵：
```html
iframe{...这里写描述外观的CSS代码;};
```

仔细想想要防止iframe里的东东被下载的最好办法是什么？核心来了，那就是切断iframe里的请求，切断请求就是要迅速销毁iframe对象。如何实现呢，上面不是介绍了expression吗？expression是可以执行JS脚本的哈。语法格式如下二种：

标记固有的CSS属性名:expression(JS表达式);
或 自定义属性名:expression(JS表达式);

在这里我们选择第二种，代码应该大致是这样
```css
iframe{v:expression(JS表达式);}
```

接下来的问题是如何销毁网页里所有的iframe对象；使用JS实现的原理是这样的:使iframe里的请求地址变成空白页(about:blank)，再将iframe对象从DOM（文档对象模型）中移除就可以切断所有iframe里的请求了。移除DOM节点的方法比较多，我这里就用 outerHTML这个属性吧。CSS代码如下：
```css
iframe{v:expression(this.src='about:blank',this.outerHTML='');}
```

说明：前面的v字是灵儿自己定义的一个CSS属性，这里的this代表所有将要描述外观的iframe对象，中间的逗号代表二句代码一起执行，没有执行优先顺序，这可是强有力的保证噢。about:blank代表空白页，大家都知道的。outerHTML属性是DOM对象包含自身的HTML代码，而 innerHTML则是DOM对象（不含本身）里面所包含的HTML代码。

爽快，代码写好了，就让我信来测试一下有没有效果。

首先，新建一个网页，插入以上的CSS代码(或在您现有的CSS代码里加入上面那句)：

```html
<style type="text/css">
iframe{v:expression(this.src='about:blank',this.outerHTML='');}
</style>
```

然后在这个页面插入几个IFRAME代码，假设它们是被挂的木马网页。代码如下：

```html
<iframe src="[http://www.baidu.com](http://www.baidu.com/ "http://www.baidu.com")"></iframe>　百度
<iframe src="[http://www.126.com/](http://www.126.com/ "http://www.126.com/")"></iframe>　126邮箱
<iframe src="[http://www.163.com](http://www.163.com/ "http://www.163.com")"></iframe>　网易
```

保存为noiframe.htm，打开浏览器测试一下（本地测试需要启用顶部禁用的脚本的提示条哦）。我这里使用抓包工具来测试，不过也没有必要使用抓包工具，一个最简单有效的方法是打开IE的缓存文件夹，先清空它，再刷新这个页面，看看缓存文件夹里有没有这三个网站里的文件。如果没有，说明没有任何请求结果被返回——测试结果是令人满意的，我的脸上有些微笑 ^^*，这时同事递给我一块饼，蛮好吃的。

提示：Windows XP SP2的缓存文件夹位置　C:Documents and SettingsAdministratorLocal SettingsTemporary Internet Files

细心的朋友发现问题来了，如果我自己的网页里要使用iframe这个东东怎么办？

答：如果要使自己的iframe显示在网页里，而别人挂的IFRAME马都不起作用，在CSS里加一个

```css
#f126{v:expression() !important}
```

对应的IFRAME代码为：
```html
<iframe id="f126" name="f126" src="[http://www.126.com/](http://www.126.com/ "http://www.126.com/")"></iframe>
```
就OK了。

提示：IE7中优先执行标注有“!important”描述的样式，IE6不认识!important，采用就近原则，所以IE6的这个代码放在CSS的最后就可以了。

这里的f126，有很多朋友有疑问，他们问我为什么取"f126"，我这样回答——这个f126是随意取的，只要下面的iframe里的ID属性和CSS里的一致就行了。同事又要递一块饼我吃，我说饱了哈..嘻嘻..

当然挂马者可以构造这样的代码
```html
<iframe style="v:expression() !important" src="URL"></iframe>
```
使我的防御方式失效，不过它得特意去看我的CSS代码里iframe里的前缀v,如果我的v是变化的呢，哈哈，是不是也不管用呢！

小结：以上的方法只是停止了iframe的请求并销毁了它本身，但以后的挂马方式改变了，例如改成
```html
<script></script>
```
方式挂，就不能用这种方法来解决了；此这个方法不是最终的解决案，最终的解决方案是找出真正被挂IFRAME的原因，堵住源头。这可不是我的事哈，呵～

应用实例:[http://www.cncert.net](http://www.cncert.net/ "http://www.cncert.net") 以此代码配合MD5(hash)校验，非常完美的防挂马解决方案；

更多问题请联系Linr灵儿：QQ/MSN/E-mail：www@xiaogezi.cn

