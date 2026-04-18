---
title: 如何批量创建ETH钱包地址
uid: 202309071152
datetime: 2023-09-07 11:52
slug: batch-creation-of-ETH-wallet-addresses
aliases: 
tags:
  - 以太坊
  - 区块链
  - javascript
  - python
  - web3
source: 
link:

description: 如何批量创建ETH钱包地址
date: 2023-09-07 11:52:00
category: 笔记
---
由于对区块链的相关概念不熟，绕了一些弯路，记录下
## TL;DR

无需连接ETH主网，直接用 ethers.js 生成钱包地址和密钥，保存即可
## 弯路

之前一直是使用metamask进行操作，所以刚开始想法就僵化了，想着metamask有没有对应的创建钱包地址的API，进行调用。

后来发现，metamask中并没有相关的API，得另寻它法。

[使用Node.js和Web3.js实现链接MetaMask钱包并批量创建钱包并且批量发送代币](https://blog.csdn.net/Mzxy_1/article/details/130646988) 中，提示使用web3.js连接metamask进行操作（此时还是metamask的思路），后发现被metamask弃用了。

查 ethereum 上，Clef倒是可以，但是不方便和现有的系统联动。

最终，发现了 ethers.js [ether.js的基本使用](https://blog.csdn.net/weixin_45719444/article/details/122431318)  

## ethers.js

如果只是生成钱包地址的话，连metamask都不用连

```javascript
// 使用 ethers.js 创建随机钱包地址
const wallet = ethers.Wallet.createRandom();
const walletAddress = wallet.address;
const privateKey = wallet.privateKey;

console.log('新创建的钱包地址:', walletAddress);
console.log('对应的私钥:', privateKey);
```

生成好的钱包地址和密钥，保存到数据库即可

## python

第二天觉得线上生成并保存密钥在线上服务器不安全，改为使用本地python， 线上只存钱包地址

```python
from eth_account import Account

def gen_wallet():
  # 生成一个新的私钥
  account = Account.create()
  private_key = account._private_key

  # 根据私钥生成钱包地址
  wallet_address = account.address

  print("私钥：", private_key.hex())
  print("钱包地址：", wallet_address)
```

## 参考

[用 Web3 以太坊接口连接与操作 MetaMask 开发指南](https://blog.csdn.net/zyq55917/article/details/127610965)  
[使用Node.js和Web3.js实现链接MetaMask钱包并批量创建钱包并且批量发送代币](https://blog.csdn.net/Mzxy_1/article/details/130646988)  
[以太坊帐户创建](https://ethereum.org/zh/developers/docs/accounts/#account-creation)  
[ethereum提供器API 概述](http://cw.hubwiz.com/card/c/metamask-api/1/2/1/)  
[以太坊 Etherscan accounts](https://docs.etherscan.io/api-endpoints/accounts)  
[metamask web3.js移除](https://docs.metamask.io/wallet/how-to/migrate-api/#replacing-window-web3)  
[ether.js的基本使用](https://blog.csdn.net/weixin_45719444/article/details/122431318)  
[ethers.js github](https://github.com/ethers-io/ethers.js)  
[ethers.js 文档](https://docs.ethers.org/v6/getting-started/)  
