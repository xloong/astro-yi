---
title: 通过网页切换metamask主网
uid: 202303240905
datetime: 2023-03-24 09:05
slug: metamast-switch-mainnet
aliases: []
tags: [metamask, 区块链, web3]
source: 
link: 

description: 通过网页切换metamask主网
date: 2023-03-24 09:05:00
category: 笔记
---

和前面的文章类似：**[metamask小狐狸钱包 eth_sendTransaction接口发起指定币种交易](https://blog.15897.com/article/metamask-eth_sendtransaction-USDT)**

通过 ethereum.request 发起切换主网请求，metamask小狐狸钱包，通过点击接受或同意切换请求，即可切换到对应主网，无需用户一点点设置填写主网信息

```jsx
function switch_network(network){
    const bsc = {
      chainId: '0x38', // 币安主网的chainId是56
      chainName: 'Smart Chain',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'bnb',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com/'],
    };
    const eth = {
      chainId: '0x1', // 以太坊主网的chainId是1
      chainName: 'Ethereum Mainnet',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'eth',
        decimals: 18,
      },
      rpcUrls: ['https://eth.llamarpc.com','https://mainnet.infura.io/v3/'],
      blockExplorerUrls: ['https://etherscan.io/'],
    };
    var main ='';
    if(network=='bsc'){
      main = bsc;
    }else if(network=='eth'){
      main = eth;
    }else{
      alert('还不支持当前主网，请切换到币安或以太坊主网');
      return false;
    }
    console.log(main)
    ethereum
      .request({
        method: 'wallet_addEthereumChain',
        params: [main],
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('finally');
      });
}
```

各主网对应的填写信息可以在这里查到： [https://chainlist.org](https://chainlist.org)