---
title: wordpress REST API 如何按post_type进行筛选过滤
uid: 202306131216
datetime: 2023-06-13 12:16
slug: wordpress-rest-api-post-type
aliases: []
tags: [wordpress]
source: 
link: 

description: wordpress REST API 如何按post_type进行筛选过滤
date: 2023-06-13 12:16:00
category: 笔记
---


最近有个需求，是将一个主题自带的侧栏插件，做成ajax加载，这样就需要API接口请求数据了。我知道wordpress有自带的REST API 可以调用，但是实际使用中，并不能实现我的需求，具体情况如下。

## 踩坑

侧栏的文章在数据库中的 post_type 为 custom ，通过wordpress自带的REST API请求数据

刚开始由于没开启伪静态，请求链接为 [http://www.xxx.com/?rest_route=/wp/v2/posts，我心想，直接在后面加参数](http://www.xxx.com/?rest_route=/wp/v2/posts%EF%BC%8C%E6%88%91%E5%BF%83%E6%83%B3%EF%BC%8C%E7%9B%B4%E6%8E%A5%E5%9C%A8%E5%90%8E%E9%9D%A2%E5%8A%A0%E5%8F%82%E6%95%B0) &post_type=custom 不就搞定了，然而实际并不行。

然后以为是没有开启伪静态的原因，后来试了下 [http://www.xxx.com/wp-json/wp/v2/posts?post_type=custom](http://www.xxx.com/wp-json/wp/v2/posts?post_type=custom) 也还是不行，始终只显示post_type 为 post 的普通文章。

[http://www.xxx.com/wp-json/wp/v2/custom](http://www.xxx.com/wp-json/wp/v2/custom) 这样访问也不行。

由于对wordpress的不熟悉，试了各种方式都不行，搞的火大，都想完全自己写了。

## 解决

后经多方查找，看到一篇文章：[https://www.mxp.tw/9292/，需要在定义](https://www.mxp.tw/9292/%EF%BC%8C%E9%9C%80%E8%A6%81%E5%9C%A8%E5%AE%9A%E4%B9%89) post_type 的地方进行修改。

于是找到主题中定义的地方 register_post_type() ，增加一个 **show_in_rest ⇒ true**， 就可以了。

根据我的使用需求，实测 rest_base 与 rest_controller_class 可以不用修改。

现在，[http://www.xxx.com/wp-json/wp/v2/custom](http://www.xxx.com/wp-json/wp/v2/custom) 与 [http://www.xxx.com/?rest_route=/wp/v2/custom](http://www.xxx.com/?rest_route=/wp/v2/custom) ，都可以获取对应post_type 为 custom 的文章了

参考:

[https://www.mxp.tw/9292/](https://www.mxp.tw/9292/)