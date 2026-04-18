---
title: CSS选取父元素的方法 父元素选择器has
uid: 202303142246
datetime: 2023-03-14 22:46
slug: css-parent-selector-has
aliases: []
tags: 
  - css
source: 
link: 

description: 父元素选择器has的使用
date: 2023-03-14 22:46:00
category: 笔记
---

做网页经常会碰到input radio checkbox之类，选中之后需要改变父元素样式的情况，多年以前，除了写js之外没有其他的好方式，于是做父元素样式一直的默认选择就是写js去动态的改变样式。

直到昨天，试着搜了一下有没有直接使用CSS的写法，没想到还真找到了

废话少说，直接上代码

```css
label:has(> input:checked){
    background-color: #009dd5;
    color:#fff;
}
```

这段代码，是定义label下的，input有被选中状态的父类label，即label自身的样式，只有input状态为选中，才影响label的样式，其他的没选中的label不改变

![Untitled](/img/CSS选取父元素的方法-父元素选择器has/Untitled.png)

试了一下效果，用起来非常丝滑，比之前写js判断来判断去简单多了。

单选radio，多选checkbox都可以

![Untitled](/img/CSS选取父元素的方法-父元素选择器has/Untitled%201.png)

只是目前浏览器兼容，还不是所有的都支持（完整及后续更新情况见此 [https://caniuse.com/css-has](https://caniuse.com/css-has)）

参考

[https://stackoverflow.com/questions/1014861/is-there-a-css-parent-selector](https://stackoverflow.com/questions/1014861/is-there-a-css-parent-selector)

[https://caniuse.com/css-has](https://caniuse.com/css-has)