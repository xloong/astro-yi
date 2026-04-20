import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import {site} from './src/consts.ts'
import remarkDirective from "remark-directive";
import expressiveCode from "astro-expressive-code";
import {pluginLineNumbers} from '@expressive-code/plugin-line-numbers'
import {pluginCollapsibleSections} from '@expressive-code/plugin-collapsible-sections'

import {remarkModifiedTime,} from "./src/plugins/remark-modified-time.mjs";
import {resetRemark} from "./src/plugins/reset-remark.js";
import {remarkAsides} from './src/plugins/remark-asides.js'
import {remarkCollapse} from "./src/plugins/remark-collapse.js";
import {remarkGithubCard} from './src/plugins/remark-github-card.js'
import {lazyLoadImage} from "./src/plugins/lazy-load-image.js";
import {remarkButton} from "./src/plugins/remark-button.js";
import {remarkHtml} from "./src/plugins/remark-html.js";

export default defineConfig({
  site: site.url,
  base: import.meta.env.PROD ? site.baseUrl : '',
  trailingSlash: "never",
  integrations: [sitemap(), tailwind(), expressiveCode({
    plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
    themes: ["github-dark", "github-light"],
    styleOverrides: {
      codeFontFamily: "jetbrains-mono",
      uiFontFamily: "jetbrains-mono",
    },
    themeCssSelector: (theme) => `[data-theme="${theme.type}"]`
  }), mdx()],
  markdown: {
    remarkPlugins: [remarkModifiedTime, resetRemark, remarkDirective, remarkAsides({}), remarkCollapse({}), remarkGithubCard(), remarkButton(), remarkHtml()],
    rehypePlugins: [lazyLoadImage],
  },
  redirects: {
    // '/blog/1.html': {
    //   status: 301,
    //   destination: '/blog/markdown-elements'
    // },

    "/feed": {
      status: 301,
      destination: "/rss.xml"
    },


    "/jiaocheng": {
      status: 301,
      destination: "/blog/jiaocheng"
    },

    "/article/2023-01-10": {
      status: 301,
      destination: "/blog/webview-wxpay"
    },
    "/article/2023-02-08": {
      status: 301,
      destination: "/blog/tailscale-zerotier-rustdesk"
    },


    // 由 vercel.json 处理 重定向
    // 绕过了 Astro 的构建校验，且 Vercel 在边缘节点处理重定向，速度最快。
    // '/article/[...slug]': '/blog/[...slug]',
    // '/tag/[...slug]': '/tags/[...slug]',


    "/blog/2023-01-10": {
      status: 301,
      destination: "/blog/webview-wxpay"
    },
    "/blog/2023-02-08": {
      status: 301,
      destination: "/blog/tailscale-zerotier-rustdesk"
    },

  }
});
