---
title: py爬虫 selenium chromedriver 一直报platform_sensor_reader_win.cc(242)] NOT IMPLEMENTED的问题解决
description: 写python爬虫的过程中，碰到一个一直报platform_sensor_reader_win.cc(242)]NOTIMPLEMENTED的问题，虽然程序可以执行，但是一直报，不方便调试等。命令行报错如下：>main.py
date: 2018-10-22 13:00:54
category: 技术文章
tags: ['python', '爬虫', '技术类', 'selenium']
post_id: 1564
alias: py_selenium_platform_sensor_reader_win_cc_242_not_implemented
ViewNums: 28311
---

写python爬虫的过程中，碰到一个 一直报platform_sensor_reader_win.cc(242)] NOT IMPLEMENTED的问题，虽然程序可以执行，但是一直报，不方便调试等。

命令行报错如下：

>main.py
```shell
[7980:11616:1022/130004.047:ERROR:gpu_process_transport_factory.cc(1007)] Lost UI shared context.

DevTools listening on ws://127.0.0.1:51683/devtools/browser/6d787d0a-3df9-4b45-8068-997e535709a4

[1022/130006.109:ERROR:adm_helpers.cc(73)] Failed to query stereo recording.

[7980:10096:1022/130006.554:ERROR:platform_sensor_reader_win.cc(242)] NOT IMPLEMENTED

[7980:8444:1022/130006.661:ERROR:platform_sensor_reader_win.cc(242)] NOT IMPLEMENTED

[7980:11312:1022/130007.228:ERROR:platform_sensor_reader_win.cc(242)] NOT IMPLEMENTED

[7980:11516:1022/130007.750:ERROR:platform_sensor_reader_win.cc(242)] NOT IMPLEMENTED

[7980:10448:1022/130008.271:ERROR:platform_sensor_reader_win.cc(242)] NOT IMPLEMENTED

[7980:4372:1022/130008.791:ERROR:platform_sensor_reader_win.cc(242)] NOT IMPLEMENTED

[7980:11232:1022/130008.928:ERROR:socket_dispatcher_host.cc(97)] Failed to resolve address for x., errorcode: -105

[7980:11232:1022/130008.929:ERROR:socket_dispatcher_host.cc(97)] Failed to resolve address for x., errorcode: -105

[7980:9540:1022/130009.313:ERROR:platform_sensor_reader_win.cc(242)] NOT IMPLEMENTED

[7980:9884:1022/130009.836:ERROR:platform_sensor_reader_win.cc(242)] NOT IMPLEMENTED
```
在国内外的网站上根据报错platform_sensor_reader_win.cc(242) 或者 NOT IMPLEMENTED查找解决办法，试了好多方式都不能解决，像给Chromedriver加参数：
```python
    options.add_argument('--disable-gpu')

    options.add_argument('--ignore-certificate-errors')

    options.add_argument('--ignore-ssl-errors')

    options.add_experimental_option("excludeSwitches", ["ignore-certificate-errors", "safebrowsing-disable-download-protection", "safebrowsing-disable-auto-update", "disable-client-side-phishing-detection"])

    options.add_argument('--silent')
```
以上方式，经尝试，均不行

最终从 DevTools listening on 着手

于 <http://www.javaear.com/question/47392423.html> 找到限制报错等级的方法：
```python
options.add_argument('--log-level=3')
```
记录一下，方便以后查找

