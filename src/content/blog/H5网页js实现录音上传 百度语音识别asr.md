---
title: H5网页js实现录音上传 百度语音识别asr
uid: 202307281727
datetime: 2023-07-28 17:27
slug: h5-record-baidu-asr
aliases: []
tags:
  - javascript
source: 
link:

description: H5网页js实现录音上传 百度语音识别asr
date: 2023-07-28 17:27:00
category: 笔记
---

之前接入的GPT，现在有个需求，是提问直接语音输入，这就涉及到录音，上传，识别。
## 录音

### navigator.mediaDevices.getUserMedia 
刚开始使用 navigator.mediaDevices.getUserMedia 进行录音，但是总是碰到奇奇怪怪的问题。

### 微信API 录音 上传 识别
接着想到以前实现过的调用微信API，进行录音上传，也找到一个可用的[代码](https://blog.csdn.net/qq_25285531/article/details/130356239)，奈何以后可能不仅在微信内使用，因此需要脱离微信的API。

### Recorder用于html5录音
后来发现了一个实现的比较好的js录音源码 [Recorder github](https://github.com/xiangyuecn/Recorder)  
主页上示例很多，我就不贴代码了

BTW：之前 getUserMedia 出奇奇怪怪的问题，可能是因为电脑话筒权限的问题，我在系统上给禁止了，浏览器上开了权限也没用。

## 上传

上传没太多好说的，js直接ajax上传就行了。

技术验证的时候，是语音文件上传到服务器，服务器再请求百度语音识别接口进行识别。后面正式写的时候想节省流程，前端录音完直接上传到百度语音识别，碰到跨域，才反应过来还有跨域的问题

## 百度语音识别asr

这个好像也没什么可说的 直接看百度的文档就好 [github postman](https://github.com/Baidu-AIP/speech-demo/tree/master/rest-api-asr/postman)

拿ak sk 换access token

token 和录音文件一起提交上传就好


## 参考

[PHP+微信开发】微信JS-SDK + PHP实现录音、上传、语音识别](https://blog.csdn.net/qq_25285531/article/details/130356239)  
[百度语音识别API文档](https://ai.baidu.com/ai-doc/SPEECH/qlcirqhz0)  [SDK](https://ai.baidu.com/sdk#asr)  [github](https://github.com/Baidu-AIP/speech-demo/tree/master)   [github postman](https://github.com/Baidu-AIP/speech-demo/tree/master/rest-api-asr/postman)  
录音使用的 [Recorder github](https://github.com/xiangyuecn/Recorder)  [在线演示](https://xiangyuecn.gitee.io/recorder/)  
