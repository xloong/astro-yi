---
title: 微信小程序navigate/navigator不能跳转到tabbar页面的解决技巧
description: 这种处理方式没什么难度，只是逻辑上处理了一下，之前自己没想到，今天突然想到的，记一下通常我们使用navigate或navigator都不能跳转到tabbar设置的几个页面，但是页面内的逻辑有时候又需要，并且逻辑内是循环输出，又有需要navigate跳转的，又有需要switchTab进行跳转的。类似下面这样wxml：<viewwx:for="{{array}}">        &nb
date: 2019-04-29 20:06:31
category: 技术文章
tags: ['技术类', '技巧', '微信小程序']
post_id: 1566
alias: weixinapp_navigate_navigator_switchtabbar
ViewNums: 9646
---

这种处理方式没什么难度，只是逻辑上处理了一下，之前自己没想到，今天突然想到的，记一下

通常我们使用navigate或navigator都不能跳转到tabbar设置的几个页面，但是页面内的逻辑有时候又需要，并且逻辑内是循环输出，又有需要navigate跳转的，又有需要switchTab进行跳转的。

类似下面这样

wxml：
```html
<view wx:for="{{array}}">

          <navigator url="{{item}}">
            <image src="{{index}}" />

          </navigator>
</view>
```
这种是没办法跳转tabbar链接的。

其实只要改成下面的方式就可以了：
wxml：
```html
<view wx:for="{{array}}">

          <view bindtap='banner_navigateTo' url="{{item}}" data-url="{{item}}">

            <image src="{{index}}"/>

          </view>

</view>
```
js:
```js
   banner_navigateTo: function (e) {
    var that = this;
    console.log('href', e.currentTarget.dataset.url)
    var href = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: href,
      success: function (res) { },
      fail: function (res) {

        if (res.errMsg && (res.errMsg == 'navigateTo:fail can not navigateTo a tabbar page' || res.errMsg == 'navigateTo:fail can not navigate to a tabbar page') ) {

          wx.switchTab({

            url: href
          })
        }
      },
      complete: function (res) {
        console.log('res', res)
      },
    })
  },
```
主要思路就是在 wx.navigateTo 报错提示不能跳转tabbar的页面时进行处理，再使用wx.switchTab进行跳转就行了。

更新：经测试，小程序开发工具与手机上返回的errMsg不相同，略作处理

