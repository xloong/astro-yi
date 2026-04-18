---
title: web3js获取区块链钱包地址指定代币余额
uid: 202303200854
datetime: 2023-03-20 08:54
slug: web3js-get-specified-token-balance
aliases: []
tags: [metamask, 以太坊, 区块链, web3]
source: 
link: 

description: web3js获取区块链钱包地址指定代币余额
date: 2023-03-20 08:54:00
category: 笔记
---

Property: March 24, 2023 8:54 AM
category: 技术分享
date: 2023/03/20
slug: web3js-get-specified-token-balance
status: Published
summary: web3js获取区块链钱包地址指定代币余额
tags: metamask, 以太坊, 区块链, 开发
type: Post

书接上回: [metamask小狐狸钱包 eth_sendTransaction接口发起指定币种交易](https://blog.15897.com/article/metamask-eth_sendtransaction-USDT)

### 获取指定钱包地址默认代币

```jsx
var account = ethereum.selectedAddress
// 获取余额
ethereum.request({
      method: 'eth_getBalance',
      params: [
        account ,
        'latest'
      ]
  })
  .then((result) => {
      console.log("获取余额success--->" + result)
      let formatEther = ethers.utils.formatEther(result); //16进制的wei
      console.log(formatEther)
  })
  .catch((error) => {
      console.error(error)
  });
```

### 获取指定钱包地址指定代币

和发起指定代币交易一样，需要创建代币的智能合约实例，通过实例的方法，获取钱包地址的对应代币余额

```jsx
var account = ethereum.selectedAddress
const USDTContractAddress = "..."; // USDT合约地址
const USDTContractABI = [...]; // USDT合约ABI
// 创建一个web3实例，连接到metamask提供的provider
const web3 = new Web3(window.ethereum);
// 创建一个USDT合约实例
const USDTContract = new web3.eth.Contract(USDTContractABI, USDTContractAddress);
USDTContract.methods.balanceOf(account).call((error, result) => {
  if (error) {
    console.error(error)
  } else {
    console.log(result);
    let formatEther = ethers.utils.formatEther(result); //16进制的wei
    console.log(formatEther)
  }
});
```