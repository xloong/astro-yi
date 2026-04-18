---
title: 微信小程序webview网页调起小程序微信支付
uid: 202301102114
datetime: 2023-01-10 21:14
slug: 2023-01-10
aliases: []
tags: 
  - 小程序
source: 
link: 

description: 微信小程序webview网页调起小程序微信支付
date: 2023-01-10 21:14:00
category: 笔记
---

之前有一套程序是写的网页版，用webview套的微信小程序，现在需要加一个微信支付，于是就犯难了，难道要重写一套小程序界面？迫于无奈，搜了下webview能否发起微信小程序的支付，还真找到一些，不过并不详实，有的还有些问题，于是整理总结下，以免以后忘记。

## 判断访问网页的是web访问还是小程序webview访问

由于原来的页面是直接发起公众号jsapi支付，要提前加一个桥页，进行判断，是哪种方式访问

我后端的代码是统一下单，大部分代码相同，传参进行不同的处理

```jsx
// 判断是否小程序访问
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
<script type="text/javascript">
	window.onload = function(){
		var url = 'http://xxx.com/xxx'
		var isWxMini = window.__wxjs_environment === 'miniprogram'
		if (isWxMini) {
			window.location.href=url+'?type=miniprogram'
		} else {
			window.location.href=url+'?type=web'
		}
	};
</script>
```

这里后端(即上文的 url )判断后，是web访问就正常发起公众号jsapi支付，不是的话，传订单号至小程序的支付页面

## webview网页跳转至微信小程序页面

```jsx
// 上下文省略,仅展示webview网页跳转至微信小程序页面的能力
// ...
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
<script type="text/javascript">
	wx.miniProgram.navigateTo({
		url: "/pages/wxPay/index?order_id="+order_id
	})
</script>
// ...
```

## 微信小程序获取小程序的openid

```jsx
// pages/wxPay/index.js
// ...
onLoad: function (options) {
  this.setData({
      order_id: options.order_id
  });
  this.getTempcode();
},
getTempcode: function () {
  var self = this;
  wx.login({
    success: res => {
      // 获取到 res.code
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      wx.request({
        url: 'http://xxx.com/xxx/'+res.code,
        data: {
        },
        method: 'GET',
        success: function (res) {
          // console.log(res)
          self.setData({
            user:res.data.user
          })
				// 获取支付信息
          self.getPayinfo();
        }
      })

    }
  })
}
```

## 获取支付信息 并 调起支付

支付成功后，从小程序跳转回webview，并指定网址

```jsx
// pages/wxPay/index.js
//...
getPayinfo: function () {
  var self = this;
  wx.request({
		//后台接口地址
    url: 'http://xxx.com/xx/'+self.data.order_id+'/'+self.data.user.openid,
    data: {
    },
    method: 'GET',
    success: function (res) {
      self.setData({
          jsapi: res.data.data.jsapi,// 支付信息
          view_url: res.data.data.view_url// 支付后跳转回的网页url
      });
      // 调起支付
      wx.requestPayment({
        'timeStamp': self.data.jsapi.timeStamp,// 为字符串，否则报错
        'nonceStr': self.data.jsapi.nonceStr,
        'package': self.data.jsapi.package,
        'signType': 'MD5',
        'paySign': self.data.jsapi.paySign,
        'success': function (res) {
          console.log('=======支付成功==========');
          wx.navigateTo({
              url: `/pages/index/index?view_url=${self.data.view_url}`
          })
        },
        'fail': function (res) {
          console.log(res)
          console.log('=======支付失败==========')
          wx.navigateBack({
              delta: 1//返回1个页面
          })
        }
      })
    }
  })
}
```

## 原写死的webview首页 需修改下:

```jsx
// pages/index/index.js
// ...
data: {
  view_url: 'http://xxx.com'
},
onLoad(options) {
  if(options.view_url){
    this.setData({
      view_url:options.view_url // 传过来的url如果带url参数的话有可能丢失，未细测
    })
  }
},
// ...
```

```html
<!--pages/index/index.wxml-->
<view class="container">
  <web-view src="{{view_url}}"></web-view>
</view>
```

这样整套下来，处理好后端支付回调，就可以了

文中删了一些业务代码，有些地方对不上实属正常，理解代码即可

参考:

[http://t.zoukankan.com/zlfProgrammer-p-9376821.html](http://t.zoukankan.com/zlfProgrammer-p-9376821.html)

[https://www.jb51.net/article/162672.htm](https://www.jb51.net/article/162672.htm)