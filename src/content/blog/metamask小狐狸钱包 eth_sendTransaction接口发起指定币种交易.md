---
title: metamask小狐狸钱包 eth_sendTransaction接口发起指定币种交易
uid: 202303151639
datetime: 2023-03-15 16:39
slug: metamask-eth_sendtransaction-USDT
aliases: []
tags: [metamask, 以太坊, 区块链, web3]
source: 
link: 

description: metamask小狐狸钱包 eth_sendTransaction接口发起指定币种交易
date: 2023-03-15 16:39:00
category: 笔记
---

手上有个项目需要接入metamask小狐狸钱包充值，之前一直没搞过区块链的开发，一点逻辑都不懂就上手搞了。

切换到币安对应的主网后，用 eth_sendTransaction 可以正常唤起metamask发起交易，但是币种是BNB，而项目需要使用USDT进行交易，接口参数里没有指定币种的地方，试了各种方式均未实现指定币种的效果。

后来发现使用智能合约可以进行指定币种的交易，但是为了这么一块小功能还要去学 solidity ，专门写这么一个合约吗？

仔细想了想，能写出以太坊的人，肯定不能每个人使用都需要自己写合约，应该是有公共的可以大家一起用的那种智能合约，只是我对这块不懂，没有找到，没有想明白，后来仔细搜了下，终于解决了，记录一下代码，免得以后忘记

## 实现

### 之前的发起默认币种交易代码

```jsx
const transactionParameters = {
  nonce: '0x00', // ignored by MetaMask
  // gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
  // gas: '0x2710', // customizable by user during MetaMask confirmation.
  to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
  from: ethereum.selectedAddress, // must match user's active address.
  value: '0x00', // Only required to send ether to the recipient from the initiating external account.
  // data:
  //   '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
  chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
};

// txHash is a hex string
// As with any RPC call, it may throw an error
const txHash = await ethereum.request({
  method: 'eth_sendTransaction',
  params: [transactionParameters],
})
.then((result) => {
    console.log("txHash:" + result)
})
.catch((error) => {
    console.log("error:" + error.code)
});;
```

### 发起指定币种交易 USDT

有意思的是，不知道是我搜索的方式不对还是什么，怎么都搜不到metamask如何发起指定币种交易的相关内容，最后无可奈何，把问题甩给了chatGPT，经过几次询问后，chatGPT 给了我一个带详细中文注释的代码，修改下参数，可以完美运行，真的是。。。

```jsx
// 假设你已经有了USDT合约的地址和ABI
const USDTContractAddress = "..."; // USDT合约地址
const USDTContractABI = [...]; // USDT合约ABI
const recipientAddress = "0x..."; // 接收地址
const amount = 100; // 要发送的代币数量，单位为wei

// 创建一个web3实例，连接到metamask提供的provider
const web3 = new Web3(window.ethereum);

// 获取当前用户的账户地址
const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
const senderAddress = accounts[0];

// 创建一个USDT合约实例
const USDTContract = new web3.eth.Contract(USDTContractABI, USDTContractAddress);

// 调用USDT合约的transfer方法，生成data字段
const data = USDTContract.methods.transfer(recipientAddress, amount).encodeABI();

// 构造交易参数对象
const txParams = {
  from: senderAddress,
  to: USDTContractAddress,
  value: "0x0", // 不发送以太币，只发送代币
  gas: web3.utils.toHex(21000), // 设置gas limit，可以根据实际情况调整
  gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')), // 设置gas price，可以根据实际情况调整
  data: data // 填入之前生成的data字段
};

// 调用metamask的eth_sendTransaction方法，发送交易并获取交易哈希
const txHash = await ethereum.request({
  method: 'eth_sendTransaction',
  params: [txParams],
});

// 打印交易哈希或者做其他操作
console.log(txHash);
```

（注意，这里用到了 [web3.js](https://github.com/web3/web3.js)）

### 币安USDT合约地址及ABI

有了发起指定币种交易的代码，就要找对应币种的合约地址和ABI，填充进去

币安的USDT合约页面：[https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955#code](https://bscscan.com/address/0x55d398326f99059ff775485246999027b3197955#code)

USDT合约地址：*0x55d398326f99059fF775485246999027B3197955*

上面的页面内就有ABI代码：

```jsx
[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
```

## 参考

[MetaMask Docs - Sending Transactions](https://docs.metamask.io/guide/sending-transactions.html)

[ethereum JSON-RPC API - eth_sendTransaction](https://ethereum.org/zh/developers/docs/apis/json-rpc/#eth_sendtransaction)

[用 Web3 以太坊接口连接与操作 MetaMask 开发指南](https://blog.csdn.net/zyq55917/article/details/127610965?spm=1001.2101.3001.6650.7&utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~Rate-7-127610965-blog-124023708.pc_relevant_multi_platform_whitelistv4&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~Rate-7-127610965-blog-124023708.pc_relevant_multi_platform_whitelistv4&utm_relevant_index=12)

[Web3.0-使用metamask获取某个账号（钱包地址）的余额、交易回执](https://zhuanlan.zhihu.com/p/584207328)

[How to sign an ethereum transaction with metamask](https://stackoverflow.com/questions/67880184/how-to-sign-an-ethereum-transaction-with-metamask)

[How to connect ethers.js with metamask?](https://stackoverflow.com/questions/60785630/how-to-connect-ethers-js-with-metamask)

[币安USDT合约](https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955#code)