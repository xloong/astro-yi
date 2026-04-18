---
title: uniapp生成的android端 返回按钮如何控制webview内的网页后退
uid: 202306062040
datetime: 2023-06-06 14:39
slug: uniapp-webview-android-back
aliases: []
tags: 
  - uniapp
source: 
link: 

description: uniapp生成的android端 返回按钮如何控制webview内的网页后退
date: 2023-06-06 14:39:00
category: 笔记
---
有一个项目，是网页嵌入的uniapp webview，现在需要生成一个安卓端，之前没注意手机上的返回键不能控制webview中的页面后退，感觉太影响用户体验，于是想修复一下。uniapp生成的android端 返回按钮如何控制webview内的网页后退

刚开始如何都搜不到相关的内容，或者说，搜到了非常多其实不管用的内容，只是能确定用`onBackPress()` 方法来获取返回按键事件，但是如何都没看到哪里有说如何控制嵌入的webview如何控制后退。

后来在uniapp官网的一处地方看到 [https://ask.dcloud.net.cn/article/35036](https://ask.dcloud.net.cn/article/35036) 例子6

获取webview实例对象后，直接用H5 API操作就行了：[HTML5+ API Reference](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.back)

中间还因为实现的效果不好，反复修改了好多方式，最后终于有一个能看的了。

最后改好的示例如下，有删减，意思到了就行

```vue
<template>
	<view class="content">
		<web-view 
			:src="mainUrl" 
		></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				mainUrl: '<https://www.baidu.com>',
				wv:'',
				wvCanBack:0,
			}
		},
		onLoad() {

		},
		onReady() {
			// #ifdef APP-PLUS
			var that = this
			var currentWebview = this.$scope
				.$getAppWebview() //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
			setTimeout(function() {
				that.wv = currentWebview.children()[0]
				that.onloading()
			}, 1000); //如果是页面初始化调用时，需要延时一下
			// #endif
		},
    onBackPress(options) {
			const that = this
			console.log('onBackPress', this.wvCanBack)
			if(this.wvCanBack){
				this.wv.back();
				return true;
			}
    },
		methods: {
			onloading(){
				const that = this
				this.wv.onloading = function(){
					console.log('onloading')
					that.canBack()
				}
			},
			canBack(){
				const that = this

				that.wv.canBack(function(e) {
					if (e.canBack) {
						that.wvCanBack = 1
						// that.wv.back(); //返回上一页
					} else {
						that.wvCanBack = 0
						// that.wv.close(); //关闭应用
					}
					console.log(that.wvCanBack)
				})
			}
	}
</script>

<style>
	...
</style>
```

1. onReady() 中延时获取嵌入的webview，可以看到其中启用了onloading事件，这个后面讲。
2. canBack() 主要判断webview中的内容是否可以后退，不能后退的话，就执行默认的返回按钮事件。本来后退的执行是放在这里，但是执行起来不方便控制默认的返回按钮事件，这里就改成了只判断是否可以返回的状态。
3. onBackPress() 监听默认的返回按钮事件，判断webview是否可以后退，可以后退的话必须带 `return true` 阻止后续的冒泡事件，不然还是会执行默认的返回按钮操作。
4. onloading() 每当跳转加载新页面时，就执行判断，是否可以后退。这里有2点踩坑的地方：
    1. onBackPress() 内不能直接调用 canBack() 进行判断，有可能wvCanBack的值变了，但是没有读到最新的修改
    2. 要使用 onloading() 而不能用 onloaded()，onloaded会等待页面完全加载完成才会触发执行。

onloading主要就是将判断放在了页面刚开始加载的时候，避免后面触发返回按钮时判断不准的情况

参考：  
[https://uniapp.dcloud.net.cn/tutorial/page.html#getappwebview](https://uniapp.dcloud.net.cn/tutorial/page.html#getappwebview)    
[https://ask.dcloud.net.cn/article/35036](https://ask.dcloud.net.cn/article/35036)    
[https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.back](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.back)    