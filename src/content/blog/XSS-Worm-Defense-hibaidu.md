---
title: XSS Worm的防御
description: byaxis2007-12-29http://www.ph4nt0m.org近日XSSWORM愈演愈烈，随着AJAX技术的发展，这种XSS的高级攻击技巧已经成为了当今的热点。在圣诞节，baidu个人空间遭受了一次前所未有的XSSWORM攻击，在短短时间内，8700个博客页面被修改，并进行传播，baidu在26日fix了该漏洞，并发了一个公告http://hi.baidu.com/%B0%D9%B6%C8%BF%D5%BC%E4/blog/item/0e3433fa69eeb61aa8d3110f.html对于该次WORM攻击，在剑心的blog上有完整的技术分析:..........................
date: 2007-12-31 12:57:04
category: 技术文章
tags: ['跨站', 'Worm', '脚本Script', '安全', '漏洞信息']
post_id: 313
alias: XSS-Worm-Defense-hibaidu
ViewNums: 4770
---

by axis
2007-12-29
<http://www.ph4nt0m.org>

近日XSS WORM愈演愈烈，随着AJAX技术的发展，这种[**XSS**](/tags/%E8%B7%A8%E7%AB%99)的高级攻击[**技巧**](/tags/%E6%8A%80%E5%B7%A7)已经成为了当今的热点。

在圣诞节，baidu个人空间遭受了一次前所未有的XSS [**WORM**](/tags/Worm)攻击，在短短时间内，8700个博客页面被修改，并进行传播，baidu在26日fix了该漏洞，并发了一个公告

[http://hi.baidu.com/%B0%D9%B6%C8%BF%D5%BC%E4/blog/item/0e3433fa69eeb61aa8d3110f.html](http://hi.baidu.com/%EF%BF%BD%D9%B6%C8%BF%D5%BC%EF%BF%BD/blog/item/0e3433fa69eeb61aa8d3110f.html)

对于该次WORM攻击，在剑心的blog上有完整的技术分析:
<http://www.loveshell.net/blog/blogview.asp?logID=283>

对比以前的myspace的XSS WORM，近日的orkut、baidu等的xss worm陆续爆发，说明这一危害日益严重。 可以预见的是在2008年，xss worm将成为攻防的焦点。

对于XSS WORM的防御，可以从以下几点出发考虑：（这里不会涉及太多细节）

**1. 断其源头**
XSS WORM的必要条件是网站存在XSS 漏洞，而且这个XSS漏洞必须是 persistent (或者叫做 store)类型的XSS，该漏洞必须与网站的其他用户发生交互。

既然是store类型的XSS，那么就为在服务端控制提供了可能（如果是基于DOM的，则可能不从服务端过）。 所以使用一个 security-tier 来控制XSS 是必要的选择。

这个security-tier的选择可以有很多，比如anti-samy一类的项目，或者是mod-security等，其目的都是进行 Input Validation. 比较彻底的做法是使用 htmlencode来对输出进行escape，这适用于用户输出不需要html的地方，在code review的时候应该尽可能的去找出这些地方。

如果input validation做的比较彻底的话，就断了XSS WORM的源头，从而让攻击跑不起来

**2. 检查所有用户之间发生交互的地方**

这也是XSS WORM发生的充分条件。

检查业务逻辑上，用户交互最为密集的地方，然后针对这些地方，加强XSS FILTER的检查，缩小Attack Surface。

**3. 使用验证码或者密码来验证重要应用流程**

根据2的结果，在敏感应用时使用验证码或者密码来验证用户身份。这样做的好处是可以及时阻断攻击流程，让攻击无法连续的跑起来，将XSS的影响降低到最小。

但是坏处也同样明显，因为出于商业需求，很多地方可能无法使用验证码，可用性与安全的平衡再一次受到考验。

**4. 使用一个处于比较核心位置的功能来阻断连续提交**

一般XSS WORM的构造是在某一个页面上，也就是说用户在触发XSS后可能在一瞬间执行所有的JS代码，这些代码包括寻找好友的list，然后对这些好友的list发送新的XSS PAYLOAD。

根据2的检查结果，对于这些敏感应用，比如对好友发送message，或者是提交文章一类，设置提交间隔，在提交一次后，需要在一定时间之后，才能再次提交。尽可能将损失降到最低。

**5. 完善的log机制**

不论是apache log，还是单独应用的用户行为log，都要针对xss worm重新设计过，在敏感位置布点。有助于在第一时间发现问题，并且进行fix。

同时在“缉凶”的过程中，这些日志也非常重要。

**6. 法律需要进一步完善**

很明显，法律需要进一步给XSS WORM下定义。

本文只是抛砖引玉，并没有描述更多的细节。

而XSS WORM最为厉害的时候，将形成跨不同网站的WORM，利用多个网站互相之间的交互性，来传播到不同的网站上，也造成了更难追溯源头。

在防御XSS WORM领域，还有很多工作需要做。可以充分发挥你的想象力，还有更多的手段可以用在对抗的过程中，比如在每个页面布点监控等，在2008年的XSS WORM大潮来临之前，希望大家能都做好防洪的准备！

