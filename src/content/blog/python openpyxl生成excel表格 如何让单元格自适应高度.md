---
title: python生成excel表格 如何让单元格自适应高度
uid: 202312102222
datetime: 2023-12-10 22:22
slug: python-openpyxl-excel-auto-height
aliases: 
tags: 
  - python
source: 
link:

description: python生成excel表格 如何让单元格自适应高度
date: 2023-12-10 22:22:00
category: 笔记
---
上个月写了不少使用python生成word和excel的工具，其中，比较糟心的是使用openpyxl的时候，不知道让生成出很多内容的单元格，如何让他自适应高度。

试了很多方式，都不行，文档也翻遍了，包括写代码计算高度（写到一半，感觉太傻，就换了其他方式尝试）最终还是翻到了 [stackoverflow](https://stackoverflow.com/questions/37891149/openpyxl-auto-height-row)上，才找到正确方法。

```python
sheet.row_dimensions[1].height = None
```

只需要将对应单元格的高度设置为None就可以了。在此之前，设置为auto Ture 什么乱七八糟的全试过了，就是没想到None，也是菜的可以。

记录一下，以备后查。

https://stackoverflow.com/questions/37891149/openpyxl-auto-height-row