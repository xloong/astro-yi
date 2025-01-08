import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';
import remarkDirective from "remark-directive";
import expressiveCode from "astro-expressive-code";
import {pluginLineNumbers} from '@expressive-code/plugin-line-numbers'
import {pluginCollapsibleSections} from '@expressive-code/plugin-collapsible-sections'

import {remarkModifiedTime,} from "./src/plugins/remark-modified-time.mjs";
import {resetRemark} from "./src/plugins/reset-remark.js";
import {remarkAsides} from  './src/plugins/remark-asides.js'
import {remarkCollapse} from "./src/plugins/remark-collapse.js";
import {remarkGithubCard} from './src/plugins/remark-github-card.js'
import {lazyLoadImage} from "./src/plugins/lazy-load-image.js";


export default defineConfig({
  // site: 'https://astro-yi-nu.vercel.app',
  site: 'https://www.15897.com',
  integrations: [sitemap(), tailwind(), solid(), expressiveCode({
    plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
    themes: ["github-dark", "github-light"],
    styleOverrides: {
      codeFontFamily: "jetbrains-mono",
      uiFontFamily: "jetbrains-mono",
    },
    themeCssSelector: (theme) => `[data-theme="${theme.type}"]`
  }), mdx()],
  markdown: {
    remarkPlugins: [remarkModifiedTime, resetRemark, remarkDirective, remarkAsides({}),remarkCollapse({}),remarkGithubCard()],
    rehypePlugins: [lazyLoadImage],
  },
  redirects: {
    '/blog/1.html': {
      status: 301,
      destination: '/blog/markdown-elements'
    },


    "/blog/rss.xml": {
      status: 301,
      destination: "/rss.xml"
    },

    "/blog/": {
      status: 301,
      destination: "/"
    },
    "/blog": {
      status: 301,
      destination: "/"
    },





    "/blog/post/5.html": {
      status: 301,
      destination: "/about"
    },
    "/blog/post/0-to-33600-port.html": {
        status: 301,
        destination: "/blog/0-to-33600-port"
    },
    "/blog/post/1-free-web-host-ftp-mysql-cpanel.html": {
        status: 301,
        destination: "/blog/1-free-web-host-ftp-mysql-cpanel"
    },
    "/blog/post/10-linux-command.html": {
        status: 301,
        destination: "/blog/10-linux-command"
    },
    "/blog/post/10-strokes-to-prevent-hacker.html": {
        status: 301,
        destination: "/blog/10-strokes-to-prevent-hacker"
    },
    "/blog/post/10.html": {
        status: 301,
        destination: "/blog/10a"
    },
    "/blog/post/100.html": {
        status: 301,
        destination: "/blog/100a"
    },
    "/blog/post/1000du-linkideo-relakks-duniu-PrairieDogVPN.html": {
        status: 301,
        destination: "/blog/1000du-linkideo-relakks-duniu-prairiedogvpn"
    },
    "/blog/post/101.html": {
        status: 301,
        destination: "/blog/101a"
    },
    "/blog/post/102.html": {
        status: 301,
        destination: "/blog/102a"
    },
    "/blog/post/103.html": {
        status: 301,
        destination: "/blog/103a"
    },
    "/blog/post/104.html": {
        status: 301,
        destination: "/blog/104a"
    },
    "/blog/post/105.html": {
        status: 301,
        destination: "/blog/105a"
    },
    "/blog/post/106.html": {
        status: 301,
        destination: "/blog/106a"
    },
    "/blog/post/107.html": {
        status: 301,
        destination: "/blog/107a"
    },
    "/blog/post/108.html": {
        status: 301,
        destination: "/blog/108a"
    },
    "/blog/post/109.html": {
        status: 301,
        destination: "/blog/109a"
    },
    "/blog/post/10daganrenguanggao.html": {
        status: 301,
        destination: "/blog/10daganrenguanggao"
    },
    "/blog/post/10GBfreewebhost.html": {
        status: 301,
        destination: "/blog/10gbfreewebhost"
    },
    "/blog/post/10richangshenghuojianfeifangfa.html": {
        status: 301,
        destination: "/blog/10richangshenghuojianfeifangfa"
    },
    "/blog/post/110.html": {
        status: 301,
        destination: "/blog/110a"
    },
    "/blog/post/111.html": {
        status: 301,
        destination: "/blog/111a"
    },
    "/blog/post/112.html": {
        status: 301,
        destination: "/blog/112a"
    },
    "/blog/post/113.html": {
        status: 301,
        destination: "/blog/113a"
    },
    "/blog/post/114.html": {
        status: 301,
        destination: "/blog/114a"
    },
    "/blog/post/115.html": {
        status: 301,
        destination: "/blog/115a"
    },
    "/blog/post/116.html": {
        status: 301,
        destination: "/blog/116a"
    },
    "/blog/post/117.html": {
        status: 301,
        destination: "/blog/117a"
    },
    "/blog/post/118.html": {
        status: 301,
        destination: "/blog/118a"
    },
    "/blog/post/119.html": {
        status: 301,
        destination: "/blog/119a"
    },
    "/blog/post/11Shift.html": {
        status: 301,
        destination: "/blog/11shift"
    },
    "/blog/post/12.html": {
        status: 301,
        destination: "/blog/12a"
    },
    "/blog/post/120.html": {
        status: 301,
        destination: "/blog/120a"
    },
    "/blog/post/120G-caihonghaxibiao.html": {
        status: 301,
        destination: "/blog/120g-caihonghaxibiao"
    },
    "/blog/post/121.html": {
        status: 301,
        destination: "/blog/121a"
    },
    "/blog/post/122.html": {
        status: 301,
        destination: "/blog/122a"
    },
    "/blog/post/123.html": {
        status: 301,
        destination: "/blog/123a"
    },
    "/blog/post/12306dingpiaozhushou.html": {
        status: 301,
        destination: "/blog/12306dingpiaozhushou"
    },
    "/blog/post/124.html": {
        status: 301,
        destination: "/blog/124a"
    },
    "/blog/post/125.html": {
        status: 301,
        destination: "/blog/125a"
    },
    "/blog/post/126.html": {
        status: 301,
        destination: "/blog/126a"
    },
    "/blog/post/127.html": {
        status: 301,
        destination: "/blog/127a"
    },
    "/blog/post/128.html": {
        status: 301,
        destination: "/blog/128a"
    },
    "/blog/post/129.html": {
        status: 301,
        destination: "/blog/129a"
    },
    "/blog/post/12yue-baidu-fengchao-xitong-shangxian-suanfa-tiaozheng.html": {
        status: 301,
        destination: "/blog/12yue-baidu-fengchao-xitong-shangxian-suanfa-tiaozheng"
    },
    "/blog/post/13.html": {
        status: 301,
        destination: "/blog/13a"
    },
    "/blog/post/130.html": {
        status: 301,
        destination: "/blog/130a"
    },
    "/blog/post/131.html": {
        status: 301,
        destination: "/blog/131a"
    },
    "/blog/post/132.html": {
        status: 301,
        destination: "/blog/132a"
    },
    "/blog/post/136.html": {
        status: 301,
        destination: "/blog/136a"
    },
    "/blog/post/137.html": {
        status: 301,
        destination: "/blog/137a"
    },
    "/blog/post/138.html": {
        status: 301,
        destination: "/blog/138a"
    },
    "/blog/post/139.html": {
        status: 301,
        destination: "/blog/139a"
    },
    "/blog/post/14.html": {
        status: 301,
        destination: "/blog/14a"
    },
    "/blog/post/140.html": {
        status: 301,
        destination: "/blog/140a"
    },
    "/blog/post/141.html": {
        status: 301,
        destination: "/blog/141a"
    },
    "/blog/post/142.html": {
        status: 301,
        destination: "/blog/142a"
    },
    "/blog/post/143.html": {
        status: 301,
        destination: "/blog/143a"
    },
    "/blog/post/144.html": {
        status: 301,
        destination: "/blog/144a"
    },
    "/blog/post/145.html": {
        status: 301,
        destination: "/blog/145a"
    },
    "/blog/post/146.html": {
        status: 301,
        destination: "/blog/146a"
    },
    "/blog/post/148.html": {
        status: 301,
        destination: "/blog/148a"
    },
    "/blog/post/149.html": {
        status: 301,
        destination: "/blog/149a"
    },
    "/blog/post/15-free-remote-control.html": {
        status: 301,
        destination: "/blog/15-free-remote-control"
    },
    "/blog/post/15.html": {
        status: 301,
        destination: "/blog/15a"
    },
    "/blog/post/153.html": {
        status: 301,
        destination: "/blog/153a"
    },
    "/blog/post/157.html": {
        status: 301,
        destination: "/blog/157a"
    },
    "/blog/post/158.html": {
        status: 301,
        destination: "/blog/158a"
    },
    "/blog/post/15897.com-blog-2years.html": {
        status: 301,
        destination: "/blog/15897com-blog-2years"
    },
    "/blog/post/15897.com-blog-update-to-zblog1.8beta2.html": {
        status: 301,
        destination: "/blog/15897com-blog-update-to-zblog1-8beta2"
    },
    "/blog/post/15897.com-blog-zhousui-shouyi-zongjie.html": {
        status: 301,
        destination: "/blog/15897com-blog-zhousui-shouyi-zongjie"
    },
    "/blog/post/15897.com-Google-PageRank-0to3.html": {
        status: 301,
        destination: "/blog/15897com-google-pagerank-0to3"
    },
    "/blog/post/15897.com-Greatest.html": {
        status: 301,
        destination: "/blog/15897com-greatest"
    },
    "/blog/post/159.html": {
        status: 301,
        destination: "/blog/159a"
    },
    "/blog/post/16.html": {
        status: 301,
        destination: "/blog/16a"
    },
    "/blog/post/160.html": {
        status: 301,
        destination: "/blog/160a"
    },
    "/blog/post/161.html": {
        status: 301,
        destination: "/blog/161a"
    },
    "/blog/post/163.html": {
        status: 301,
        destination: "/blog/163a"
    },
    "/blog/post/165.html": {
        status: 301,
        destination: "/blog/165a"
    },
    "/blog/post/167.html": {
        status: 301,
        destination: "/blog/167a"
    },
    "/blog/post/168.html": {
        status: 301,
        destination: "/blog/168a"
    },
    "/blog/post/17.html": {
        status: 301,
        destination: "/blog/17a"
    },
    "/blog/post/170.html": {
        status: 301,
        destination: "/blog/170a"
    },
    "/blog/post/171.html": {
        status: 301,
        destination: "/blog/171a"
    },
    "/blog/post/172.html": {
        status: 301,
        destination: "/blog/172a"
    },
    "/blog/post/173.html": {
        status: 301,
        destination: "/blog/173a"
    },
    "/blog/post/175.html": {
        status: 301,
        destination: "/blog/175a"
    },
    "/blog/post/176.html": {
        status: 301,
        destination: "/blog/176a"
    },
    "/blog/post/177.html": {
        status: 301,
        destination: "/blog/177a"
    },
    "/blog/post/178.html": {
        status: 301,
        destination: "/blog/178a"
    },
    "/blog/post/179.html": {
        status: 301,
        destination: "/blog/179a"
    },
    "/blog/post/18.html": {
        status: 301,
        destination: "/blog/18a"
    },
    "/blog/post/180.html": {
        status: 301,
        destination: "/blog/180a"
    },
    "/blog/post/181.html": {
        status: 301,
        destination: "/blog/181a"
    },
    "/blog/post/182.html": {
        status: 301,
        destination: "/blog/182a"
    },
    "/blog/post/183.html": {
        status: 301,
        destination: "/blog/183a"
    },
    "/blog/post/185.html": {
        status: 301,
        destination: "/blog/185a"
    },
    "/blog/post/186.html": {
        status: 301,
        destination: "/blog/186a"
    },
    "/blog/post/187.html": {
        status: 301,
        destination: "/blog/187a"
    },
    "/blog/post/188.html": {
        status: 301,
        destination: "/blog/188a"
    },
    "/blog/post/18geyanjiangPPTjiqiao.html": {
        status: 301,
        destination: "/blog/18geyanjiangpptjiqiao"
    },
    "/blog/post/19.html": {
        status: 301,
        destination: "/blog/19a"
    },
    "/blog/post/191.html": {
        status: 301,
        destination: "/blog/191a"
    },
    "/blog/post/192.html": {
        status: 301,
        destination: "/blog/192a"
    },
    "/blog/post/193.html": {
        status: 301,
        destination: "/blog/193a"
    },
    "/blog/post/194.html": {
        status: 301,
        destination: "/blog/194a"
    },
    "/blog/post/195.html": {
        status: 301,
        destination: "/blog/195a"
    },
    "/blog/post/197.html": {
        status: 301,
        destination: "/blog/197a"
    },
    "/blog/post/198.html": {
        status: 301,
        destination: "/blog/198a"
    },
    "/blog/post/1gb.in-1G-php-mysql-ftp.html": {
        status: 301,
        destination: "/blog/1gb-in-1g-php-mysql-ftp"
    },
    "/blog/post/20-XP-heiping-pojie-WGA-gongju.html": {
        status: 301,
        destination: "/blog/20-xp-heiping-pojie-wga-gongju"
    },
    "/blog/post/20.html": {
        status: 301,
        destination: "/blog/20a"
    },
    "/blog/post/200.html": {
        status: 301,
        destination: "/blog/200a"
    },
    "/blog/post/2000-gongzijiazhizuidahua.html": {
        status: 301,
        destination: "/blog/2000-gongzijiazhizuidahua"
    },
    "/blog/post/2008-wanwang-CN-yuming-mianfei.html": {
        status: 301,
        destination: "/blog/2008-wanwang-cn-yuming-mianfei"
    },
    "/blog/post/201.html": {
        status: 301,
        destination: "/blog/201a"
    },
    "/blog/post/2014xiliewenzhangjihua.html": {
        status: 301,
        destination: "/blog/2014xiliewenzhangjihua"
    },
    "/blog/post/202.html": {
        status: 301,
        destination: "/blog/202a"
    },
    "/blog/post/204.html": {
        status: 301,
        destination: "/blog/204a"
    },
    "/blog/post/205.html": {
        status: 301,
        destination: "/blog/205a"
    },
    "/blog/post/207.html": {
        status: 301,
        destination: "/blog/207a"
    },
    "/blog/post/21.html": {
        status: 301,
        destination: "/blog/21a"
    },
    "/blog/post/210.html": {
        status: 301,
        destination: "/blog/210a"
    },
    "/blog/post/212.html": {
        status: 301,
        destination: "/blog/212a"
    },
    "/blog/post/214.html": {
        status: 301,
        destination: "/blog/214a"
    },
    "/blog/post/215.html": {
        status: 301,
        destination: "/blog/215a"
    },
    "/blog/post/22.html": {
        status: 301,
        destination: "/blog/22a"
    },
    "/blog/post/221.html": {
        status: 301,
        destination: "/blog/221a"
    },
    "/blog/post/226.html": {
        status: 301,
        destination: "/blog/226a"
    },
    "/blog/post/23.html": {
        status: 301,
        destination: "/blog/23a"
    },
    "/blog/post/230.html": {
        status: 301,
        destination: "/blog/230a"
    },
    "/blog/post/235.html": {
        status: 301,
        destination: "/blog/235a"
    },
    "/blog/post/236.html": {
        status: 301,
        destination: "/blog/236a"
    },
    "/blog/post/237.html": {
        status: 301,
        destination: "/blog/237a"
    },
    "/blog/post/238.html": {
        status: 301,
        destination: "/blog/238a"
    },
    "/blog/post/239.html": {
        status: 301,
        destination: "/blog/239a"
    },
    "/blog/post/24.html": {
        status: 301,
        destination: "/blog/24a"
    },
    "/blog/post/241.html": {
        status: 301,
        destination: "/blog/241a"
    },
    "/blog/post/242.html": {
        status: 301,
        destination: "/blog/242a"
    },
    "/blog/post/244.html": {
        status: 301,
        destination: "/blog/244a"
    },
    "/blog/post/25.html": {
        status: 301,
        destination: "/blog/25a"
    },
    "/blog/post/254.html": {
        status: 301,
        destination: "/blog/254a"
    },
    "/blog/post/26.html": {
        status: 301,
        destination: "/blog/26a"
    },
    "/blog/post/27.html": {
        status: 301,
        destination: "/blog/27a"
    },
    "/blog/post/276.html": {
        status: 301,
        destination: "/blog/276a"
    },
    "/blog/post/29.html": {
        status: 301,
        destination: "/blog/29a"
    },
    "/blog/post/2ClickUpdate.html": {
        status: 301,
        destination: "/blog/2clickupdate"
    },
    "/blog/post/3-kinds-of-Real-Player-rmoc3260.dll-ActiveX-Control.html": {
        status: 301,
        destination: "/blog/3-kinds-of-real-player-rmoc3260-dll-activex-control"
    },
    "/blog/post/30.html": {
        status: 301,
        destination: "/blog/30a"
    },
    "/blog/post/300M-PHP-MySQL-FTP-WinterHost.org.html": {
        status: 301,
        destination: "/blog/300m-php-mysql-ftp-winterhost-org"
    },
    "/blog/post/309.html": {
        status: 301,
        destination: "/blog/309a"
    },
    "/blog/post/31.html": {
        status: 301,
        destination: "/blog/31a"
    },
    "/blog/post/310.html": {
        status: 301,
        destination: "/blog/310a"
    },
    "/blog/post/32.html": {
        status: 301,
        destination: "/blog/32a"
    },
    "/blog/post/322.html": {
        status: 301,
        destination: "/blog/322a"
    },
    "/blog/post/323.html": {
        status: 301,
        destination: "/blog/323a"
    },
    "/blog/post/33.html": {
        status: 301,
        destination: "/blog/33a"
    },
    "/blog/post/3366.com.html": {
        status: 301,
        destination: "/blog/3366-com"
    },
    "/blog/post/3389-shift-backdoor-Scan.html": {
        status: 301,
        destination: "/blog/3389-shift-backdoor-scan"
    },
    "/blog/post/34.html": {
        status: 301,
        destination: "/blog/34a"
    },
    "/blog/post/343.html": {
        status: 301,
        destination: "/blog/343a"
    },
    "/blog/post/344.html": {
        status: 301,
        destination: "/blog/344a"
    },
    "/blog/post/35.html": {
        status: 301,
        destination: "/blog/35a"
    },
    "/blog/post/36.html": {
        status: 301,
        destination: "/blog/36a"
    },
    "/blog/post/360.html": {
        status: 301,
        destination: "/blog/360a"
    },
    "/blog/post/37.html": {
        status: 301,
        destination: "/blog/37a"
    },
    "/blog/post/38.html": {
        status: 301,
        destination: "/blog/38a"
    },
    "/blog/post/3800cc-ASP-texunban-jiaocheng-xiazai.html": {
        status: 301,
        destination: "/blog/3800cc-asp-texunban-jiaocheng-xiazai"
    },
    "/blog/post/39.html": {
        status: 301,
        destination: "/blog/39a"
    },
    "/blog/post/394.html": {
        status: 301,
        destination: "/blog/394a"
    },
    "/blog/post/3ds-Max-2011-chs-keygen.html": {
        status: 301,
        destination: "/blog/3ds-max-2011-chs-keygen"
    },
    "/blog/post/4-to-date-methods-of-IE-shielding-0day.html": {
        status: 301,
        destination: "/blog/4-to-date-methods-of-ie-shielding-0day"
    },
    "/blog/post/40.html": {
        status: 301,
        destination: "/blog/40a"
    },
    "/blog/post/40tiaojzuojiawuxiaojiqiao.html": {
        status: 301,
        destination: "/blog/40tiaojzuojiawuxiaojiqiao"
    },
    "/blog/post/41.html": {
        status: 301,
        destination: "/blog/41a"
    },
    "/blog/post/429.html": {
        status: 301,
        destination: "/blog/429a"
    },
    "/blog/post/43.html": {
        status: 301,
        destination: "/blog/43a"
    },
    "/blog/post/430.html": {
        status: 301,
        destination: "/blog/430a"
    },
    "/blog/post/444.html": {
        status: 301,
        destination: "/blog/444a"
    },
    "/blog/post/44QQtubiao.html": {
        status: 301,
        destination: "/blog/44qqtubiao"
    },
    "/blog/post/458.html": {
        status: 301,
        destination: "/blog/458a"
    },
    "/blog/post/46.html": {
        status: 301,
        destination: "/blog/46a"
    },
    "/blog/post/47.html": {
        status: 301,
        destination: "/blog/47a"
    },
    "/blog/post/48.html": {
        status: 301,
        destination: "/blog/48a"
    },
    "/blog/post/488.html": {
        status: 301,
        destination: "/blog/488a"
    },
    "/blog/post/49.html": {
        status: 301,
        destination: "/blog/49a"
    },
    "/blog/post/497.html": {
        status: 301,
        destination: "/blog/497a"
    },
    "/blog/post/499.html": {
        status: 301,
        destination: "/blog/499a"
    },
    "/blog/post/5-shift-backdoor-3389.html": {
        status: 301,
        destination: "/blog/5-shift-backdoor-3389"
    },
    "/blog/post/5-way-screen-Linux-desktop.html": {
        status: 301,
        destination: "/blog/5-way-screen-linux-desktop"
    },
    "/blog/post/5-zhong-kaiyuan-xieyi-bijiao.html": {
        status: 301,
        destination: "/blog/5-zhong-kaiyuan-xieyi-bijiao"
    },
    "/blog/post/50-ge-xiaoyu-100k-windows-ruanjian.html": {
        status: 301,
        destination: "/blog/50-ge-xiaoyu-100k-windows-ruanjian"
    },
    "/blog/post/50.html": {
        status: 301,
        destination: "/blog/50a"
    },
    "/blog/post/508.html": {
        status: 301,
        destination: "/blog/508a"
    },
    "/blog/post/51.html": {
        status: 301,
        destination: "/blog/51a"
    },
    "/blog/post/515.html": {
        status: 301,
        destination: "/blog/515a"
    },
    "/blog/post/517.html": {
        status: 301,
        destination: "/blog/517a"
    },
    "/blog/post/52.html": {
        status: 301,
        destination: "/blog/52a"
    },
    "/blog/post/522.html": {
        status: 301,
        destination: "/blog/522a"
    },
    "/blog/post/523.html": {
        status: 301,
        destination: "/blog/523a"
    },
    "/blog/post/528.html": {
        status: 301,
        destination: "/blog/528a"
    },
    "/blog/post/54.html": {
        status: 301,
        destination: "/blog/54a"
    },
    "/blog/post/56.html": {
        status: 301,
        destination: "/blog/56a"
    },
    "/blog/post/563.html": {
        status: 301,
        destination: "/blog/563a"
    },
    "/blog/post/57.html": {
        status: 301,
        destination: "/blog/57a"
    },
    "/blog/post/58.html": {
        status: 301,
        destination: "/blog/58a"
    },
    "/blog/post/59.html": {
        status: 301,
        destination: "/blog/59a"
    },
    "/blog/post/5Shift-sethc.html": {
        status: 301,
        destination: "/blog/5shift-sethc"
    },
    "/blog/post/6.html": {
        status: 301,
        destination: "/blog/6a"
    },
    "/blog/post/60.html": {
        status: 301,
        destination: "/blog/60a"
    },
    "/blog/post/61.html": {
        status: 301,
        destination: "/blog/61a"
    },
    "/blog/post/62.html": {
        status: 301,
        destination: "/blog/62a"
    },
    "/blog/post/63.html": {
        status: 301,
        destination: "/blog/63a"
    },
    "/blog/post/64.html": {
        status: 301,
        destination: "/blog/64a"
    },
    "/blog/post/65.html": {
        status: 301,
        destination: "/blog/65a"
    },
    "/blog/post/66.html": {
        status: 301,
        destination: "/blog/66a"
    },
    "/blog/post/67.html": {
        status: 301,
        destination: "/blog/67a"
    },
    "/blog/post/673.html": {
        status: 301,
        destination: "/blog/673a"
    },
    "/blog/post/679.html": {
        status: 301,
        destination: "/blog/679a"
    },
    "/blog/post/68.html": {
        status: 301,
        destination: "/blog/68a"
    },
    "/blog/post/69.html": {
        status: 301,
        destination: "/blog/69a"
    },
    "/blog/post/7.html": {
        status: 301,
        destination: "/blog/7a"
    },
    "/blog/post/70.html": {
        status: 301,
        destination: "/blog/70a"
    },
    "/blog/post/71.html": {
        status: 301,
        destination: "/blog/71a"
    },
    "/blog/post/72.html": {
        status: 301,
        destination: "/blog/72a"
    },
    "/blog/post/73.html": {
        status: 301,
        destination: "/blog/73a"
    },
    "/blog/post/732.html": {
        status: 301,
        destination: "/blog/732a"
    },
    "/blog/post/74.html": {
        status: 301,
        destination: "/blog/74a"
    },
    "/blog/post/75.html": {
        status: 301,
        destination: "/blog/75a"
    },
    "/blog/post/77.html": {
        status: 301,
        destination: "/blog/77a"
    },
    "/blog/post/779.html": {
        status: 301,
        destination: "/blog/779a"
    },
    "/blog/post/78.html": {
        status: 301,
        destination: "/blog/78a"
    },
    "/blog/post/780.html": {
        status: 301,
        destination: "/blog/780a"
    },
    "/blog/post/787.html": {
        status: 301,
        destination: "/blog/787a"
    },
    "/blog/post/789.html": {
        status: 301,
        destination: "/blog/789a"
    },
    "/blog/post/79.html": {
        status: 301,
        destination: "/blog/79a"
    },
    "/blog/post/7jian-deZender-1.2.html": {
        status: 301,
        destination: "/blog/7jian-dezender-1-2"
    },
    "/blog/post/80-hou-qianwan-fuweng.html": {
        status: 301,
        destination: "/blog/80-hou-qianwan-fuweng"
    },
    "/blog/post/80.html": {
        status: 301,
        destination: "/blog/80a"
    },
    "/blog/post/800.html": {
        status: 301,
        destination: "/blog/800a"
    },
    "/blog/post/81.html": {
        status: 301,
        destination: "/blog/81a"
    },
    "/blog/post/817.html": {
        status: 301,
        destination: "/blog/817a"
    },
    "/blog/post/82.html": {
        status: 301,
        destination: "/blog/82a"
    },
    "/blog/post/83.html": {
        status: 301,
        destination: "/blog/83a"
    },
    "/blog/post/84.html": {
        status: 301,
        destination: "/blog/84a"
    },
    "/blog/post/85.html": {
        status: 301,
        destination: "/blog/85a"
    },
    "/blog/post/86.html": {
        status: 301,
        destination: "/blog/86a"
    },
    "/blog/post/864.html": {
        status: 301,
        destination: "/blog/864a"
    },
    "/blog/post/865.html": {
        status: 301,
        destination: "/blog/865a"
    },
    "/blog/post/87.html": {
        status: 301,
        destination: "/blog/87a"
    },
    "/blog/post/88.html": {
        status: 301,
        destination: "/blog/88a"
    },
    "/blog/post/89.html": {
        status: 301,
        destination: "/blog/89a"
    },
    "/blog/post/9.html": {
        status: 301,
        destination: "/blog/9a"
    },
    "/blog/post/90.html": {
        status: 301,
        destination: "/blog/90a"
    },
    "/blog/post/91.html": {
        status: 301,
        destination: "/blog/91a"
    },
    "/blog/post/911.html": {
        status: 301,
        destination: "/blog/911a"
    },
    "/blog/post/92.html": {
        status: 301,
        destination: "/blog/92a"
    },
    "/blog/post/93.html": {
        status: 301,
        destination: "/blog/93a"
    },
    "/blog/post/94.html": {
        status: 301,
        destination: "/blog/94a"
    },
    "/blog/post/96.html": {
        status: 301,
        destination: "/blog/96a"
    },
    "/blog/post/963.html": {
        status: 301,
        destination: "/blog/963a"
    },
    "/blog/post/97.html": {
        status: 301,
        destination: "/blog/97a"
    },
    "/blog/post/98.html": {
        status: 301,
        destination: "/blog/98a"
    },
    "/blog/post/99.html": {
        status: 301,
        destination: "/blog/99a"
    },
    "/blog/post/a-D-coding-tool-v1.0.html": {
        status: 301,
        destination: "/blog/a-d-coding-tool-v1-0"
    },
    "/blog/post/A4zhiCDbao.html": {
        status: 301,
        destination: "/blog/a4zhicdbao"
    },
    "/blog/post/about-caffe.html": {
        status: 301,
        destination: "/blog/about-caffe"
    },
    "/blog/post/Acunetix-Web-Vulnerability-Scanner-6.0.html": {
        status: 301,
        destination: "/blog/acunetix-web-vulnerability-scanner-60"
    },
    "/blog/post/Adobe-CS5-MyCrack.html": {
        status: 301,
        destination: "/blog/adobe-cs5-mycrack"
    },
    "/blog/post/Adobe-CS6-pojiebuding.html": {
        status: 301,
        destination: "/blog/adobe-cs6-pojiebuding"
    },
    "/blog/post/Adobe-Dreamweaver-CS5-chs-lvse.html": {
        status: 301,
        destination: "/blog/adobe-dreamweaver-cs5-chs-lvse"
    },
    "/blog/post/Adobe-Flash-Professional-CS5.5-cn-lvse.html": {
        status: 301,
        destination: "/blog/adobe-flash-professional-cs55-cn-lvse"
    },
    "/blog/post/Adobe-Flex-4.6.html": {
        status: 301,
        destination: "/blog/adobe-flex-46"
    },
    "/blog/post/Adobe-ImageReady-CS2-jiantizhongwen-lvse.html": {
        status: 301,
        destination: "/blog/adobe-imageready-cs2-jiantizhongwen-lvse"
    },
    "/blog/post/Adobe-PDF-Reader-JBIG2-Local-Buffer-Overflow-PoC.html": {
        status: 301,
        destination: "/blog/adobe-pdf-reader-jbig2-local-buffer-overflow-poc"
    },
    "/blog/post/Adobe-Photoshop-Lightroom-5.4.html": {
        status: 301,
        destination: "/blog/adobe-photoshop-lightroom-54"
    },
    "/blog/post/Adobe-Premiere-Pro-CS4.html": {
        status: 301,
        destination: "/blog/adobe-premiere-pro-cs4"
    },
    "/blog/post/Adobe-Reader-for-Android.html": {
        status: 301,
        destination: "/blog/adobe-reader-for-android"
    },
    "/blog/post/ADSLph.html": {
        status: 301,
        destination: "/blog/adslph"
    },
    "/blog/post/Adtoll-Add-ad-group.html": {
        status: 301,
        destination: "/blog/adtoll-add-ad-group"
    },
    "/blog/post/Adtoll.html": {
        status: 301,
        destination: "/blog/adtoll"
    },
    "/blog/post/After-Effects-CS6-11.0.2.12-lvsejingjian.html": {
        status: 301,
        destination: "/blog/after-effects-cs6-110212-lvsejingjian"
    },
    "/blog/post/AfterEffects-CS6-pojieban.html": {
        status: 301,
        destination: "/blog/aftereffects-cs6-pojieban"
    },
    "/blog/post/Alchemy-Remote-Control-Pro-3.4.1.html": {
        status: 301,
        destination: "/blog/alchemy-remote-control-pro-341"
    },
    "/blog/post/alimama.html": {
        status: 301,
        destination: "/blog/alimama"
    },
    "/blog/post/aliwangwang-quguanggao-v1.1.html": {
        status: 301,
        destination: "/blog/aliwangwang-quguanggao-v11"
    },
    "/blog/post/andLinux-Beta2-rc1.html": {
        status: 301,
        destination: "/blog/andlinux-beta2-rc1"
    },
    "/blog/post/android-kaifashipintuijian.html": {
        status: 301,
        destination: "/blog/android-kaifashipintuijian"
    },
    "/blog/post/android-shengdian.html": {
        status: 301,
        destination: "/blog/android-shengdian"
    },
    "/blog/post/Android-sougou-shurufa-1.39.html": {
        status: 301,
        destination: "/blog/android-sougou-shurufa-139"
    },
    "/blog/post/android-xitongchengxuyidongdaoSDka.html": {
        status: 301,
        destination: "/blog/android-xitongchengxuyidongdaosdka"
    },
    "/blog/post/Android.html": {
        status: 301,
        destination: "/blog/android"
    },
    "/blog/post/Anti-iframe.html": {
        status: 301,
        destination: "/blog/anti-iframe"
    },
    "/blog/post/anweirendehua.html": {
        status: 301,
        destination: "/blog/anweirendehua"
    },
    "/blog/post/AnyHub.net.html": {
        status: 301,
        destination: "/blog/anyhubnet"
    },
    "/blog/post/AnyRouter-v2.73.html": {
        status: 301,
        destination: "/blog/anyrouter-v273"
    },
    "/blog/post/AoYou-Maxthon-2.0.6beta.html": {
        status: 301,
        destination: "/blog/aoyou-maxthon-206beta"
    },
    "/blog/post/AoYou-Maxthon-2.0.9-beta-download.html": {
        status: 301,
        destination: "/blog/aoyou-maxthon-209-beta-download"
    },
    "/blog/post/aoyou-Maxthon-2.0.9.1640.html": {
        status: 301,
        destination: "/blog/aoyou-maxthon-2091640"
    },
    "/blog/post/aoyou-Maxthon-2.1-release.html": {
        status: 301,
        destination: "/blog/aoyou-maxthon-21-release"
    },
    "/blog/post/Aoyou-Maxthon-and-XunLei-Thunder.html": {
        status: 301,
        destination: "/blog/aoyou-maxthon-and-xunlei-thunder"
    },
    "/blog/post/Apache-DoS-exploit.html": {
        status: 301,
        destination: "/blog/apache-dos-exploit"
    },
    "/blog/post/AppBand-V1.0.6.html": {
        status: 301,
        destination: "/blog/appband-v106"
    },
    "/blog/post/Apple-iTunes-8.1.1.10-itms-itcp-Remote-Buffer-Overflow-Exploit-win.html": {
        status: 301,
        destination: "/blog/apple-itunes-81110-itms-itcp-remote-buffer-overflow-exploit-win"
    },
    "/blog/post/Apple-WWDC-2010-Keynote.html": {
        status: 301,
        destination: "/blog/apple-wwdc-2010-keynote"
    },
    "/blog/post/Application-Hide.html": {
        status: 301,
        destination: "/blog/application-hide"
    },
    "/blog/post/apt-fast-axel-apt-get.html": {
        status: 301,
        destination: "/blog/apt-fast-axel-apt-get"
    },
    "/blog/post/apt.html": {
        status: 301,
        destination: "/blog/apt"
    },
    "/blog/post/aptitude.html": {
        status: 301,
        destination: "/blog/aptitude"
    },
    "/blog/post/Arch-Linux-2009.08.html": {
        status: 301,
        destination: "/blog/arch-linux-200908"
    },
    "/blog/post/Arch-Linux-2010.05.html": {
        status: 301,
        destination: "/blog/arch-linux-201005"
    },
    "/blog/post/Archlinux-2009.02.html": {
        status: 301,
        destination: "/blog/archlinux-200902"
    },
    "/blog/post/ARP-concept-attack-defend.html": {
        status: 301,
        destination: "/blog/arp-concept-attack-defend"
    },
    "/blog/post/ASP-ADODB.Recordset-800a0bb9.html": {
        status: 301,
        destination: "/blog/asp-adodbrecordset-800a0bb9"
    },
    "/blog/post/ASP-FSO-zujian-xiangjie-shuoming.html": {
        status: 301,
        destination: "/blog/asp-fso-zujian-xiangjie-shuoming"
    },
    "/blog/post/ASP-pack-to-xml.html": {
        status: 301,
        destination: "/blog/asp-pack-to-xml"
    },
    "/blog/post/ASP.net-from-entry-to-master-18h-DVD.html": {
        status: 301,
        destination: "/blog/aspnet-from-entry-to-master-18h-dvd"
    },
    "/blog/post/ASPMaker-v7.1.0.3.html": {
        status: 301,
        destination: "/blog/aspmaker-v7103"
    },
    "/blog/post/ASPRunner-Professional-v6.0.766.html": {
        status: 301,
        destination: "/blog/asprunner-professional-v60766"
    },
    "/blog/post/ASUS-pinzhi-panshi-YouTube-video.html": {
        status: 301,
        destination: "/blog/asus-pinzhi-panshi-youtube-video"
    },
    "/blog/post/Atop.html": {
        status: 301,
        destination: "/blog/atop"
    },
    "/blog/post/Audacious.html": {
        status: 301,
        destination: "/blog/audacious"
    },
    "/blog/post/Audition-CS6-5.0.2-zhongwenlvsejingjian.html": {
        status: 301,
        destination: "/blog/audition-cs6-502-zhongwenlvsejingjian"
    },
    "/blog/post/AutoCAD-2010-longjuanfeng-V1.0.html": {
        status: 301,
        destination: "/blog/autocad-2010-longjuanfeng-v10"
    },
    "/blog/post/AutoCAD-2011-CHS-keygen.html": {
        status: 301,
        destination: "/blog/autocad-2011-chs-keygen"
    },
    "/blog/post/Autodesk-Maya-2013-zhongwenpojiejihuo.html": {
        status: 301,
        destination: "/blog/autodesk-maya-2013-zhongwenpojiejihuo"
    },
    "/blog/post/Autoruninf-Handbook.html": {
        status: 301,
        destination: "/blog/autoruninf-handbook"
    },
    "/blog/post/Autorun.inf.html": {
        status: 301,
        destination: "/blog/autoruninf"
    },
    "/blog/post/AVG-Anti-Spyware-v7.5.1.43-3399-CHS-Crack.html": {
        status: 301,
        destination: "/blog/avg-anti-spyware-v75143-3399-chs-crack"
    },
    "/blog/post/AVG-Anti-Virus-8.0-Build-62a1257.html": {
        status: 301,
        destination: "/blog/avg-anti-virus-80-build-62a1257"
    },
    "/blog/post/AVG-Anti-Virus-Internet-Security-8.0.81-Build-1271.html": {
        status: 301,
        destination: "/blog/avg-anti-virus-internet-security-8081-build-1271"
    },
    "/blog/post/AVG-Anti-Virus-Professional-Edition-v8.0.93-key.html": {
        status: 301,
        destination: "/blog/avg-anti-virus-professional-edition-v8093-key"
    },
    "/blog/post/Aviv-Raff-IE-0day-Print-Table-of-Links.html": {
        status: 301,
        destination: "/blog/aviv-raff-ie-0day-print-table-of-links"
    },
    "/blog/post/Babylon7.html": {
        status: 301,
        destination: "/blog/babylon7"
    },
    "/blog/post/BackTrack-5.html": {
        status: 301,
        destination: "/blog/backtrack-5"
    },
    "/blog/post/Backup-for-root-users-Android.html": {
        status: 301,
        destination: "/blog/backup-for-root-users-android"
    },
    "/blog/post/baidu-10-da-zuizhuang.html": {
        status: 301,
        destination: "/blog/baidu-10-da-zuizhuang"
    },
    "/blog/post/baiduhi-baidu-hi-yaoqing-fafang.html": {
        status: 301,
        destination: "/blog/baiduhi-baidu-hi-yaoqing-fafang"
    },
    "/blog/post/baiduHi-v1.0.4.1-xiazai.html": {
        status: 301,
        destination: "/blog/baiduhi-v1041-xiazai"
    },
    "/blog/post/baiduhi-yaoqing-shenqing.html": {
        status: 301,
        destination: "/blog/baiduhi-yaoqing-shenqing"
    },
    "/blog/post/baiseerjixianzanglezenmeban.html": {
        status: 301,
        destination: "/blog/baiseerjixianzanglezenmeban"
    },
    "/blog/post/baofeng-2008-beta1-0day.html": {
        status: 301,
        destination: "/blog/baofeng-2008-beta1-0day"
    },
    "/blog/post/BaoFeng-Storm-M3U-File-Processing-Buffer-Overflow-Exploit.html": {
        status: 301,
        destination: "/blog/baofeng-storm-m3u-file-processing-buffer-overflow-exploit"
    },
    "/blog/post/baofeng3-3.07.11.13.html": {
        status: 301,
        destination: "/blog/baofeng3-3071113"
    },
    "/blog/post/BaoFengYingYin-3.7.11.13-DOS-0day.html": {
        status: 301,
        destination: "/blog/baofengyingyin-371113-dos-0day"
    },
    "/blog/post/BaoFengYingYin-QuGuangGao-BuDing-v1.81.html": {
        status: 301,
        destination: "/blog/baofengyingyin-quguanggao-buding-v181"
    },
    "/blog/post/baofengzhuanma-2009-beta1.html": {
        status: 301,
        destination: "/blog/baofengzhuanma-2009-beta1"
    },
    "/blog/post/baoku-yuanli-fangfa.html": {
        status: 301,
        destination: "/blog/baoku-yuanli-fangfa"
    },
    "/blog/post/BBSXP-2008-0day.html": {
        status: 301,
        destination: "/blog/bbsxp-2008-0day"
    },
    "/blog/post/Beauty.On.Duty.html": {
        status: 301,
        destination: "/blog/beautyonduty"
    },
    "/blog/post/beitengyuanyin.html": {
        status: 301,
        destination: "/blog/beitengyuanyin"
    },
    "/blog/post/bianyi-linux-neihe-fangfa.html": {
        status: 301,
        destination: "/blog/bianyi-linux-neihe-fangfa"
    },
    "/blog/post/bingpiyuebingdezuofa.html": {
        status: 301,
        destination: "/blog/bingpiyuebingdezuofa"
    },
    "/blog/post/bingqilindezuofa.html": {
        status: 301,
        destination: "/blog/bingqilindezuofa"
    },
    "/blog/post/BitTorrent-Sync.html": {
        status: 301,
        destination: "/blog/bittorrent-sync"
    },
    "/blog/post/biyelunwendabianjiqiao.html": {
        status: 301,
        destination: "/blog/biyelunwendabianjiqiao"
    },
    "/blog/post/BlackSn0w-iPhone.html": {
        status: 301,
        destination: "/blog/blacksn0w-iphone"
    },
    "/blog/post/Bleachbit.html": {
        status: 301,
        destination: "/blog/bleachbit"
    },
    "/blog/post/blog-10years.html": {
        status: 301,
        destination: "/blog/blog-10years"
    },
    "/blog/post/blog-11years.html": {
        status: 301,
        destination: "/blog/blog-11years"
    },
    "/blog/post/blog-3years.html": {
        status: 301,
        destination: "/blog/blog-3years"
    },
    "/blog/post/blog-4years.html": {
        status: 301,
        destination: "/blog/blog-4years"
    },
    "/blog/post/blog-5years.html": {
        status: 301,
        destination: "/blog/blog-5years"
    },
    "/blog/post/blog-6years.html": {
        status: 301,
        destination: "/blog/blog-6years"
    },
    "/blog/post/blog-7years.html": {
        status: 301,
        destination: "/blog/blog-7years"
    },
    "/blog/post/BlueProximity.html": {
        status: 301,
        destination: "/blog/blueproximity"
    },
    "/blog/post/Bo-Blog-2.0.3-SQLInjection.html": {
        status: 301,
        destination: "/blog/bo-blog-203-sqlinjection"
    },
    "/blog/post/breach-windows-EFS-decrypt.html": {
        status: 301,
        destination: "/blog/breach-windows-efs-decrypt"
    },
    "/blog/post/btxiazaishangyingpan.html": {
        status: 301,
        destination: "/blog/btxiazaishangyingpan"
    },
    "/blog/post/buffer-overflow-rudiment.html": {
        status: 301,
        destination: "/blog/buffer-overflow-rudiment"
    },
    "/blog/post/Buffer-Overflow-Tutorial-ebook-ISO-download.html": {
        status: 301,
        destination: "/blog/buffer-overflow-tutorial-ebook-iso-download"
    },
    "/blog/post/Bump-Android.html": {
        status: 301,
        destination: "/blog/bump-android"
    },
    "/blog/post/C-programming-language-Free-online-teach-2007122120.html": {
        status: 301,
        destination: "/blog/c-programming-language-free-online-teach-2007122120"
    },
    "/blog/post/C-programming-TanHaoQiang-video-csf.html": {
        status: 301,
        destination: "/blog/c-programming-tanhaoqiang-video-csf"
    },
    "/blog/post/C.C.T-ImeRdp_win.html": {
        status: 301,
        destination: "/blog/cct-imerdp_win"
    },
    "/blog/post/caihongbiao-yuanli.html": {
        status: 301,
        destination: "/blog/caihongbiao-yuanli"
    },
    "/blog/post/CAJ-NH-KDH-yueduqi.html": {
        status: 301,
        destination: "/blog/caj-nh-kdh-yueduqi"
    },
    "/blog/post/Calculate-Linux-10.0.html": {
        status: 301,
        destination: "/blog/calculate-linux-100"
    },
    "/blog/post/camouflage-Google-Bot.html": {
        status: 301,
        destination: "/blog/camouflage-google-bot"
    },
    "/blog/post/CCTV-FaZhi-hacker-ZhenXiang.html": {
        status: 301,
        destination: "/blog/cctv-fazhi-hacker-zhenxiang"
    },
    "/blog/post/CDlinux-0.9.3.html": {
        status: 301,
        destination: "/blog/cdlinux-093"
    },
    "/blog/post/CentOS-4.9.html": {
        status: 301,
        destination: "/blog/centos-49"
    },
    "/blog/post/CentOS-5.4.html": {
        status: 301,
        destination: "/blog/centos-54"
    },
    "/blog/post/CentOS-5.5.html": {
        status: 301,
        destination: "/blog/centos-55"
    },
    "/blog/post/CentOS-5.6.html": {
        status: 301,
        destination: "/blog/centos-56"
    },
    "/blog/post/CentOS-5.8.html": {
        status: 301,
        destination: "/blog/centos-58"
    },
    "/blog/post/Centos-6.0.html": {
        status: 301,
        destination: "/blog/centos-60"
    },
    "/blog/post/CentOS-6.1.html": {
        status: 301,
        destination: "/blog/centos-61"
    },
    "/blog/post/CentOS-6.2.html": {
        status: 301,
        destination: "/blog/centos-62"
    },
    "/blog/post/CentOS-6.3.html": {
        status: 301,
        destination: "/blog/centos-63"
    },
    "/blog/post/CentOS-6.4.html": {
        status: 301,
        destination: "/blog/centos-64"
    },
    "/blog/post/CentOS-6.6.html": {
        status: 301,
        destination: "/blog/centos-66"
    },
    "/blog/post/CentOS-7.html": {
        status: 301,
        destination: "/blog/centos-7"
    },
    "/blog/post/changweijinjifatujie.html": {
        status: 301,
        destination: "/blog/changweijinjifatujie"
    },
    "/blog/post/chayegongxiaoyuzuoyong.html": {
        status: 301,
        destination: "/blog/chayegongxiaoyuzuoyong"
    },
    "/blog/post/chenanzhi-chenggongxue.html": {
        status: 301,
        destination: "/blog/chenanzhi-chenggongxue"
    },
    "/blog/post/chenjinshixuegit.html": {
        status: 301,
        destination: "/blog/chenjinshixuegit"
    },
    "/blog/post/chetouzhenzachechuangboli.html": {
        status: 301,
        destination: "/blog/chetouzhenzachechuangboli"
    },
    "/blog/post/chitangpaofanshangwei.html": {
        status: 301,
        destination: "/blog/chitangpaofanshangwei"
    },
    "/blog/post/chixiguahuizhangpangma.html": {
        status: 301,
        destination: "/blog/chixiguahuizhangpangma"
    },
    "/blog/post/CHMmuma.html": {
        status: 301,
        destination: "/blog/chmmuma"
    },
    "/blog/post/chongdianwanshoujihuibaozhama.html": {
        status: 301,
        destination: "/blog/chongdianwanshoujihuibaozhama"
    },
    "/blog/post/ChromePass.html": {
        status: 301,
        destination: "/blog/chromepass"
    },
    "/blog/post/chuangkoubiaotilankanbudao.html": {
        status: 301,
        destination: "/blog/chuangkoubiaotilankanbudao"
    },
    "/blog/post/ChuanHuanYuan-JiQiGou.html": {
        status: 301,
        destination: "/blog/chuanhuanyuan-jiqigou"
    },
    "/blog/post/Clean-Disk-Security-v7.75.html": {
        status: 301,
        destination: "/blog/clean-disk-security-v775"
    },
    "/blog/post/Clickjacking-neimu.html": {
        status: 301,
        destination: "/blog/clickjacking-neimu"
    },
    "/blog/post/Codeweavers-CrossOver7-Wine-linux.html": {
        status: 301,
        destination: "/blog/codeweavers-crossover7-wine-linux"
    },
    "/blog/post/Color-Storm-10.9.8.1.html": {
        status: 301,
        destination: "/blog/color-storm-10981"
    },
    "/blog/post/command-line-add-user.html": {
        status: 301,
        destination: "/blog/command-line-add-user"
    },
    "/blog/post/Comodo-EasyVPN-1.0.58165.43.html": {
        status: 301,
        destination: "/blog/comodo-easyvpn-105816543"
    },
    "/blog/post/Completely-with-Linux-work.html": {
        status: 301,
        destination: "/blog/completely-with-linux-work"
    },
    "/blog/post/Computer-software-hardware-Ebook-071225.html": {
        status: 301,
        destination: "/blog/computer-software-hardware-ebook-071225"
    },
    "/blog/post/computer-technique.html": {
        status: 301,
        destination: "/blog/computer-technique"
    },
    "/blog/post/computer-virus.html": {
        status: 301,
        destination: "/blog/computer-virus"
    },
    "/blog/post/configure.html": {
        status: 301,
        destination: "/blog/configure"
    },
    "/blog/post/cong-suzhou-huilai.html": {
        status: 301,
        destination: "/blog/cong-suzhou-huilai"
    },
    "/blog/post/congyoubingdezuofa.html": {
        status: 301,
        destination: "/blog/congyoubingdezuofa"
    },
    "/blog/post/Cookie-injection-how-the.html": {
        status: 301,
        destination: "/blog/cookie-injection-how-the"
    },
    "/blog/post/cookies-injection-method-theory.html": {
        status: 301,
        destination: "/blog/cookies-injection-method-theory"
    },
    "/blog/post/CPU-G-CPU-Z-for-Linux.html": {
        status: 301,
        destination: "/blog/cpu-g-cpu-z-for-linux"
    },
    "/blog/post/cpulimit.html": {
        status: 301,
        destination: "/blog/cpulimit"
    },
    "/blog/post/CRAntiARP4.2.html": {
        status: 301,
        destination: "/blog/crantiarp42"
    },
    "/blog/post/CrossLoop-v2.43.html": {
        status: 301,
        destination: "/blog/crossloop-v243"
    },
    "/blog/post/CrossOver-v1.0.html": {
        status: 301,
        destination: "/blog/crossover-v10"
    },
    "/blog/post/CSRF-GongJu-Yu-FangYu.html": {
        status: 301,
        destination: "/blog/csrf-gongju-yu-fangyu"
    },
    "/blog/post/CSS-guama-fangfan.html": {
        status: 301,
        destination: "/blog/css-guama-fangfan"
    },
    "/blog/post/da-hua-she-ji-mo-shi.html": {
        status: 301,
        destination: "/blog/da-hua-she-ji-mo-shi"
    },
    "/blog/post/DameWare-NT-Utilities-v6.8.1.0.html": {
        status: 301,
        destination: "/blog/dameware-nt-utilities-v6810"
    },
    "/blog/post/danchaofanzenmeyangzuocainenglilifenkai.html": {
        status: 301,
        destination: "/blog/danchaofanzenmeyangzuocainenglilifenkai"
    },
    "/blog/post/danchaofanzenmezuocaihaochi.html": {
        status: 301,
        destination: "/blog/danchaofanzenmezuocaihaochi"
    },
    "/blog/post/danfanshoudongpaishejiqiao.html": {
        status: 301,
        destination: "/blog/danfanshoudongpaishejiqiao"
    },
    "/blog/post/dantadezuofa.html": {
        status: 301,
        destination: "/blog/dantadezuofa"
    },
    "/blog/post/Danware-NetOp-Remote-Control-v9.22-Build-2009056.html": {
        status: 301,
        destination: "/blog/danware-netop-remote-control-v922-build-2009056"
    },
    "/blog/post/Debian-6.0-Squeeze.html": {
        status: 301,
        destination: "/blog/debian-60-squeeze"
    },
    "/blog/post/Debian-7.0-wheezy.html": {
        status: 301,
        destination: "/blog/debian-70-wheezy"
    },
    "/blog/post/Debian-GNU-Linux-4.0-r4.html": {
        status: 301,
        destination: "/blog/debian-gnu-linux-40-r4"
    },
    "/blog/post/Debian-GNU-Linux-4.0-r5.html": {
        status: 301,
        destination: "/blog/debian-gnu-linux-40-r5"
    },
    "/blog/post/Debian-GNU-Linux-5.0-Lenny.html": {
        status: 301,
        destination: "/blog/debian-gnu-linux-50-lenny"
    },
    "/blog/post/Debian-GNU-Linux-5.0.1.html": {
        status: 301,
        destination: "/blog/debian-gnu-linux-501"
    },
    "/blog/post/Debian-GNU-Linux-5.0.2.html": {
        status: 301,
        destination: "/blog/debian-gnu-linux-502"
    },
    "/blog/post/Debian-GNU-Linux-5.0.4.html": {
        status: 301,
        destination: "/blog/debian-gnu-linux-504"
    },
    "/blog/post/Debian-Lenny-5.0-RC1.html": {
        status: 301,
        destination: "/blog/debian-lenny-50-rc1"
    },
    "/blog/post/Debian-Live-5.0-Beta1.html": {
        status: 301,
        destination: "/blog/debian-live-50-beta1"
    },
    "/blog/post/decipher-internet-marketing.html": {
        status: 301,
        destination: "/blog/decipher-internet-marketing"
    },
    "/blog/post/DeDecms-5.1-gbk-0day.html": {
        status: 301,
        destination: "/blog/dedecms-51-gbk-0day"
    },
    "/blog/post/Deepin-GHOST-Windows-XP-SP3-V8.1.html": {
        status: 301,
        destination: "/blog/deepin-ghost-windows-xp-sp3-v81"
    },
    "/blog/post/Deepin-GHOST-XP-SP3-V9.0-ISO.html": {
        status: 301,
        destination: "/blog/deepin-ghost-xp-sp3-v90-iso"
    },
    "/blog/post/Deepin-LiteXP-Windows-XP-SP3-V6.2.html": {
        status: 301,
        destination: "/blog/deepin-litexp-windows-xp-sp3-v62"
    },
    "/blog/post/DeskSMS-Chrome-Android.html": {
        status: 301,
        destination: "/blog/desksms-chrome-android"
    },
    "/blog/post/detecting-android-x86-rebooting-in-60-seconds.html": {
        status: 301,
        destination: "/blog/detecting-android-x86-rebooting-in-60-seconds"
    },
    "/blog/post/dianfanbaozuodangaodefangfa.html": {
        status: 301,
        destination: "/blog/dianfanbaozuodangaodefangfa"
    },
    "/blog/post/diannaofanyingmanzenmechuli.html": {
        status: 301,
        destination: "/blog/diannaofanyingmanzenmechuli"
    },
    "/blog/post/diannaoxiumianyudaijiqubie.html": {
        status: 301,
        destination: "/blog/diannaoxiumianyudaijiqubie"
    },
    "/blog/post/dianshi-diannaoxianshiqi.html": {
        status: 301,
        destination: "/blog/dianshi-diannaoxianshiqi"
    },
    "/blog/post/dianshihezianzhuangsmdianshiruanjian.html": {
        status: 301,
        destination: "/blog/dianshihezianzhuangsmdianshiruanjian"
    },
    "/blog/post/dianshihezinagepaizihao.html": {
        status: 301,
        destination: "/blog/dianshihezinagepaizihao"
    },
    "/blog/post/Digitize-CAPTCHA.html": {
        status: 301,
        destination: "/blog/digitize-captcha"
    },
    "/blog/post/Discuz!-6.0.0-0Day.html": {
        status: 301,
        destination: "/blog/discuz!-600-0day"
    },
    "/blog/post/Discuz!-6.x-7.x-SODB-2008-13-Exploit.html": {
        status: 301,
        destination: "/blog/discuz!-6x-7x-sodb-2008-13-exploit"
    },
    "/blog/post/Discuz!-7.1-7.2-yuancheng-daima-zhixing-loudong.html": {
        status: 301,
        destination: "/blog/discuz!-71-72-yuancheng-daima-zhixing-loudong"
    },
    "/blog/post/Discuz-guanfang-luntan-beihei.html": {
        status: 301,
        destination: "/blog/discuz-guanfang-luntan-beihei"
    },
    "/blog/post/diyicihenvhaiyuehuizhuyishenme.html": {
        status: 301,
        destination: "/blog/diyicihenvhaiyuehuizhuyishenme"
    },
    "/blog/post/diyicijianzhangmuniang.html": {
        status: 301,
        destination: "/blog/diyicijianzhangmuniang"
    },
    "/blog/post/dongchuangzenmegenzhi.html": {
        status: 301,
        destination: "/blog/dongchuangzenmegenzhi"
    },
    "/blog/post/DoubleClickFix-v1.0.1020.1.html": {
        status: 301,
        destination: "/blog/doubleclickfix-v1010201"
    },
    "/blog/post/Dreamweaver-CS4.html": {
        status: 301,
        destination: "/blog/dreamweaver-cs4"
    },
    "/blog/post/Dreamweaver-CS6-jiantizhongwenpojie.html": {
        status: 301,
        destination: "/blog/dreamweaver-cs6-jiantizhongwenpojie"
    },
    "/blog/post/Dreamweaver-CS6-sn-zhongwenjingjianlvsepojie.html": {
        status: 301,
        destination: "/blog/dreamweaver-cs6-sn-zhongwenjingjianlvsepojie"
    },
    "/blog/post/Dropbox.html": {
        status: 301,
        destination: "/blog/dropbox"
    },
    "/blog/post/dvbbs-8.1-0day-userpay-Access-MSSQL.html": {
        status: 301,
        destination: "/blog/dvbbs-81-0day-userpay-access-mssql"
    },
    "/blog/post/dvbbs-php-2.0-0day.html": {
        status: 301,
        destination: "/blog/dvbbs-php-20-0day"
    },
    "/blog/post/dvbbs8.2-access-sql-version-login.asp-remote-sql-injection.html": {
        status: 301,
        destination: "/blog/dvbbs82-access-sql-version-loginasp-remote-sql-injection"
    },
    "/blog/post/e2php.html": {
        status: 301,
        destination: "/blog/e2php"
    },
    "/blog/post/eBoostr-V1.1-zhongwen-mianfei-pojie.html": {
        status: 301,
        destination: "/blog/eboostr-v11-zhongwen-mianfei-pojie"
    },
    "/blog/post/ecshop-2.7.2-wenjianjiegoumulujiagou.html": {
        status: 301,
        destination: "/blog/ecshop-272-wenjianjiegoumulujiagou"
    },
    "/blog/post/ECShop-v2.6.2-SQL-injection.html": {
        status: 301,
        destination: "/blog/ecshop-v262-sql-injection"
    },
    "/blog/post/ECShop-V2.6.2-webshell.html": {
        status: 301,
        destination: "/blog/ecshop-v262-webshell"
    },
    "/blog/post/EditPlus-V3.12.540-lvse-hanhua.html": {
        status: 301,
        destination: "/blog/editplus-v312540-lvse-hanhua"
    },
    "/blog/post/Eeebuntu-8.10.html": {
        status: 301,
        destination: "/blog/eeebuntu-810"
    },
    "/blog/post/eLong.com-360quanjing.html": {
        status: 301,
        destination: "/blog/elongcom-360quanjing"
    },
    "/blog/post/EmpireCMS-0day.html": {
        status: 301,
        destination: "/blog/empirecms-0day"
    },
    "/blog/post/Encapsulation-helper-V0.4Beta-Build1202.html": {
        status: 301,
        destination: "/blog/encapsulation-helper-v04beta-build1202"
    },
    "/blog/post/ESET-SysInspector.html": {
        status: 301,
        destination: "/blog/eset-sysinspector"
    },
    "/blog/post/Evaphone.com.html": {
        status: 301,
        destination: "/blog/evaphonecom"
    },
    "/blog/post/eWebEditor-2.1.6-asp-upload-exploit.html": {
        status: 301,
        destination: "/blog/ewebeditor-216-asp-upload-exploit"
    },
    "/blog/post/eWebEditor-2.8.0-final-Delete-files-exploit.html": {
        status: 301,
        destination: "/blog/ewebeditor-280-final-delete-files-exploit"
    },
    "/blog/post/eWebEditor-v6.0.0-Loophole.html": {
        status: 301,
        destination: "/blog/ewebeditor-v600-loophole"
    },
    "/blog/post/eyun.html": {
        status: 301,
        destination: "/blog/eyun"
    },
    "/blog/post/f3v3r-fsploit-as-FirePack.html": {
        status: 301,
        destination: "/blog/f3v3r-fsploit-as-firepack"
    },
    "/blog/post/fashaochishenmeyao.html": {
        status: 301,
        destination: "/blog/fashaochishenmeyao"
    },
    "/blog/post/FastCopy-v1.70.html": {
        status: 301,
        destination: "/blog/fastcopy-v170"
    },
    "/blog/post/Fedora-10-Cambridge-Beta.html": {
        status: 301,
        destination: "/blog/fedora-10-cambridge-beta"
    },
    "/blog/post/Fedora-10-Preview-BT.html": {
        status: 301,
        destination: "/blog/fedora-10-preview-bt"
    },
    "/blog/post/Fedora-10.html": {
        status: 301,
        destination: "/blog/fedora-10"
    },
    "/blog/post/Fedora-11-Beta-Leonidas.html": {
        status: 301,
        destination: "/blog/fedora-11-beta-leonidas"
    },
    "/blog/post/Fedora-11-Final.html": {
        status: 301,
        destination: "/blog/fedora-11-final"
    },
    "/blog/post/Fedora-12.html": {
        status: 301,
        destination: "/blog/fedora-12"
    },
    "/blog/post/Fedora-13.html": {
        status: 301,
        destination: "/blog/fedora-13"
    },
    "/blog/post/Fedora-14.html": {
        status: 301,
        destination: "/blog/fedora-14"
    },
    "/blog/post/Fedora-15-Beta.html": {
        status: 301,
        destination: "/blog/fedora-15-beta"
    },
    "/blog/post/Fedora-15.html": {
        status: 301,
        destination: "/blog/fedora-15"
    },
    "/blog/post/Fedora-18-Spherical-Cow.html": {
        status: 301,
        destination: "/blog/fedora-18-spherical-cow"
    },
    "/blog/post/Fedora-19.html": {
        status: 301,
        destination: "/blog/fedora-19"
    },
    "/blog/post/Fedora-21.html": {
        status: 301,
        destination: "/blog/fedora-21"
    },
    "/blog/post/Fedora-22.html": {
        status: 301,
        destination: "/blog/fedora-22"
    },
    "/blog/post/File-Format-Identifier-v1.1.html": {
        status: 301,
        destination: "/blog/file-format-identifier-v11"
    },
    "/blog/post/FileForceKiller-v1.1.html": {
        status: 301,
        destination: "/blog/fileforcekiller-v11"
    },
    "/blog/post/FileQube-mianfei-2G-WangLuoYingPan.html": {
        status: 301,
        destination: "/blog/fileqube-mianfei-2g-wangluoyingpan"
    },
    "/blog/post/FileZilla-Portable-3.2.4.1.html": {
        status: 301,
        destination: "/blog/filezilla-portable-3241"
    },
    "/blog/post/FireFox-3.0-0617-fabu.html": {
        status: 301,
        destination: "/blog/firefox-30-0617-fabu"
    },
    "/blog/post/Firefox-3.02-RC2-CHS.html": {
        status: 301,
        destination: "/blog/firefox-302-rc2-chs"
    },
    "/blog/post/Firefox-for-Android.html": {
        status: 301,
        destination: "/blog/firefox-for-android"
    },
    "/blog/post/FireFox-Opera-BMP-loudong.html": {
        status: 301,
        destination: "/blog/firefox-opera-bmp-loudong"
    },
    "/blog/post/Fireworks-CS4-Green.html": {
        status: 301,
        destination: "/blog/fireworks-cs4-green"
    },
    "/blog/post/Fireworks-CS4.html": {
        status: 301,
        destination: "/blog/fireworks-cs4"
    },
    "/blog/post/Fireworks-cs5-lvse-pojie.html": {
        status: 301,
        destination: "/blog/fireworks-cs5-lvse-pojie"
    },
    "/blog/post/Fireworks-CS6-12.0.0.236-zh-cn-lvsejingjian.html": {
        status: 301,
        destination: "/blog/fireworks-cs6-1200236-zh-cn-lvsejingjian"
    },
    "/blog/post/Fireworks-CS6-zhongwenpojie.html": {
        status: 301,
        destination: "/blog/fireworks-cs6-zhongwenpojie"
    },
    "/blog/post/Flash-0day-exploit.html": {
        status: 301,
        destination: "/blog/flash-0day-exploit"
    },
    "/blog/post/Flash-0DAY-Shellcode-place-builder.html": {
        status: 301,
        destination: "/blog/flash-0day-shellcode-place-builder"
    },
    "/blog/post/Flash-CS4-Pro-CHS-green.html": {
        status: 301,
        destination: "/blog/flash-cs4-pro-chs-green"
    },
    "/blog/post/Flashget-For-Linux.html": {
        status: 301,
        destination: "/blog/flashget-for-linux"
    },
    "/blog/post/Flashget-mini-v1.0-release.html": {
        status: 301,
        destination: "/blog/flashget-mini-v10-release"
    },
    "/blog/post/FlickrSync.html": {
        status: 301,
        destination: "/blog/flickrsync"
    },
    "/blog/post/Flock-2.0-Beta3.html": {
        status: 301,
        destination: "/blog/flock-20-beta3"
    },
    "/blog/post/foosun-4.0-SP7-getshell-0day.html": {
        status: 301,
        destination: "/blog/foosun-40-sp7-getshell-0day"
    },
    "/blog/post/Ford-Focus-Cup.html": {
        status: 301,
        destination: "/blog/ford-focus-cup"
    },
    "/blog/post/Format-Factory-v2.30-quguanggao-lvse.html": {
        status: 301,
        destination: "/blog/format-factory-v230-quguanggao-lvse"
    },
    "/blog/post/Foxit-Reader-3.0=Build-1301-PDF-Buffer-Overflow-Exploit.html": {
        status: 301,
        destination: "/blog/foxit-reader-30=build-1301-pdf-buffer-overflow-exploit"
    },
    "/blog/post/Foxit-Reader-for-Linux-1.0.html": {
        status: 301,
        destination: "/blog/foxit-reader-for-linux-10"
    },
    "/blog/post/Foxit-Reader-Pro-v3.0-Build-1222.html": {
        status: 301,
        destination: "/blog/foxit-reader-pro-v30-build-1222"
    },
    "/blog/post/Foxit-Reader-V2.3.html": {
        status: 301,
        destination: "/blog/foxit-reader-v23"
    },
    "/blog/post/free-3month-rising-2008-Thunder.html": {
        status: 301,
        destination: "/blog/free-3month-rising-2008-thunder"
    },
    "/blog/post/Free-VPN-SmartHde-Arovax.html": {
        status: 301,
        destination: "/blog/free-vpn-smarthde-arovax"
    },
    "/blog/post/FreeBSD-10.html": {
        status: 301,
        destination: "/blog/freebsd-10"
    },
    "/blog/post/FreeBSD-7.1-Beta.html": {
        status: 301,
        destination: "/blog/freebsd-71-beta"
    },
    "/blog/post/FreeBSD-7.1-Beta2.html": {
        status: 301,
        destination: "/blog/freebsd-71-beta2"
    },
    "/blog/post/FreeBSD-7.1-final.html": {
        status: 301,
        destination: "/blog/freebsd-71-final"
    },
    "/blog/post/FreeBSD-7.1-RC1.html": {
        status: 301,
        destination: "/blog/freebsd-71-rc1"
    },
    "/blog/post/FreeBSD-7.2-Final.html": {
        status: 301,
        destination: "/blog/freebsd-72-final"
    },
    "/blog/post/FreeBSD-8.0-Final.html": {
        status: 301,
        destination: "/blog/freebsd-80-final"
    },
    "/blog/post/FreeBSD-8.3.html": {
        status: 301,
        destination: "/blog/freebsd-83"
    },
    "/blog/post/FreeBSD-8.4.html": {
        status: 301,
        destination: "/blog/freebsd-84"
    },
    "/blog/post/FreeBSD-9.0.html": {
        status: 301,
        destination: "/blog/freebsd-90"
    },
    "/blog/post/FreeBSD-9.3.html": {
        status: 301,
        destination: "/blog/freebsd-93"
    },
    "/blog/post/FreeNAS-0.7.1.html": {
        status: 301,
        destination: "/blog/freenas-071"
    },
    "/blog/post/fs2you-dabukai-buding.html": {
        status: 301,
        destination: "/blog/fs2you-dabukai-buding"
    },
    "/blog/post/fs2you-rayfile.com.html": {
        status: 301,
        destination: "/blog/fs2you-rayfilecom"
    },
    "/blog/post/fSekrit-v1.35.html": {
        status: 301,
        destination: "/blog/fsekrit-v135"
    },
    "/blog/post/Fuduntu-14.10.html": {
        status: 301,
        destination: "/blog/fuduntu-1410"
    },
    "/blog/post/Furius-ISO-Mount.html": {
        status: 301,
        destination: "/blog/furius-iso-mount"
    },
    "/blog/post/Fuzzypic.com.html": {
        status: 301,
        destination: "/blog/fuzzypiccom"
    },
    "/blog/post/G4L-ghost-for-linux-0.32.html": {
        status: 301,
        destination: "/blog/g4l-ghost-for-linux-032"
    },
    "/blog/post/gaoxiaoheliliyongshijian12jianyi.html": {
        status: 301,
        destination: "/blog/gaoxiaoheliliyongshijian12jianyi"
    },
    "/blog/post/gebenhagen13tianjianfeifa.html": {
        status: 301,
        destination: "/blog/gebenhagen13tianjianfeifa"
    },
    "/blog/post/GeeXboX-1.2-beta2.html": {
        status: 301,
        destination: "/blog/geexbox-12-beta2"
    },
    "/blog/post/Gentoo-Linux-10.0-LiveDVD.html": {
        status: 301,
        destination: "/blog/gentoo-linux-100-livedvd"
    },
    "/blog/post/geshigongchang-V2.20-jiantizhongwen-lvse.html": {
        status: 301,
        destination: "/blog/geshigongchang-v220-jiantizhongwen-lvse"
    },
    "/blog/post/Getting-Started-with-Ubuntu-12.04.html": {
        status: 301,
        destination: "/blog/getting-started-with-ubuntu-1204"
    },
    "/blog/post/GFRing3-360-huanyuan-baohuqi-1.0beta.html": {
        status: 301,
        destination: "/blog/gfring3-360-huanyuan-baohuqi-10beta"
    },
    "/blog/post/gh0st-1.0-Alpha.html": {
        status: 301,
        destination: "/blog/gh0st-10-alpha"
    },
    "/blog/post/Gh0st-RAT-Beta-2.5-open-source.html": {
        status: 301,
        destination: "/blog/gh0st-rat-beta-25-open-source"
    },
    "/blog/post/Gh0st-RAT-Beta-3.6-open-source.html": {
        status: 301,
        destination: "/blog/gh0st-rat-beta-36-open-source"
    },
    "/blog/post/Gh0st-RAT-C-Rufus-Security-Team.html": {
        status: 301,
        destination: "/blog/gh0st-rat-c-rufus-security-team"
    },
    "/blog/post/Ghost-Security-Suite-v1.420-Beta.html": {
        status: 301,
        destination: "/blog/ghost-security-suite-v1420-beta"
    },
    "/blog/post/Giver.html": {
        status: 301,
        destination: "/blog/giver"
    },
    "/blog/post/GMail-Drive-Shell-Extension-v1.0.13.html": {
        status: 301,
        destination: "/blog/gmail-drive-shell-extension-v1013"
    },
    "/blog/post/Gnome-Shortcuts-summary.html": {
        status: 301,
        destination: "/blog/gnome-shortcuts-summary"
    },
    "/blog/post/GNS3-v0.6.html": {
        status: 301,
        destination: "/blog/gns3-v06"
    },
    "/blog/post/Google-Chrome-1.0.154.36-Final.html": {
        status: 301,
        destination: "/blog/google-chrome-1015436-final"
    },
    "/blog/post/Google-Chrome-v0.2.149.27-Beta.html": {
        status: 301,
        destination: "/blog/google-chrome-v0214927-beta"
    },
    "/blog/post/Google-PR-VR.html": {
        status: 301,
        destination: "/blog/google-pr-vr"
    },
    "/blog/post/Google-SEO-rumen-jiaocheng.html": {
        status: 301,
        destination: "/blog/google-seo-rumen-jiaocheng"
    },
    "/blog/post/googlepaimingyouhuashengjing.html": {
        status: 301,
        destination: "/blog/googlepaimingyouhuashengjing"
    },
    "/blog/post/Goolag-Scanner-v1.0.0.40-google.html": {
        status: 301,
        destination: "/blog/goolag-scanner-v10040-google"
    },
    "/blog/post/Goolge-Android-open-source.html": {
        status: 301,
        destination: "/blog/goolge-android-open-source"
    },
    "/blog/post/GParted-LiveCD-v0.4.1-2-Final.html": {
        status: 301,
        destination: "/blog/gparted-livecd-v041-2-final"
    },
    "/blog/post/GRC-Gmail-Romote-Command.html": {
        status: 301,
        destination: "/blog/grc-gmail-romote-command"
    },
    "/blog/post/GreenBrowser-4.7-Build-0902.html": {
        status: 301,
        destination: "/blog/greenbrowser-47-build-0902"
    },
    "/blog/post/guanbi-QQ-xiu.html": {
        status: 301,
        destination: "/blog/guanbi-qq-xiu"
    },
    "/blog/post/guanjianci-yanjiu-2-daji.html": {
        status: 301,
        destination: "/blog/guanjianci-yanjiu-2-daji"
    },
    "/blog/post/guestbook.html": {
        status: 301,
        destination: "/blog/guestbook"
    },
    "/blog/post/hacker-6-JinHua.html": {
        status: 301,
        destination: "/blog/hacker-6-jinhua"
    },
    "/blog/post/Hacker-Social-Engineering-Attack-NoHack.html": {
        status: 301,
        destination: "/blog/hacker-social-engineering-attack-nohack"
    },
    "/blog/post/Hackers-Manual-feeding.html": {
        status: 301,
        destination: "/blog/hackers-manual-feeding"
    },
    "/blog/post/haodedushudefangfa.html": {
        status: 301,
        destination: "/blog/haodedushudefangfa"
    },
    "/blog/post/haoetv-2009-v2.7.html": {
        status: 301,
        destination: "/blog/haoetv-2009-v27"
    },
    "/blog/post/haofangduizhanpingtai-lvse-VIP-jifang.html": {
        status: 301,
        destination: "/blog/haofangduizhanpingtai-lvse-vip-jifang"
    },
    "/blog/post/haozhaopian.html": {
        status: 301,
        destination: "/blog/haozhaopian"
    },
    "/blog/post/Hashq-1.0-beta.html": {
        status: 301,
        destination: "/blog/hashq-10-beta"
    },
    "/blog/post/Hawkscope.html": {
        status: 301,
        destination: "/blog/hawkscope"
    },
    "/blog/post/HD-Speed-V1.5.4.69-green.html": {
        status: 301,
        destination: "/blog/hd-speed-v15469-green"
    },
    "/blog/post/HD4000hexianxingneng.html": {
        status: 301,
        destination: "/blog/hd4000hexianxingneng"
    },
    "/blog/post/HDR-shishenmeyisi.html": {
        status: 301,
        destination: "/blog/hdr-shishenmeyisi"
    },
    "/blog/post/hehuoshengyibunengzuo.html": {
        status: 301,
        destination: "/blog/hehuoshengyibunengzuo"
    },
    "/blog/post/heike-rumen-xinshou-texun-PDF.html": {
        status: 301,
        destination: "/blog/heike-rumen-xinshou-texun-pdf"
    },
    "/blog/post/heike-shehuigongchengxue-gongji-ISO-xiazai.html": {
        status: 301,
        destination: "/blog/heike-shehuigongchengxue-gongji-iso-xiazai"
    },
    "/blog/post/heike-shuyu-tuwen-cidian.html": {
        status: 301,
        destination: "/blog/heike-shuyu-tuwen-cidian"
    },
    "/blog/post/heisejishu-Spider-1.0.html": {
        status: 301,
        destination: "/blog/heisejishu-spider-10"
    },
    "/blog/post/henongchajiejiuma.html": {
        status: 301,
        destination: "/blog/henongchajiejiuma"
    },
    "/blog/post/HFS-Http-File-Server-v2.3-Build213-Beta.html": {
        status: 301,
        destination: "/blog/hfs-http-file-server-v23-build213-beta"
    },
    "/blog/post/HideDragon-3.31.html": {
        status: 301,
        destination: "/blog/hidedragon-331"
    },
    "/blog/post/Hijack-Hunter-1.0.html": {
        status: 301,
        destination: "/blog/hijack-hunter-10"
    },
    "/blog/post/HiveRise.html": {
        status: 301,
        destination: "/blog/hiverise"
    },
    "/blog/post/Hiweed-Linux-2.0-beta.html": {
        status: 301,
        destination: "/blog/hiweed-linux-20-beta"
    },
    "/blog/post/hongfenjiaren-1.0.html": {
        status: 301,
        destination: "/blog/hongfenjiaren-10"
    },
    "/blog/post/hongsejingjie3-pojieban.html": {
        status: 301,
        destination: "/blog/hongsejingjie3-pojieban"
    },
    "/blog/post/hongshaoroudejiachangzuofa.html": {
        status: 301,
        destination: "/blog/hongshaoroudejiachangzuofa"
    },
    "/blog/post/HP-Pavilion-dv3000-BiJiBen-ShiPin-DaSai.html": {
        status: 301,
        destination: "/blog/hp-pavilion-dv3000-bijiben-shipin-dasai"
    },
    "/blog/post/htaccess-shiyongzhinan.html": {
        status: 301,
        destination: "/blog/htaccess-shiyongzhinan"
    },
    "/blog/post/html-caozuo-bendi-shujuku.html": {
        status: 301,
        destination: "/blog/html-caozuo-bendi-shujuku"
    },
    "/blog/post/HTTP-500-Internal-Server-Error.html": {
        status: 301,
        destination: "/blog/http-500-internal-server-error"
    },
    "/blog/post/hufupinshiyongshunxu.html": {
        status: 301,
        destination: "/blog/hufupinshiyongshunxu"
    },
    "/blog/post/huigezi-control-logic-loopholes-client.html": {
        status: 301,
        destination: "/blog/huigezi-control-logic-loopholes-client"
    },
    "/blog/post/HuiGeZi-GuiLai.html": {
        status: 301,
        destination: "/blog/huigezi-guilai"
    },
    "/blog/post/huozhiyizhijichengzhe.html": {
        status: 301,
        destination: "/blog/huozhiyizhijichengzhe"
    },
    "/blog/post/Hyper-V-Server-2008.html": {
        status: 301,
        destination: "/blog/hyper-v-server-2008"
    },
    "/blog/post/HyperCam.html": {
        status: 301,
        destination: "/blog/hypercam"
    },
    "/blog/post/HyperSnap-DX-6.80.01-hanhua-lvse.html": {
        status: 301,
        destination: "/blog/hypersnap-dx-68001-hanhua-lvse"
    },
    "/blog/post/I-Give-My-First-Love-to-You.html": {
        status: 301,
        destination: "/blog/i-give-my-first-love-to-you"
    },
    "/blog/post/ibus-1.1.0.20090225.html": {
        status: 301,
        destination: "/blog/ibus-11020090225"
    },
    "/blog/post/IE7-0day-exploit.html": {
        status: 301,
        destination: "/blog/ie7-0day-exploit"
    },
    "/blog/post/IE7-Exploit-MS09-002.html": {
        status: 301,
        destination: "/blog/ie7-exploit-ms09-002"
    },
    "/blog/post/IE8-beta2-CHS.html": {
        status: 301,
        destination: "/blog/ie8-beta2-chs"
    },
    "/blog/post/IE8-For-WinXP.html": {
        status: 301,
        destination: "/blog/ie8-for-winxp"
    },
    "/blog/post/IE8-Internet-Explorer-8-Partner-Build-8.0.18343.html": {
        status: 301,
        destination: "/blog/ie8-internet-explorer-8-partner-build-8018343"
    },
    "/blog/post/IE8-RC1-Build-8.0.6001.18343.html": {
        status: 301,
        destination: "/blog/ie8-rc1-build-80600118343"
    },
    "/blog/post/IE9-Platform-Preview.html": {
        status: 301,
        destination: "/blog/ie9-platform-preview"
    },
    "/blog/post/iframe-Anti-intercalation.html": {
        status: 301,
        destination: "/blog/iframe-anti-intercalation"
    },
    "/blog/post/IIS5.1-8ffe2740-ServerApplicationError.html": {
        status: 301,
        destination: "/blog/iis51-8ffe2740-serverapplicationerror"
    },
    "/blog/post/Illustrator-CS6-zhongwenlvseban.html": {
        status: 301,
        destination: "/blog/illustrator-cs6-zhongwenlvseban"
    },
    "/blog/post/Illustrator-CS6-zhongwenpojie.html": {
        status: 301,
        destination: "/blog/illustrator-cs6-zhongwenpojie"
    },
    "/blog/post/ImageEnlarger-V0.9.0-lvse.html": {
        status: 301,
        destination: "/blog/imageenlarger-v090-lvse"
    },
    "/blog/post/IMETool-v2.7.8.html": {
        status: 301,
        destination: "/blog/imetool-v278"
    },
    "/blog/post/imhaha-meebo-webQQ.html": {
        status: 301,
        destination: "/blog/imhaha-meebo-webqq"
    },
    "/blog/post/Institute-of-rapid-manual-SQLinjection.html": {
        status: 301,
        destination: "/blog/institute-of-rapid-manual-sqlinjection"
    },
    "/blog/post/Internet-Explorer-7-ClickJacking-Vulnerability.html": {
        status: 301,
        destination: "/blog/internet-explorer-7-clickjacking-vulnerability"
    },
    "/blog/post/Internet-Explorer-8-CHS-final.html": {
        status: 301,
        destination: "/blog/internet-explorer-8-chs-final"
    },
    "/blog/post/Internet-Explorer-IE8-Beta1-zhongwen-xiazai.html": {
        status: 301,
        destination: "/blog/internet-explorer-ie8-beta1-zhongwen-xiazai"
    },
    "/blog/post/Internet-Infomation-Server-6.0-ISAPI-Filename-Analytic-Vulnerability.html": {
        status: 301,
        destination: "/blog/internet-infomation-server-60-isapi-filename-analytic-vulnerability"
    },
    "/blog/post/iotop.html": {
        status: 301,
        destination: "/blog/iotop"
    },
    "/blog/post/iPhone-3G-UltraSn0w.html": {
        status: 301,
        destination: "/blog/iphone-3g-ultrasn0w"
    },
    "/blog/post/iphone-shengdian.html": {
        status: 301,
        destination: "/blog/iphone-shengdian"
    },
    "/blog/post/iptables-fangzhi-CC-gongji.html": {
        status: 301,
        destination: "/blog/iptables-fangzhi-cc-gongji"
    },
    "/blog/post/iptux-0.4.3.html": {
        status: 301,
        destination: "/blog/iptux-043"
    },
    "/blog/post/iRoundPic-v3.8.1.html": {
        status: 301,
        destination: "/blog/iroundpic-v381"
    },
    "/blog/post/JavaScript-Encrypt-Eecrypt-7way.html": {
        status: 301,
        destination: "/blog/javascript-encrypt-eecrypt-7way"
    },
    "/blog/post/JAY-07.11.1-WoHenMang-XiaZai-Download.html": {
        status: 301,
        destination: "/blog/jay-07111-wohenmang-xiazai-download"
    },
    "/blog/post/jiachangertongyingyangzaocanzuofa.html": {
        status: 301,
        destination: "/blog/jiachangertongyingyangzaocanzuofa"
    },
    "/blog/post/jiandanyizuodejiachangcai.html": {
        status: 301,
        destination: "/blog/jiandanyizuodejiachangcai"
    },
    "/blog/post/jianshaojingdian.html": {
        status: 301,
        destination: "/blog/jianshaojingdian"
    },
    "/blog/post/jiaomochupaozenmeban.html": {
        status: 301,
        destination: "/blog/jiaomochupaozenmeban"
    },
    "/blog/post/jiaozidebaofa.html": {
        status: 301,
        destination: "/blog/jiaozidebaofa"
    },
    "/blog/post/jidanchiduolehuizenmeyang.html": {
        status: 301,
        destination: "/blog/jidanchiduolehuizenmeyang"
    },
    "/blog/post/jilu-windows-denglu-mima-gongju.html": {
        status: 301,
        destination: "/blog/jilu-windows-denglu-mima-gongju"
    },
    "/blog/post/JingTongJiaoBenHeiRuanGongJiJiShu.html": {
        status: 301,
        destination: "/blog/jingtongjiaobenheiruangongjijishu"
    },
    "/blog/post/jingzhuibingdeziwuzhiliao.html": {
        status: 301,
        destination: "/blog/jingzhuibingdeziwuzhiliao"
    },
    "/blog/post/jiqigou-bingdu-EXE-yuanma.html": {
        status: 301,
        destination: "/blog/jiqigou-bingdu-exe-yuanma"
    },
    "/blog/post/jiqigou-shengchengqi.html": {
        status: 301,
        destination: "/blog/jiqigou-shengchengqi"
    },
    "/blog/post/jiqigou-xieru-userinit.exe-yuanma.html": {
        status: 301,
        destination: "/blog/jiqigou-xieru-userinitexe-yuanma"
    },
    "/blog/post/Jolicloud.html": {
        status: 301,
        destination: "/blog/jolicloud"
    },
    "/blog/post/jpeg-secaijiaozheng.html": {
        status: 301,
        destination: "/blog/jpeg-secaijiaozheng"
    },
    "/blog/post/JSky-beta.html": {
        status: 301,
        destination: "/blog/jsky-beta"
    },
    "/blog/post/jujian-v2008-0112.html": {
        status: 301,
        destination: "/blog/jujian-v2008-0112"
    },
    "/blog/post/Jump-loopholes-shows.html": {
        status: 301,
        destination: "/blog/jump-loopholes-shows"
    },
    "/blog/post/kaikongtiaoyaokaichuang.html": {
        status: 301,
        destination: "/blog/kaikongtiaoyaokaichuang"
    },
    "/blog/post/kaituozhe-Ubuntu-5.0.html": {
        status: 301,
        destination: "/blog/kaituozhe-ubuntu-50"
    },
    "/blog/post/kangshifu-quanjiafu.html": {
        status: 301,
        destination: "/blog/kangshifu-quanjiafu"
    },
    "/blog/post/Kaspersky-2009-8.0.0.357-kaci-hanhuaban.html": {
        status: 301,
        destination: "/blog/kaspersky-2009-800357-kaci-hanhuaban"
    },
    "/blog/post/Kaspersky-2009-8.0.0.422-han.html": {
        status: 301,
        destination: "/blog/kaspersky-2009-800422-han"
    },
    "/blog/post/kaspersky-2009-8.0.0.454-CF1-han.html": {
        status: 301,
        destination: "/blog/kaspersky-2009-800454-cf1-han"
    },
    "/blog/post/kaspersky-2011-wuxianshiyongbuding.html": {
        status: 301,
        destination: "/blog/kaspersky-2011-wuxianshiyongbuding"
    },
    "/blog/post/kaspersky-7.0-key-download-key-080104.html": {
        status: 301,
        destination: "/blog/kaspersky-70-key-download-key-080104"
    },
    "/blog/post/Kaspersky-7.0.1.321-Release-Candidate-MP1-key.html": {
        status: 301,
        destination: "/blog/kaspersky-701321-release-candidate-mp1-key"
    },
    "/blog/post/Kaspersky-8.0.0.420-nct.html": {
        status: 301,
        destination: "/blog/kaspersky-800420-nct"
    },
    "/blog/post/Kaspersky-Anti-Virus-Internet-Security-8.0.0.202-Beta-key.html": {
        status: 301,
        destination: "/blog/kaspersky-anti-virus-internet-security-800202-beta-key"
    },
    "/blog/post/Kaspersky-Anti-Virus-Internet-Security-v7.0.1.292Beta-key.html": {
        status: 301,
        destination: "/blog/kaspersky-anti-virus-internet-security-v701292beta-key"
    },
    "/blog/post/Kaspersky-Anti-Virus-v8.0.0.78Beta-KEY.html": {
        status: 301,
        destination: "/blog/kaspersky-anti-virus-v80078beta-key"
    },
    "/blog/post/Kaspersky-AntiVirus-Internet-Security-v8.0.0.140-Beta-key.html": {
        status: 301,
        destination: "/blog/kaspersky-antivirus-internet-security-v800140-beta-key"
    },
    "/blog/post/Kaspersky-AntiVirus-InternetSecurity-KAV-KIS-7.0.1.299Beta-key.html": {
        status: 301,
        destination: "/blog/kaspersky-antivirus-internetsecurity-kav-kis-701299beta-key"
    },
    "/blog/post/kaspersky-for-DOS-4.0-20071221.html": {
        status: 301,
        destination: "/blog/kaspersky-for-dos-40-20071221"
    },
    "/blog/post/Kaspersky-Internet-Security-7.0.2.407-Beta.html": {
        status: 301,
        destination: "/blog/kaspersky-internet-security-702407-beta"
    },
    "/blog/post/Kaspersky-Internet-Security-8.0.0.171-Beta-key.html": {
        status: 301,
        destination: "/blog/kaspersky-internet-security-800171-beta-key"
    },
    "/blog/post/Kaspersky-KAV-KIS-2009-CF1.html": {
        status: 301,
        destination: "/blog/kaspersky-kav-kis-2009-cf1"
    },
    "/blog/post/Kaspersky-KAV-KIS-7.0.1.323-key.html": {
        status: 301,
        destination: "/blog/kaspersky-kav-kis-701323-key"
    },
    "/blog/post/Kaspersky-KAV-KIS-8.0.0.148-Beta.html": {
        status: 301,
        destination: "/blog/kaspersky-kav-kis-800148-beta"
    },
    "/blog/post/Kaspersky-KAV-KIS-8.0.0.233-Pre-Beta.html": {
        status: 301,
        destination: "/blog/kaspersky-kav-kis-800233-pre-beta"
    },
    "/blog/post/Kaspersky-KAV-KIS-8.0.0.292-Beta-key.html": {
        status: 301,
        destination: "/blog/kaspersky-kav-kis-800292-beta-key"
    },
    "/blog/post/Kaspersky-KAV-KIS-8.0.0.89Beta-key.html": {
        status: 301,
        destination: "/blog/kaspersky-kav-kis-80089beta-key"
    },
    "/blog/post/Kaspersky-KAV-KIS-V8.0preview.html": {
        status: 301,
        destination: "/blog/kaspersky-kav-kis-v80preview"
    },
    "/blog/post/kaspersky-KAV7-key-free-largess-one-year.html": {
        status: 301,
        destination: "/blog/kaspersky-kav7-key-free-largess-one-year"
    },
    "/blog/post/kaspersky-key-get-V3.3-Bulid-20090207.html": {
        status: 301,
        destination: "/blog/kaspersky-key-get-v33-bulid-20090207"
    },
    "/blog/post/kaspersky-KIS-8.0.0.33Beta.html": {
        status: 301,
        destination: "/blog/kaspersky-kis-80033beta"
    },
    "/blog/post/Kaspersky-KIS-8.0.0.64Beta.html": {
        status: 301,
        destination: "/blog/kaspersky-kis-80064beta"
    },
    "/blog/post/Kaspersky-KIS-v8.0.0.99-Beta-CHS-key.html": {
        status: 301,
        destination: "/blog/kaspersky-kis-v80099-beta-chs-key"
    },
    "/blog/post/KasperskyInternetSecurity-KIS-v8.0.0.36-Alpha2.html": {
        status: 301,
        destination: "/blog/kasperskyinternetsecurity-kis-v80036-alpha2"
    },
    "/blog/post/KasperskyKAVKISv8.0.0.56.html": {
        status: 301,
        destination: "/blog/kasperskykavkisv80056"
    },
    "/blog/post/KDEWin-GUI-0.9.2.html": {
        status: 301,
        destination: "/blog/kdewin-gui-092"
    },
    "/blog/post/Kill-Dummycom-cidieji-360.html": {
        status: 301,
        destination: "/blog/kill-dummycom-cidieji-360"
    },
    "/blog/post/KillProcess-2.44-Final.html": {
        status: 301,
        destination: "/blog/killprocess-244-final"
    },
    "/blog/post/Kingsoft-PowerWord-2008-beta.html": {
        status: 301,
        destination: "/blog/kingsoft-powerword-2008-beta"
    },
    "/blog/post/KIS-KasperskyInternetSecurity-v8.0.0.45-Alpha3.html": {
        status: 301,
        destination: "/blog/kis-kasperskyinternetsecurity-v80045-alpha3"
    },
    "/blog/post/KIS-KasperskyInternetSecurity-v8.0.0.74Beta.html": {
        status: 301,
        destination: "/blog/kis-kasperskyinternetsecurity-v80074beta"
    },
    "/blog/post/Knoppix-v6.0.html": {
        status: 301,
        destination: "/blog/knoppix-v60"
    },
    "/blog/post/Koala-windows-less-sass.html": {
        status: 301,
        destination: "/blog/koala-windows-less-sass"
    },
    "/blog/post/kouhongduanlezenmeban.html": {
        status: 301,
        destination: "/blog/kouhongduanlezenmeban"
    },
    "/blog/post/Ksplice-Uptrack.html": {
        status: 301,
        destination: "/blog/ksplice-uptrack"
    },
    "/blog/post/ktzubuntu-9.10-dvd-2.0-final.html": {
        status: 301,
        destination: "/blog/ktzubuntu-910-dvd-20-final"
    },
    "/blog/post/kuaisumeibailian.html": {
        status: 301,
        destination: "/blog/kuaisumeibailian"
    },
    "/blog/post/kuaisutaobeitaodefangfa.html": {
        status: 301,
        destination: "/blog/kuaisutaobeitaodefangfa"
    },
    "/blog/post/kuashidai-mp3-jay.html": {
        status: 301,
        destination: "/blog/kuashidai-mp3-jay"
    },
    "/blog/post/kugou-killad-v1.0.html": {
        status: 301,
        destination: "/blog/kugou-killad-v10"
    },
    "/blog/post/kugou2009-luoxuelihua-lvse-jingjian-Build-605102.html": {
        status: 301,
        destination: "/blog/kugou2009-luoxuelihua-lvse-jingjian-build-605102"
    },
    "/blog/post/lanker-php-backdoor-3.0.html": {
        status: 301,
        destination: "/blog/lanker-php-backdoor-30"
    },
    "/blog/post/Launchpad-PPA-install-software.html": {
        status: 301,
        destination: "/blog/launchpad-ppa-install-software"
    },
    "/blog/post/liantikuzenmequcesuo.html": {
        status: 301,
        destination: "/blog/liantikuzenmequcesuo"
    },
    "/blog/post/lianzhong-xunlei-baofeng-loudong.html": {
        status: 301,
        destination: "/blog/lianzhong-xunlei-baofeng-loudong"
    },
    "/blog/post/LibFetion-V1.0.html": {
        status: 301,
        destination: "/blog/libfetion-v10"
    },
    "/blog/post/LICEcap-gif-pingmuluxiangji.html": {
        status: 301,
        destination: "/blog/licecap-gif-pingmuluxiangji"
    },
    "/blog/post/Linux-chaogu-quansheng-gupiao.html": {
        status: 301,
        destination: "/blog/linux-chaogu-quansheng-gupiao"
    },
    "/blog/post/Linux-Deepin-11.06.html": {
        status: 301,
        destination: "/blog/linux-deepin-1106"
    },
    "/blog/post/Linux-Deepin-12.12.html": {
        status: 301,
        destination: "/blog/linux-deepin-1212"
    },
    "/blog/post/Linux-Deepin-2013.html": {
        status: 301,
        destination: "/blog/linux-deepin-2013"
    },
    "/blog/post/Linux-find.html": {
        status: 301,
        destination: "/blog/linux-find"
    },
    "/blog/post/Linux-from-Scratch-6.6.html": {
        status: 301,
        destination: "/blog/linux-from-scratch-66"
    },
    "/blog/post/linux-jibenanquanpeizhishouce.html": {
        status: 301,
        destination: "/blog/linux-jibenanquanpeizhishouce"
    },
    "/blog/post/Linux-Kernel-2.6-UDEV-Local-Privilege-Escalation-Exploit.html": {
        status: 301,
        destination: "/blog/linux-kernel-26-udev-local-privilege-escalation-exploit"
    },
    "/blog/post/Linux-Kernel-2.6.19-32bit-ip_append_data-ring0-Root-Exploit.html": {
        status: 301,
        destination: "/blog/linux-kernel-2619-32bit-ip_append_data-ring0-root-exploit"
    },
    "/blog/post/Linux-Kernel-2.x-sock_sendpage-Local-Root-Exploit.html": {
        status: 301,
        destination: "/blog/linux-kernel-2x-sock_sendpage-local-root-exploit"
    },
    "/blog/post/Linux-Mint-10.html": {
        status: 301,
        destination: "/blog/linux-mint-10"
    },
    "/blog/post/Linux-Mint-11.html": {
        status: 301,
        destination: "/blog/linux-mint-11"
    },
    "/blog/post/Linux-Mint-12-LXDE.html": {
        status: 301,
        destination: "/blog/linux-mint-12-lxde"
    },
    "/blog/post/Linux-Mint-12.html": {
        status: 301,
        destination: "/blog/linux-mint-12"
    },
    "/blog/post/Linux-Mint-13-LTS-Maya.html": {
        status: 301,
        destination: "/blog/linux-mint-13-lts-maya"
    },
    "/blog/post/Linux-Mint-14-Nadia.html": {
        status: 301,
        destination: "/blog/linux-mint-14-nadia"
    },
    "/blog/post/Linux-Mint-15-KDE.html": {
        status: 301,
        destination: "/blog/linux-mint-15-kde"
    },
    "/blog/post/Linux-Mint-15.html": {
        status: 301,
        destination: "/blog/linux-mint-15"
    },
    "/blog/post/Linux-Mint-17.html": {
        status: 301,
        destination: "/blog/linux-mint-17"
    },
    "/blog/post/Linux-Mint-6-Felicia.html": {
        status: 301,
        destination: "/blog/linux-mint-6-felicia"
    },
    "/blog/post/Linux-Mint-7-Gloria.html": {
        status: 301,
        destination: "/blog/linux-mint-7-gloria"
    },
    "/blog/post/Linux-Mint-8-Helena.html": {
        status: 301,
        destination: "/blog/linux-mint-8-helena"
    },
    "/blog/post/Linux-Mint-8-Helena_4786.html": {
        status: 301,
        destination: "/blog/linux-mint-8-helena_4786"
    },
    "/blog/post/Linux-Mint-9.html": {
        status: 301,
        destination: "/blog/linux-mint-9"
    },
    "/blog/post/Linux-Mint-Debian-201009.html": {
        status: 301,
        destination: "/blog/linux-mint-debian-201009"
    },
    "/blog/post/Linux-ps-kill.html": {
        status: 301,
        destination: "/blog/linux-ps-kill"
    },
    "/blog/post/Linux-RPM.html": {
        status: 301,
        destination: "/blog/linux-rpm"
    },
    "/blog/post/Linux-siji-le-zenmeban.html": {
        status: 301,
        destination: "/blog/linux-siji-le-zenmeban"
    },
    "/blog/post/Linux-SSH.html": {
        status: 301,
        destination: "/blog/linux-ssh"
    },
    "/blog/post/Linux-System-Programming-cn-PDF.html": {
        status: 301,
        destination: "/blog/linux-system-programming-cn-pdf"
    },
    "/blog/post/Linux-xinshou-yao-liaojie-10-zhishidian.html": {
        status: 301,
        destination: "/blog/linux-xinshou-yao-liaojie-10-zhishidian"
    },
    "/blog/post/Linux-xuniguangqu.html": {
        status: 301,
        destination: "/blog/linux-xuniguangqu"
    },
    "/blog/post/LinuxDeepin-10.06-Final.html": {
        status: 301,
        destination: "/blog/linuxdeepin-1006-final"
    },
    "/blog/post/LinuxDeepin-9.12-Final.html": {
        status: 301,
        destination: "/blog/linuxdeepin-912-final"
    },
    "/blog/post/Live-Magic-Debian-Live.html": {
        status: 301,
        destination: "/blog/live-magic-debian-live"
    },
    "/blog/post/LiveAndroid.html": {
        status: 301,
        destination: "/blog/liveandroid"
    },
    "/blog/post/lizhizenmechi.html": {
        status: 301,
        destination: "/blog/lizhizenmechi"
    },
    "/blog/post/localhostr.com.html": {
        status: 301,
        destination: "/blog/localhostrcom"
    },
    "/blog/post/loushangdanzhuzidiaoluoshengyin.html": {
        status: 301,
        destination: "/blog/loushangdanzhuzidiaoluoshengyin"
    },
    "/blog/post/Lubuntu-10.04.html": {
        status: 301,
        destination: "/blog/lubuntu-1004"
    },
    "/blog/post/Lubuntu.html": {
        status: 301,
        destination: "/blog/lubuntu"
    },
    "/blog/post/LxBlog-V6-Uninitialized-variable-vulnerability.html": {
        status: 301,
        destination: "/blog/lxblog-v6-uninitialized-variable-vulnerability"
    },
    "/blog/post/Magic-Linux-2.1-RC3.html": {
        status: 301,
        destination: "/blog/magic-linux-21-rc3"
    },
    "/blog/post/Magic-Linux-2.5.html": {
        status: 301,
        destination: "/blog/magic-linux-25"
    },
    "/blog/post/MagicLinux-2.1-final.html": {
        status: 301,
        destination: "/blog/magiclinux-21-final"
    },
    "/blog/post/MagicLinux-2.1-rc2.html": {
        status: 301,
        destination: "/blog/magiclinux-21-rc2"
    },
    "/blog/post/Magnifying-glass-backdoor-generator.html": {
        status: 301,
        destination: "/blog/magnifying-glass-backdoor-generator"
    },
    "/blog/post/maidou-xiangdangdang.html": {
        status: 301,
        destination: "/blog/maidou-xiangdangdang"
    },
    "/blog/post/make-money-on-QQ-MSN.html": {
        status: 301,
        destination: "/blog/make-money-on-qq-msn"
    },
    "/blog/post/Mandriva-Linux-2009.html": {
        status: 301,
        destination: "/blog/mandriva-linux-2009"
    },
    "/blog/post/Mandriva-Linux-2010.0.html": {
        status: 301,
        destination: "/blog/mandriva-linux-20100"
    },
    "/blog/post/Mandriva-Linux-2010.1.html": {
        status: 301,
        destination: "/blog/mandriva-linux-20101"
    },
    "/blog/post/Mandriva-Linux-2011.html": {
        status: 301,
        destination: "/blog/mandriva-linux-2011"
    },
    "/blog/post/markdown-elements.html": {
        status: 301,
        destination: "/blog/markdown-elements"
    },
    "/blog/post/Maxcms-2.0-beta-SQL-injection.html": {
        status: 301,
        destination: "/blog/maxcms-20-beta-sql-injection"
    },
    "/blog/post/MaxHijack-1.4.html": {
        status: 301,
        destination: "/blog/maxhijack-14"
    },
    "/blog/post/MaxMem-V1.04.html": {
        status: 301,
        destination: "/blog/maxmem-v104"
    },
    "/blog/post/Maxthon-2.0.8-beta-download.html": {
        status: 301,
        destination: "/blog/maxthon-208-beta-download"
    },
    "/blog/post/Maxthon-2.1.4.443.html": {
        status: 301,
        destination: "/blog/maxthon-214443"
    },
    "/blog/post/Maxthon-2.1.5.html": {
        status: 301,
        destination: "/blog/maxthon-215"
    },
    "/blog/post/Maxthon-2.5.1.4075.html": {
        status: 301,
        destination: "/blog/maxthon-2514075"
    },
    "/blog/post/Maxthon-plugin.html": {
        status: 301,
        destination: "/blog/maxthon-plugin"
    },
    "/blog/post/Maxthon-v2.0.7-Build-1030-Final.html": {
        status: 301,
        destination: "/blog/maxthon-v207-build-1030-final"
    },
    "/blog/post/Maxthon-v2.1.1.1717-xiazai.html": {
        status: 301,
        destination: "/blog/maxthon-v2111717-xiazai"
    },
    "/blog/post/Maxthon-v3.0.0.112-Alpha3.html": {
        status: 301,
        destination: "/blog/maxthon-v300112-alpha3"
    },
    "/blog/post/MemLimit.html": {
        status: 301,
        destination: "/blog/memlimit"
    },
    "/blog/post/mianshichuanshenme.html": {
        status: 301,
        destination: "/blog/mianshichuanshenme"
    },
    "/blog/post/Microsoft-DirectShow-MPEG2TuneRequest-Stack-Overflow-Exploit.html": {
        status: 301,
        destination: "/blog/microsoft-directshow-mpeg2tunerequest-stack-overflow-exploit"
    },
    "/blog/post/Microsoft-IIS-5.0-6.0-FTP-Server-Remote-Stack-Overflow-Exploit-win2k.html": {
        status: 301,
        destination: "/blog/microsoft-iis-50-60-ftp-server-remote-stack-overflow-exploit-win2k"
    },
    "/blog/post/Microsoft-IIS-5.0-FTP-Server-Remote-Stack-Overflow-Exploit.html": {
        status: 301,
        destination: "/blog/microsoft-iis-50-ftp-server-remote-stack-overflow-exploit"
    },
    "/blog/post/Microsoft-Network-Monitor-3.2.html": {
        status: 301,
        destination: "/blog/microsoft-network-monitor-32"
    },
    "/blog/post/Microsoft-Office-.WPS-Exploit-MS08-011-mika.html": {
        status: 301,
        destination: "/blog/microsoft-office-wps-exploit-ms08-011-mika"
    },
    "/blog/post/Microsoft-Office-2007-SP2-single-file.html": {
        status: 301,
        destination: "/blog/microsoft-office-2007-sp2-single-file"
    },
    "/blog/post/Microsoft-Office-Excel-Code-Execution-Exploit-MS08-014.html": {
        status: 301,
        destination: "/blog/microsoft-office-excel-code-execution-exploit-ms08-014"
    },
    "/blog/post/Microsoft-Windows-XP-noset-password-more-safe.html": {
        status: 301,
        destination: "/blog/microsoft-windows-xp-noset-password-more-safe"
    },
    "/blog/post/microsoft-worm.html": {
        status: 301,
        destination: "/blog/microsoft-worm"
    },
    "/blog/post/mihoutao.html": {
        status: 301,
        destination: "/blog/mihoutao"
    },
    "/blog/post/minglinghang-beifen-huanyuan-ubuntu.html": {
        status: 301,
        destination: "/blog/minglinghang-beifen-huanyuan-ubuntu"
    },
    "/blog/post/MiniHex-1.0.2.1.html": {
        status: 301,
        destination: "/blog/minihex-1021"
    },
    "/blog/post/Minmem-1.2.2.html": {
        status: 301,
        destination: "/blog/minmem-122"
    },
    "/blog/post/mIRC-6.34-Remote-Buffer-Overflow-Exploit.html": {
        status: 301,
        destination: "/blog/mirc-634-remote-buffer-overflow-exploit"
    },
    "/blog/post/Moblin-2.0-Beta.html": {
        status: 301,
        destination: "/blog/moblin-20-beta"
    },
    "/blog/post/Moblin-2.1.html": {
        status: 301,
        destination: "/blog/moblin-21"
    },
    "/blog/post/mojiezuo.html": {
        status: 301,
        destination: "/blog/mojiezuo"
    },
    "/blog/post/MS-Windows-7-jietu.html": {
        status: 301,
        destination: "/blog/ms-windows-7-jietu"
    },
    "/blog/post/MS07-017.html": {
        status: 301,
        destination: "/blog/ms07-017"
    },
    "/blog/post/MS08-046.html": {
        status: 301,
        destination: "/blog/ms08-046"
    },
    "/blog/post/MS08-052-GDI.html": {
        status: 301,
        destination: "/blog/ms08-052-gdi"
    },
    "/blog/post/MS08-066-AFD.sys-Local-Privilege-Escalation-Exploit-PoC.html": {
        status: 301,
        destination: "/blog/ms08-066-afdsys-local-privilege-escalation-exploit-poc"
    },
    "/blog/post/ms08-066-Exploit.html": {
        status: 301,
        destination: "/blog/ms08-066-exploit"
    },
    "/blog/post/MS08-067-check.html": {
        status: 301,
        destination: "/blog/ms08-067-check"
    },
    "/blog/post/MS08-067-Exploit-for-CN-2k-xp-2003-.net-version.html": {
        status: 301,
        destination: "/blog/ms08-067-exploit-for-cn-2k-xp-2003-net-version"
    },
    "/blog/post/MS08-067-Exploit-for-CN-2k-xp-2003-bypass-version.html": {
        status: 301,
        destination: "/blog/ms08-067-exploit-for-cn-2k-xp-2003-bypass-version"
    },
    "/blog/post/MS08-067.html": {
        status: 301,
        destination: "/blog/ms08-067"
    },
    "/blog/post/MS08-068-Exploit-SmbRelay3-NTLM-Replay-Attack-Tool.html": {
        status: 301,
        destination: "/blog/ms08-068-exploit-smbrelay3-ntlm-replay-attack-tool"
    },
    "/blog/post/ms08025-fenxi-windows-loudong.html": {
        status: 301,
        destination: "/blog/ms08025-fenxi-windows-loudong"
    },
    "/blog/post/ms08069-exploit.html": {
        status: 301,
        destination: "/blog/ms08069-exploit"
    },
    "/blog/post/MS09002-Memory-Corruption-Exploit.html": {
        status: 301,
        destination: "/blog/ms09002-memory-corruption-exploit"
    },
    "/blog/post/MSCASI-Scrawlr-URLScan-3.0-Beta.html": {
        status: 301,
        destination: "/blog/mscasi-scrawlr-urlscan-30-beta"
    },
    "/blog/post/MultiBootISOs.html": {
        status: 301,
        destination: "/blog/multibootisos"
    },
    "/blog/post/My-favorite-5-WebSites.html": {
        status: 301,
        destination: "/blog/my-favorite-5-websites"
    },
    "/blog/post/myb7.com.html": {
        status: 301,
        destination: "/blog/myb7com"
    },
    "/blog/post/Mydata-V2.45-xiazai.html": {
        status: 301,
        destination: "/blog/mydata-v245-xiazai"
    },
    "/blog/post/myiQ-v0.9.2.html": {
        status: 301,
        destination: "/blog/myiq-v092"
    },
    "/blog/post/MyOtherDrive-2G.html": {
        status: 301,
        destination: "/blog/myotherdrive-2g"
    },
    "/blog/post/MySQL-neicun-zhanyong-youhua.html": {
        status: 301,
        destination: "/blog/mysql-neicun-zhanyong-youhua"
    },
    "/blog/post/MySQL-youhua-suoyin.html": {
        status: 301,
        destination: "/blog/mysql-youhua-suoyin"
    },
    "/blog/post/Name-Computer-Virus.html": {
        status: 301,
        destination: "/blog/name-computer-virus"
    },
    "/blog/post/nanren-bixue-de-moshu.html": {
        status: 301,
        destination: "/blog/nanren-bixue-de-moshu"
    },
    "/blog/post/nanshengdiyicijianjiazhang.html": {
        status: 301,
        destination: "/blog/nanshengdiyicijianjiazhang"
    },
    "/blog/post/nanshengnvshengxiangqingonglve.html": {
        status: 301,
        destination: "/blog/nanshengnvshengxiangqingonglve"
    },
    "/blog/post/nanshengxiangqinzhiqiandezhuyishixiang.html": {
        status: 301,
        destination: "/blog/nanshengxiangqinzhiqiandezhuyishixiang"
    },
    "/blog/post/nanshipaizhaozishi.html": {
        status: 301,
        destination: "/blog/nanshipaizhaozishi"
    },
    "/blog/post/NaviCat-for-MySQL.html": {
        status: 301,
        destination: "/blog/navicat-for-mysql"
    },
    "/blog/post/NBSI-1.157-source.html": {
        status: 301,
        destination: "/blog/nbsi-1157-source"
    },
    "/blog/post/NEGiES-CHS.html": {
        status: 301,
        destination: "/blog/negies-chs"
    },
    "/blog/post/Net-Control-2-Corporate-v7.30.362.html": {
        status: 301,
        destination: "/blog/net-control-2-corporate-v730362"
    },
    "/blog/post/Net2FTP-v0.97.html": {
        status: 301,
        destination: "/blog/net2ftp-v097"
    },
    "/blog/post/NetBSD-4.0.1.html": {
        status: 301,
        destination: "/blog/netbsd-401"
    },
    "/blog/post/NetBSD-5.1.html": {
        status: 301,
        destination: "/blog/netbsd-51"
    },
    "/blog/post/NetBSD-6.0.html": {
        status: 301,
        destination: "/blog/netbsd-60"
    },
    "/blog/post/NetBSD-v5.0-Final.html": {
        status: 301,
        destination: "/blog/netbsd-v50-final"
    },
    "/blog/post/NetDrive.html": {
        status: 301,
        destination: "/blog/netdrive"
    },
    "/blog/post/NetGong-6.5.html": {
        status: 301,
        destination: "/blog/netgong-65"
    },
    "/blog/post/NetLimiter-Pro-2.0.9.1-chs.html": {
        status: 301,
        destination: "/blog/netlimiter-pro-2091-chs"
    },
    "/blog/post/NetLimiter-v3.0.0.3-Beta3.html": {
        status: 301,
        destination: "/blog/netlimiter-v3003-beta3"
    },
    "/blog/post/network-art-exam.html": {
        status: 301,
        destination: "/blog/network-art-exam"
    },
    "/blog/post/NetWorx-4.9.7.html": {
        status: 301,
        destination: "/blog/networx-497"
    },
    "/blog/post/new-features.html": {
        status: 301,
        destination: "/blog/new-features"
    },
    "/blog/post/niandu-youxiu-mianfei-ziyuan.html": {
        status: 301,
        destination: "/blog/niandu-youxiu-mianfei-ziyuan"
    },
    "/blog/post/No-ARP.html": {
        status: 301,
        destination: "/blog/no-arp"
    },
    "/blog/post/NoHack-heike-shehuigongchengxue-gongji.html": {
        status: 301,
        destination: "/blog/nohack-heike-shehuigongchengxue-gongji"
    },
    "/blog/post/Norton-AntiBot-v1.1.838.163-one-year-free-key.html": {
        status: 301,
        destination: "/blog/norton-antibot-v11838163-one-year-free-key"
    },
    "/blog/post/Novell-SUSE-Linux-11-sneakpreview.html": {
        status: 301,
        destination: "/blog/novell-suse-linux-11-sneakpreview"
    },
    "/blog/post/NPMserv-v0.2.2-nginx-php-mysql.html": {
        status: 301,
        destination: "/blog/npmserv-v022-nginx-php-mysql"
    },
    "/blog/post/NSIS-Nullsoft-Scriptable-Install-System-2.36.html": {
        status: 301,
        destination: "/blog/nsis-nullsoft-scriptable-install-system-236"
    },
    "/blog/post/NtGodMode.exe-xiazai.html": {
        status: 301,
        destination: "/blog/ntgodmodeexe-xiazai"
    },
    "/blog/post/ntshell-v1.0.html": {
        status: 301,
        destination: "/blog/ntshell-v10"
    },
    "/blog/post/nvhainanshengpaizhaozishidaquan.html": {
        status: 301,
        destination: "/blog/nvhainanshengpaizhaozishidaquan"
    },
    "/blog/post/nvshengdiyicijianjiazhang.html": {
        status: 301,
        destination: "/blog/nvshengdiyicijianjiazhang"
    },
    "/blog/post/nvshengdiyicijiannanfangjiazhang.html": {
        status: 301,
        destination: "/blog/nvshengdiyicijiannanfangjiazhang"
    },
    "/blog/post/nvshengpaizhaobaiposedaquan.html": {
        status: 301,
        destination: "/blog/nvshengpaizhaobaiposedaquan"
    },
    "/blog/post/nvshengshoujiaobingliangzenmehuishi.html": {
        status: 301,
        destination: "/blog/nvshengshoujiaobingliangzenmehuishi"
    },
    "/blog/post/nvshizhengzhuangdapei.html": {
        status: 301,
        destination: "/blog/nvshizhengzhuangdapei"
    },
    "/blog/post/NXPowerLite-v3.5.1-office-xiazai.html": {
        status: 301,
        destination: "/blog/nxpowerlite-v351-office-xiazai"
    },
    "/blog/post/Oblog-SQL-injection-loophole-latest-Fixes.html": {
        status: 301,
        destination: "/blog/oblog-sql-injection-loophole-latest-fixes"
    },
    "/blog/post/Oblog-v4.6-Download-loopholes.html": {
        status: 301,
        destination: "/blog/oblog-v46-download-loopholes"
    },
    "/blog/post/Oblog4.6-Add-admin-loopholes.html": {
        status: 301,
        destination: "/blog/oblog46-add-admin-loopholes"
    },
    "/blog/post/Office-2003-SP3-3in1-CHS.html": {
        status: 301,
        destination: "/blog/office-2003-sp3-3in1-chs"
    },
    "/blog/post/Office-2010-Technical-Preview-1-x86.html": {
        status: 301,
        destination: "/blog/office-2010-technical-preview-1-x86"
    },
    "/blog/post/OFFICE2003-SP3-3in1-lite.html": {
        status: 301,
        destination: "/blog/office2003-sp3-3in1-lite"
    },
    "/blog/post/OfficeTab-v1.0.html": {
        status: 301,
        destination: "/blog/officetab-v10"
    },
    "/blog/post/one-line-code-iframe.html": {
        status: 301,
        destination: "/blog/one-line-code-iframe"
    },
    "/blog/post/Open-Site-Explorer-SEOMOZ.html": {
        status: 301,
        destination: "/blog/open-site-explorer-seomoz"
    },
    "/blog/post/OpenBSD-4.4.html": {
        status: 301,
        destination: "/blog/openbsd-44"
    },
    "/blog/post/OpenBSD-4.5.html": {
        status: 301,
        destination: "/blog/openbsd-45"
    },
    "/blog/post/OpenBSD-4.6.html": {
        status: 301,
        destination: "/blog/openbsd-46"
    },
    "/blog/post/OpenBSD-4.7.html": {
        status: 301,
        destination: "/blog/openbsd-47"
    },
    "/blog/post/OpenBSD-4.8.html": {
        status: 301,
        destination: "/blog/openbsd-48"
    },
    "/blog/post/OpenBSD-5.0.html": {
        status: 301,
        destination: "/blog/openbsd-50"
    },
    "/blog/post/OpenBSD-5.1.html": {
        status: 301,
        destination: "/blog/openbsd-51"
    },
    "/blog/post/OpenBSD-5.2.html": {
        status: 301,
        destination: "/blog/openbsd-52"
    },
    "/blog/post/OpenOffice-3.0.0.html": {
        status: 301,
        destination: "/blog/openoffice-300"
    },
    "/blog/post/OpenOffice.org-3.0.0-portable-CHS.html": {
        status: 301,
        destination: "/blog/openofficeorg-300-portable-chs"
    },
    "/blog/post/OpenOffice.org-Portable-3.2.0-Final.html": {
        status: 301,
        destination: "/blog/openofficeorg-portable-320-final"
    },
    "/blog/post/OpenSolaris-2008-11.html": {
        status: 301,
        destination: "/blog/opensolaris-2008-11"
    },
    "/blog/post/OpenSolaris-2009.06.html": {
        status: 301,
        destination: "/blog/opensolaris-200906"
    },
    "/blog/post/openSUSE-11.1-Alpha1-xiazai.html": {
        status: 301,
        destination: "/blog/opensuse-111-alpha1-xiazai"
    },
    "/blog/post/openSUSE-11.1-Alpha2.html": {
        status: 301,
        destination: "/blog/opensuse-111-alpha2"
    },
    "/blog/post/openSUSE-11.1-Beta1.html": {
        status: 301,
        destination: "/blog/opensuse-111-beta1"
    },
    "/blog/post/openSUSE-11.1-beta2.html": {
        status: 301,
        destination: "/blog/opensuse-111-beta2"
    },
    "/blog/post/openSUSE-11.1-Beta3.html": {
        status: 301,
        destination: "/blog/opensuse-111-beta3"
    },
    "/blog/post/openSUSE-11.1-beta4.html": {
        status: 301,
        destination: "/blog/opensuse-111-beta4"
    },
    "/blog/post/openSUSE-11.1-Final.html": {
        status: 301,
        destination: "/blog/opensuse-111-final"
    },
    "/blog/post/openSUSE-11.2.html": {
        status: 301,
        destination: "/blog/opensuse-112"
    },
    "/blog/post/OpenSUSE-11.2_3539.html": {
        status: 301,
        destination: "/blog/opensuse-112_3539"
    },
    "/blog/post/openSUSE-11.3.html": {
        status: 301,
        destination: "/blog/opensuse-113"
    },
    "/blog/post/openSUSE-11.4.html": {
        status: 301,
        destination: "/blog/opensuse-114"
    },
    "/blog/post/openSUSE-12.2.html": {
        status: 301,
        destination: "/blog/opensuse-122"
    },
    "/blog/post/openSUSE-12.3.html": {
        status: 301,
        destination: "/blog/opensuse-123"
    },
    "/blog/post/openSUSE-LXDE-live-CD.html": {
        status: 301,
        destination: "/blog/opensuse-lxde-live-cd"
    },
    "/blog/post/OpenSUSE-Smeegol-1.0-MeeGo.html": {
        status: 301,
        destination: "/blog/opensuse-smeegol-10-meego"
    },
    "/blog/post/Opera-10-final.html": {
        status: 301,
        destination: "/blog/opera-10-final"
    },
    "/blog/post/Opera-USB-9.52-Build-10108.html": {
        status: 301,
        destination: "/blog/opera-usb-952-build-10108"
    },
    "/blog/post/Opera-v9.50-Build-10063-Final.html": {
        status: 301,
        destination: "/blog/opera-v950-build-10063-final"
    },
    "/blog/post/Oracle-Linux-7.html": {
        status: 301,
        destination: "/blog/oracle-linux-7"
    },
    "/blog/post/p0f.html": {
        status: 301,
        destination: "/blog/p0f"
    },
    "/blog/post/P2P-netman.html": {
        status: 301,
        destination: "/blog/p2p-netman"
    },
    "/blog/post/Packet-Tracer-v5.0-final.html": {
        status: 301,
        destination: "/blog/packet-tracer-v50-final"
    },
    "/blog/post/paidufangfa.html": {
        status: 301,
        destination: "/blog/paidufangfa"
    },
    "/blog/post/Pangolin-1.2.4.584-ZwelL.html": {
        status: 301,
        destination: "/blog/pangolin-124584-zwell"
    },
    "/blog/post/Pangolin-v1.3.0.630.html": {
        status: 301,
        destination: "/blog/pangolin-v130630"
    },
    "/blog/post/PC-BSD-7-Beta1.html": {
        status: 301,
        destination: "/blog/pc-bsd-7-beta1"
    },
    "/blog/post/PC-BSD-7.0.1.html": {
        status: 301,
        destination: "/blog/pc-bsd-701"
    },
    "/blog/post/PC-BSD-7.0.2.html": {
        status: 301,
        destination: "/blog/pc-bsd-702"
    },
    "/blog/post/PC-BSD-7.0.html": {
        status: 301,
        destination: "/blog/pc-bsd-70"
    },
    "/blog/post/PC-BSD-7.1-Beta1.html": {
        status: 301,
        destination: "/blog/pc-bsd-71-beta1"
    },
    "/blog/post/PC-BSD-7.1-Final.html": {
        status: 301,
        destination: "/blog/pc-bsd-71-final"
    },
    "/blog/post/PC-BSD-8.0.html": {
        status: 301,
        destination: "/blog/pc-bsd-80"
    },
    "/blog/post/PC-BSD-8.1.html": {
        status: 301,
        destination: "/blog/pc-bsd-81"
    },
    "/blog/post/pcAnywhere-v12.5.html": {
        status: 301,
        destination: "/blog/pcanywhere-v125"
    },
    "/blog/post/PcShare-VIP-2005-source.html": {
        status: 301,
        destination: "/blog/pcshare-vip-2005-source"
    },
    "/blog/post/PDF-Password-Remover-3.1.html": {
        status: 301,
        destination: "/blog/pdf-password-remover-31"
    },
    "/blog/post/Pear-OS-Linux-3.0-Panther.html": {
        status: 301,
        destination: "/blog/pear-os-linux-30-panther"
    },
    "/blog/post/peculiar-web-iframe-trojan.html": {
        status: 301,
        destination: "/blog/peculiar-web-iframe-trojan"
    },
    "/blog/post/PEdiy-Encryption-decryption-tool-bag-New-Year-2009-DVD1.html": {
        status: 301,
        destination: "/blog/pediy-encryption-decryption-tool-bag-new-year-2009-dvd1"
    },
    "/blog/post/peiyangrenmai106jiqiao.html": {
        status: 301,
        destination: "/blog/peiyangrenmai106jiqiao"
    },
    "/blog/post/peiyanjingzhuyishixiang.html": {
        status: 301,
        destination: "/blog/peiyanjingzhuyishixiang"
    },
    "/blog/post/penetration-test-intro.html": {
        status: 301,
        destination: "/blog/penetration-test-intro"
    },
    "/blog/post/Perl-NetCat-NC.html": {
        status: 301,
        destination: "/blog/perl-netcat-nc"
    },
    "/blog/post/Photoshop-2G-free-ablum.html": {
        status: 301,
        destination: "/blog/photoshop-2g-free-ablum"
    },
    "/blog/post/Photoshop-7.0-jizhi-jingjian-lvseban.html": {
        status: 301,
        destination: "/blog/photoshop-70-jizhi-jingjian-lvseban"
    },
    "/blog/post/Photoshop-CS-8.0-lvse-jingjian.html": {
        status: 301,
        destination: "/blog/photoshop-cs-80-lvse-jingjian"
    },
    "/blog/post/Photoshop-CS4-Extended-Green.html": {
        status: 301,
        destination: "/blog/photoshop-cs4-extended-green"
    },
    "/blog/post/Photoshop-cs5-zhongwen-lvse-pojie.html": {
        status: 301,
        destination: "/blog/photoshop-cs5-zhongwen-lvse-pojie"
    },
    "/blog/post/Photoshop-CS6-Extended-lvse.html": {
        status: 301,
        destination: "/blog/photoshop-cs6-extended-lvse"
    },
    "/blog/post/PhotoShop-CS6-jiantizhongwenpojie.html": {
        status: 301,
        destination: "/blog/photoshop-cs6-jiantizhongwenpojie"
    },
    "/blog/post/PHP-CGI-MySQL-FTP-300M-parahosting.net.html": {
        status: 301,
        destination: "/blog/php-cgi-mysql-ftp-300m-parahostingnet"
    },
    "/blog/post/PHP-for-Android.html": {
        status: 301,
        destination: "/blog/php-for-android"
    },
    "/blog/post/PHP-piliang-guama-jiaoben.html": {
        status: 301,
        destination: "/blog/php-piliang-guama-jiaoben"
    },
    "/blog/post/PHP168-0day.html": {
        status: 301,
        destination: "/blog/php168-0day"
    },
    "/blog/post/Php168-v2008-update-user-access-exploit.html": {
        status: 301,
        destination: "/blog/php168-v2008-update-user-access-exploit"
    },
    "/blog/post/phpcms2008-0day-ask-search_ajax.php.html": {
        status: 301,
        destination: "/blog/phpcms2008-0day-ask-search_ajaxphp"
    },
    "/blog/post/PHPMaker-v6.0.0.8.html": {
        status: 301,
        destination: "/blog/phpmaker-v6008"
    },
    "/blog/post/PHPRunner-v5.0.766.html": {
        status: 301,
        destination: "/blog/phprunner-v50766"
    },
    "/blog/post/phpspy-2008-080107.html": {
        status: 301,
        destination: "/blog/phpspy-2008-080107"
    },
    "/blog/post/PHPWind-7.5-Multiple-Include-Vulnerabilities.html": {
        status: 301,
        destination: "/blog/phpwind-75-multiple-include-vulnerabilities"
    },
    "/blog/post/PHPWind-guanfang-wangzhan-beihei-jietu.html": {
        status: 301,
        destination: "/blog/phpwind-guanfang-wangzhan-beihei-jietu"
    },
    "/blog/post/phpwind-usertoattack-0day-exploit.html": {
        status: 301,
        destination: "/blog/phpwind-usertoattack-0day-exploit"
    },
    "/blog/post/phpwind-usertoattack-0day-PHP-exploit.html": {
        status: 301,
        destination: "/blog/phpwind-usertoattack-0day-php-exploit"
    },
    "/blog/post/PicPick-v1.8.html": {
        status: 301,
        destination: "/blog/picpick-v18"
    },
    "/blog/post/pingmuluxiangzhuanjia-V7.5-lvsepojie.html": {
        status: 301,
        destination: "/blog/pingmuluxiangzhuanjia-v75-lvsepojie"
    },
    "/blog/post/pinyShop.html": {
        status: 301,
        destination: "/blog/pinyshop"
    },
    "/blog/post/pipixiazenmebo.html": {
        status: 301,
        destination: "/blog/pipixiazenmebo"
    },
    "/blog/post/PJBlog-3.0.6.170-Action.asp-XSS.html": {
        status: 301,
        destination: "/blog/pjblog-306170-actionasp-xss"
    },
    "/blog/post/PJBlog-3.0.6.170-cls_logAction.asp-SQLInjection.html": {
        status: 301,
        destination: "/blog/pjblog-306170-cls_logactionasp-sqlinjection"
    },
    "/blog/post/PJBlog-3.0.6.170-Getarticle.asp-XSS.html": {
        status: 301,
        destination: "/blog/pjblog-306170-getarticleasp-xss"
    },
    "/blog/post/PJblog-V3.0-0day-Vbs-exploit.html": {
        status: 301,
        destination: "/blog/pjblog-v30-0day-vbs-exploit"
    },
    "/blog/post/PlayOnLinux-Linux-Windows-Wine.html": {
        status: 301,
        destination: "/blog/playonlinux-linux-windows-wine"
    },
    "/blog/post/Pleasant-Goat-and-Big-Big-Wolf-DVDRip.html": {
        status: 301,
        destination: "/blog/pleasant-goat-and-big-big-wolf-dvdrip"
    },
    "/blog/post/PLOP-Boot-Manager-PBMgr.html": {
        status: 301,
        destination: "/blog/plop-boot-manager-pbmgr"
    },
    "/blog/post/plupload-xianzhishangchuanwenjianshuliang.html": {
        status: 301,
        destination: "/blog/plupload-xianzhishangchuanwenjianshuliang"
    },
    "/blog/post/Portable-Linux-Apps-USB.html": {
        status: 301,
        destination: "/blog/portable-linux-apps-usb"
    },
    "/blog/post/Portable-Ubuntu-Remix.html": {
        status: 301,
        destination: "/blog/portable-ubuntu-remix"
    },
    "/blog/post/PPLive-2.3.2-quguanggao.html": {
        status: 301,
        destination: "/blog/pplive-232-quguanggao"
    },
    "/blog/post/PPLive-v2.x-noad-v1.2.html": {
        status: 301,
        destination: "/blog/pplive-v2x-noad-v12"
    },
    "/blog/post/PPlive1.8beta2-0Day-exploit.html": {
        status: 301,
        destination: "/blog/pplive18beta2-0day-exploit"
    },
    "/blog/post/PPS-for-Linux.html": {
        status: 301,
        destination: "/blog/pps-for-linux"
    },
    "/blog/post/PPStream-2.6.86.9024-budaiguanggao-lvse.html": {
        status: 301,
        destination: "/blog/ppstream-26869024-budaiguanggao-lvse"
    },
    "/blog/post/PPStream-v2.x-onekey-killad-v1.3.html": {
        status: 301,
        destination: "/blog/ppstream-v2x-onekey-killad-v13"
    },
    "/blog/post/PPTV-PPLive-V2.4.2.0017.html": {
        status: 301,
        destination: "/blog/pptv-pplive-v2420017"
    },
    "/blog/post/PPTV-v2.5.3.0006-lvse-VIP.html": {
        status: 301,
        destination: "/blog/pptv-v2530006-lvse-vip"
    },
    "/blog/post/Premiere-Pro-CS6-6.0.3-lvsejingjian.html": {
        status: 301,
        destination: "/blog/premiere-pro-cs6-603-lvsejingjian"
    },
    "/blog/post/Prey.html": {
        status: 301,
        destination: "/blog/prey"
    },
    "/blog/post/processing-batch-tutorial-part2.html": {
        status: 301,
        destination: "/blog/processing-batch-tutorial-part2"
    },
    "/blog/post/PS-Ai-ID-Flash-sujitu.html": {
        status: 301,
        destination: "/blog/ps-ai-id-flash-sujitu"
    },
    "/blog/post/pskuaijiejian.html": {
        status: 301,
        destination: "/blog/pskuaijiejian"
    },
    "/blog/post/Puppy-Arcade.html": {
        status: 301,
        destination: "/blog/puppy-arcade"
    },
    "/blog/post/Puppy-Linux-4.00-xiaobabi.html": {
        status: 301,
        destination: "/blog/puppy-linux-400-xiaobabi"
    },
    "/blog/post/Puppy-Linux-4.2.1.html": {
        status: 301,
        destination: "/blog/puppy-linux-421"
    },
    "/blog/post/Puppy-Linux-4.20.html": {
        status: 301,
        destination: "/blog/puppy-linux-420"
    },
    "/blog/post/Puppy-Linux-4.21-CHS.html": {
        status: 301,
        destination: "/blog/puppy-linux-421-chs"
    },
    "/blog/post/Puppy-Linux-4.3.1.html": {
        status: 301,
        destination: "/blog/puppy-linux-431"
    },
    "/blog/post/Puppy-Linux-5.0.html": {
        status: 301,
        destination: "/blog/puppy-linux-50"
    },
    "/blog/post/Puppy-Linux-CHS-2008-Christmas.html": {
        status: 301,
        destination: "/blog/puppy-linux-chs-2008-christmas"
    },
    "/blog/post/Pure-OS-5.0.html": {
        status: 301,
        destination: "/blog/pure-os-50"
    },
    "/blog/post/py-webshell.py-v1.0.html": {
        status: 301,
        destination: "/blog/py-webshellpy-v10"
    },
    "/blog/post/python-10fenzhong-rumen.html": {
        status: 301,
        destination: "/blog/python-10fenzhong-rumen"
    },
    "/blog/post/Python-3.0.html": {
        status: 301,
        destination: "/blog/python-30"
    },
    "/blog/post/python-on-Android.html": {
        status: 301,
        destination: "/blog/python-on-android"
    },
    "/blog/post/py_selenium_platform_sensor_reader_win_cc_242_not_implemented.html": {
        status: 301,
        destination: "/blog/py_selenium_platform_sensor_reader_win_cc_242_not_implemented"
    },
    "/blog/post/Q-and-A-senior-insider-hacker-infiltration.html": {
        status: 301,
        destination: "/blog/q-and-a-senior-insider-hacker-infiltration"
    },
    "/blog/post/qianqianjingting-5.5.2-luoxuelihua-lvse-jingjian.html": {
        status: 301,
        destination: "/blog/qianqianjingting-552-luoxuelihua-lvse-jingjian"
    },
    "/blog/post/qianqianjingting-5.5.2-qu-guanggao.html": {
        status: 301,
        destination: "/blog/qianqianjingting-552-qu-guanggao"
    },
    "/blog/post/QianQianJingTing-mod-buffer-overflow-POC.html": {
        status: 301,
        destination: "/blog/qianqianjingting-mod-buffer-overflow-poc"
    },
    "/blog/post/qianqianjingting-quguanggao-gongju-v1.01.html": {
        status: 301,
        destination: "/blog/qianqianjingting-quguanggao-gongju-v101"
    },
    "/blog/post/qingli-ubuntu-laojiu-neihe-jiaoben.html": {
        status: 301,
        destination: "/blog/qingli-ubuntu-laojiu-neihe-jiaoben"
    },
    "/blog/post/qingli-xitongpan.html": {
        status: 301,
        destination: "/blog/qingli-xitongpan"
    },
    "/blog/post/qinglvpaizhaozishidaquan.html": {
        status: 301,
        destination: "/blog/qinglvpaizhaozishidaquan"
    },
    "/blog/post/qingrenjiesongqiaokeli.html": {
        status: 301,
        destination: "/blog/qingrenjiesongqiaokeli"
    },
    "/blog/post/Qomo-Linux-0.8.0.html": {
        status: 301,
        destination: "/blog/qomo-linux-080"
    },
    "/blog/post/Qomo-Linux-1.0.html": {
        status: 301,
        destination: "/blog/qomo-linux-10"
    },
    "/blog/post/Qomo-Linux-2.0.html": {
        status: 301,
        destination: "/blog/qomo-linux-20"
    },
    "/blog/post/Qomo-Linux-3.0.html": {
        status: 301,
        destination: "/blog/qomo-linux-30"
    },
    "/blog/post/QQ-2008-beta1-huiyuan.html": {
        status: 301,
        destination: "/blog/qq-2008-beta1-huiyuan"
    },
    "/blog/post/QQ-ChongChong.html": {
        status: 301,
        destination: "/blog/qq-chongchong"
    },
    "/blog/post/QQ-doudizhu-jipaiqi.html": {
        status: 301,
        destination: "/blog/qq-doudizhu-jipaiqi"
    },
    "/blog/post/QQ-fenzuan-QQchongwu-xiongxiong.html": {
        status: 301,
        destination: "/blog/qq-fenzuan-qqchongwu-xiongxiong"
    },
    "/blog/post/QQ-for-Android.apk.html": {
        status: 301,
        destination: "/blog/qq-for-androidapk"
    },
    "/blog/post/QQ-for-Linux-1.0-Beta1.html": {
        status: 301,
        destination: "/blog/qq-for-linux-10-beta1"
    },
    "/blog/post/QQ-for-Linux-1.0-Preview-xiazai.html": {
        status: 301,
        destination: "/blog/qq-for-linux-10-preview-xiazai"
    },
    "/blog/post/QQ-for-Linux-1.0-Preview2.html": {
        status: 301,
        destination: "/blog/qq-for-linux-10-preview2"
    },
    "/blog/post/QQ-for-Linux-1.0-Preview3.html": {
        status: 301,
        destination: "/blog/qq-for-linux-10-preview3"
    },
    "/blog/post/QQ-for-Linux-2.0-Preview.html": {
        status: 301,
        destination: "/blog/qq-for-linux-20-preview"
    },
    "/blog/post/QQ-music-killad.html": {
        status: 301,
        destination: "/blog/qq-music-killad"
    },
    "/blog/post/QQ-player-for-android.html": {
        status: 301,
        destination: "/blog/qq-player-for-android"
    },
    "/blog/post/QQ-tongbuzhushou-2.0-android.html": {
        status: 301,
        destination: "/blog/qq-tongbuzhushou-20-android"
    },
    "/blog/post/QQ-webdisk.qq.com.html": {
        status: 301,
        destination: "/blog/qq-webdiskqqcom"
    },
    "/blog/post/QQ-xuanwu-tiyan-huodong.html": {
        status: 301,
        destination: "/blog/qq-xuanwu-tiyan-huodong"
    },
    "/blog/post/QQ2007II-Beta2.html": {
        status: 301,
        destination: "/blog/qq2007ii-beta2"
    },
    "/blog/post/QQ2008-Beta1-Release.html": {
        status: 301,
        destination: "/blog/qq2008-beta1-release"
    },
    "/blog/post/QQ2008-Beta2.html": {
        status: 301,
        destination: "/blog/qq2008-beta2"
    },
    "/blog/post/QQ2008-new-year-pic.html": {
        status: 301,
        destination: "/blog/qq2008-new-year-pic"
    },
    "/blog/post/QQ2008-zhengshiban-xiazai.html": {
        status: 301,
        destination: "/blog/qq2008-zhengshiban-xiazai"
    },
    "/blog/post/QQ2008II-Beta1.html": {
        status: 301,
        destination: "/blog/qq2008ii-beta1"
    },
    "/blog/post/QQ2008p.html": {
        status: 301,
        destination: "/blog/qq2008p"
    },
    "/blog/post/QQ2009-Beta1.html": {
        status: 301,
        destination: "/blog/qq2009-beta1"
    },
    "/blog/post/QQ2009-beta2.html": {
        status: 301,
        destination: "/blog/qq2009-beta2"
    },
    "/blog/post/QQ2009-noad-v1.0.html": {
        status: 301,
        destination: "/blog/qq2009-noad-v10"
    },
    "/blog/post/QQ2009-noad-v1.82.html": {
        status: 301,
        destination: "/blog/qq2009-noad-v182"
    },
    "/blog/post/QQ2009-preview-VS-TM2008-preview4.html": {
        status: 301,
        destination: "/blog/qq2009-preview-vs-tm2008-preview4"
    },
    "/blog/post/QQ2009-preview2.html": {
        status: 301,
        destination: "/blog/qq2009-preview2"
    },
    "/blog/post/QQ2009-Preview3-Build450.html": {
        status: 301,
        destination: "/blog/qq2009-preview3-build450"
    },
    "/blog/post/QQ2009-Preview3.html": {
        status: 301,
        destination: "/blog/qq2009-preview3"
    },
    "/blog/post/QQ2009-Preview4-Build520.html": {
        status: 301,
        destination: "/blog/qq2009-preview4-build520"
    },
    "/blog/post/QQ2009-SP4-green-v7.10.html": {
        status: 301,
        destination: "/blog/qq2009-sp4-green-v710"
    },
    "/blog/post/QQ2009.html": {
        status: 301,
        destination: "/blog/qq2009"
    },
    "/blog/post/QQ2010-beta.html": {
        status: 301,
        destination: "/blog/qq2010-beta"
    },
    "/blog/post/qqkeyishangdanwangyedabukai.html": {
        status: 301,
        destination: "/blog/qqkeyishangdanwangyedabukai"
    },
    "/blog/post/QQmibaoka.html": {
        status: 301,
        destination: "/blog/qqmibaoka"
    },
    "/blog/post/QQmusic-v2008-Beta2-xiazai.html": {
        status: 301,
        destination: "/blog/qqmusic-v2008-beta2-xiazai"
    },
    "/blog/post/QQpinyin.html": {
        status: 301,
        destination: "/blog/qqpinyin"
    },
    "/blog/post/QQXueShengZheng.html": {
        status: 301,
        destination: "/blog/qqxueshengzheng"
    },
    "/blog/post/quheitou.html": {
        status: 301,
        destination: "/blog/quheitou"
    },
    "/blog/post/Qvod-Player-0day.html": {
        status: 301,
        destination: "/blog/qvod-player-0day"
    },
    "/blog/post/RABSoft.html": {
        status: 301,
        destination: "/blog/rabsoft"
    },
    "/blog/post/Radmin-3.1-server-crack-nosetup.html": {
        status: 301,
        destination: "/blog/radmin-31-server-crack-nosetup"
    },
    "/blog/post/Radmin-3.2-jianti-zhongwen-lvse-wanmeizhe.html": {
        status: 301,
        destination: "/blog/radmin-32-jianti-zhongwen-lvse-wanmeizhe"
    },
    "/blog/post/rangdiannaobunengwanyouxi.html": {
        status: 301,
        destination: "/blog/rangdiannaobunengwanyouxi"
    },
    "/blog/post/ReactOS-0.3.14.html": {
        status: 301,
        destination: "/blog/reactos-0314"
    },
    "/blog/post/ReactOS-v0.3.9.html": {
        status: 301,
        destination: "/blog/reactos-v039"
    },
    "/blog/post/Red-Hat-Enterprise-Linux-4.8.html": {
        status: 301,
        destination: "/blog/red-hat-enterprise-linux-48"
    },
    "/blog/post/RedFlag-Linux-7.0.html": {
        status: 301,
        destination: "/blog/redflag-linux-70"
    },
    "/blog/post/Redo-Backup-and-Recovery.html": {
        status: 301,
        destination: "/blog/redo-backup-and-recovery"
    },
    "/blog/post/redsn0w-0.9.2.html": {
        status: 301,
        destination: "/blog/redsn0w-092"
    },
    "/blog/post/RemotelyAnywhere-v9.0.856.html": {
        status: 301,
        destination: "/blog/remotelyanywhere-v90856"
    },
    "/blog/post/renrendouyinggailiaojiede11tiaolicaichangshi.html": {
        status: 301,
        destination: "/blog/renrendouyinggailiaojiede11tiaolicaichangshi"
    },
    "/blog/post/ReturnilVirtualSystem-2008PremiumEdition-v2.0.0.2621-Beta.html": {
        status: 301,
        destination: "/blog/returnilvirtualsystem-2008premiumedition-v2002621-beta"
    },
    "/blog/post/RFI-yuancheng-wenjian-baohan-loudong-yuanli.html": {
        status: 301,
        destination: "/blog/rfi-yuancheng-wenjian-baohan-loudong-yuanli"
    },
    "/blog/post/RHEL-5.5.html": {
        status: 301,
        destination: "/blog/rhel-55"
    },
    "/blog/post/rishizhazhupaidezuofa.html": {
        status: 301,
        destination: "/blog/rishizhazhupaidezuofa"
    },
    "/blog/post/rising-kaka-V5.0.html": {
        status: 301,
        destination: "/blog/rising-kaka-v50"
    },
    "/blog/post/rouwandezuofa.html": {
        status: 301,
        destination: "/blog/rouwandezuofa"
    },
    "/blog/post/RT-Thread-0.3.0-RC1.html": {
        status: 301,
        destination: "/blog/rt-thread-030-rc1"
    },
    "/blog/post/ruhedalingdai.html": {
        status: 301,
        destination: "/blog/ruhedalingdai"
    },
    "/blog/post/ruhegaishanshuimianzhiliang.html": {
        status: 301,
        destination: "/blog/ruhegaishanshuimianzhiliang"
    },
    "/blog/post/ruhekuaisujiejiu.html": {
        status: 301,
        destination: "/blog/ruhekuaisujiejiu"
    },
    "/blog/post/ruhekuaisuxuehuiwubi.html": {
        status: 301,
        destination: "/blog/ruhekuaisuxuehuiwubi"
    },
    "/blog/post/ruhelijieneixiangderen.html": {
        status: 301,
        destination: "/blog/ruhelijieneixiangderen"
    },
    "/blog/post/ruhepaichuangyijitizhao.html": {
        status: 301,
        destination: "/blog/ruhepaichuangyijitizhao"
    },
    "/blog/post/ruhepaichuhaokanzipaizhao.html": {
        status: 301,
        destination: "/blog/ruhepaichuhaokanzipaizhao"
    },
    "/blog/post/ruhequdou.html": {
        status: 301,
        destination: "/blog/ruhequdou"
    },
    "/blog/post/ruhetiaoshuiguo.html": {
        status: 301,
        destination: "/blog/ruhetiaoshuiguo"
    },
    "/blog/post/ruhetigaomeizidehaogandu.html": {
        status: 301,
        destination: "/blog/ruhetigaomeizidehaogandu"
    },
    "/blog/post/ruhetongguotigangxielunwen.html": {
        status: 301,
        destination: "/blog/ruhetongguotigangxielunwen"
    },
    "/blog/post/ruhexiumei.html": {
        status: 301,
        destination: "/blog/ruhexiumei"
    },
    "/blog/post/ruheyangshen.html": {
        status: 301,
        destination: "/blog/ruheyangshen"
    },
    "/blog/post/ruhezuoyigechenggongdezhanzhang.html": {
        status: 301,
        destination: "/blog/ruhezuoyigechenggongdezhanzhang"
    },
    "/blog/post/Sabayon-5.2.html": {
        status: 301,
        destination: "/blog/sabayon-52"
    },
    "/blog/post/Sablog-X-2.X-houtaiguanliquanxianqipianloudong.html": {
        status: 301,
        destination: "/blog/sablog-x-2x-houtaiguanliquanxianqipianloudong"
    },
    "/blog/post/Safe3-Vul-Scanner-v1.0.html": {
        status: 301,
        destination: "/blog/safe3-vul-scanner-v10"
    },
    "/blog/post/Safe3IIS-FireWall-v2.1.html": {
        status: 301,
        destination: "/blog/safe3iis-firewall-v21"
    },
    "/blog/post/safeusb.html": {
        status: 301,
        destination: "/blog/safeusb"
    },
    "/blog/post/Samba-v3.3.0-Final.html": {
        status: 301,
        destination: "/blog/samba-v330-final"
    },
    "/blog/post/sami-qiujiaowang-zhaohuanling.html": {
        status: 301,
        destination: "/blog/sami-qiujiaowang-zhaohuanling"
    },
    "/blog/post/Sandboxie-V3.26-zhuceji-xiazai.html": {
        status: 301,
        destination: "/blog/sandboxie-v326-zhuceji-xiazai"
    },
    "/blog/post/Sandboxie-v3.30.html": {
        status: 301,
        destination: "/blog/sandboxie-v330"
    },
    "/blog/post/Screen2Exe-v2.2.html": {
        status: 301,
        destination: "/blog/screen2exe-v22"
    },
    "/blog/post/Secret-hacker-attacks-Discuz!-Insider.html": {
        status: 301,
        destination: "/blog/secret-hacker-attacks-discuz!-insider"
    },
    "/blog/post/Serv-U-6.X-promote-popedom.html": {
        status: 301,
        destination: "/blog/serv-u-6x-promote-popedom"
    },
    "/blog/post/SessionIE-3.31.html": {
        status: 301,
        destination: "/blog/sessionie-331"
    },
    "/blog/post/SessionIE.html": {
        status: 301,
        destination: "/blog/sessionie"
    },
    "/blog/post/setup-Ubuntu-7.10-and-problem.html": {
        status: 301,
        destination: "/blog/setup-ubuntu-710-and-problem"
    },
    "/blog/post/shangyi.html": {
        status: 301,
        destination: "/blog/shangyi"
    },
    "/blog/post/Shareaza-4.1.0.42580-P2P.html": {
        status: 301,
        destination: "/blog/shareaza-41042580-p2p"
    },
    "/blog/post/shejianshangdezhongguo.html": {
        status: 301,
        destination: "/blog/shejianshangdezhongguo"
    },
    "/blog/post/shenfenzhengfuyinjianqianzhu.html": {
        status: 301,
        destination: "/blog/shenfenzhengfuyinjianqianzhu"
    },
    "/blog/post/shengjidaoiBGP.html": {
        status: 301,
        destination: "/blog/shengjidaoibgp"
    },
    "/blog/post/shilingshuiguo.html": {
        status: 301,
        destination: "/blog/shilingshuiguo"
    },
    "/blog/post/shimiandezhiliaofangfa.html": {
        status: 301,
        destination: "/blog/shimiandezhiliaofangfa"
    },
    "/blog/post/shoudao-heike-shehuigongchengxue-gongji.html": {
        status: 301,
        destination: "/blog/shoudao-heike-shehuigongchengxue-gongji"
    },
    "/blog/post/shoudao-Ubuntu-mianfei-CD-guangpan.html": {
        status: 301,
        destination: "/blog/shoudao-ubuntu-mianfei-cd-guangpan"
    },
    "/blog/post/shouhou-yuanchengkongzhi.html": {
        status: 301,
        destination: "/blog/shouhou-yuanchengkongzhi"
    },
    "/blog/post/shoujidiulezenmeban.html": {
        status: 301,
        destination: "/blog/shoujidiulezenmeban"
    },
    "/blog/post/shoujifarefatangzenmeban.html": {
        status: 301,
        destination: "/blog/shoujifarefatangzenmeban"
    },
    "/blog/post/shoujijinshui.html": {
        status: 301,
        destination: "/blog/shoujijinshui"
    },
    "/blog/post/shoujitaozhiai.html": {
        status: 301,
        destination: "/blog/shoujitaozhiai"
    },
    "/blog/post/shuimian.html": {
        status: 301,
        destination: "/blog/shuimian"
    },
    "/blog/post/shuizhuyusuancaiyuzenmezuo.html": {
        status: 301,
        destination: "/blog/shuizhuyusuancaiyuzenmezuo"
    },
    "/blog/post/shunchanhaohaishipoufuchanhao.html": {
        status: 301,
        destination: "/blog/shunchanhaohaishipoufuchanhao"
    },
    "/blog/post/Shutter-0.80.html": {
        status: 301,
        destination: "/blog/shutter-080"
    },
    "/blog/post/sichuan-wenchuan-chengdu-7.8dizhen-08-05-12.html": {
        status: 301,
        destination: "/blog/sichuan-wenchuan-chengdu-78dizhen-08-05-12"
    },
    "/blog/post/SIMChecker.html": {
        status: 301,
        destination: "/blog/simchecker"
    },
    "/blog/post/SiteWeaver-6.6-exploit.html": {
        status: 301,
        destination: "/blog/siteweaver-66-exploit"
    },
    "/blog/post/Skller-V3-xiazai-download.html": {
        status: 301,
        destination: "/blog/skller-v3-xiazai-download"
    },
    "/blog/post/Slackware-Linux-13.0.html": {
        status: 301,
        destination: "/blog/slackware-linux-130"
    },
    "/blog/post/Slax-6.0.9.html": {
        status: 301,
        destination: "/blog/slax-609"
    },
    "/blog/post/Slax-7.0.html": {
        status: 301,
        destination: "/blog/slax-70"
    },
    "/blog/post/Slax-Linux-6.0.8.html": {
        status: 301,
        destination: "/blog/slax-linux-608"
    },
    "/blog/post/Slax-v6.1.0.html": {
        status: 301,
        destination: "/blog/slax-v610"
    },
    "/blog/post/Smart-Rotator.html": {
        status: 301,
        destination: "/blog/smart-rotator"
    },
    "/blog/post/SniffX-v1.0.html": {
        status: 301,
        destination: "/blog/sniffx-v10"
    },
    "/blog/post/Social-Engineering-in-hacker.html": {
        status: 301,
        destination: "/blog/social-engineering-in-hacker"
    },
    "/blog/post/SoftPerfect-Network-Scanner-v3.9.186.html": {
        status: 301,
        destination: "/blog/softperfect-network-scanner-v39186"
    },
    "/blog/post/sougou-shurufa-tiquan.html": {
        status: 301,
        destination: "/blog/sougou-shurufa-tiquan"
    },
    "/blog/post/sousuoyinqingzhizhuzhuaqu.html": {
        status: 301,
        destination: "/blog/sousuoyinqingzhizhuzhuaqu"
    },
    "/blog/post/SQL-Server-shujuwushanhuifu.html": {
        status: 301,
        destination: "/blog/sql-server-shujuwushanhuifu"
    },
    "/blog/post/SREng-2.7-Beta.html": {
        status: 301,
        destination: "/blog/sreng-27-beta"
    },
    "/blog/post/SREng-HijackThis-KillBox-IceSword-Unlocker.html": {
        status: 301,
        destination: "/blog/sreng-hijackthis-killbox-icesword-unlocker"
    },
    "/blog/post/SSClone-1210.html": {
        status: 301,
        destination: "/blog/ssclone-1210"
    },
    "/blog/post/StExbar-1.5.0.151.html": {
        status: 301,
        destination: "/blog/stexbar-150151"
    },
    "/blog/post/Storm-2009.02.19-kill-ad.html": {
        status: 301,
        destination: "/blog/storm-20090219-kill-ad"
    },
    "/blog/post/Storm-NoAD-v1.88.html": {
        status: 301,
        destination: "/blog/storm-noad-v188"
    },
    "/blog/post/suanlatudousidezuofa.html": {
        status: 301,
        destination: "/blog/suanlatudousidezuofa"
    },
    "/blog/post/Sucop-v4.0-RC2.html": {
        status: 301,
        destination: "/blog/sucop-v40-rc2"
    },
    "/blog/post/Summer-Time.html": {
        status: 301,
        destination: "/blog/summer-time"
    },
    "/blog/post/SUMo-v2.0.0.49-Beta.html": {
        status: 301,
        destination: "/blog/sumo-v20049-beta"
    },
    "/blog/post/SunPinyin.html": {
        status: 301,
        destination: "/blog/sunpinyin"
    },
    "/blog/post/suoqu-Ubuntu-8.04-LTS-CD.html": {
        status: 301,
        destination: "/blog/suoqu-ubuntu-804-lts-cd"
    },
    "/blog/post/Super-Ubuntu-2008-11.html": {
        status: 301,
        destination: "/blog/super-ubuntu-2008-11"
    },
    "/blog/post/suqier.html": {
        status: 301,
        destination: "/blog/suqier"
    },
    "/blog/post/Svchost.exe.html": {
        status: 301,
        destination: "/blog/svchostexe"
    },
    "/blog/post/Switch-Session-Clone-sniffer.html": {
        status: 301,
        destination: "/blog/switch-session-clone-sniffer"
    },
    "/blog/post/SYN-flood-attack.html": {
        status: 301,
        destination: "/blog/syn-flood-attack"
    },
    "/blog/post/synergy.html": {
        status: 301,
        destination: "/blog/synergy"
    },
    "/blog/post/System-Explorer-2.1.5.html": {
        status: 301,
        destination: "/blog/system-explorer-215"
    },
    "/blog/post/taipannengchima.html": {
        status: 301,
        destination: "/blog/taipannengchima"
    },
    "/blog/post/taobaobaobeipaimingguize.html": {
        status: 301,
        destination: "/blog/taobaobaobeipaimingguize"
    },
    "/blog/post/taobaopaiming8daguize.html": {
        status: 301,
        destination: "/blog/taobaopaiming8daguize"
    },
    "/blog/post/TCP-backshell-VBS-script.html": {
        status: 301,
        destination: "/blog/tcp-backshell-vbs-script"
    },
    "/blog/post/TeamViewer-4.0.5459-CHS-green.html": {
        status: 301,
        destination: "/blog/teamviewer-405459-chs-green"
    },
    "/blog/post/TechSmith-Camtasia-Studio-7.0.0-Build-1426.html": {
        status: 301,
        destination: "/blog/techsmith-camtasia-studio-700-build-1426"
    },
    "/blog/post/tengxunweibo-android-v1.2.2.html": {
        status: 301,
        destination: "/blog/tengxunweibo-android-v122"
    },
    "/blog/post/Teradepot.html": {
        status: 301,
        destination: "/blog/teradepot"
    },
    "/blog/post/The-Art-of-Deception-CHS-DOC-PDF.html": {
        status: 301,
        destination: "/blog/the-art-of-deception-chs-doc-pdf"
    },
    "/blog/post/The-Art-of-intrusion-Kevin-Mitnick-MP3.html": {
        status: 301,
        destination: "/blog/the-art-of-intrusion-kevin-mitnick-mp3"
    },
    "/blog/post/The-Non-Designers-Design-Book-PDF-CHS.html": {
        status: 301,
        destination: "/blog/the-non-designers-design-book-pdf-chs"
    },
    "/blog/post/The-SELinux-Coloring-Book.html": {
        status: 301,
        destination: "/blog/the-selinux-coloring-book"
    },
    "/blog/post/TheWorld-2.3.0.3-Beta.html": {
        status: 301,
        destination: "/blog/theworld-2303-beta"
    },
    "/blog/post/TheWorld-2.4.0.7-Final.html": {
        status: 301,
        destination: "/blog/theworld-2407-final"
    },
    "/blog/post/TheWorld-2.4.1.2-Final.html": {
        status: 301,
        destination: "/blog/theworld-2412-final"
    },
    "/blog/post/Thunder-5.8.6.600-Ayu.html": {
        status: 301,
        destination: "/blog/thunder-586600-ayu"
    },
    "/blog/post/thunder-noad-v1.0.html": {
        status: 301,
        destination: "/blog/thunder-noad-v10"
    },
    "/blog/post/Thunder-v5.7.5.421-TuZi-VS-Ayu.html": {
        status: 301,
        destination: "/blog/thunder-v575421-tuzi-vs-ayu"
    },
    "/blog/post/Thunder-v5.9.18.1364-Ayu.html": {
        status: 301,
        destination: "/blog/thunder-v59181364-ayu"
    },
    "/blog/post/Thunder-v6.0.0.92-xieluban-xiazai.html": {
        status: 301,
        destination: "/blog/thunder-v60092-xieluban-xiazai"
    },
    "/blog/post/Thunder5-0day.html": {
        status: 301,
        destination: "/blog/thunder5-0day"
    },
    "/blog/post/ThunderV5.7.3.389DDR10.6.html": {
        status: 301,
        destination: "/blog/thunderv573389ddr106"
    },
    "/blog/post/tianmaodedongxizhiliangzenmeyang.html": {
        status: 301,
        destination: "/blog/tianmaodedongxizhiliangzenmeyang"
    },
    "/blog/post/tianyuzhi-Jeonwoochi.html": {
        status: 301,
        destination: "/blog/tianyuzhi-jeonwoochi"
    },
    "/blog/post/Tilda.html": {
        status: 301,
        destination: "/blog/tilda"
    },
    "/blog/post/Tiny-Core-3.1.html": {
        status: 301,
        destination: "/blog/tiny-core-31"
    },
    "/blog/post/Tiny-Core-Linux-3.5.html": {
        status: 301,
        destination: "/blog/tiny-core-linux-35"
    },
    "/blog/post/TinyCore-Linux-2.7.html": {
        status: 301,
        destination: "/blog/tinycore-linux-27"
    },
    "/blog/post/TM2008-beta.html": {
        status: 301,
        destination: "/blog/tm2008-beta"
    },
    "/blog/post/TM2009-Beta-2.0.html": {
        status: 301,
        destination: "/blog/tm2009-beta-20"
    },
    "/blog/post/TM2009-Beta-Build766.html": {
        status: 301,
        destination: "/blog/tm2009-beta-build766"
    },
    "/blog/post/TM2009-beta.html": {
        status: 301,
        destination: "/blog/tm2009-beta"
    },
    "/blog/post/top-10-vul-scanner.html": {
        status: 301,
        destination: "/blog/top-10-vul-scanner"
    },
    "/blog/post/TopStyle-Portable.html": {
        status: 301,
        destination: "/blog/topstyle-portable"
    },
    "/blog/post/Torrent2exe-BT.html": {
        status: 301,
        destination: "/blog/torrent2exe-bt"
    },
    "/blog/post/Total-Uninstall.html": {
        status: 301,
        destination: "/blog/total-uninstall"
    },
    "/blog/post/Trend-Micro-DianZiYan.html": {
        status: 301,
        destination: "/blog/trend-micro-dianziyan"
    },
    "/blog/post/TT86QQzone-RenQi-V3.80beta4.html": {
        status: 301,
        destination: "/blog/tt86qqzone-renqi-v380beta4"
    },
    "/blog/post/tudou-FLV.html": {
        status: 301,
        destination: "/blog/tudou-flv"
    },
    "/blog/post/tuoyanzheng.html": {
        status: 301,
        destination: "/blog/tuoyanzheng"
    },
    "/blog/post/TurboLinux-11.3.html": {
        status: 301,
        destination: "/blog/turbolinux-113"
    },
    "/blog/post/TuZiThunder5-5.7.4.404.html": {
        status: 301,
        destination: "/blog/tuzithunder5-574404"
    },
    "/blog/post/TX-QQ-LvZuan.html": {
        status: 301,
        destination: "/blog/tx-qq-lvzuan"
    },
    "/blog/post/TX-TM2008-Preview3.html": {
        status: 301,
        destination: "/blog/tx-tm2008-preview3"
    },
    "/blog/post/TXQQ-bear-pet.html": {
        status: 301,
        destination: "/blog/txqq-bear-pet"
    },
    "/blog/post/TXT-buffer-overflow-MS04-041.html": {
        status: 301,
        destination: "/blog/txt-buffer-overflow-ms04-041"
    },
    "/blog/post/Ubuntu-10-tips.html": {
        status: 301,
        destination: "/blog/ubuntu-10-tips"
    },
    "/blog/post/Ubuntu-10.04-LTS-Alpha-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1004-lts-alpha-1"
    },
    "/blog/post/Ubuntu-10.04-LTS-Alpha-2.html": {
        status: 301,
        destination: "/blog/ubuntu-1004-lts-alpha-2"
    },
    "/blog/post/Ubuntu-10.04-LTS-Alpha-3.html": {
        status: 301,
        destination: "/blog/ubuntu-1004-lts-alpha-3"
    },
    "/blog/post/Ubuntu-10.04-LTS-Beta-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1004-lts-beta-1"
    },
    "/blog/post/Ubuntu-10.04-LTS-Beta-2.html": {
        status: 301,
        destination: "/blog/ubuntu-1004-lts-beta-2"
    },
    "/blog/post/Ubuntu-10.04-LTS-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-1004-lts-final"
    },
    "/blog/post/ubuntu-10.04-LTS-Lucid-Lynx.html": {
        status: 301,
        destination: "/blog/ubuntu-1004-lts-lucid-lynx"
    },
    "/blog/post/Ubuntu-10.04-LTS-RC.html": {
        status: 301,
        destination: "/blog/ubuntu-1004-lts-rc"
    },
    "/blog/post/Ubuntu-10.04.1-LTS.html": {
        status: 301,
        destination: "/blog/ubuntu-10041-lts"
    },
    "/blog/post/Ubuntu-10.04.2-LTS.html": {
        status: 301,
        destination: "/blog/ubuntu-10042-lts"
    },
    "/blog/post/Ubuntu-10.04.3-LTS.html": {
        status: 301,
        destination: "/blog/ubuntu-10043-lts"
    },
    "/blog/post/Ubuntu-10.04.4-LTS.html": {
        status: 301,
        destination: "/blog/ubuntu-10044-lts"
    },
    "/blog/post/Ubuntu-10.10-alpha-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1010-alpha-1"
    },
    "/blog/post/Ubuntu-10.10-Alpha-2.html": {
        status: 301,
        destination: "/blog/ubuntu-1010-alpha-2"
    },
    "/blog/post/Ubuntu-10.10-Alpha-3.html": {
        status: 301,
        destination: "/blog/ubuntu-1010-alpha-3"
    },
    "/blog/post/Ubuntu-10.10-Beta.html": {
        status: 301,
        destination: "/blog/ubuntu-1010-beta"
    },
    "/blog/post/Ubuntu-10.10-china.html": {
        status: 301,
        destination: "/blog/ubuntu-1010-china"
    },
    "/blog/post/Ubuntu-10.10-Maverick-Meerkat.html": {
        status: 301,
        destination: "/blog/ubuntu-1010-maverick-meerkat"
    },
    "/blog/post/Ubuntu-10.10-RC.html": {
        status: 301,
        destination: "/blog/ubuntu-1010-rc"
    },
    "/blog/post/Ubuntu-10.10.html": {
        status: 301,
        destination: "/blog/ubuntu-1010"
    },
    "/blog/post/Ubuntu-11.04-Alpha-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1104-alpha-1"
    },
    "/blog/post/Ubuntu-11.04-Alpha-3.html": {
        status: 301,
        destination: "/blog/ubuntu-1104-alpha-3"
    },
    "/blog/post/Ubuntu-11.04-Beta1.html": {
        status: 301,
        destination: "/blog/ubuntu-1104-beta1"
    },
    "/blog/post/Ubuntu-11.04-beta2.html": {
        status: 301,
        destination: "/blog/ubuntu-1104-beta2"
    },
    "/blog/post/Ubuntu-11.04-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-1104-final"
    },
    "/blog/post/Ubuntu-11.04-Natty-Narwhal.html": {
        status: 301,
        destination: "/blog/ubuntu-1104-natty-narwhal"
    },
    "/blog/post/Ubuntu-11.10-Alpha-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1110-alpha-1"
    },
    "/blog/post/Ubuntu-11.10-Alpha-2.html": {
        status: 301,
        destination: "/blog/ubuntu-1110-alpha-2"
    },
    "/blog/post/Ubuntu-11.10-Alpha-3.html": {
        status: 301,
        destination: "/blog/ubuntu-1110-alpha-3"
    },
    "/blog/post/Ubuntu-11.10-Beta-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1110-beta-1"
    },
    "/blog/post/Ubuntu-11.10-Beta-2.html": {
        status: 301,
        destination: "/blog/ubuntu-1110-beta-2"
    },
    "/blog/post/Ubuntu-11.10-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-1110-final"
    },
    "/blog/post/Ubuntu-11.10-Oneiric-Ocelot.html": {
        status: 301,
        destination: "/blog/ubuntu-1110-oneiric-ocelot"
    },
    "/blog/post/Ubuntu-11.10-RC.html": {
        status: 301,
        destination: "/blog/ubuntu-1110-rc"
    },
    "/blog/post/Ubuntu-12.04-Alpha-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1204-alpha-1"
    },
    "/blog/post/Ubuntu-12.04-Alpha-2.html": {
        status: 301,
        destination: "/blog/ubuntu-1204-alpha-2"
    },
    "/blog/post/Ubuntu-12.04-Beta-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1204-beta-1"
    },
    "/blog/post/Ubuntu-12.04-beta-2.html": {
        status: 301,
        destination: "/blog/ubuntu-1204-beta-2"
    },
    "/blog/post/Ubuntu-12.04-LTS-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-1204-lts-final"
    },
    "/blog/post/Ubuntu-12.04-LTS-Precise-Pangolin.html": {
        status: 301,
        destination: "/blog/ubuntu-1204-lts-precise-pangolin"
    },
    "/blog/post/Ubuntu-12.04.1.html": {
        status: 301,
        destination: "/blog/ubuntu-12041"
    },
    "/blog/post/Ubuntu-12.10-Alpha-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1210-alpha-1"
    },
    "/blog/post/Ubuntu-12.10-Alpha-2.html": {
        status: 301,
        destination: "/blog/ubuntu-1210-alpha-2"
    },
    "/blog/post/Ubuntu-12.10-Alpha-3.html": {
        status: 301,
        destination: "/blog/ubuntu-1210-alpha-3"
    },
    "/blog/post/Ubuntu-12.10-Beta-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1210-beta-1"
    },
    "/blog/post/Ubuntu-12.10-Beta-2.html": {
        status: 301,
        destination: "/blog/ubuntu-1210-beta-2"
    },
    "/blog/post/Ubuntu-12.10-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-1210-final"
    },
    "/blog/post/Ubuntu-12.10.html": {
        status: 301,
        destination: "/blog/ubuntu-1210"
    },
    "/blog/post/Ubuntu-13.04-final-beta.html": {
        status: 301,
        destination: "/blog/ubuntu-1304-final-beta"
    },
    "/blog/post/Ubuntu-13.04-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-1304-final"
    },
    "/blog/post/Ubuntu-13.04.html": {
        status: 301,
        destination: "/blog/ubuntu-1304"
    },
    "/blog/post/Ubuntu-13.10-final.html": {
        status: 301,
        destination: "/blog/ubuntu-1310-final"
    },
    "/blog/post/Ubuntu-13.10.html": {
        status: 301,
        destination: "/blog/ubuntu-1310"
    },
    "/blog/post/Ubuntu-14.04-Final-Beta.html": {
        status: 301,
        destination: "/blog/ubuntu-1404-final-beta"
    },
    "/blog/post/Ubuntu-14.04-LTS-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-1404-lts-final"
    },
    "/blog/post/Ubuntu-14.04-LTS.html": {
        status: 301,
        destination: "/blog/ubuntu-1404-lts"
    },
    "/blog/post/Ubuntu-14.10-Beta.html": {
        status: 301,
        destination: "/blog/ubuntu-1410-beta"
    },
    "/blog/post/Ubuntu-14.10-Utopic-Unicorn-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-1410-utopic-unicorn-final"
    },
    "/blog/post/Ubuntu-14.10.html": {
        status: 301,
        destination: "/blog/ubuntu-1410"
    },
    "/blog/post/Ubuntu-15.04-Beta-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1504-beta-1"
    },
    "/blog/post/Ubuntu-15.04-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-1504-final"
    },
    "/blog/post/Ubuntu-15.04.html": {
        status: 301,
        destination: "/blog/ubuntu-1504"
    },
    "/blog/post/Ubuntu-15.10-Alpha-1.html": {
        status: 301,
        destination: "/blog/ubuntu-1510-alpha-1"
    },
    "/blog/post/Ubuntu-15.10-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-1510-final"
    },
    "/blog/post/Ubuntu-7.10.html": {
        status: 301,
        destination: "/blog/ubuntu-710"
    },
    "/blog/post/Ubuntu-8.04-Hardy-Heron-DaiMaDongJie.html": {
        status: 301,
        destination: "/blog/ubuntu-804-hardy-heron-daimadongjie"
    },
    "/blog/post/Ubuntu-8.04-LTS-Beta-download.html": {
        status: 301,
        destination: "/blog/ubuntu-804-lts-beta-download"
    },
    "/blog/post/Ubuntu-8.04-LTS-DoS-attacks-loopholes.html": {
        status: 301,
        destination: "/blog/ubuntu-804-lts-dos-attacks-loopholes"
    },
    "/blog/post/Ubuntu-8.04-LTS-download-xiazai.html": {
        status: 301,
        destination: "/blog/ubuntu-804-lts-download-xiazai"
    },
    "/blog/post/Ubuntu-8.04-LTS-RC-ISO-xiazai-download.html": {
        status: 301,
        destination: "/blog/ubuntu-804-lts-rc-iso-xiazai-download"
    },
    "/blog/post/Ubuntu-8.04-LTS-RC-update-handbook.html": {
        status: 301,
        destination: "/blog/ubuntu-804-lts-rc-update-handbook"
    },
    "/blog/post/Ubuntu-8.04-LTS-set-April-24-release.html": {
        status: 301,
        destination: "/blog/ubuntu-804-lts-set-april-24-release"
    },
    "/blog/post/Ubuntu-8.04.2-LTS.html": {
        status: 301,
        destination: "/blog/ubuntu-8042-lts"
    },
    "/blog/post/Ubuntu-8.04.4-LTS.html": {
        status: 301,
        destination: "/blog/ubuntu-8044-lts"
    },
    "/blog/post/Ubuntu-8.10-Beta.html": {
        status: 301,
        destination: "/blog/ubuntu-810-beta"
    },
    "/blog/post/Ubuntu-8.10-Intrepid-Ibex-Alpha3.html": {
        status: 301,
        destination: "/blog/ubuntu-810-intrepid-ibex-alpha3"
    },
    "/blog/post/Ubuntu-8.10-Intrepid-Ibex-Alpha4.html": {
        status: 301,
        destination: "/blog/ubuntu-810-intrepid-ibex-alpha4"
    },
    "/blog/post/Ubuntu-8.10-Intrepid-Ibex-Alpha5.html": {
        status: 301,
        destination: "/blog/ubuntu-810-intrepid-ibex-alpha5"
    },
    "/blog/post/Ubuntu-8.10-Intrepid-Ibex-Alpha6.html": {
        status: 301,
        destination: "/blog/ubuntu-810-intrepid-ibex-alpha6"
    },
    "/blog/post/Ubuntu-8.10-Intrepid-Ibex-fabu-shijian.html": {
        status: 301,
        destination: "/blog/ubuntu-810-intrepid-ibex-fabu-shijian"
    },
    "/blog/post/Ubuntu-8.10-Intrepid-Ibex.html": {
        status: 301,
        destination: "/blog/ubuntu-810-intrepid-ibex"
    },
    "/blog/post/Ubuntu-8.10-RC.html": {
        status: 301,
        destination: "/blog/ubuntu-810-rc"
    },
    "/blog/post/Ubuntu-9.04-Alpha2.html": {
        status: 301,
        destination: "/blog/ubuntu-904-alpha2"
    },
    "/blog/post/Ubuntu-9.04-Alpha3.html": {
        status: 301,
        destination: "/blog/ubuntu-904-alpha3"
    },
    "/blog/post/Ubuntu-9.04-Alpha4.html": {
        status: 301,
        destination: "/blog/ubuntu-904-alpha4"
    },
    "/blog/post/Ubuntu-9.04-Alpha5.html": {
        status: 301,
        destination: "/blog/ubuntu-904-alpha5"
    },
    "/blog/post/Ubuntu-9.04-Alpha6.html": {
        status: 301,
        destination: "/blog/ubuntu-904-alpha6"
    },
    "/blog/post/Ubuntu-9.04-Beta.html": {
        status: 301,
        destination: "/blog/ubuntu-904-beta"
    },
    "/blog/post/Ubuntu-9.04-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-904-final"
    },
    "/blog/post/Ubuntu-9.04-Jaunty-Jackalope-Alpha1.html": {
        status: 301,
        destination: "/blog/ubuntu-904-jaunty-jackalope-alpha1"
    },
    "/blog/post/Ubuntu-9.04-Jaunty-Jackalope-ReleaseSchedule.html": {
        status: 301,
        destination: "/blog/ubuntu-904-jaunty-jackalope-releaseschedule"
    },
    "/blog/post/Ubuntu-9.04-RC.html": {
        status: 301,
        destination: "/blog/ubuntu-904-rc"
    },
    "/blog/post/Ubuntu-9.04-wubi-shibai.html": {
        status: 301,
        destination: "/blog/ubuntu-904-wubi-shibai"
    },
    "/blog/post/Ubuntu-9.10-Alpha-1.html": {
        status: 301,
        destination: "/blog/ubuntu-910-alpha-1"
    },
    "/blog/post/Ubuntu-9.10-Alpha2.html": {
        status: 301,
        destination: "/blog/ubuntu-910-alpha2"
    },
    "/blog/post/Ubuntu-9.10-Alpha3.html": {
        status: 301,
        destination: "/blog/ubuntu-910-alpha3"
    },
    "/blog/post/Ubuntu-9.10-Alpha4.html": {
        status: 301,
        destination: "/blog/ubuntu-910-alpha4"
    },
    "/blog/post/Ubuntu-9.10-Alpha5.html": {
        status: 301,
        destination: "/blog/ubuntu-910-alpha5"
    },
    "/blog/post/Ubuntu-9.10-Alpha6.html": {
        status: 301,
        destination: "/blog/ubuntu-910-alpha6"
    },
    "/blog/post/Ubuntu-9.10-Beta.html": {
        status: 301,
        destination: "/blog/ubuntu-910-beta"
    },
    "/blog/post/Ubuntu-9.10-Final.html": {
        status: 301,
        destination: "/blog/ubuntu-910-final"
    },
    "/blog/post/Ubuntu-9.10-Karmic-Koala.html": {
        status: 301,
        destination: "/blog/ubuntu-910-karmic-koala"
    },
    "/blog/post/Ubuntu-9.10-Release-Candidate.html": {
        status: 301,
        destination: "/blog/ubuntu-910-release-candidate"
    },
    "/blog/post/Ubuntu-Adobe-AIR.html": {
        status: 301,
        destination: "/blog/ubuntu-adobe-air"
    },
    "/blog/post/ubuntu-alipay.html": {
        status: 301,
        destination: "/blog/ubuntu-alipay"
    },
    "/blog/post/Ubuntu-Compiler-Linux-kernel.html": {
        status: 301,
        destination: "/blog/ubuntu-compiler-linux-kernel"
    },
    "/blog/post/Ubuntu-Eee-8.04.1-RC.html": {
        status: 301,
        destination: "/blog/ubuntu-eee-8041-rc"
    },
    "/blog/post/ubuntu-linux-wine-maxthon.html": {
        status: 301,
        destination: "/blog/ubuntu-linux-wine-maxthon"
    },
    "/blog/post/Ubuntu-Office-CrossOver.html": {
        status: 301,
        destination: "/blog/ubuntu-office-crossover"
    },
    "/blog/post/Ubuntu-Tweak-0.3.5.html": {
        status: 301,
        destination: "/blog/ubuntu-tweak-035"
    },
    "/blog/post/ubuntu-wine-ie6-ie7.html": {
        status: 301,
        destination: "/blog/ubuntu-wine-ie6-ie7"
    },
    "/blog/post/UC-7.0-For-Android.html": {
        status: 301,
        destination: "/blog/uc-70-for-android"
    },
    "/blog/post/Ucloner.html": {
        status: 301,
        destination: "/blog/ucloner"
    },
    "/blog/post/Ulteo-Virtual-Desktop.html": {
        status: 301,
        destination: "/blog/ulteo-virtual-desktop"
    },
    "/blog/post/Ultimate-Edition-3.2.html": {
        status: 301,
        destination: "/blog/ultimate-edition-32"
    },
    "/blog/post/UltraShredder-4.60-han.html": {
        status: 301,
        destination: "/blog/ultrashredder-460-han"
    },
    "/blog/post/UltraVNC-v1.0.5.3.html": {
        status: 301,
        destination: "/blog/ultravnc-v1053"
    },
    "/blog/post/Understanding-basic-vi.html": {
        status: 301,
        destination: "/blog/understanding-basic-vi"
    },
    "/blog/post/Universal-Viewer-ATViewer-Free-2.7.0.html": {
        status: 301,
        destination: "/blog/universal-viewer-atviewer-free-270"
    },
    "/blog/post/Unlocker-1.8.8.html": {
        status: 301,
        destination: "/blog/unlocker-188"
    },
    "/blog/post/Unlocker-v1.8.6.html": {
        status: 301,
        destination: "/blog/unlocker-v186"
    },
    "/blog/post/UnlockMe-1.0.html": {
        status: 301,
        destination: "/blog/unlockme-10"
    },
    "/blog/post/Uploadho.com.html": {
        status: 301,
        destination: "/blog/uploadhocom"
    },
    "/blog/post/USB-3.0.html": {
        status: 301,
        destination: "/blog/usb-30"
    },
    "/blog/post/USB-Safely-Remove-v4.0-Beta8.html": {
        status: 301,
        destination: "/blog/usb-safely-remove-v40-beta8"
    },
    "/blog/post/VBS-radmin-backdoor.html": {
        status: 301,
        destination: "/blog/vbs-radmin-backdoor"
    },
    "/blog/post/VBS-SendKeys.html": {
        status: 301,
        destination: "/blog/vbs-sendkeys"
    },
    "/blog/post/Vector-Linux-7.0.html": {
        status: 301,
        destination: "/blog/vector-linux-70"
    },
    "/blog/post/vi-vim-graphical-cheat-sheet.html": {
        status: 301,
        destination: "/blog/vi-vim-graphical-cheat-sheet"
    },
    "/blog/post/VIEWGOOD-VOD-SQL-injection.html": {
        status: 301,
        destination: "/blog/viewgood-vod-sql-injection"
    },
    "/blog/post/Vim-rumen-tujie-shuoming.html": {
        status: 301,
        destination: "/blog/vim-rumen-tujie-shuoming"
    },
    "/blog/post/VirtualBox-3.0.0-r49315.html": {
        status: 301,
        destination: "/blog/virtualbox-300-r49315"
    },
    "/blog/post/VirtualBox-command.html": {
        status: 301,
        destination: "/blog/virtualbox-command"
    },
    "/blog/post/VirtualBox-v2.0.6.html": {
        status: 301,
        destination: "/blog/virtualbox-v206"
    },
    "/blog/post/VirtualPrivateServer.html": {
        status: 301,
        destination: "/blog/virtualprivateserver"
    },
    "/blog/post/VirtuaWin-4.0-Final.html": {
        status: 301,
        destination: "/blog/virtuawin-40-final"
    },
    "/blog/post/Virus-IGM.exe.html": {
        status: 301,
        destination: "/blog/virus-igmexe"
    },
    "/blog/post/virus-top10.html": {
        status: 301,
        destination: "/blog/virus-top10"
    },
    "/blog/post/VirusAutorunInf.html": {
        status: 301,
        destination: "/blog/virusautoruninf"
    },
    "/blog/post/Vista-to-Linux-5.html": {
        status: 301,
        destination: "/blog/vista-to-linux-5"
    },
    "/blog/post/VistaSP1.html": {
        status: 301,
        destination: "/blog/vistasp1"
    },
    "/blog/post/VisualRoute-2009-13.1e.html": {
        status: 301,
        destination: "/blog/visualroute-2009-131e"
    },
    "/blog/post/ViYa-QQ-TM08-optimize-tool-0.13.html": {
        status: 301,
        destination: "/blog/viya-qq-tm08-optimize-tool-013"
    },
    "/blog/post/VMware-Workstation-7.0.0-lvse-jingjian-hanhua-wanquan.html": {
        status: 301,
        destination: "/blog/vmware-workstation-700-lvse-jingjian-hanhua-wanquan"
    },
    "/blog/post/VMware-Workstation-V7.0.0-jingjian-hanhu-anzhuang.html": {
        status: 301,
        destination: "/blog/vmware-workstation-v700-jingjian-hanhu-anzhuang"
    },
    "/blog/post/VMware-Workstation-V7.0.1.227600-lite.html": {
        status: 301,
        destination: "/blog/vmware-workstation-v701227600-lite"
    },
    "/blog/post/Volumouse.html": {
        status: 301,
        destination: "/blog/volumouse"
    },
    "/blog/post/VPS-Dropbox-backup.html": {
        status: 301,
        destination: "/blog/vps-dropbox-backup"
    },
    "/blog/post/VPS-peizhi-rumen-jiaocheng.html": {
        status: 301,
        destination: "/blog/vps-peizhi-rumen-jiaocheng"
    },
    "/blog/post/waijiaolezenmeban.html": {
        status: 301,
        destination: "/blog/waijiaolezenmeban"
    },
    "/blog/post/wandoujiashoujijingling.html": {
        status: 301,
        destination: "/blog/wandoujiashoujijingling"
    },
    "/blog/post/wangshang-kanchunwan.html": {
        status: 301,
        destination: "/blog/wangshang-kanchunwan"
    },
    "/blog/post/wangzhanjiemianmeiguanyingxiangfangwenliang.html": {
        status: 301,
        destination: "/blog/wangzhanjiemianmeiguanyingxiangfangwenliang"
    },
    "/blog/post/wangzhanruhezaigonganjubeian.html": {
        status: 301,
        destination: "/blog/wangzhanruhezaigonganjubeian"
    },
    "/blog/post/wanshangchiduolezenmeban.html": {
        status: 301,
        destination: "/blog/wanshangchiduolezenmeban"
    },
    "/blog/post/WAP-Web-Application-Security.html": {
        status: 301,
        destination: "/blog/wap-web-application-security"
    },
    "/blog/post/wdcp-v2.1.html": {
        status: 301,
        destination: "/blog/wdcp-v21"
    },
    "/blog/post/Web-Trojan-code.html": {
        status: 301,
        destination: "/blog/web-trojan-code"
    },
    "/blog/post/WebLogic-zhuaji.html": {
        status: 301,
        destination: "/blog/weblogic-zhuaji"
    },
    "/blog/post/webQQ-QQmail.html": {
        status: 301,
        destination: "/blog/webqq-qqmail"
    },
    "/blog/post/WebSniff-1.0.html": {
        status: 301,
        destination: "/blog/websniff-10"
    },
    "/blog/post/weishenmehuiyuejianyuefei.html": {
        status: 301,
        destination: "/blog/weishenmehuiyuejianyuefei"
    },
    "/blog/post/weishenmezhaowenzi.html": {
        status: 301,
        destination: "/blog/weishenmezhaowenzi"
    },
    "/blog/post/weishenmezipainankan.html": {
        status: 301,
        destination: "/blog/weishenmezipainankan"
    },
    "/blog/post/weitongzenmeban.html": {
        status: 301,
        destination: "/blog/weitongzenmeban"
    },
    "/blog/post/weixinapp_daduanwenzi_huanhang.html": {
        status: 301,
        destination: "/blog/weixinapp_daduanwenzi_huanhang"
    },
    "/blog/post/weixinapp_navigate_navigator_switchtabbar.html": {
        status: 301,
        destination: "/blog/weixinapp_navigate_navigator_switchtabbar"
    },
    "/blog/post/wenquanyi-0.6.26-qidao-xiazai.html": {
        status: 301,
        destination: "/blog/wenquanyi-0626-qidao-xiazai"
    },
    "/blog/post/wenquanyi-0.8.38-pangu.html": {
        status: 301,
        destination: "/blog/wenquanyi-0838-pangu"
    },
    "/blog/post/Windows-2000-XP-2003-win32k.sys-SfnINSTRING-local-DOS.html": {
        status: 301,
        destination: "/blog/windows-2000-xp-2003-win32ksys-sfninstring-local-dos"
    },
    "/blog/post/Windows-2000-XP-2003-win32k.sys-SfnLOGONNOTIFY-local-DOS.html": {
        status: 301,
        destination: "/blog/windows-2000-xp-2003-win32ksys-sfnlogonnotify-local-dos"
    },
    "/blog/post/Windows-7-Beta.html": {
        status: 301,
        destination: "/blog/windows-7-beta"
    },
    "/blog/post/Windows-7-Build6956-VHD.html": {
        status: 301,
        destination: "/blog/windows-7-build6956-vhd"
    },
    "/blog/post/Windows-7-Loader-v1.7.8.html": {
        status: 301,
        destination: "/blog/windows-7-loader-v178"
    },
    "/blog/post/Windows-7-Release-Candidate.html": {
        status: 301,
        destination: "/blog/windows-7-release-candidate"
    },
    "/blog/post/Windows-7-RTM-Build-7600.16385.html": {
        status: 301,
        destination: "/blog/windows-7-rtm-build-760016385"
    },
    "/blog/post/Windows-8-Consumer-Preview.html": {
        status: 301,
        destination: "/blog/windows-8-consumer-preview"
    },
    "/blog/post/windows-command-safe-importent.html": {
        status: 301,
        destination: "/blog/windows-command-safe-importent"
    },
    "/blog/post/windows-ext3-ext4-Ext2Read-Ext2Fsd.html": {
        status: 301,
        destination: "/blog/windows-ext3-ext4-ext2read-ext2fsd"
    },
    "/blog/post/Windows-hide-power-user.html": {
        status: 301,
        destination: "/blog/windows-hide-power-user"
    },
    "/blog/post/Windows-HPC-Server-2008.html": {
        status: 301,
        destination: "/blog/windows-hpc-server-2008"
    },
    "/blog/post/Windows-Mac-Ubuntu-UTC-GMT-time.html": {
        status: 301,
        destination: "/blog/windows-mac-ubuntu-utc-gmt-time"
    },
    "/blog/post/Windows-Media-Player-12-beta1-download.html": {
        status: 301,
        destination: "/blog/windows-media-player-12-beta1-download"
    },
    "/blog/post/Windows-Microsoft-Works-0day.html": {
        status: 301,
        destination: "/blog/windows-microsoft-works-0day"
    },
    "/blog/post/Windows-Self-Booting-Summary.html": {
        status: 301,
        destination: "/blog/windows-self-booting-summary"
    },
    "/blog/post/Windows-Server-2008-Data-Ent-Sta-x64-CHS.html": {
        status: 301,
        destination: "/blog/windows-server-2008-data-ent-sta-x64-chs"
    },
    "/blog/post/Windows-Server-2008-Multi-language-package.html": {
        status: 301,
        destination: "/blog/windows-server-2008-multi-language-package"
    },
    "/blog/post/Windows-Server-2008-R2-Beta-VHD.html": {
        status: 301,
        destination: "/blog/windows-server-2008-r2-beta-vhd"
    },
    "/blog/post/Windows-Server-2008-R2-Beta.html": {
        status: 301,
        destination: "/blog/windows-server-2008-r2-beta"
    },
    "/blog/post/Windows-Server-2008-R2-Release-Candidate.html": {
        status: 301,
        destination: "/blog/windows-server-2008-r2-release-candidate"
    },
    "/blog/post/Windows-Server-2008-R2-RTM.html": {
        status: 301,
        destination: "/blog/windows-server-2008-r2-rtm"
    },
    "/blog/post/Windows-Server-2012-RC-Datacenter.html": {
        status: 301,
        destination: "/blog/windows-server-2012-rc-datacenter"
    },
    "/blog/post/Windows-Server-8-Beta.html": {
        status: 301,
        destination: "/blog/windows-server-8-beta"
    },
    "/blog/post/Windows-Sysinternals-Suite-Build-2008.09.30.html": {
        status: 301,
        destination: "/blog/windows-sysinternals-suite-build-20080930"
    },
    "/blog/post/Windows-Vista-SP2-Beta.html": {
        status: 301,
        destination: "/blog/windows-vista-sp2-beta"
    },
    "/blog/post/windows-wenjianguanlian-assoc-ftype.html": {
        status: 301,
        destination: "/blog/windows-wenjianguanlian-assoc-ftype"
    },
    "/blog/post/Windows-WorkStation-Remote-BufferOverflow-0day.html": {
        status: 301,
        destination: "/blog/windows-workstation-remote-bufferoverflow-0day"
    },
    "/blog/post/Windows-XP-SP3-jianti-zhongwen-zhengshiban-xiazai.html": {
        status: 301,
        destination: "/blog/windows-xp-sp3-jianti-zhongwen-zhengshiban-xiazai"
    },
    "/blog/post/Windows-XP-SP3-RTM-jianti-zhongwen-xiazai.html": {
        status: 301,
        destination: "/blog/windows-xp-sp3-rtm-jianti-zhongwen-xiazai"
    },
    "/blog/post/Windows7-grldr-menu.lst-linux.html": {
        status: 301,
        destination: "/blog/windows7-grldr-menulst-linux"
    },
    "/blog/post/WindowsWopti-Pro-7.99-Build-10.101-lvse.html": {
        status: 301,
        destination: "/blog/windowswopti-pro-799-build-10101-lvse"
    },
    "/blog/post/wine-1.0-date-of-release.html": {
        status: 301,
        destination: "/blog/wine-10-date-of-release"
    },
    "/blog/post/Wine-1.0-Final-xiazai.html": {
        status: 301,
        destination: "/blog/wine-10-final-xiazai"
    },
    "/blog/post/Wine-1.0-RC2.html": {
        status: 301,
        destination: "/blog/wine-10-rc2"
    },
    "/blog/post/Wine-1.1.1-xiazai.html": {
        status: 301,
        destination: "/blog/wine-111-xiazai"
    },
    "/blog/post/Wine-1.1.10.html": {
        status: 301,
        destination: "/blog/wine-1110"
    },
    "/blog/post/Wine-1.1.5.html": {
        status: 301,
        destination: "/blog/wine-115"
    },
    "/blog/post/Wine-1.1.7.html": {
        status: 301,
        destination: "/blog/wine-117"
    },
    "/blog/post/Wine-1.1.9.html": {
        status: 301,
        destination: "/blog/wine-119"
    },
    "/blog/post/Wine-1.13.html": {
        status: 301,
        destination: "/blog/wine-113"
    },
    "/blog/post/wink.html": {
        status: 301,
        destination: "/blog/wink"
    },
    "/blog/post/WinMerge-Portable-2.12.2.html": {
        status: 301,
        destination: "/blog/winmerge-portable-2122"
    },
    "/blog/post/WinMount-v3.1-beta-1120.html": {
        status: 301,
        destination: "/blog/winmount-v31-beta-1120"
    },
    "/blog/post/WinPatrol-15.9.2008.0.html": {
        status: 301,
        destination: "/blog/winpatrol-15920080"
    },
    "/blog/post/WinProcess.html": {
        status: 301,
        destination: "/blog/winprocess"
    },
    "/blog/post/winrar-zidongshengchengkuaijiefangshi.html": {
        status: 301,
        destination: "/blog/winrar-zidongshengchengkuaijiefangshi"
    },
    "/blog/post/WinSplit-Revolution-v8.06.html": {
        status: 301,
        destination: "/blog/winsplit-revolution-v806"
    },
    "/blog/post/WinToFlash.html": {
        status: 301,
        destination: "/blog/wintoflash"
    },
    "/blog/post/WinXPSecTemplates.html": {
        status: 301,
        destination: "/blog/winxpsectemplates"
    },
    "/blog/post/Wireshark-1.2.0.html": {
        status: 301,
        destination: "/blog/wireshark-120"
    },
    "/blog/post/WordPress-for-Android-1.0.html": {
        status: 301,
        destination: "/blog/wordpress-for-android-10"
    },
    "/blog/post/WordPress-SQL-term-taxonomy.html": {
        status: 301,
        destination: "/blog/wordpress-sql-term-taxonomy"
    },
    "/blog/post/worm.nimaya.al.html": {
        status: 301,
        destination: "/blog/wormnimayaal"
    },
    "/blog/post/WPS-2010-lvse.html": {
        status: 301,
        destination: "/blog/wps-2010-lvse"
    },
    "/blog/post/WScan-v3.0-CRST.html": {
        status: 301,
        destination: "/blog/wscan-v30-crst"
    },
    "/blog/post/wsi-GET-POST-Cookie-injection-tool.html": {
        status: 301,
        destination: "/blog/wsi-get-post-cookie-injection-tool"
    },
    "/blog/post/WSysCheck-1216.html": {
        status: 301,
        destination: "/blog/wsyscheck-1216"
    },
    "/blog/post/Wubi-8.10.html": {
        status: 301,
        destination: "/blog/wubi-810"
    },
    "/blog/post/wufaduquyuanwenjianhuocipan.html": {
        status: 301,
        destination: "/blog/wufaduquyuanwenjianhuocipan"
    },
    "/blog/post/www.4shared-china.com.html": {
        status: 301,
        destination: "/blog/www4shared-chinacom"
    },
    "/blog/post/www.blogbee.net.html": {
        status: 301,
        destination: "/blog/wwwblogbeenet"
    },
    "/blog/post/www.pikeo.com.html": {
        status: 301,
        destination: "/blog/wwwpikeocom"
    },
    "/blog/post/www.tt98.com.html": {
        status: 301,
        destination: "/blog/wwwtt98com"
    },
    "/blog/post/xiabanshenfeipangyuanyinjianfei.html": {
        status: 301,
        destination: "/blog/xiabanshenfeipangyuanyinjianfei"
    },
    "/blog/post/xiangjie-guama-fangfa-jiqiao.html": {
        status: 301,
        destination: "/blog/xiangjie-guama-fangfa-jiqiao"
    },
    "/blog/post/xiangqinshichuanshenmehao.html": {
        status: 301,
        destination: "/blog/xiangqinshichuanshenmehao"
    },
    "/blog/post/xiangqinzhiqiannvshengdezhuyishixiang.html": {
        status: 301,
        destination: "/blog/xiangqinzhiqiannvshengdezhuyishixiang"
    },
    "/blog/post/xiangqinzhuyishixiang.html": {
        status: 301,
        destination: "/blog/xiangqinzhuyishixiang"
    },
    "/blog/post/XiaoMieChaoChong.html": {
        status: 301,
        destination: "/blog/xiaomiechaochong"
    },
    "/blog/post/XiaoNei-XSS-Worm.html": {
        status: 301,
        destination: "/blog/xiaonei-xss-worm"
    },
    "/blog/post/xiazaigongju-xiazai-fs2you-javascript.html": {
        status: 301,
        destination: "/blog/xiazaigongju-xiazai-fs2you-javascript"
    },
    "/blog/post/xinxing-wanneng-denglu-mima.html": {
        status: 301,
        destination: "/blog/xinxing-wanneng-denglu-mima"
    },
    "/blog/post/xinyang-ubuntu-9.04-chinese-customize.html": {
        status: 301,
        destination: "/blog/xinyang-ubuntu-904-chinese-customize"
    },
    "/blog/post/xiyangyangyuhuitailang-guguguaijiedazuozhan.html": {
        status: 301,
        destination: "/blog/xiyangyangyuhuitailang-guguguaijiedazuozhan"
    },
    "/blog/post/XP-2003-open3389-SHIFTbackdoor-vbs.html": {
        status: 301,
        destination: "/blog/xp-2003-open3389-shiftbackdoor-vbs"
    },
    "/blog/post/XSS-Worm-Defense-hibaidu.html": {
        status: 301,
        destination: "/blog/xss-worm-defense-hibaidu"
    },
    "/blog/post/XSS-WORM-guama.html": {
        status: 301,
        destination: "/blog/xss-worm-guama"
    },
    "/blog/post/XueTr-0.33.html": {
        status: 301,
        destination: "/blog/xuetr-033"
    },
    "/blog/post/xunizhuji-anzhuang-dropbox.html": {
        status: 301,
        destination: "/blog/xunizhuji-anzhuang-dropbox"
    },
    "/blog/post/xunlei-quguanggao-buding-v1.3.html": {
        status: 301,
        destination: "/blog/xunlei-quguanggao-buding-v13"
    },
    "/blog/post/xunlei-quguanggao-v1.1.html": {
        status: 301,
        destination: "/blog/xunlei-quguanggao-v11"
    },
    "/blog/post/xuzhouren-zai-suzhou.html": {
        status: 301,
        destination: "/blog/xuzhouren-zai-suzhou"
    },
    "/blog/post/yahoo.co.jp-free-50M.html": {
        status: 301,
        destination: "/blog/yahoocojp-free-50m"
    },
    "/blog/post/yehuo-CI-anzhuang.html": {
        status: 301,
        destination: "/blog/yehuo-ci-anzhuang"
    },
    "/blog/post/yehuo-CI-jingtaiye.html": {
        status: 301,
        destination: "/blog/yehuo-ci-jingtaiye"
    },
    "/blog/post/yehuo-CI-qiniu.html": {
        status: 301,
        destination: "/blog/yehuo-ci-qiniu"
    },
    "/blog/post/yehuo-CI-QQdenglujiekou.html": {
        status: 301,
        destination: "/blog/yehuo-ci-qqdenglujiekou"
    },
    "/blog/post/yehuo-CI-shujukuzengshangaicha.html": {
        status: 301,
        destination: "/blog/yehuo-ci-shujukuzengshangaicha"
    },
    "/blog/post/yehuo-CI-xu-mulu.html": {
        status: 301,
        destination: "/blog/yehuo-ci-xu-mulu"
    },
    "/blog/post/yehuo-SEO-wangzhantuiguang-fansi.html": {
        status: 301,
        destination: "/blog/yehuo-seo-wangzhantuiguang-fansi"
    },
    "/blog/post/yigerenkuaisutaobeitao.html": {
        status: 301,
        destination: "/blog/yigerenkuaisutaobeitao"
    },
    "/blog/post/yijichukuaidizenyanggaidizhi.html": {
        status: 301,
        destination: "/blog/yijichukuaidizenyanggaidizhi"
    },
    "/blog/post/yijuhua-wancheng-SQL-duotiaojian-shujuku-chaxun.html": {
        status: 301,
        destination: "/blog/yijuhua-wancheng-sql-duotiaojian-shujuku-chaxun"
    },
    "/blog/post/yingzuobao.html": {
        status: 301,
        destination: "/blog/yingzuobao"
    },
    "/blog/post/yinhuajidanzenmezuo.html": {
        status: 301,
        destination: "/blog/yinhuajidanzenmezuo"
    },
    "/blog/post/yizhichadianyongbijibenhaoma.html": {
        status: 301,
        destination: "/blog/yizhichadianyongbijibenhaoma"
    },
    "/blog/post/Ylmf-Linux-Y1.15-Ubuntu.html": {
        status: 301,
        destination: "/blog/ylmf-linux-y115-ubuntu"
    },
    "/blog/post/Ylmf-Linux-Y1.5-Ubuntu-9.10.html": {
        status: 301,
        destination: "/blog/ylmf-linux-y15-ubuntu-910"
    },
    "/blog/post/Ylmf-Linux.html": {
        status: 301,
        destination: "/blog/ylmf-linux"
    },
    "/blog/post/YLMF-OneKey-Ghost-11-v5.0.10.19.html": {
        status: 301,
        destination: "/blog/ylmf-onekey-ghost-11-v501019"
    },
    "/blog/post/Ylmf-OS-3.0.html": {
        status: 301,
        destination: "/blog/ylmf-os-30"
    },
    "/blog/post/youjian-xuniguangqu.html": {
        status: 301,
        destination: "/blog/youjian-xuniguangqu"
    },
    "/blog/post/youxijibuyudarenjiqiaogonglve.html": {
        status: 301,
        destination: "/blog/youxijibuyudarenjiqiaogonglve"
    },
    "/blog/post/yowarIPTV.html": {
        status: 301,
        destination: "/blog/yowariptv"
    },
    "/blog/post/yueguangbaohe-DVD.html": {
        status: 301,
        destination: "/blog/yueguangbaohe-dvd"
    },
    "/blog/post/yulingdaochifandejiqiao.html": {
        status: 301,
        destination: "/blog/yulingdaochifandejiqiao"
    },
    "/blog/post/yurenjie-zhenggu-yuanma.html": {
        status: 301,
        destination: "/blog/yurenjie-zhenggu-yuanma"
    },
    "/blog/post/yurongfuzenmexi.html": {
        status: 301,
        destination: "/blog/yurongfuzenmexi"
    },
    "/blog/post/Z-Blog-1.8-Devo-Build-80108-15897.com-updated.html": {
        status: 301,
        destination: "/blog/z-blog-18-devo-build-80108-15897com-updated"
    },
    "/blog/post/Z-BlogPHP-1.1.html": {
        status: 301,
        destination: "/blog/z-blogphp-11"
    },
    "/blog/post/zai-suzhou-8-tian.html": {
        status: 301,
        destination: "/blog/zai-suzhou-8-tian"
    },
    "/blog/post/Zeal-0.11.html": {
        status: 301,
        destination: "/blog/zeal-011"
    },
    "/blog/post/zenmechaocaibujianyou.html": {
        status: 301,
        destination: "/blog/zenmechaocaibujianyou"
    },
    "/blog/post/zenmechipangxie.html": {
        status: 301,
        destination: "/blog/zenmechipangxie"
    },
    "/blog/post/zenmekefujinzhang.html": {
        status: 301,
        destination: "/blog/zenmekefujinzhang"
    },
    "/blog/post/zenmeliuhuzi.html": {
        status: 301,
        destination: "/blog/zenmeliuhuzi"
    },
    "/blog/post/zenmexiumei.html": {
        status: 301,
        destination: "/blog/zenmexiumei"
    },
    "/blog/post/zenmeyangtiaoxigua.html": {
        status: 301,
        destination: "/blog/zenmeyangtiaoxigua"
    },
    "/blog/post/zenmezuohaochidezhajitui.html": {
        status: 301,
        destination: "/blog/zenmezuohaochidezhajitui"
    },
    "/blog/post/zenyangaozhouzenmezhuzhou.html": {
        status: 301,
        destination: "/blog/zenyangaozhouzenmezhuzhou"
    },
    "/blog/post/zenyangqudoudouhedouyin.html": {
        status: 301,
        destination: "/blog/zenyangqudoudouhedouyin"
    },
    "/blog/post/zenyangshoutuizuikuaizuiyouxiao.html": {
        status: 301,
        destination: "/blog/zenyangshoutuizuikuaizuiyouxiao"
    },
    "/blog/post/zenyangxuanshumaxiangji.html": {
        status: 301,
        destination: "/blog/zenyangxuanshumaxiangji"
    },
    "/blog/post/zenyangyanhuanshuailao.html": {
        status: 301,
        destination: "/blog/zenyangyanhuanshuailao"
    },
    "/blog/post/zhatoufadefangfatujie.html": {
        status: 301,
        destination: "/blog/zhatoufadefangfatujie"
    },
    "/blog/post/zhengmifanzenmezuohaochi.html": {
        status: 301,
        destination: "/blog/zhengmifanzenmezuohaochi"
    },
    "/blog/post/zhengquedeshangwangzishi.html": {
        status: 301,
        destination: "/blog/zhengquedeshangwangzishi"
    },
    "/blog/post/zhengquedeshuayafangfa.html": {
        status: 301,
        destination: "/blog/zhengquedeshuayafangfa"
    },
    "/blog/post/zhengquedexizaofangfa.html": {
        status: 301,
        destination: "/blog/zhengquedexizaofangfa"
    },
    "/blog/post/zhenzhengdemocha.html": {
        status: 301,
        destination: "/blog/zhenzhengdemocha"
    },
    "/blog/post/zhijiaoqidezuihaobanfa.html": {
        status: 301,
        destination: "/blog/zhijiaoqidezuihaobanfa"
    },
    "/blog/post/zhiketianjialaizichrome.html": {
        status: 301,
        destination: "/blog/zhiketianjialaizichrome"
    },
    "/blog/post/zhongguoliudachalei.html": {
        status: 301,
        destination: "/blog/zhongguoliudachalei"
    },
    "/blog/post/zhongwen-WordPress-bibei-jingdian-chajian-huizong.html": {
        status: 301,
        destination: "/blog/zhongwen-wordpress-bibei-jingdian-chajian-huizong"
    },
    "/blog/post/zhoudezuofadaquan.html": {
        status: 301,
        destination: "/blog/zhoudezuofadaquan"
    },
    "/blog/post/zhuoyou.html": {
        status: 301,
        destination: "/blog/zhuoyou"
    },
    "/blog/post/zizhijianfeicha.html": {
        status: 301,
        destination: "/blog/zizhijianfeicha"
    },
    "/blog/post/zizhisuannai.html": {
        status: 301,
        destination: "/blog/zizhisuannai"
    },
    "/blog/post/zongganjueshoujizaizhendong.html": {
        status: 301,
        destination: "/blog/zongganjueshoujizaizhendong"
    },
    "/blog/post/Zorin-OS-3.html": {
        status: 301,
        destination: "/blog/zorin-os-3"
    },
    "/blog/post/zuiguayoudecha.html": {
        status: 301,
        destination: "/blog/zuiguayoudecha"
    },
    "/blog/post/zuixin-kabasiji-kaspersky-key-xiazai.html": {
        status: 301,
        destination: "/blog/zuixin-kabasiji-kaspersky-key-xiazai"
    },









    "/blog/category-1.html": {
        status: 301,
        destination: "/category/技术文章"
    },
    "/blog/category-2.html": {
        status: 301,
        destination: "/category/安全工具"
    },
    "/blog/category-3.html": {
        status: 301,
        destination: "/category/业界新闻"
    },
    "/blog/category-5.html": {
        status: 301,
        destination: "/category/心情随笔"
    },
    "/blog/category-6.html": {
        status: 301,
        destination: "/category/漏洞信息"
    },
    "/blog/category-7.html": {
        status: 301,
        destination: "/category/杂七杂八"
    },
    "/blog/category-8.html": {
        status: 301,
        destination: "/category/教程与电子书"
    },
    "/blog/category-10.html": {
        status: 301,
        destination: "/category/SEO&SEM"
    },
    "/blog/category-11.html": {
        status: 301,
        destination: "/category/网络资源"
    },
    "/blog/category-12.html": {
        status: 301,
        destination: "/category/Android"
    },
    "/blog/category-13.html": {
        status: 301,
        destination: "/category/应用软件"
    },
    "/blog/category-15.html": {
        status: 301,
        destination: "/category/操作系统"
    },
    "/blog/category-16.html": {
        status: 301,
        destination: "/category/娱乐休闲"
    },
    "/blog/category-17.html": {
        status: 301,
        destination: "/category/生活百科"
    },

    "/blog/catalog.asp?cate=1": {
        status: 301,
        destination: "/category/技术文章"
    },
    "/blog/catalog.asp?cate=2": {
        status: 301,
        destination: "/category/安全工具"
    },
    "/blog/catalog.asp?cate=3": {
        status: 301,
        destination: "/category/业界新闻"
    },
    "/blog/catalog.asp?cate=5": {
        status: 301,
        destination: "/category/心情随笔"
    },
    "/blog/catalog.asp?cate=6": {
        status: 301,
        destination: "/category/漏洞信息"
    },
    "/blog/catalog.asp?cate=7": {
        status: 301,
        destination: "/category/杂七杂八"
    },
    "/blog/catalog.asp?cate=8": {
        status: 301,
        destination: "/category/教程与电子书"
    },
    "/blog/catalog.asp?cate=10": {
        status: 301,
        destination: "/category/SEO&SEM"
    },
    "/blog/catalog.asp?cate=11": {
        status: 301,
        destination: "/category/网络资源"
    },
    "/blog/catalog.asp?cate=12": {
        status: 301,
        destination: "/category/Android"
    },
    "/blog/catalog.asp?cate=13": {
        status: 301,
        destination: "/category/应用软件"
    },
    "/blog/catalog.asp?cate=15": {
        status: 301,
        destination: "/category/操作系统"
    },
    "/blog/catalog.asp?cate=16": {
        status: 301,
        destination: "/category/娱乐休闲"
    },
    "/blog/catalog.asp?cate=17": {
        status: 301,
        destination: "/category/生活百科"
    },




    "/blog/tags-1.html": {
      status: 301,
      destination: "/tags/技术类"
    },
    "/blog/tags-2.html": {
      status: 301,
      destination: "/tags/心情随笔"
    },
    "/blog/tags-3.html": {
      status: 301,
      destination: "/tags/SN"
    },
    "/blog/tags-4.html": {
      status: 301,
      destination: "/tags/0day"
    },
    "/blog/tags-5.html": {
      status: 301,
      destination: "/tags/电子书"
    },
    "/blog/tags-6.html": {
      status: 301,
      destination: "/tags/道德"
    },
    "/blog/tags-7.html": {
      status: 301,
      destination: "/tags/牛人"
    },
    "/blog/tags-8.html": {
      status: 301,
      destination: "/tags/exploit"
    },
    "/blog/tags-9.html": {
      status: 301,
      destination: "/tags/站点收集"
    },
    "/blog/tags-10.html": {
      status: 301,
      destination: "/tags/脚本Script"
    },
    "/blog/tags-11.html": {
      status: 301,
      destination: "/tags/攻击事件"
    },
    "/blog/tags-12.html": {
      status: 301,
      destination: "/tags/漏洞信息"
    },
    "/blog/tags-13.html": {
      status: 301,
      destination: "/tags/工具共享"
    },
    "/blog/tags-14.html": {
      status: 301,
      destination: "/tags/业界新闻"
    },
    "/blog/tags-15.html": {
      status: 301,
      destination: "/tags/注入"
    },
    "/blog/tags-16.html": {
      status: 301,
      destination: "/tags/搞笑"
    },
    "/blog/tags-17.html": {
      status: 301,
      destination: "/tags/安全"
    },
    "/blog/tags-18.html": {
      status: 301,
      destination: "/tags/米兰"
    },
    "/blog/tags-19.html": {
      status: 301,
      destination: "/tags/足球"
    },
    "/blog/tags-20.html": {
      status: 301,
      destination: "/tags/病毒Virus"
    },
    "/blog/tags-21.html": {
      status: 301,
      destination: "/tags/动画教程"
    },
    "/blog/tags-22.html": {
      status: 301,
      destination: "/tags/HF韩服跑跑卡丁车"
    },
    "/blog/tags-23.html": {
      status: 301,
      destination: "/tags/游戏"
    },
    "/blog/tags-24.html": {
      status: 301,
      destination: "/tags/日本IP段收集"
    },
    "/blog/tags-25.html": {
      status: 301,
      destination: "/tags/跨站"
    },
    "/blog/tags-26.html": {
      status: 301,
      destination: "/tags/提权"
    },
    "/blog/tags-27.html": {
      status: 301,
      destination: "/tags/图片"
    },
    "/blog/tags-28.html": {
      status: 301,
      destination: "/tags/QQ"
    },
    "/blog/tags-29.html": {
      status: 301,
      destination: "/tags/免杀"
    },
    "/blog/tags-30.html": {
      status: 301,
      destination: "/tags/汇编"
    },
    "/blog/tags-31.html": {
      status: 301,
      destination: "/tags/视频"
    },
    "/blog/tags-32.html": {
      status: 301,
      destination: "/tags/本站历程"
    },
    "/blog/tags-33.html": {
      status: 301,
      destination: "/tags/网络硬盘"
    },
    "/blog/tags-34.html": {
      status: 301,
      destination: "/tags/软件"
    },
    "/blog/tags-35.html": {
      status: 301,
      destination: "/tags/网上赚钱"
    },
    "/blog/tags-36.html": {
      status: 301,
      destination: "/tags/DOS批处理bat"
    },
    "/blog/tags-37.html": {
      status: 301,
      destination: "/tags/免费域名"
    },
    "/blog/tags-38.html": {
      status: 301,
      destination: "/tags/杀毒软件"
    },
    "/blog/tags-39.html": {
      status: 301,
      destination: "/tags/网站空间"
    },
    "/blog/tags-40.html": {
      status: 301,
      destination: "/tags/木马"
    },
    "/blog/tags-41.html": {
      status: 301,
      destination: "/tags/代理"
    },
    "/blog/tags-42.html": {
      status: 301,
      destination: "/tags/搜索引擎"
    },
    "/blog/tags-43.html": {
      status: 301,
      destination: "/tags/启发"
    },
    "/blog/tags-44.html": {
      status: 301,
      destination: "/tags/免费网络资源"
    },
    "/blog/tags-45.html": {
      status: 301,
      destination: "/tags/源码"
    },
    "/blog/tags-47.html": {
      status: 301,
      destination: "/tags/评测"
    },
    "/blog/tags-48.html": {
      status: 301,
      destination: "/tags/技巧"
    },
    "/blog/tags-49.html": {
      status: 301,
      destination: "/tags/付费评论"
    },
    "/blog/tags-50.html": {
      status: 301,
      destination: "/tags/Windows"
    },
    "/blog/tags-51.html": {
      status: 301,
      destination: "/tags/驱动"
    },
    "/blog/tags-52.html": {
      status: 301,
      destination: "/tags/防火墙"
    },
    "/blog/tags-53.html": {
      status: 301,
      destination: "/tags/PageRank"
    },
    "/blog/tags-54.html": {
      status: 301,
      destination: "/tags/博客串联"
    },
    "/blog/tags-55.html": {
      status: 301,
      destination: "/tags/周杰伦JAY"
    },
    "/blog/tags-56.html": {
      status: 301,
      destination: "/tags/音乐"
    },
    "/blog/tags-57.html": {
      status: 301,
      destination: "/tags/ARP"
    },
    "/blog/tags-58.html": {
      status: 301,
      destination: "/tags/协议"
    },
    "/blog/tags-59.html": {
      status: 301,
      destination: "/tags/卡巴斯基Kaspersky"
    },
    "/blog/tags-60.html": {
      status: 301,
      destination: "/tags/浏览器"
    },
    "/blog/tags-61.html": {
      status: 301,
      destination: "/tags/下载Download"
    },
    "/blog/tags-62.html": {
      status: 301,
      destination: "/tags/迅雷Thunder"
    },
    "/blog/tags-63.html": {
      status: 301,
      destination: "/tags/Key"
    },
    "/blog/tags-64.html": {
      status: 301,
      destination: "/tags/端口port"
    },
    "/blog/tags-65.html": {
      status: 301,
      destination: "/tags/DDOS"
    },
    "/blog/tags-66.html": {
      status: 301,
      destination: "/tags/洪水flood"
    },
    "/blog/tags-67.html": {
      status: 301,
      destination: "/tags/欺骗的艺术完整中文版"
    },
    "/blog/tags-68.html": {
      status: 301,
      destination: "/tags/VPN"
    },
    "/blog/tags-69.html": {
      status: 301,
      destination: "/tags/C-CPP"
    },
    "/blog/tags-70.html": {
      status: 301,
      destination: "/tags/瑞星"
    },
    "/blog/tags-71.html": {
      status: 301,
      destination: "/tags/HIPS"
    },
    "/blog/tags-72.html": {
      status: 301,
      destination: "/tags/Autoruninf"
    },
    "/blog/tags-73.html": {
      status: 301,
      destination: "/tags/VBS"
    },
    "/blog/tags-74.html": {
      status: 301,
      destination: "/tags/Worm"
    },
    "/blog/tags-75.html": {
      status: 301,
      destination: "/tags/远程控制"
    },
    "/blog/tags-76.html": {
      status: 301,
      destination: "/tags/渗透测试"
    },
    "/blog/tags-77.html": {
      status: 301,
      destination: "/tags/入侵的艺术"
    },
    "/blog/tags-78.html": {
      status: 301,
      destination: "/tags/MP3"
    },
    "/blog/tags-79.html": {
      status: 301,
      destination: "/tags/社会工程学"
    },
    "/blog/tags-80.html": {
      status: 301,
      destination: "/tags/AVG"
    },
    "/blog/tags-81.html": {
      status: 301,
      destination: "/tags/PHP"
    },
    "/blog/tags-82.html": {
      status: 301,
      destination: "/tags/webshell"
    },
    "/blog/tags-83.html": {
      status: 301,
      destination: "/tags/小榕"
    },
    "/blog/tags-84.html": {
      status: 301,
      destination: "/tags/3389"
    },
    "/blog/tags-85.html": {
      status: 301,
      destination: "/tags/后门"
    },
    "/blog/tags-86.html": {
      status: 301,
      destination: "/tags/EFS"
    },
    "/blog/tags-87.html": {
      status: 301,
      destination: "/tags/缓冲区溢出"
    },
    "/blog/tags-88.html": {
      status: 301,
      destination: "/tags/教程"
    },
    "/blog/tags-89.html": {
      status: 301,
      destination: "/tags/Pangolin"
    },
    "/blog/tags-90.html": {
      status: 301,
      destination: "/tags/Maxthon"
    },
    "/blog/tags-91.html": {
      status: 301,
      destination: "/tags/P2P"
    },
    "/blog/tags-92.html": {
      status: 301,
      destination: "/tags/开源"
    },
    "/blog/tags-93.html": {
      status: 301,
      destination: "/tags/网马"
    },
    "/blog/tags-94.html": {
      status: 301,
      destination: "/tags/数据库"
    },
    "/blog/tags-95.html": {
      status: 301,
      destination: "/tags/Switch"
    },
    "/blog/tags-96.html": {
      status: 301,
      destination: "/tags/session"
    },
    "/blog/tags-97.html": {
      status: 301,
      destination: "/tags/sniffer"
    },
    "/blog/tags-98.html": {
      status: 301,
      destination: "/tags/书"
    },
    "/blog/tags-99.html": {
      status: 301,
      destination: "/tags/Norton"
    },
    "/blog/tags-100.html": {
      status: 301,
      destination: "/tags/BT"
    },
    "/blog/tags-101.html": {
      status: 301,
      destination: "/tags/注册表"
    },
    "/blog/tags-102.html": {
      status: 301,
      destination: "/tags/Linux"
    },
    "/blog/tags-103.html": {
      status: 301,
      destination: "/tags/Ubuntu"
    },
    "/blog/tags-104.html": {
      status: 301,
      destination: "/tags/Wine"
    },
    "/blog/tags-105.html": {
      status: 301,
      destination: "/tags/百度Hi"
    },
    "/blog/tags-106.html": {
      status: 301,
      destination: "/tags/IM"
    },
    "/blog/tags-107.html": {
      status: 301,
      destination: "/tags/spider"
    },
    "/blog/tags-108.html": {
      status: 301,
      destination: "/tags/安装卸载系统"
    },
    "/blog/tags-109.html": {
      status: 301,
      destination: "/tags/愚人节"
    },
    "/blog/tags-110.html": {
      status: 301,
      destination: "/tags/整蛊"
    },
    "/blog/tags-111.html": {
      status: 301,
      destination: "/tags/ActiveX"
    },
    "/blog/tags-112.html": {
      status: 301,
      destination: "/tags/生成器"
    },
    "/blog/tags-113.html": {
      status: 301,
      destination: "/tags/Cookies"
    },
    "/blog/tags-114.html": {
      status: 301,
      destination: "/tags/CSRF"
    },
    "/blog/tags-115.html": {
      status: 301,
      destination: "/tags/Office"
    },
    "/blog/tags-116.html": {
      status: 301,
      destination: "/tags/压缩"
    },
    "/blog/tags-117.html": {
      status: 301,
      destination: "/tags/笔记本"
    },
    "/blog/tags-118.html": {
      status: 301,
      destination: "/tags/ASP"
    },
    "/blog/tags-119.html": {
      status: 301,
      destination: "/tags/FSO"
    },
    "/blog/tags-120.html": {
      status: 301,
      destination: "/tags/Sandboxie沙盘"
    },
    "/blog/tags-121.html": {
      status: 301,
      destination: "/tags/注册机"
    },
    "/blog/tags-122.html": {
      status: 301,
      destination: "/tags/Discuz!"
    },
    "/blog/tags-123.html": {
      status: 301,
      destination: "/tags/论坛"
    },
    "/blog/tags-124.html": {
      status: 301,
      destination: "/tags/被黑"
    },
    "/blog/tags-125.html": {
      status: 301,
      destination: "/tags/PHPWind"
    },
    "/blog/tags-126.html": {
      status: 301,
      destination: "/tags/地震"
    },
    "/blog/tags-127.html": {
      status: 301,
      destination: "/tags/黑客"
    },
    "/blog/tags-128.html": {
      status: 301,
      destination: "/tags/术语"
    },
    "/blog/tags-129.html": {
      status: 301,
      destination: "/tags/辞典"
    },
    "/blog/tags-130.html": {
      status: 301,
      destination: "/tags/远程文件包含RFI"
    },
    "/blog/tags-131.html": {
      status: 301,
      destination: "/tags/原理"
    },
    "/blog/tags-132.html": {
      status: 301,
      destination: "/tags/Ghost"
    },
    "/blog/tags-133.html": {
      status: 301,
      destination: "/tags/播放器"
    },
    "/blog/tags-134.html": {
      status: 301,
      destination: "/tags/Flash"
    },
    "/blog/tags-135.html": {
      status: 301,
      destination: "/tags/dvbbs"
    },
    "/blog/tags-136.html": {
      status: 301,
      destination: "/tags/Http"
    },
    "/blog/tags-137.html": {
      status: 301,
      destination: "/tags/shellcode"
    },
    "/blog/tags-138.html": {
      status: 301,
      destination: "/tags/统计"
    },
    "/blog/tags-139.html": {
      status: 301,
      destination: "/tags/常用"
    },
    "/blog/tags-140.html": {
      status: 301,
      destination: "/tags/MD5"
    },
    "/blog/tags-141.html": {
      status: 301,
      destination: "/tags/WAP"
    },
    "/blog/tags-142.html": {
      status: 301,
      destination: "/tags/WML"
    },
    "/blog/tags-143.html": {
      status: 301,
      destination: "/tags/硬件"
    },
    "/blog/tags-144.html": {
      status: 301,
      destination: "/tags/肉鸡"
    },
    "/blog/tags-145.html": {
      status: 301,
      destination: "/tags/快车"
    },
    "/blog/tags-146.html": {
      status: 301,
      destination: "/tags/迷你"
    },
    "/blog/tags-147.html": {
      status: 301,
      destination: "/tags/Flashget"
    },
    "/blog/tags-148.html": {
      status: 301,
      destination: "/tags/FireFox"
    },
    "/blog/tags-149.html": {
      status: 301,
      destination: "/tags/Opera"
    },
    "/blog/tags-150.html": {
      status: 301,
      destination: "/tags/深度"
    },
    "/blog/tags-152.html": {
      status: 301,
      destination: "/tags/KDE"
    },
    "/blog/tags-153.html": {
      status: 301,
      destination: "/tags/Oblog"
    },
    "/blog/tags-154.html": {
      status: 301,
      destination: "/tags/SUMo"
    },
    "/blog/tags-155.html": {
      status: 301,
      destination: "/tags/文泉驿"
    },
    "/blog/tags-156.html": {
      status: 301,
      destination: "/tags/福特福克斯杯"
    },
    "/blog/tags-158.html": {
      status: 301,
      destination: "/tags/Gmail"
    },
    "/blog/tags-159.html": {
      status: 301,
      destination: "/tags/Google"
    },
    "/blog/tags-160.html": {
      status: 301,
      destination: "/tags/暴风影音"
    },
    "/blog/tags-161.html": {
      status: 301,
      destination: "/tags/WebScanner"
    },
    "/blog/tags-162.html": {
      status: 301,
      destination: "/tags/SessionIE"
    },
    "/blog/tags-164.html": {
      status: 301,
      destination: "/tags/Safe3IF"
    },
    "/blog/tags-165.html": {
      status: 301,
      destination: "/tags/IIS-FireWall"
    },
    "/blog/tags-166.html": {
      status: 301,
      destination: "/tags/openSUSE"
    },
    "/blog/tags-167.html": {
      status: 301,
      destination: "/tags/Debian"
    },
    "/blog/tags-168.html": {
      status: 301,
      destination: "/tags/Puppy"
    },
    "/blog/tags-169.html": {
      status: 301,
      destination: "/tags/Tweak"
    },
    "/blog/tags-170.html": {
      status: 301,
      destination: "/tags/硬盘"
    },
    "/blog/tags-171.html": {
      status: 301,
      destination: "/tags/测速"
    },
    "/blog/tags-172.html": {
      status: 301,
      destination: "/tags/代码"
    },
    "/blog/tags-173.html": {
      status: 301,
      destination: "/tags/PacketTracer"
    },
    "/blog/tags-174.html": {
      status: 301,
      destination: "/tags/网络建设"
    },
    "/blog/tags-175.html": {
      status: 301,
      destination: "/tags/趋势科技"
    },
    "/blog/tags-176.html": {
      status: 301,
      destination: "/tags/fs2you"
    },
    "/blog/tags-177.html": {
      status: 301,
      destination: "/tags/文件粉碎"
    },
    "/blog/tags-178.html": {
      status: 301,
      destination: "/tags/CrossOver"
    },
    "/blog/tags-179.html": {
      status: 301,
      destination: "/tags/USB"
    },
    "/blog/tags-180.html": {
      status: 301,
      destination: "/tags/aspx"
    },
    "/blog/tags-181.html": {
      status: 301,
      destination: "/tags/Foxit"
    },
    "/blog/tags-182.html": {
      status: 301,
      destination: "/tags/PDF"
    },
    "/blog/tags-183.html": {
      status: 301,
      destination: "/tags/Eee"
    },
    "/blog/tags-184.html": {
      status: 301,
      destination: "/tags/雅虎"
    },
    "/blog/tags-185.html": {
      status: 301,
      destination: "/tags/IE"
    },
    "/blog/tags-186.html": {
      status: 301,
      destination: "/tags/PC-BSD"
    },
    "/blog/tags-187.html": {
      status: 301,
      destination: "/tags/TT98"
    },
    "/blog/tags-188.html": {
      status: 301,
      destination: "/tags/Flock"
    },
    "/blog/tags-189.html": {
      status: 301,
      destination: "/tags/GreenBrowser"
    },
    "/blog/tags-190.html": {
      status: 301,
      destination: "/tags/Chrome"
    },
    "/blog/tags-191.html": {
      status: 301,
      destination: "/tags/资深黑客渗透内幕答疑"
    },
    "/blog/tags-192.html": {
      status: 301,
      destination: "/tags/世界之窗TheWorld"
    },
    "/blog/tags-193.html": {
      status: 301,
      destination: "/tags/MagicLinux"
    },
    "/blog/tags-194.html": {
      status: 301,
      destination: "/tags/Scanner"
    },
    "/blog/tags-195.html": {
      status: 301,
      destination: "/tags/FreeBSD"
    },
    "/blog/tags-196.html": {
      status: 301,
      destination: "/tags/Hijack"
    },
    "/blog/tags-197.html": {
      status: 301,
      destination: "/tags/鼠标"
    },
    "/blog/tags-198.html": {
      status: 301,
      destination: "/tags/JSky"
    },
    "/blog/tags-199.html": {
      status: 301,
      destination: "/tags/微软"
    },
    "/blog/tags-200.html": {
      status: 301,
      destination: "/tags/WinPatrol"
    },
    "/blog/tags-201.html": {
      status: 301,
      destination: "/tags/百度"
    },
    "/blog/tags-202.html": {
      status: 301,
      destination: "/tags/SSClone"
    },
    "/blog/tags-203.html": {
      status: 301,
      destination: "/tags/魔杰座"
    },
    "/blog/tags-204.html": {
      status: 301,
      destination: "/tags/Fedora"
    },
    "/blog/tags-205.html": {
      status: 301,
      destination: "/tags/Hyper-V"
    },
    "/blog/tags-206.html": {
      status: 301,
      destination: "/tags/SREng"
    },
    "/blog/tags-207.html": {
      status: 301,
      destination: "/tags/mIRC"
    },
    "/blog/tags-208.html": {
      status: 301,
      destination: "/tags/Minmem"
    },
    "/blog/tags-209.html": {
      status: 301,
      destination: "/tags/内存"
    },
    "/blog/tags-210.html": {
      status: 301,
      destination: "/tags/优化"
    },
    "/blog/tags-211.html": {
      status: 301,
      destination: "/tags/OpenOffice"
    },
    "/blog/tags-212.html": {
      status: 301,
      destination: "/tags/NetBSD"
    },
    "/blog/tags-213.html": {
      status: 301,
      destination: "/tags/Mandriva"
    },
    "/blog/tags-214.html": {
      status: 301,
      destination: "/tags/Hiweed"
    },
    "/blog/tags-215.html": {
      status: 301,
      destination: "/tags/PoC"
    },
    "/blog/tags-216.html": {
      status: 301,
      destination: "/tags/p0f"
    },
    "/blog/tags-217.html": {
      status: 301,
      destination: "/tags/PicPick"
    },
    "/blog/tags-218.html": {
      status: 301,
      destination: "/tags/截图"
    },
    "/blog/tags-219.html": {
      status: 301,
      destination: "/tags/Clickjacking"
    },
    "/blog/tags-220.html": {
      status: 301,
      destination: "/tags/黑屏"
    },
    "/blog/tags-221.html": {
      status: 301,
      destination: "/tags/破解"
    },
    "/blog/tags-222.html": {
      status: 301,
      destination: "/tags/补丁"
    },
    "/blog/tags-223.html": {
      status: 301,
      destination: "/tags/雨林木风"
    },
    "/blog/tags-224.html": {
      status: 301,
      destination: "/tags/Android"
    },
    "/blog/tags-225.html": {
      status: 301,
      destination: "/tags/艺龙旅行网"
    },
    "/blog/tags-226.html": {
      status: 301,
      destination: "/tags/PHP168"
    },
    "/blog/tags-227.html": {
      status: 301,
      destination: "/tags/OpenBSD"
    },
    "/blog/tags-228.html": {
      status: 301,
      destination: "/tags/Wubi"
    },
    "/blog/tags-229.html": {
      status: 301,
      destination: "/tags/Perl"
    },
    "/blog/tags-230.html": {
      status: 301,
      destination: "/tags/HFS"
    },
    "/blog/tags-231.html": {
      status: 301,
      destination: "/tags/加密"
    },
    "/blog/tags-232.html": {
      status: 301,
      destination: "/tags/PhpCms"
    },
    "/blog/tags-233.html": {
      status: 301,
      destination: "/tags/DeDecms"
    },
    "/blog/tags-234.html": {
      status: 301,
      destination: "/tags/Hex"
    },
    "/blog/tags-235.html": {
      status: 301,
      destination: "/tags/编辑器"
    },
    "/blog/tags-236.html": {
      status: 301,
      destination: "/tags/IMETool"
    },
    "/blog/tags-237.html": {
      status: 301,
      destination: "/tags/输入法"
    },
    "/blog/tags-238.html": {
      status: 301,
      destination: "/tags/WinMount"
    },
    "/blog/tags-239.html": {
      status: 301,
      destination: "/tags/Slax"
    },
    "/blog/tags-240.html": {
      status: 301,
      destination: "/tags/VirtualBox"
    },
    "/blog/tags-241.html": {
      status: 301,
      destination: "/tags/彩虹哈希表"
    },
    "/blog/tags-242.html": {
      status: 301,
      destination: "/tags/解密"
    },
    "/blog/tags-243.html": {
      status: 301,
      destination: "/tags/Dreamweaver"
    },
    "/blog/tags-244.html": {
      status: 301,
      destination: "/tags/Fireworks"
    },
    "/blog/tags-245.html": {
      status: 301,
      destination: "/tags/WebLogic"
    },
    "/blog/tags-246.html": {
      status: 301,
      destination: "/tags/抓鸡"
    },
    "/blog/tags-247.html": {
      status: 301,
      destination: "/tags/pcAnywhere"
    },
    "/blog/tags-248.html": {
      status: 301,
      destination: "/tags/OpenSolaris"
    },
    "/blog/tags-249.html": {
      status: 301,
      destination: "/tags/Python"
    },
    "/blog/tags-250.html": {
      status: 301,
      destination: "/tags/Router"
    },
    "/blog/tags-251.html": {
      status: 301,
      destination: "/tags/gh0st"
    },
    "/blog/tags-252.html": {
      status: 301,
      destination: "/tags/GeeXboX"
    },
    "/blog/tags-253.html": {
      status: 301,
      destination: "/tags/GNS3"
    },
    "/blog/tags-254.html": {
      status: 301,
      destination: "/tags/Cisco"
    },
    "/blog/tags-255.html": {
      status: 301,
      destination: "/tags/LinuxMint"
    },
    "/blog/tags-256.html": {
      status: 301,
      destination: "/tags/Eeebuntu"
    },
    "/blog/tags-257.html": {
      status: 301,
      destination: "/tags/大会"
    },
    "/blog/tags-258.html": {
      status: 301,
      destination: "/tags/GParted"
    },
    "/blog/tags-259.html": {
      status: 301,
      destination: "/tags/TeamViewer"
    },
    "/blog/tags-260.html": {
      status: 301,
      destination: "/tags/DameWare"
    },
    "/blog/tags-261.html": {
      status: 301,
      destination: "/tags/看雪学院"
    },
    "/blog/tags-262.html": {
      status: 301,
      destination: "/tags/SuperUbuntu"
    },
    "/blog/tags-263.html": {
      status: 301,
      destination: "/tags/网络电话"
    },
    "/blog/tags-264.html": {
      status: 301,
      destination: "/tags/暴风"
    },
    "/blog/tags-265.html": {
      status: 301,
      destination: "/tags/网络营销"
    },
    "/blog/tags-266.html": {
      status: 301,
      destination: "/tags/FTP"
    },
    "/blog/tags-267.html": {
      status: 301,
      destination: "/tags/iQ浏览器"
    },
    "/blog/tags-268.html": {
      status: 301,
      destination: "/tags/Samba"
    },
    "/blog/tags-269.html": {
      status: 301,
      destination: "/tags/Knoppix"
    },
    "/blog/tags-270.html": {
      status: 301,
      destination: "/tags/马克斯CMS"
    },
    "/blog/tags-271.html": {
      status: 301,
      destination: "/tags/PPTV"
    },
    "/blog/tags-272.html": {
      status: 301,
      destination: "/tags/PPStream"
    },
    "/blog/tags-273.html": {
      status: 301,
      destination: "/tags/CSS"
    },
    "/blog/tags-274.html": {
      status: 301,
      destination: "/tags/反低俗"
    },
    "/blog/tags-275.html": {
      status: 301,
      destination: "/tags/情人节"
    },
    "/blog/tags-276.html": {
      status: 301,
      destination: "/tags/eWebEditor"
    },
    "/blog/tags-277.html": {
      status: 301,
      destination: "/tags/Archlinux"
    },
    "/blog/tags-278.html": {
      status: 301,
      destination: "/tags/动易"
    },
    "/blog/tags-279.html": {
      status: 301,
      destination: "/tags/ibus"
    },
    "/blog/tags-280.html": {
      status: 301,
      destination: "/tags/Zeal"
    },
    "/blog/tags-281.html": {
      status: 301,
      destination: "/tags/iframe"
    },
    "/blog/tags-282.html": {
      status: 301,
      destination: "/tags/iRoundPic"
    },
    "/blog/tags-283.html": {
      status: 301,
      destination: "/tags/刘谦"
    },
    "/blog/tags-284.html": {
      status: 301,
      destination: "/tags/魔术"
    },
    "/blog/tags-285.html": {
      status: 301,
      destination: "/tags/远古"
    },
    "/blog/tags-286.html": {
      status: 301,
      destination: "/tags/Volumouse"
    },
    "/blog/tags-287.html": {
      status: 301,
      destination: "/tags/Hawkscope"
    },
    "/blog/tags-288.html": {
      status: 301,
      destination: "/tags/歌曲"
    },
    "/blog/tags-289.html": {
      status: 301,
      destination: "/tags/LxBlog"
    },
    "/blog/tags-290.html": {
      status: 301,
      destination: "/tags/SUSE"
    },
    "/blog/tags-291.html": {
      status: 301,
      destination: "/tags/Gnome"
    },
    "/blog/tags-292.html": {
      status: 301,
      destination: "/tags/RABSoft"
    },
    "/blog/tags-293.html": {
      status: 301,
      destination: "/tags/ECShop"
    },
    "/blog/tags-294.html": {
      status: 301,
      destination: "/tags/SunPinyin"
    },
    "/blog/tags-295.html": {
      status: 301,
      destination: "/tags/Screen2Exe"
    },
    "/blog/tags-296.html": {
      status: 301,
      destination: "/tags/Unlock"
    },
    "/blog/tags-297.html": {
      status: 301,
      destination: "/tags/PJblog"
    },
    "/blog/tags-298.html": {
      status: 301,
      destination: "/tags/IIS"
    },
    "/blog/tags-299.html": {
      status: 301,
      destination: "/tags/红旗RedFlag"
    },
    "/blog/tags-300.html": {
      status: 301,
      destination: "/tags/XSS"
    },
    "/blog/tags-301.html": {
      status: 301,
      destination: "/tags/ReactOS"
    },
    "/blog/tags-302.html": {
      status: 301,
      destination: "/tags/andLinux"
    },
    "/blog/tags-303.html": {
      status: 301,
      destination: "/tags/设计"
    },
    "/blog/tags-304.html": {
      status: 301,
      destination: "/tags/RemotelyAnywhere"
    },
    "/blog/tags-305.html": {
      status: 301,
      destination: "/tags/Bo-Blog"
    },
    "/blog/tags-306.html": {
      status: 301,
      destination: "/tags/aptitude"
    },
    "/blog/tags-307.html": {
      status: 301,
      destination: "/tags/apt-get"
    },
    "/blog/tags-308.html": {
      status: 301,
      destination: "/tags/包管理"
    },
    "/blog/tags-309.html": {
      status: 301,
      destination: "/tags/Mac"
    },
    "/blog/tags-311.html": {
      status: 301,
      destination: "/tags/ASP.net"
    },
    "/blog/tags-312.html": {
      status: 301,
      destination: "/tags/RedHat"
    },
    "/blog/tags-313.html": {
      status: 301,
      destination: "/tags/ps"
    },
    "/blog/tags-314.html": {
      status: 301,
      destination: "/tags/kill"
    },
    "/blog/tags-315.html": {
      status: 301,
      destination: "/tags/康师傅"
    },
    "/blog/tags-316.html": {
      status: 301,
      destination: "/tags/全家福"
    },
    "/blog/tags-317.html": {
      status: 301,
      destination: "/tags/折腾"
    },
    "/blog/tags-318.html": {
      status: 301,
      destination: "/tags/Moblin"
    },
    "/blog/tags-319.html": {
      status: 301,
      destination: "/tags/Audacious"
    },
    "/blog/tags-320.html": {
      status: 301,
      destination: "/tags/Photoshop"
    },
    "/blog/tags-321.html": {
      status: 301,
      destination: "/tags/绿色"
    },
    "/blog/tags-322.html": {
      status: 301,
      destination: "/tags/TM"
    },
    "/blog/tags-323.html": {
      status: 301,
      destination: "/tags/Apple"
    },
    "/blog/tags-324.html": {
      status: 301,
      destination: "/tags/iTunes"
    },
    "/blog/tags-325.html": {
      status: 301,
      destination: "/tags/FileZilla"
    },
    "/blog/tags-326.html": {
      status: 301,
      destination: "/tags/WinMerge"
    },
    "/blog/tags-327.html": {
      status: 301,
      destination: "/tags/Apache"
    },
    "/blog/tags-328.html": {
      status: 301,
      destination: "/tags/EmpireCMS"
    },
    "/blog/tags-329.html": {
      status: 301,
      destination: "/tags/Wireshark"
    },
    "/blog/tags-330.html": {
      status: 301,
      destination: "/tags/嗅探"
    },
    "/blog/tags-331.html": {
      status: 301,
      destination: "/tags/iPhone"
    },
    "/blog/tags-332.html": {
      status: 301,
      destination: "/tags/UltraSn0w"
    },
    "/blog/tags-333.html": {
      status: 301,
      destination: "/tags/终端"
    },
    "/blog/tags-334.html": {
      status: 301,
      destination: "/tags/虚拟"
    },
    "/blog/tags-335.html": {
      status: 301,
      destination: "/tags/LibFetion"
    },
    "/blog/tags-336.html": {
      status: 301,
      destination: "/tags/外链"
    },
    "/blog/tags-337.html": {
      status: 301,
      destination: "/tags/Vim"
    },
    "/blog/tags-338.html": {
      status: 301,
      destination: "/tags/SSH"
    },
    "/blog/tags-339.html": {
      status: 301,
      destination: "/tags/新氧"
    },
    "/blog/tags-340.html": {
      status: 301,
      destination: "/tags/电影"
    },
    "/blog/tags-341.html": {
      status: 301,
      destination: "/tags/Premiere"
    },
    "/blog/tags-342.html": {
      status: 301,
      destination: "/tags/nginx"
    },
    "/blog/tags-343.html": {
      status: 301,
      destination: "/tags/MySql"
    },
    "/blog/tags-344.html": {
      status: 301,
      destination: "/tags/LiveAndroid"
    },
    "/blog/tags-345.html": {
      status: 301,
      destination: "/tags/内核"
    },
    "/blog/tags-346.html": {
      status: 301,
      destination: "/tags/Arch"
    },
    "/blog/tags-347.html": {
      status: 301,
      destination: "/tags/AIR"
    },
    "/blog/tags-348.html": {
      status: 301,
      destination: "/tags/CDlinux"
    },
    "/blog/tags-349.html": {
      status: 301,
      destination: "/tags/e云"
    },
    "/blog/tags-350.html": {
      status: 301,
      destination: "/tags/中国电信"
    },
    "/blog/tags-351.html": {
      status: 301,
      destination: "/tags/Launchpad"
    },
    "/blog/tags-352.html": {
      status: 301,
      destination: "/tags/PPA"
    },
    "/blog/tags-353.html": {
      status: 301,
      destination: "/tags/Slackware"
    },
    "/blog/tags-354.html": {
      status: 301,
      destination: "/tags/Lubuntu"
    },
    "/blog/tags-356.html": {
      status: 301,
      destination: "/tags/LXDE"
    },
    "/blog/tags-357.html": {
      status: 301,
      destination: "/tags/股票"
    },
    "/blog/tags-358.html": {
      status: 301,
      destination: "/tags/SQL"
    },
    "/blog/tags-359.html": {
      status: 301,
      destination: "/tags/iptables"
    },
    "/blog/tags-360.html": {
      status: 301,
      destination: "/tags/CC"
    },
    "/blog/tags-361.html": {
      status: 301,
      destination: "/tags/千千静听"
    },
    "/blog/tags-362.html": {
      status: 301,
      destination: "/tags/光驱"
    },
    "/blog/tags-363.html": {
      status: 301,
      destination: "/tags/HiveRise"
    },
    "/blog/tags-364.html": {
      status: 301,
      destination: "/tags/Gentoo"
    },
    "/blog/tags-365.html": {
      status: 301,
      destination: "/tags/博客蜂"
    },
    "/blog/tags-366.html": {
      status: 301,
      destination: "/tags/Flickr"
    },
    "/blog/tags-367.html": {
      status: 301,
      destination: "/tags/好易网视"
    },
    "/blog/tags-368.html": {
      status: 301,
      destination: "/tags/CentOS"
    },
    "/blog/tags-369.html": {
      status: 301,
      destination: "/tags/pinyShop"
    },
    "/blog/tags-370.html": {
      status: 301,
      destination: "/tags/酷狗"
    },
    "/blog/tags-371.html": {
      status: 301,
      destination: "/tags/configure"
    },
    "/blog/tags-372.html": {
      status: 301,
      destination: "/tags/潮虫"
    },
    "/blog/tags-373.html": {
      status: 301,
      destination: "/tags/Turbo"
    },
    "/blog/tags-374.html": {
      status: 301,
      destination: "/tags/苏州"
    },
    "/blog/tags-375.html": {
      status: 301,
      destination: "/tags/蓝牙"
    },
    "/blog/tags-376.html": {
      status: 301,
      destination: "/tags/Calculate"
    },
    "/blog/tags-377.html": {
      status: 301,
      destination: "/tags/SEO"
    },
    "/blog/tags-378.html": {
      status: 301,
      destination: "/tags/凤巢"
    },
    "/blog/tags-379.html": {
      status: 301,
      destination: "/tags/javascript书签"
    },
    "/blog/tags-380.html": {
      status: 301,
      destination: "/tags/TinyCore"
    },
    "/blog/tags-381.html": {
      status: 301,
      destination: "/tags/RT-Thread"
    },
    "/blog/tags-382.html": {
      status: 301,
      destination: "/tags/实时线程操作系统"
    },
    "/blog/tags-383.html": {
      status: 301,
      destination: "/tags/LinuxDeepin"
    },
    "/blog/tags-384.html": {
      status: 301,
      destination: "/tags/插件"
    },
    "/blog/tags-385.html": {
      status: 301,
      destination: "/tags/搜狗"
    },
    "/blog/tags-386.html": {
      status: 301,
      destination: "/tags/VMware"
    },
    "/blog/tags-387.html": {
      status: 301,
      destination: "/tags/格式工厂"
    },
    "/blog/tags-388.html": {
      status: 301,
      destination: "/tags/优化大师"
    },
    "/blog/tags-389.html": {
      status: 301,
      destination: "/tags/EditPlus"
    },
    "/blog/tags-390.html": {
      status: 301,
      destination: "/tags/WordPress"
    },
    "/blog/tags-391.html": {
      status: 301,
      destination: "/tags/AutoCAD"
    },
    "/blog/tags-392.html": {
      status: 301,
      destination: "/tags/Sablog"
    },
    "/blog/tags-393.html": {
      status: 301,
      destination: "/tags/htaccess"
    },
    "/blog/tags-394.html": {
      status: 301,
      destination: "/tags/LFS"
    },
    "/blog/tags-395.html": {
      status: 301,
      destination: "/tags/VPS"
    },
    "/blog/tags-396.html": {
      status: 301,
      destination: "/tags/动画"
    },
    "/blog/tags-397.html": {
      status: 301,
      destination: "/tags/开拓者"
    },
    "/blog/tags-398.html": {
      status: 301,
      destination: "/tags/小游戏"
    },
    "/blog/tags-399.html": {
      status: 301,
      destination: "/tags/FreeNAS"
    },
    "/blog/tags-400.html": {
      status: 301,
      destination: "/tags/NAS"
    },
    "/blog/tags-401.html": {
      status: 301,
      destination: "/tags/Jolicloud"
    },
    "/blog/tags-402.html": {
      status: 301,
      destination: "/tags/Sabayon"
    },
    "/blog/tags-403.html": {
      status: 301,
      destination: "/tags/Zorin"
    },
    "/blog/tags-404.html": {
      status: 301,
      destination: "/tags/Illustrator"
    },
    "/blog/tags-405.html": {
      status: 301,
      destination: "/tags/PPLive"
    },
    "/blog/tags-406.html": {
      status: 301,
      destination: "/tags/召唤令"
    },
    "/blog/tags-407.html": {
      status: 301,
      destination: "/tags/淘宝"
    },
    "/blog/tags-408.html": {
      status: 301,
      destination: "/tags/Qomo"
    },
    "/blog/tags-409.html": {
      status: 301,
      destination: "/tags/RPM"
    },
    "/blog/tags-410.html": {
      status: 301,
      destination: "/tags/BackTrack"
    },
    "/blog/tags-411.html": {
      status: 301,
      destination: "/tags/健康"
    },
    "/blog/tags-412.html": {
      status: 301,
      destination: "/tags/Fuduntu"
    },
    "/blog/tags-413.html": {
      status: 301,
      destination: "/tags/Vector"
    },
    "/blog/tags-414.html": {
      status: 301,
      destination: "/tags/Flex"
    },
    "/blog/tags-415.html": {
      status: 301,
      destination: "/tags/wdcp"
    },
    "/blog/tags-416.html": {
      status: 301,
      destination: "/tags/PearOS"
    },
    "/blog/tags-417.html": {
      status: 301,
      destination: "/tags/ImageReady"
    },
    "/blog/tags-418.html": {
      status: 301,
      destination: "/tags/吃"
    },
    "/blog/tags-419.html": {
      status: 301,
      destination: "/tags/图解"
    },
    "/blog/tags-420.html": {
      status: 301,
      destination: "/tags/功效与作用"
    },
    "/blog/tags-421.html": {
      status: 301,
      destination: "/tags/UltimateEdition"
    },
    "/blog/tags-422.html": {
      status: 301,
      destination: "/tags/痘痘"
    },
    "/blog/tags-423.html": {
      status: 301,
      destination: "/tags/痘印"
    },
    "/blog/tags-424.html": {
      status: 301,
      destination: "/tags/单反"
    },
    "/blog/tags-425.html": {
      status: 301,
      destination: "/tags/时间"
    },
    "/blog/tags-426.html": {
      status: 301,
      destination: "/tags/减肥"
    },
    "/blog/tags-427.html": {
      status: 301,
      destination: "/tags/美容"
    },
    "/blog/tags-428.html": {
      status: 301,
      destination: "/tags/去黑头"
    },
    "/blog/tags-429.html": {
      status: 301,
      destination: "/tags/Maya"
    },
    "/blog/tags-430.html": {
      status: 301,
      destination: "/tags/拍照"
    },
    "/blog/tags-431.html": {
      status: 301,
      destination: "/tags/AfterEffects"
    },
    "/blog/tags-432.html": {
      status: 301,
      destination: "/tags/水果"
    },
    "/blog/tags-433.html": {
      status: 301,
      destination: "/tags/PureOS"
    },
    "/blog/tags-434.html": {
      status: 301,
      destination: "/tags/人际"
    },
    "/blog/tags-435.html": {
      status: 301,
      destination: "/tags/失眠"
    },
    "/blog/tags-436.html": {
      status: 301,
      destination: "/tags/茶"
    },
    "/blog/tags-437.html": {
      status: 301,
      destination: "/tags/Audition"
    },
    "/blog/tags-438.html": {
      status: 301,
      destination: "/tags/PPT"
    },
    "/blog/tags-439.html": {
      status: 301,
      destination: "/tags/相机"
    },
    "/blog/tags-440.html": {
      status: 301,
      destination: "/tags/CodeIgniter"
    },
    "/blog/tags-441.html": {
      status: 301,
      destination: "/tags/git"
    },
    "/blog/tags-442.html": {
      status: 301,
      destination: "/tags/Oracle"
    },
    "/blog/tags-443.html": {
      status: 301,
      destination: "/tags/眼镜"
    },
    "/blog/tags-444.html": {
      status: 301,
      destination: "/tags/javascript"
    },
    "/blog/tags-445.html": {
      status: 301,
      destination: "/tags/理财"
    },
    "/blog/tags-446.html": {
      status: 301,
      destination: "/tags/python"
    },
    "/blog/tags-447.html": {
      status: 301,
      destination: "/tags/爬虫"
    },
    "/blog/tags-451.html": {
      status: 301,
      destination: "/tags/微信小程序"
    },
    "/blog/tags-449.html": {
      status: 301,
      destination: "/tags/selenium"
    },





    "/blog/catalog.asp?tags=技术类": {
      status: 301,
      destination: "/tags/技术类"
    },
    "/blog/catalog.asp?tags=心情随笔": {
      status: 301,
      destination: "/tags/心情随笔"
    },
    "/blog/catalog.asp?tags=SN": {
      status: 301,
      destination: "/tags/SN"
    },
    "/blog/catalog.asp?tags=0day": {
      status: 301,
      destination: "/tags/0day"
    },
    "/blog/catalog.asp?tags=电子书": {
      status: 301,
      destination: "/tags/电子书"
    },
    "/blog/catalog.asp?tags=道德": {
      status: 301,
      destination: "/tags/道德"
    },
    "/blog/catalog.asp?tags=牛人": {
      status: 301,
      destination: "/tags/牛人"
    },
    "/blog/catalog.asp?tags=exploit": {
      status: 301,
      destination: "/tags/exploit"
    },
    "/blog/catalog.asp?tags=站点收集": {
      status: 301,
      destination: "/tags/站点收集"
    },
    "/blog/catalog.asp?tags=脚本Script": {
      status: 301,
      destination: "/tags/脚本Script"
    },
    "/blog/catalog.asp?tags=攻击事件": {
      status: 301,
      destination: "/tags/攻击事件"
    },
    "/blog/catalog.asp?tags=漏洞信息": {
      status: 301,
      destination: "/tags/漏洞信息"
    },
    "/blog/catalog.asp?tags=工具共享": {
      status: 301,
      destination: "/tags/工具共享"
    },
    "/blog/catalog.asp?tags=业界新闻": {
      status: 301,
      destination: "/tags/业界新闻"
    },
    "/blog/catalog.asp?tags=注入": {
      status: 301,
      destination: "/tags/注入"
    },
    "/blog/catalog.asp?tags=搞笑": {
      status: 301,
      destination: "/tags/搞笑"
    },
    "/blog/catalog.asp?tags=安全": {
      status: 301,
      destination: "/tags/安全"
    },
    "/blog/catalog.asp?tags=米兰": {
      status: 301,
      destination: "/tags/米兰"
    },
    "/blog/catalog.asp?tags=足球": {
      status: 301,
      destination: "/tags/足球"
    },
    "/blog/catalog.asp?tags=病毒Virus": {
      status: 301,
      destination: "/tags/病毒Virus"
    },
    "/blog/catalog.asp?tags=动画教程": {
      status: 301,
      destination: "/tags/动画教程"
    },
    "/blog/catalog.asp?tags=HF韩服跑跑卡丁车": {
      status: 301,
      destination: "/tags/HF韩服跑跑卡丁车"
    },
    "/blog/catalog.asp?tags=游戏": {
      status: 301,
      destination: "/tags/游戏"
    },
    "/blog/catalog.asp?tags=日本IP段收集": {
      status: 301,
      destination: "/tags/日本IP段收集"
    },
    "/blog/catalog.asp?tags=跨站": {
      status: 301,
      destination: "/tags/跨站"
    },
    "/blog/catalog.asp?tags=提权": {
      status: 301,
      destination: "/tags/提权"
    },
    "/blog/catalog.asp?tags=图片": {
      status: 301,
      destination: "/tags/图片"
    },
    "/blog/catalog.asp?tags=QQ": {
      status: 301,
      destination: "/tags/QQ"
    },
    "/blog/catalog.asp?tags=免杀": {
      status: 301,
      destination: "/tags/免杀"
    },
    "/blog/catalog.asp?tags=汇编": {
      status: 301,
      destination: "/tags/汇编"
    },
    "/blog/catalog.asp?tags=视频": {
      status: 301,
      destination: "/tags/视频"
    },
    "/blog/catalog.asp?tags=本站历程": {
      status: 301,
      destination: "/tags/本站历程"
    },
    "/blog/catalog.asp?tags=网络硬盘": {
      status: 301,
      destination: "/tags/网络硬盘"
    },
    "/blog/catalog.asp?tags=软件": {
      status: 301,
      destination: "/tags/软件"
    },
    "/blog/catalog.asp?tags=网上赚钱": {
      status: 301,
      destination: "/tags/网上赚钱"
    },
    "/blog/catalog.asp?tags=DOS批处理bat": {
      status: 301,
      destination: "/tags/DOS批处理bat"
    },
    "/blog/catalog.asp?tags=免费域名": {
      status: 301,
      destination: "/tags/免费域名"
    },
    "/blog/catalog.asp?tags=杀毒软件": {
      status: 301,
      destination: "/tags/杀毒软件"
    },
    "/blog/catalog.asp?tags=网站空间": {
      status: 301,
      destination: "/tags/网站空间"
    },
    "/blog/catalog.asp?tags=木马": {
      status: 301,
      destination: "/tags/木马"
    },
    "/blog/catalog.asp?tags=代理": {
      status: 301,
      destination: "/tags/代理"
    },
    "/blog/catalog.asp?tags=搜索引擎": {
      status: 301,
      destination: "/tags/搜索引擎"
    },
    "/blog/catalog.asp?tags=启发": {
      status: 301,
      destination: "/tags/启发"
    },
    "/blog/catalog.asp?tags=免费网络资源": {
      status: 301,
      destination: "/tags/免费网络资源"
    },
    "/blog/catalog.asp?tags=源码": {
      status: 301,
      destination: "/tags/源码"
    },
    "/blog/catalog.asp?tags=评测": {
      status: 301,
      destination: "/tags/评测"
    },
    "/blog/catalog.asp?tags=技巧": {
      status: 301,
      destination: "/tags/技巧"
    },
    "/blog/catalog.asp?tags=付费评论": {
      status: 301,
      destination: "/tags/付费评论"
    },
    "/blog/catalog.asp?tags=Windows": {
      status: 301,
      destination: "/tags/Windows"
    },
    "/blog/catalog.asp?tags=驱动": {
      status: 301,
      destination: "/tags/驱动"
    },
    "/blog/catalog.asp?tags=防火墙": {
      status: 301,
      destination: "/tags/防火墙"
    },
    "/blog/catalog.asp?tags=PageRank": {
      status: 301,
      destination: "/tags/PageRank"
    },
    "/blog/catalog.asp?tags=博客串联": {
      status: 301,
      destination: "/tags/博客串联"
    },
    "/blog/catalog.asp?tags=周杰伦JAY": {
      status: 301,
      destination: "/tags/周杰伦JAY"
    },
    "/blog/catalog.asp?tags=音乐": {
      status: 301,
      destination: "/tags/音乐"
    },
    "/blog/catalog.asp?tags=ARP": {
      status: 301,
      destination: "/tags/ARP"
    },
    "/blog/catalog.asp?tags=协议": {
      status: 301,
      destination: "/tags/协议"
    },
    "/blog/catalog.asp?tags=卡巴斯基Kaspersky": {
      status: 301,
      destination: "/tags/卡巴斯基Kaspersky"
    },
    "/blog/catalog.asp?tags=浏览器": {
      status: 301,
      destination: "/tags/浏览器"
    },
    "/blog/catalog.asp?tags=下载Download": {
      status: 301,
      destination: "/tags/下载Download"
    },
    "/blog/catalog.asp?tags=迅雷Thunder": {
      status: 301,
      destination: "/tags/迅雷Thunder"
    },
    "/blog/catalog.asp?tags=Key": {
      status: 301,
      destination: "/tags/Key"
    },
    "/blog/catalog.asp?tags=端口port": {
      status: 301,
      destination: "/tags/端口port"
    },
    "/blog/catalog.asp?tags=DDOS": {
      status: 301,
      destination: "/tags/DDOS"
    },
    "/blog/catalog.asp?tags=洪水flood": {
      status: 301,
      destination: "/tags/洪水flood"
    },
    "/blog/catalog.asp?tags=欺骗的艺术完整中文版": {
      status: 301,
      destination: "/tags/欺骗的艺术完整中文版"
    },
    "/blog/catalog.asp?tags=VPN": {
      status: 301,
      destination: "/tags/VPN"
    },
    "/blog/catalog.asp?tags=C/CPP": {
      status: 301,
      destination: "/tags/C-CPP"
    },
    "/blog/catalog.asp?tags=瑞星": {
      status: 301,
      destination: "/tags/瑞星"
    },
    "/blog/catalog.asp?tags=HIPS": {
      status: 301,
      destination: "/tags/HIPS"
    },
    "/blog/catalog.asp?tags=Autorun.inf": {
      status: 301,
      destination: "/tags/Autoruninf"
    },
    "/blog/catalog.asp?tags=VBS": {
      status: 301,
      destination: "/tags/VBS"
    },
    "/blog/catalog.asp?tags=Worm": {
      status: 301,
      destination: "/tags/Worm"
    },
    "/blog/catalog.asp?tags=远程控制": {
      status: 301,
      destination: "/tags/远程控制"
    },
    "/blog/catalog.asp?tags=渗透测试": {
      status: 301,
      destination: "/tags/渗透测试"
    },
    "/blog/catalog.asp?tags=入侵的艺术": {
      status: 301,
      destination: "/tags/入侵的艺术"
    },
    "/blog/catalog.asp?tags=MP3": {
      status: 301,
      destination: "/tags/MP3"
    },
    "/blog/catalog.asp?tags=社会工程学": {
      status: 301,
      destination: "/tags/社会工程学"
    },
    "/blog/catalog.asp?tags=AVG": {
      status: 301,
      destination: "/tags/AVG"
    },
    "/blog/catalog.asp?tags=PHP": {
      status: 301,
      destination: "/tags/PHP"
    },
    "/blog/catalog.asp?tags=webshell": {
      status: 301,
      destination: "/tags/webshell"
    },
    "/blog/catalog.asp?tags=小榕": {
      status: 301,
      destination: "/tags/小榕"
    },
    "/blog/catalog.asp?tags=3389": {
      status: 301,
      destination: "/tags/3389"
    },
    "/blog/catalog.asp?tags=后门": {
      status: 301,
      destination: "/tags/后门"
    },
    "/blog/catalog.asp?tags=EFS": {
      status: 301,
      destination: "/tags/EFS"
    },
    "/blog/catalog.asp?tags=缓冲区溢出": {
      status: 301,
      destination: "/tags/缓冲区溢出"
    },
    "/blog/catalog.asp?tags=教程": {
      status: 301,
      destination: "/tags/教程"
    },
    "/blog/catalog.asp?tags=Pangolin": {
      status: 301,
      destination: "/tags/Pangolin"
    },
    "/blog/catalog.asp?tags=Maxthon": {
      status: 301,
      destination: "/tags/Maxthon"
    },
    "/blog/catalog.asp?tags=P2P": {
      status: 301,
      destination: "/tags/P2P"
    },
    "/blog/catalog.asp?tags=开源": {
      status: 301,
      destination: "/tags/开源"
    },
    "/blog/catalog.asp?tags=网马": {
      status: 301,
      destination: "/tags/网马"
    },
    "/blog/catalog.asp?tags=数据库": {
      status: 301,
      destination: "/tags/数据库"
    },
    "/blog/catalog.asp?tags=Switch": {
      status: 301,
      destination: "/tags/Switch"
    },
    "/blog/catalog.asp?tags=session": {
      status: 301,
      destination: "/tags/session"
    },
    "/blog/catalog.asp?tags=sniffer": {
      status: 301,
      destination: "/tags/sniffer"
    },
    "/blog/catalog.asp?tags=书": {
      status: 301,
      destination: "/tags/书"
    },
    "/blog/catalog.asp?tags=Norton": {
      status: 301,
      destination: "/tags/Norton"
    },
    "/blog/catalog.asp?tags=BT": {
      status: 301,
      destination: "/tags/BT"
    },
    "/blog/catalog.asp?tags=注册表": {
      status: 301,
      destination: "/tags/注册表"
    },
    "/blog/catalog.asp?tags=Linux": {
      status: 301,
      destination: "/tags/Linux"
    },
    "/blog/catalog.asp?tags=Ubuntu": {
      status: 301,
      destination: "/tags/Ubuntu"
    },
    "/blog/catalog.asp?tags=Wine": {
      status: 301,
      destination: "/tags/Wine"
    },
    "/blog/catalog.asp?tags=百度Hi": {
      status: 301,
      destination: "/tags/百度Hi"
    },
    "/blog/catalog.asp?tags=IM": {
      status: 301,
      destination: "/tags/IM"
    },
    "/blog/catalog.asp?tags=spider": {
      status: 301,
      destination: "/tags/spider"
    },
    "/blog/catalog.asp?tags=安装卸载系统": {
      status: 301,
      destination: "/tags/安装卸载系统"
    },
    "/blog/catalog.asp?tags=愚人节": {
      status: 301,
      destination: "/tags/愚人节"
    },
    "/blog/catalog.asp?tags=整蛊": {
      status: 301,
      destination: "/tags/整蛊"
    },
    "/blog/catalog.asp?tags=ActiveX": {
      status: 301,
      destination: "/tags/ActiveX"
    },
    "/blog/catalog.asp?tags=生成器": {
      status: 301,
      destination: "/tags/生成器"
    },
    "/blog/catalog.asp?tags=Cookies": {
      status: 301,
      destination: "/tags/Cookies"
    },
    "/blog/catalog.asp?tags=CSRF": {
      status: 301,
      destination: "/tags/CSRF"
    },
    "/blog/catalog.asp?tags=Office": {
      status: 301,
      destination: "/tags/Office"
    },
    "/blog/catalog.asp?tags=压缩": {
      status: 301,
      destination: "/tags/压缩"
    },
    "/blog/catalog.asp?tags=笔记本": {
      status: 301,
      destination: "/tags/笔记本"
    },
    "/blog/catalog.asp?tags=ASP": {
      status: 301,
      destination: "/tags/ASP"
    },
    "/blog/catalog.asp?tags=FSO": {
      status: 301,
      destination: "/tags/FSO"
    },
    "/blog/catalog.asp?tags=Sandboxie沙盘": {
      status: 301,
      destination: "/tags/Sandboxie沙盘"
    },
    "/blog/catalog.asp?tags=注册机": {
      status: 301,
      destination: "/tags/注册机"
    },
    "/blog/catalog.asp?tags=Discuz!": {
      status: 301,
      destination: "/tags/Discuz!"
    },
    "/blog/catalog.asp?tags=论坛": {
      status: 301,
      destination: "/tags/论坛"
    },
    "/blog/catalog.asp?tags=被黑": {
      status: 301,
      destination: "/tags/被黑"
    },
    "/blog/catalog.asp?tags=PHPWind": {
      status: 301,
      destination: "/tags/PHPWind"
    },
    "/blog/catalog.asp?tags=地震": {
      status: 301,
      destination: "/tags/地震"
    },
    "/blog/catalog.asp?tags=黑客": {
      status: 301,
      destination: "/tags/黑客"
    },
    "/blog/catalog.asp?tags=术语": {
      status: 301,
      destination: "/tags/术语"
    },
    "/blog/catalog.asp?tags=辞典": {
      status: 301,
      destination: "/tags/辞典"
    },
    "/blog/catalog.asp?tags=远程文件包含RFI": {
      status: 301,
      destination: "/tags/远程文件包含RFI"
    },
    "/blog/catalog.asp?tags=原理": {
      status: 301,
      destination: "/tags/原理"
    },
    "/blog/catalog.asp?tags=Ghost": {
      status: 301,
      destination: "/tags/Ghost"
    },
    "/blog/catalog.asp?tags=播放器": {
      status: 301,
      destination: "/tags/播放器"
    },
    "/blog/catalog.asp?tags=Flash": {
      status: 301,
      destination: "/tags/Flash"
    },
    "/blog/catalog.asp?tags=dvbbs": {
      status: 301,
      destination: "/tags/dvbbs"
    },
    "/blog/catalog.asp?tags=Http": {
      status: 301,
      destination: "/tags/Http"
    },
    "/blog/catalog.asp?tags=shellcode": {
      status: 301,
      destination: "/tags/shellcode"
    },
    "/blog/catalog.asp?tags=统计": {
      status: 301,
      destination: "/tags/统计"
    },
    "/blog/catalog.asp?tags=常用": {
      status: 301,
      destination: "/tags/常用"
    },
    "/blog/catalog.asp?tags=MD5": {
      status: 301,
      destination: "/tags/MD5"
    },
    "/blog/catalog.asp?tags=WAP": {
      status: 301,
      destination: "/tags/WAP"
    },
    "/blog/catalog.asp?tags=WML": {
      status: 301,
      destination: "/tags/WML"
    },
    "/blog/catalog.asp?tags=硬件": {
      status: 301,
      destination: "/tags/硬件"
    },
    "/blog/catalog.asp?tags=肉鸡": {
      status: 301,
      destination: "/tags/肉鸡"
    },
    "/blog/catalog.asp?tags=快车": {
      status: 301,
      destination: "/tags/快车"
    },
    "/blog/catalog.asp?tags=迷你": {
      status: 301,
      destination: "/tags/迷你"
    },
    "/blog/catalog.asp?tags=Flashget": {
      status: 301,
      destination: "/tags/Flashget"
    },
    "/blog/catalog.asp?tags=FireFox": {
      status: 301,
      destination: "/tags/FireFox"
    },
    "/blog/catalog.asp?tags=Opera": {
      status: 301,
      destination: "/tags/Opera"
    },
    "/blog/catalog.asp?tags=深度": {
      status: 301,
      destination: "/tags/深度"
    },
    "/blog/catalog.asp?tags=KDE": {
      status: 301,
      destination: "/tags/KDE"
    },
    "/blog/catalog.asp?tags=Oblog": {
      status: 301,
      destination: "/tags/Oblog"
    },
    "/blog/catalog.asp?tags=SUMo": {
      status: 301,
      destination: "/tags/SUMo"
    },
    "/blog/catalog.asp?tags=文泉驿": {
      status: 301,
      destination: "/tags/文泉驿"
    },
    "/blog/catalog.asp?tags=福特福克斯杯": {
      status: 301,
      destination: "/tags/福特福克斯杯"
    },
    "/blog/catalog.asp?tags=Gmail": {
      status: 301,
      destination: "/tags/Gmail"
    },
    "/blog/catalog.asp?tags=Google": {
      status: 301,
      destination: "/tags/Google"
    },
    "/blog/catalog.asp?tags=暴风影音": {
      status: 301,
      destination: "/tags/暴风影音"
    },
    "/blog/catalog.asp?tags=WebScanner": {
      status: 301,
      destination: "/tags/WebScanner"
    },
    "/blog/catalog.asp?tags=SessionIE": {
      status: 301,
      destination: "/tags/SessionIE"
    },
    "/blog/catalog.asp?tags=Safe3IF": {
      status: 301,
      destination: "/tags/Safe3IF"
    },
    "/blog/catalog.asp?tags=IIS-FireWall": {
      status: 301,
      destination: "/tags/IIS-FireWall"
    },
    "/blog/catalog.asp?tags=openSUSE": {
      status: 301,
      destination: "/tags/openSUSE"
    },
    "/blog/catalog.asp?tags=Debian": {
      status: 301,
      destination: "/tags/Debian"
    },
    "/blog/catalog.asp?tags=Puppy": {
      status: 301,
      destination: "/tags/Puppy"
    },
    "/blog/catalog.asp?tags=Tweak": {
      status: 301,
      destination: "/tags/Tweak"
    },
    "/blog/catalog.asp?tags=硬盘": {
      status: 301,
      destination: "/tags/硬盘"
    },
    "/blog/catalog.asp?tags=测速": {
      status: 301,
      destination: "/tags/测速"
    },
    "/blog/catalog.asp?tags=代码": {
      status: 301,
      destination: "/tags/代码"
    },
    "/blog/catalog.asp?tags=PacketTracer": {
      status: 301,
      destination: "/tags/PacketTracer"
    },
    "/blog/catalog.asp?tags=网络建设": {
      status: 301,
      destination: "/tags/网络建设"
    },
    "/blog/catalog.asp?tags=趋势科技": {
      status: 301,
      destination: "/tags/趋势科技"
    },
    "/blog/catalog.asp?tags=fs2you": {
      status: 301,
      destination: "/tags/fs2you"
    },
    "/blog/catalog.asp?tags=文件粉碎": {
      status: 301,
      destination: "/tags/文件粉碎"
    },
    "/blog/catalog.asp?tags=CrossOver": {
      status: 301,
      destination: "/tags/CrossOver"
    },
    "/blog/catalog.asp?tags=USB": {
      status: 301,
      destination: "/tags/USB"
    },
    "/blog/catalog.asp?tags=aspx": {
      status: 301,
      destination: "/tags/aspx"
    },
    "/blog/catalog.asp?tags=Foxit": {
      status: 301,
      destination: "/tags/Foxit"
    },
    "/blog/catalog.asp?tags=PDF": {
      status: 301,
      destination: "/tags/PDF"
    },
    "/blog/catalog.asp?tags=Eee": {
      status: 301,
      destination: "/tags/Eee"
    },
    "/blog/catalog.asp?tags=雅虎": {
      status: 301,
      destination: "/tags/雅虎"
    },
    "/blog/catalog.asp?tags=IE": {
      status: 301,
      destination: "/tags/IE"
    },
    "/blog/catalog.asp?tags=PC-BSD": {
      status: 301,
      destination: "/tags/PC-BSD"
    },
    "/blog/catalog.asp?tags=TT98": {
      status: 301,
      destination: "/tags/TT98"
    },
    "/blog/catalog.asp?tags=Flock": {
      status: 301,
      destination: "/tags/Flock"
    },
    "/blog/catalog.asp?tags=GreenBrowser": {
      status: 301,
      destination: "/tags/GreenBrowser"
    },
    "/blog/catalog.asp?tags=Chrome": {
      status: 301,
      destination: "/tags/Chrome"
    },
    "/blog/catalog.asp?tags=资深黑客渗透内幕答疑": {
      status: 301,
      destination: "/tags/资深黑客渗透内幕答疑"
    },
    "/blog/catalog.asp?tags=世界之窗TheWorld": {
      status: 301,
      destination: "/tags/世界之窗TheWorld"
    },
    "/blog/catalog.asp?tags=MagicLinux": {
      status: 301,
      destination: "/tags/MagicLinux"
    },
    "/blog/catalog.asp?tags=Scanner": {
      status: 301,
      destination: "/tags/Scanner"
    },
    "/blog/catalog.asp?tags=FreeBSD": {
      status: 301,
      destination: "/tags/FreeBSD"
    },
    "/blog/catalog.asp?tags=Hijack": {
      status: 301,
      destination: "/tags/Hijack"
    },
    "/blog/catalog.asp?tags=鼠标": {
      status: 301,
      destination: "/tags/鼠标"
    },
    "/blog/catalog.asp?tags=JSky": {
      status: 301,
      destination: "/tags/JSky"
    },
    "/blog/catalog.asp?tags=微软": {
      status: 301,
      destination: "/tags/微软"
    },
    "/blog/catalog.asp?tags=WinPatrol": {
      status: 301,
      destination: "/tags/WinPatrol"
    },
    "/blog/catalog.asp?tags=百度": {
      status: 301,
      destination: "/tags/百度"
    },
    "/blog/catalog.asp?tags=SSClone": {
      status: 301,
      destination: "/tags/SSClone"
    },
    "/blog/catalog.asp?tags=魔杰座": {
      status: 301,
      destination: "/tags/魔杰座"
    },
    "/blog/catalog.asp?tags=Fedora": {
      status: 301,
      destination: "/tags/Fedora"
    },
    "/blog/catalog.asp?tags=Hyper-V": {
      status: 301,
      destination: "/tags/Hyper-V"
    },
    "/blog/catalog.asp?tags=SREng": {
      status: 301,
      destination: "/tags/SREng"
    },
    "/blog/catalog.asp?tags=mIRC": {
      status: 301,
      destination: "/tags/mIRC"
    },
    "/blog/catalog.asp?tags=Minmem": {
      status: 301,
      destination: "/tags/Minmem"
    },
    "/blog/catalog.asp?tags=内存": {
      status: 301,
      destination: "/tags/内存"
    },
    "/blog/catalog.asp?tags=优化": {
      status: 301,
      destination: "/tags/优化"
    },
    "/blog/catalog.asp?tags=OpenOffice": {
      status: 301,
      destination: "/tags/OpenOffice"
    },
    "/blog/catalog.asp?tags=NetBSD": {
      status: 301,
      destination: "/tags/NetBSD"
    },
    "/blog/catalog.asp?tags=Mandriva": {
      status: 301,
      destination: "/tags/Mandriva"
    },
    "/blog/catalog.asp?tags=Hiweed": {
      status: 301,
      destination: "/tags/Hiweed"
    },
    "/blog/catalog.asp?tags=PoC": {
      status: 301,
      destination: "/tags/PoC"
    },
    "/blog/catalog.asp?tags=p0f": {
      status: 301,
      destination: "/tags/p0f"
    },
    "/blog/catalog.asp?tags=PicPick": {
      status: 301,
      destination: "/tags/PicPick"
    },
    "/blog/catalog.asp?tags=截图": {
      status: 301,
      destination: "/tags/截图"
    },
    "/blog/catalog.asp?tags=Clickjacking": {
      status: 301,
      destination: "/tags/Clickjacking"
    },
    "/blog/catalog.asp?tags=黑屏": {
      status: 301,
      destination: "/tags/黑屏"
    },
    "/blog/catalog.asp?tags=破解": {
      status: 301,
      destination: "/tags/破解"
    },
    "/blog/catalog.asp?tags=补丁": {
      status: 301,
      destination: "/tags/补丁"
    },
    "/blog/catalog.asp?tags=雨林木风": {
      status: 301,
      destination: "/tags/雨林木风"
    },
    "/blog/catalog.asp?tags=Android": {
      status: 301,
      destination: "/tags/Android"
    },
    "/blog/catalog.asp?tags=艺龙旅行网": {
      status: 301,
      destination: "/tags/艺龙旅行网"
    },
    "/blog/catalog.asp?tags=PHP168": {
      status: 301,
      destination: "/tags/PHP168"
    },
    "/blog/catalog.asp?tags=OpenBSD": {
      status: 301,
      destination: "/tags/OpenBSD"
    },
    "/blog/catalog.asp?tags=Wubi": {
      status: 301,
      destination: "/tags/Wubi"
    },
    "/blog/catalog.asp?tags=Perl": {
      status: 301,
      destination: "/tags/Perl"
    },
    "/blog/catalog.asp?tags=HFS": {
      status: 301,
      destination: "/tags/HFS"
    },
    "/blog/catalog.asp?tags=加密": {
      status: 301,
      destination: "/tags/加密"
    },
    "/blog/catalog.asp?tags=PhpCms": {
      status: 301,
      destination: "/tags/PhpCms"
    },
    "/blog/catalog.asp?tags=DeDecms": {
      status: 301,
      destination: "/tags/DeDecms"
    },
    "/blog/catalog.asp?tags=Hex": {
      status: 301,
      destination: "/tags/Hex"
    },
    "/blog/catalog.asp?tags=编辑器": {
      status: 301,
      destination: "/tags/编辑器"
    },
    "/blog/catalog.asp?tags=IMETool": {
      status: 301,
      destination: "/tags/IMETool"
    },
    "/blog/catalog.asp?tags=输入法": {
      status: 301,
      destination: "/tags/输入法"
    },
    "/blog/catalog.asp?tags=WinMount": {
      status: 301,
      destination: "/tags/WinMount"
    },
    "/blog/catalog.asp?tags=Slax": {
      status: 301,
      destination: "/tags/Slax"
    },
    "/blog/catalog.asp?tags=VirtualBox": {
      status: 301,
      destination: "/tags/VirtualBox"
    },
    "/blog/catalog.asp?tags=彩虹哈希表": {
      status: 301,
      destination: "/tags/彩虹哈希表"
    },
    "/blog/catalog.asp?tags=解密": {
      status: 301,
      destination: "/tags/解密"
    },
    "/blog/catalog.asp?tags=Dreamweaver": {
      status: 301,
      destination: "/tags/Dreamweaver"
    },
    "/blog/catalog.asp?tags=Fireworks": {
      status: 301,
      destination: "/tags/Fireworks"
    },
    "/blog/catalog.asp?tags=WebLogic": {
      status: 301,
      destination: "/tags/WebLogic"
    },
    "/blog/catalog.asp?tags=抓鸡": {
      status: 301,
      destination: "/tags/抓鸡"
    },
    "/blog/catalog.asp?tags=pcAnywhere": {
      status: 301,
      destination: "/tags/pcAnywhere"
    },
    "/blog/catalog.asp?tags=OpenSolaris": {
      status: 301,
      destination: "/tags/OpenSolaris"
    },
    "/blog/catalog.asp?tags=Python": {
      status: 301,
      destination: "/tags/Python"
    },
    "/blog/catalog.asp?tags=Router": {
      status: 301,
      destination: "/tags/Router"
    },
    "/blog/catalog.asp?tags=gh0st": {
      status: 301,
      destination: "/tags/gh0st"
    },
    "/blog/catalog.asp?tags=GeeXboX": {
      status: 301,
      destination: "/tags/GeeXboX"
    },
    "/blog/catalog.asp?tags=GNS3": {
      status: 301,
      destination: "/tags/GNS3"
    },
    "/blog/catalog.asp?tags=Cisco": {
      status: 301,
      destination: "/tags/Cisco"
    },
    "/blog/catalog.asp?tags=LinuxMint": {
      status: 301,
      destination: "/tags/LinuxMint"
    },
    "/blog/catalog.asp?tags=Eeebuntu": {
      status: 301,
      destination: "/tags/Eeebuntu"
    },
    "/blog/catalog.asp?tags=大会": {
      status: 301,
      destination: "/tags/大会"
    },
    "/blog/catalog.asp?tags=GParted": {
      status: 301,
      destination: "/tags/GParted"
    },
    "/blog/catalog.asp?tags=TeamViewer": {
      status: 301,
      destination: "/tags/TeamViewer"
    },
    "/blog/catalog.asp?tags=DameWare": {
      status: 301,
      destination: "/tags/DameWare"
    },
    "/blog/catalog.asp?tags=看雪学院": {
      status: 301,
      destination: "/tags/看雪学院"
    },
    "/blog/catalog.asp?tags=SuperUbuntu": {
      status: 301,
      destination: "/tags/SuperUbuntu"
    },
    "/blog/catalog.asp?tags=网络电话": {
      status: 301,
      destination: "/tags/网络电话"
    },
    "/blog/catalog.asp?tags=暴风": {
      status: 301,
      destination: "/tags/暴风"
    },
    "/blog/catalog.asp?tags=网络营销": {
      status: 301,
      destination: "/tags/网络营销"
    },
    "/blog/catalog.asp?tags=FTP": {
      status: 301,
      destination: "/tags/FTP"
    },
    "/blog/catalog.asp?tags=iQ浏览器": {
      status: 301,
      destination: "/tags/iQ浏览器"
    },
    "/blog/catalog.asp?tags=Samba": {
      status: 301,
      destination: "/tags/Samba"
    },
    "/blog/catalog.asp?tags=Knoppix": {
      status: 301,
      destination: "/tags/Knoppix"
    },
    "/blog/catalog.asp?tags=马克斯CMS": {
      status: 301,
      destination: "/tags/马克斯CMS"
    },
    "/blog/catalog.asp?tags=PPTV": {
      status: 301,
      destination: "/tags/PPTV"
    },
    "/blog/catalog.asp?tags=PPStream": {
      status: 301,
      destination: "/tags/PPStream"
    },
    "/blog/catalog.asp?tags=CSS": {
      status: 301,
      destination: "/tags/CSS"
    },
    "/blog/catalog.asp?tags=反低俗": {
      status: 301,
      destination: "/tags/反低俗"
    },
    "/blog/catalog.asp?tags=情人节": {
      status: 301,
      destination: "/tags/情人节"
    },
    "/blog/catalog.asp?tags=eWebEditor": {
      status: 301,
      destination: "/tags/eWebEditor"
    },
    "/blog/catalog.asp?tags=Archlinux": {
      status: 301,
      destination: "/tags/Archlinux"
    },
    "/blog/catalog.asp?tags=动易": {
      status: 301,
      destination: "/tags/动易"
    },
    "/blog/catalog.asp?tags=ibus": {
      status: 301,
      destination: "/tags/ibus"
    },
    "/blog/catalog.asp?tags=Zeal": {
      status: 301,
      destination: "/tags/Zeal"
    },
    "/blog/catalog.asp?tags=iframe": {
      status: 301,
      destination: "/tags/iframe"
    },
    "/blog/catalog.asp?tags=iRoundPic": {
      status: 301,
      destination: "/tags/iRoundPic"
    },
    "/blog/catalog.asp?tags=刘谦": {
      status: 301,
      destination: "/tags/刘谦"
    },
    "/blog/catalog.asp?tags=魔术": {
      status: 301,
      destination: "/tags/魔术"
    },
    "/blog/catalog.asp?tags=远古": {
      status: 301,
      destination: "/tags/远古"
    },
    "/blog/catalog.asp?tags=Volumouse": {
      status: 301,
      destination: "/tags/Volumouse"
    },
    "/blog/catalog.asp?tags=Hawkscope": {
      status: 301,
      destination: "/tags/Hawkscope"
    },
    "/blog/catalog.asp?tags=歌曲": {
      status: 301,
      destination: "/tags/歌曲"
    },
    "/blog/catalog.asp?tags=LxBlog": {
      status: 301,
      destination: "/tags/LxBlog"
    },
    "/blog/catalog.asp?tags=SUSE": {
      status: 301,
      destination: "/tags/SUSE"
    },
    "/blog/catalog.asp?tags=Gnome": {
      status: 301,
      destination: "/tags/Gnome"
    },
    "/blog/catalog.asp?tags=RABSoft": {
      status: 301,
      destination: "/tags/RABSoft"
    },
    "/blog/catalog.asp?tags=ECShop": {
      status: 301,
      destination: "/tags/ECShop"
    },
    "/blog/catalog.asp?tags=SunPinyin": {
      status: 301,
      destination: "/tags/SunPinyin"
    },
    "/blog/catalog.asp?tags=Screen2Exe": {
      status: 301,
      destination: "/tags/Screen2Exe"
    },
    "/blog/catalog.asp?tags=Unlock": {
      status: 301,
      destination: "/tags/Unlock"
    },
    "/blog/catalog.asp?tags=PJblog": {
      status: 301,
      destination: "/tags/PJblog"
    },
    "/blog/catalog.asp?tags=IIS": {
      status: 301,
      destination: "/tags/IIS"
    },
    "/blog/catalog.asp?tags=红旗RedFlag": {
      status: 301,
      destination: "/tags/红旗RedFlag"
    },
    "/blog/catalog.asp?tags=XSS": {
      status: 301,
      destination: "/tags/XSS"
    },
    "/blog/catalog.asp?tags=ReactOS": {
      status: 301,
      destination: "/tags/ReactOS"
    },
    "/blog/catalog.asp?tags=andLinux": {
      status: 301,
      destination: "/tags/andLinux"
    },
    "/blog/catalog.asp?tags=设计": {
      status: 301,
      destination: "/tags/设计"
    },
    "/blog/catalog.asp?tags=RemotelyAnywhere": {
      status: 301,
      destination: "/tags/RemotelyAnywhere"
    },
    "/blog/catalog.asp?tags=Bo-Blog": {
      status: 301,
      destination: "/tags/Bo-Blog"
    },
    "/blog/catalog.asp?tags=aptitude": {
      status: 301,
      destination: "/tags/aptitude"
    },
    "/blog/catalog.asp?tags=apt-get": {
      status: 301,
      destination: "/tags/apt-get"
    },
    "/blog/catalog.asp?tags=包管理": {
      status: 301,
      destination: "/tags/包管理"
    },
    "/blog/catalog.asp?tags=Mac": {
      status: 301,
      destination: "/tags/Mac"
    },
    "/blog/catalog.asp?tags=ASP.net": {
      status: 301,
      destination: "/tags/ASP.net"
    },
    "/blog/catalog.asp?tags=RedHat": {
      status: 301,
      destination: "/tags/RedHat"
    },
    "/blog/catalog.asp?tags=ps": {
      status: 301,
      destination: "/tags/ps"
    },
    "/blog/catalog.asp?tags=kill": {
      status: 301,
      destination: "/tags/kill"
    },
    "/blog/catalog.asp?tags=康师傅": {
      status: 301,
      destination: "/tags/康师傅"
    },
    "/blog/catalog.asp?tags=全家福": {
      status: 301,
      destination: "/tags/全家福"
    },
    "/blog/catalog.asp?tags=折腾": {
      status: 301,
      destination: "/tags/折腾"
    },
    "/blog/catalog.asp?tags=Moblin": {
      status: 301,
      destination: "/tags/Moblin"
    },
    "/blog/catalog.asp?tags=Audacious": {
      status: 301,
      destination: "/tags/Audacious"
    },
    "/blog/catalog.asp?tags=Photoshop": {
      status: 301,
      destination: "/tags/Photoshop"
    },
    "/blog/catalog.asp?tags=绿色": {
      status: 301,
      destination: "/tags/绿色"
    },
    "/blog/catalog.asp?tags=TM": {
      status: 301,
      destination: "/tags/TM"
    },
    "/blog/catalog.asp?tags=Apple": {
      status: 301,
      destination: "/tags/Apple"
    },
    "/blog/catalog.asp?tags=iTunes": {
      status: 301,
      destination: "/tags/iTunes"
    },
    "/blog/catalog.asp?tags=FileZilla": {
      status: 301,
      destination: "/tags/FileZilla"
    },
    "/blog/catalog.asp?tags=WinMerge": {
      status: 301,
      destination: "/tags/WinMerge"
    },
    "/blog/catalog.asp?tags=Apache": {
      status: 301,
      destination: "/tags/Apache"
    },
    "/blog/catalog.asp?tags=EmpireCMS": {
      status: 301,
      destination: "/tags/EmpireCMS"
    },
    "/blog/catalog.asp?tags=Wireshark": {
      status: 301,
      destination: "/tags/Wireshark"
    },
    "/blog/catalog.asp?tags=嗅探": {
      status: 301,
      destination: "/tags/嗅探"
    },
    "/blog/catalog.asp?tags=iPhone": {
      status: 301,
      destination: "/tags/iPhone"
    },
    "/blog/catalog.asp?tags=UltraSn0w": {
      status: 301,
      destination: "/tags/UltraSn0w"
    },
    "/blog/catalog.asp?tags=终端": {
      status: 301,
      destination: "/tags/终端"
    },
    "/blog/catalog.asp?tags=虚拟": {
      status: 301,
      destination: "/tags/虚拟"
    },
    "/blog/catalog.asp?tags=LibFetion": {
      status: 301,
      destination: "/tags/LibFetion"
    },
    "/blog/catalog.asp?tags=外链": {
      status: 301,
      destination: "/tags/外链"
    },
    "/blog/catalog.asp?tags=Vim": {
      status: 301,
      destination: "/tags/Vim"
    },
    "/blog/catalog.asp?tags=SSH": {
      status: 301,
      destination: "/tags/SSH"
    },
    "/blog/catalog.asp?tags=新氧": {
      status: 301,
      destination: "/tags/新氧"
    },
    "/blog/catalog.asp?tags=电影": {
      status: 301,
      destination: "/tags/电影"
    },
    "/blog/catalog.asp?tags=Premiere": {
      status: 301,
      destination: "/tags/Premiere"
    },
    "/blog/catalog.asp?tags=nginx": {
      status: 301,
      destination: "/tags/nginx"
    },
    "/blog/catalog.asp?tags=MySql": {
      status: 301,
      destination: "/tags/MySql"
    },
    "/blog/catalog.asp?tags=LiveAndroid": {
      status: 301,
      destination: "/tags/LiveAndroid"
    },
    "/blog/catalog.asp?tags=内核": {
      status: 301,
      destination: "/tags/内核"
    },
    "/blog/catalog.asp?tags=Arch": {
      status: 301,
      destination: "/tags/Arch"
    },
    "/blog/catalog.asp?tags=AIR": {
      status: 301,
      destination: "/tags/AIR"
    },
    "/blog/catalog.asp?tags=CDlinux": {
      status: 301,
      destination: "/tags/CDlinux"
    },
    "/blog/catalog.asp?tags=e云": {
      status: 301,
      destination: "/tags/e云"
    },
    "/blog/catalog.asp?tags=中国电信": {
      status: 301,
      destination: "/tags/中国电信"
    },
    "/blog/catalog.asp?tags=Launchpad": {
      status: 301,
      destination: "/tags/Launchpad"
    },
    "/blog/catalog.asp?tags=PPA": {
      status: 301,
      destination: "/tags/PPA"
    },
    "/blog/catalog.asp?tags=Slackware": {
      status: 301,
      destination: "/tags/Slackware"
    },
    "/blog/catalog.asp?tags=Lubuntu": {
      status: 301,
      destination: "/tags/Lubuntu"
    },
    "/blog/catalog.asp?tags=LXDE": {
      status: 301,
      destination: "/tags/LXDE"
    },
    "/blog/catalog.asp?tags=股票": {
      status: 301,
      destination: "/tags/股票"
    },
    "/blog/catalog.asp?tags=SQL": {
      status: 301,
      destination: "/tags/SQL"
    },
    "/blog/catalog.asp?tags=iptables": {
      status: 301,
      destination: "/tags/iptables"
    },
    "/blog/catalog.asp?tags=CC": {
      status: 301,
      destination: "/tags/CC"
    },
    "/blog/catalog.asp?tags=千千静听": {
      status: 301,
      destination: "/tags/千千静听"
    },
    "/blog/catalog.asp?tags=光驱": {
      status: 301,
      destination: "/tags/光驱"
    },
    "/blog/catalog.asp?tags=HiveRise": {
      status: 301,
      destination: "/tags/HiveRise"
    },
    "/blog/catalog.asp?tags=Gentoo": {
      status: 301,
      destination: "/tags/Gentoo"
    },
    "/blog/catalog.asp?tags=博客蜂": {
      status: 301,
      destination: "/tags/博客蜂"
    },
    "/blog/catalog.asp?tags=Flickr": {
      status: 301,
      destination: "/tags/Flickr"
    },
    "/blog/catalog.asp?tags=好易网视": {
      status: 301,
      destination: "/tags/好易网视"
    },
    "/blog/catalog.asp?tags=CentOS": {
      status: 301,
      destination: "/tags/CentOS"
    },
    "/blog/catalog.asp?tags=pinyShop": {
      status: 301,
      destination: "/tags/pinyShop"
    },
    "/blog/catalog.asp?tags=酷狗": {
      status: 301,
      destination: "/tags/酷狗"
    },
    "/blog/catalog.asp?tags=configure": {
      status: 301,
      destination: "/tags/configure"
    },
    "/blog/catalog.asp?tags=潮虫": {
      status: 301,
      destination: "/tags/潮虫"
    },
    "/blog/catalog.asp?tags=Turbo": {
      status: 301,
      destination: "/tags/Turbo"
    },
    "/blog/catalog.asp?tags=苏州": {
      status: 301,
      destination: "/tags/苏州"
    },
    "/blog/catalog.asp?tags=蓝牙": {
      status: 301,
      destination: "/tags/蓝牙"
    },
    "/blog/catalog.asp?tags=Calculate": {
      status: 301,
      destination: "/tags/Calculate"
    },
    "/blog/catalog.asp?tags=SEO": {
      status: 301,
      destination: "/tags/SEO"
    },
    "/blog/catalog.asp?tags=凤巢": {
      status: 301,
      destination: "/tags/凤巢"
    },
    "/blog/catalog.asp?tags=javascript书签": {
      status: 301,
      destination: "/tags/javascript书签"
    },
    "/blog/catalog.asp?tags=TinyCore": {
      status: 301,
      destination: "/tags/TinyCore"
    },
    "/blog/catalog.asp?tags=RT-Thread": {
      status: 301,
      destination: "/tags/RT-Thread"
    },
    "/blog/catalog.asp?tags=实时线程操作系统": {
      status: 301,
      destination: "/tags/实时线程操作系统"
    },
    "/blog/catalog.asp?tags=LinuxDeepin": {
      status: 301,
      destination: "/tags/LinuxDeepin"
    },
    "/blog/catalog.asp?tags=插件": {
      status: 301,
      destination: "/tags/插件"
    },
    "/blog/catalog.asp?tags=搜狗": {
      status: 301,
      destination: "/tags/搜狗"
    },
    "/blog/catalog.asp?tags=VMware": {
      status: 301,
      destination: "/tags/VMware"
    },
    "/blog/catalog.asp?tags=格式工厂": {
      status: 301,
      destination: "/tags/格式工厂"
    },
    "/blog/catalog.asp?tags=优化大师": {
      status: 301,
      destination: "/tags/优化大师"
    },
    "/blog/catalog.asp?tags=EditPlus": {
      status: 301,
      destination: "/tags/EditPlus"
    },
    "/blog/catalog.asp?tags=WordPress": {
      status: 301,
      destination: "/tags/WordPress"
    },
    "/blog/catalog.asp?tags=AutoCAD": {
      status: 301,
      destination: "/tags/AutoCAD"
    },
    "/blog/catalog.asp?tags=Sablog": {
      status: 301,
      destination: "/tags/Sablog"
    },
    "/blog/catalog.asp?tags=htaccess": {
      status: 301,
      destination: "/tags/htaccess"
    },
    "/blog/catalog.asp?tags=LFS": {
      status: 301,
      destination: "/tags/LFS"
    },
    "/blog/catalog.asp?tags=VPS": {
      status: 301,
      destination: "/tags/VPS"
    },
    "/blog/catalog.asp?tags=动画": {
      status: 301,
      destination: "/tags/动画"
    },
    "/blog/catalog.asp?tags=开拓者": {
      status: 301,
      destination: "/tags/开拓者"
    },
    "/blog/catalog.asp?tags=小游戏": {
      status: 301,
      destination: "/tags/小游戏"
    },
    "/blog/catalog.asp?tags=FreeNAS": {
      status: 301,
      destination: "/tags/FreeNAS"
    },
    "/blog/catalog.asp?tags=NAS": {
      status: 301,
      destination: "/tags/NAS"
    },
    "/blog/catalog.asp?tags=Jolicloud": {
      status: 301,
      destination: "/tags/Jolicloud"
    },
    "/blog/catalog.asp?tags=Sabayon": {
      status: 301,
      destination: "/tags/Sabayon"
    },
    "/blog/catalog.asp?tags=Zorin": {
      status: 301,
      destination: "/tags/Zorin"
    },
    "/blog/catalog.asp?tags=Illustrator": {
      status: 301,
      destination: "/tags/Illustrator"
    },
    "/blog/catalog.asp?tags=PPLive": {
      status: 301,
      destination: "/tags/PPLive"
    },
    "/blog/catalog.asp?tags=召唤令": {
      status: 301,
      destination: "/tags/召唤令"
    },
    "/blog/catalog.asp?tags=淘宝": {
      status: 301,
      destination: "/tags/淘宝"
    },
    "/blog/catalog.asp?tags=Qomo": {
      status: 301,
      destination: "/tags/Qomo"
    },
    "/blog/catalog.asp?tags=RPM": {
      status: 301,
      destination: "/tags/RPM"
    },
    "/blog/catalog.asp?tags=BackTrack": {
      status: 301,
      destination: "/tags/BackTrack"
    },
    "/blog/catalog.asp?tags=健康": {
      status: 301,
      destination: "/tags/健康"
    },
    "/blog/catalog.asp?tags=Fuduntu": {
      status: 301,
      destination: "/tags/Fuduntu"
    },
    "/blog/catalog.asp?tags=Vector": {
      status: 301,
      destination: "/tags/Vector"
    },
    "/blog/catalog.asp?tags=Flex": {
      status: 301,
      destination: "/tags/Flex"
    },
    "/blog/catalog.asp?tags=wdcp": {
      status: 301,
      destination: "/tags/wdcp"
    },
    "/blog/catalog.asp?tags=PearOS": {
      status: 301,
      destination: "/tags/PearOS"
    },
    "/blog/catalog.asp?tags=ImageReady": {
      status: 301,
      destination: "/tags/ImageReady"
    },
    "/blog/catalog.asp?tags=吃": {
      status: 301,
      destination: "/tags/吃"
    },
    "/blog/catalog.asp?tags=图解": {
      status: 301,
      destination: "/tags/图解"
    },
    "/blog/catalog.asp?tags=功效与作用": {
      status: 301,
      destination: "/tags/功效与作用"
    },
    "/blog/catalog.asp?tags=UltimateEdition": {
      status: 301,
      destination: "/tags/UltimateEdition"
    },
    "/blog/catalog.asp?tags=痘痘": {
      status: 301,
      destination: "/tags/痘痘"
    },
    "/blog/catalog.asp?tags=痘印": {
      status: 301,
      destination: "/tags/痘印"
    },
    "/blog/catalog.asp?tags=单反": {
      status: 301,
      destination: "/tags/单反"
    },
    "/blog/catalog.asp?tags=时间": {
      status: 301,
      destination: "/tags/时间"
    },
    "/blog/catalog.asp?tags=减肥": {
      status: 301,
      destination: "/tags/减肥"
    },
    "/blog/catalog.asp?tags=美容": {
      status: 301,
      destination: "/tags/美容"
    },
    "/blog/catalog.asp?tags=去黑头": {
      status: 301,
      destination: "/tags/去黑头"
    },
    "/blog/catalog.asp?tags=Maya": {
      status: 301,
      destination: "/tags/Maya"
    },
    "/blog/catalog.asp?tags=拍照": {
      status: 301,
      destination: "/tags/拍照"
    },
    "/blog/catalog.asp?tags=AfterEffects": {
      status: 301,
      destination: "/tags/AfterEffects"
    },
    "/blog/catalog.asp?tags=水果": {
      status: 301,
      destination: "/tags/水果"
    },
    "/blog/catalog.asp?tags=PureOS": {
      status: 301,
      destination: "/tags/PureOS"
    },
    "/blog/catalog.asp?tags=人际": {
      status: 301,
      destination: "/tags/人际"
    },
    "/blog/catalog.asp?tags=失眠": {
      status: 301,
      destination: "/tags/失眠"
    },
    "/blog/catalog.asp?tags=茶": {
      status: 301,
      destination: "/tags/茶"
    },
    "/blog/catalog.asp?tags=Audition": {
      status: 301,
      destination: "/tags/Audition"
    },
    "/blog/catalog.asp?tags=PPT": {
      status: 301,
      destination: "/tags/PPT"
    },
    "/blog/catalog.asp?tags=相机": {
      status: 301,
      destination: "/tags/相机"
    },
    "/blog/catalog.asp?tags=CodeIgniter": {
      status: 301,
      destination: "/tags/CodeIgniter"
    },
    "/blog/catalog.asp?tags=git": {
      status: 301,
      destination: "/tags/git"
    },
    "/blog/catalog.asp?tags=Oracle": {
      status: 301,
      destination: "/tags/Oracle"
    },
    "/blog/catalog.asp?tags=眼镜": {
      status: 301,
      destination: "/tags/眼镜"
    },
    "/blog/catalog.asp?tags=javascript": {
      status: 301,
      destination: "/tags/javascript"
    },
    "/blog/catalog.asp?tags=理财": {
      status: 301,
      destination: "/tags/理财"
    },
    "/blog/catalog.asp?tags=python": {
      status: 301,
      destination: "/tags/python"
    },
    "/blog/catalog.asp?tags=爬虫": {
      status: 301,
      destination: "/tags/爬虫"
    },
    "/blog/catalog.asp?tags=微信小程序": {
      status: 301,
      destination: "/tags/微信小程序"
    },
    "/blog/catalog.asp?tags=selenium": {
      status: 301,
      destination: "/tags/selenium"
    },


  }
});
