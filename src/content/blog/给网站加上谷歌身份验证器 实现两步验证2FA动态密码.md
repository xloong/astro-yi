---
title: 给网站加上谷歌身份验证器 实现两步验证2FA动态密码

uid: 202304281052
datetime: 2023-04-28 10:52
slug: googleauthenticator-2fa
aliases: []
tags: 
  - google
  - 2FA
source: 
link: 

description: 给网站加上谷歌身份验证器 实现两步验证2FA动态密码
date: 2023-04-28 10:52:00
category: 笔记
---
之前没做过给网站接入谷歌身份验证器，记录一下。

## 概念纠正

我之前一直以为谷歌身份验证器是联网的，需要从谷歌获取动态验证码，或者从接入的网站通信获取。

实际的运行原理应该是：
1. 用户从网站申请开启双因素验证（2FA，两步验证）
2. 网站生成秘钥并存储
3. 网站将秘钥展示给用户
4. 用户使用谷歌身份验证器扫码或自行保存

之后网站就可以对开启的用户进行双因素验证了。实际网站和用户之间的动态密码，并不是通信获取的，而是双方都是使用[TOTP算法](https://baike.baidu.com/item/TOTP%E7%AE%97%E6%B3%95) 对秘钥，进行计算，获得的动态密码。

## 实现

目前手上这个需要加双因素验证的网站是php的，于是好玩的一幕来了，我翻遍了谷歌官网都没找到相关的内容，能找到的都是第三方的实现，不知道是怎么回事。

找到的第三方实现的库：[https://github.com/antonioribeiro/google2fa](https://github.com/antonioribeiro/google2fa)

剩下的似乎也没多少好说的，就是引入库，然后按着上方的流程做就可以了。

### 生成

```php
// 引入 google2fa
// ...

// 生成秘钥
$secret = google2fa::generateSecretKey(32);

// 持久化保存$secret
// ...

// 生成二维码链接
$qrCodeUrl = google2fa::getQRCodeUrl(
	'[公司名或网站名]',
	'用户名称或邮箱',
	$secret
);

// 展示二维码给用户 这里用的是 phpqrcode
$QR_base64 = QRcode::png($qrCodeUrl, false, 'Q', 6, 1);
$image_qr = imagecreatefromstring(base64_decode($QR_base64));

Header("Content-type: image/png");
ImagePng($image_qr);
```

### 验证用户的动态密码

```php 
// $code 为用户提交的动态验证码
// $secret 为服务器保存的秘钥
$res = google2fa::verifyKey($secret, $code, 0); // 这里的0需要注意一下 后面细说
if($res!==FALSE){
	echo 'ok';
}else{
	echo 'no';
}
```

上面的0，在文档里  Validation Window，这里感觉应该理解为验证时间窗口。默认为4，每30秒生成一个新动态码，4个就是4 * 30，2分钟，因此一个动态码验证窗口包含前2分钟和后2分钟。

主要是怕服务器时间与身份验证器时间有误差，可以做一定兼容。
