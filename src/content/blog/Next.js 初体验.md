---
title: Next.js 初体验
uid: 202403252322
datetime: 2024-03-25 23:22
slug: nextjs-first-experience
aliases: 
tags: 
  - next.js
source: 
link:

description: Next.js 初体验
date: 2024-03-25 23:22:00
category: 笔记
---
鉴于前端技术的日新月异，不能再局限于自己的小圈子里了，于是决定试着用next.js写项目。使用的过程中学会了不少新东西，前后端一把梭，确实有一定优势。

### 使用的一部分技术栈

- next.js
- mysql
- prisma
- tailwindcss
- shadcnui
- zustand
- next-auth
- walletconnect
- siwe
- wagmi
- web3
- cloudflare R2
- react-hook-form
- zod

没错，是一个web3相关的项目，我也就不细说项目的具体内容了。

### 体验

这些技术栈中，和我之前使用起来差异比较大的是prisma，之前都是active record 类sql的写法读写数据库，现在prisma这种直接data mapper的方式，熟悉之后用起来还挺舒服。

tailwindcss 也是熟悉之后写起样式来比较快，虽然中间有一些奇奇怪怪的写法导致需要一直查文档。

zod 这种验证库在前后端可以通用的情况下，更是无比方便。

这些技术栈中，walletconnect是卡我最久的，总是有各种能登录，不能登录，登录状态莫名丢失，又莫名恢复的奇葩情况。

### 小结

在不复杂的项目中，使用nextjs前后端一把梭，确实有优势。但是碰到的大多项目不会很简单，这就导致了，还是撸php比较爽。