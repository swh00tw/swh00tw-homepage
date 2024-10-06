---
title: 2023 年度回顧（下）
description: 這篇聊聊 Web dev/Career 上的
publishedAt: 2024-01-20
tags: 
published: true
coverImgSrc: posts/2023-reflection-small.webp
backgroundImgSrc: posts/2023-reflection-big.webp
lang: zh
---
<script>
	import Callout from "../lib/mdsvex/custom/Callout.svelte";
	import Youtube from "../lib/mdsvex/custom/Youtube.svelte";
</script>
## Another reflection

開學前再擠出一篇，主要想紀錄在 2023 年學/玩了什麼，以及自己在學習事物上的想法。然後最後再寫寫 2024 想往哪走、想學什麼。

## Things I played with in 2023
2023 年玩的 tech stack，主要還是 Web dev，太過瑣碎的就沒列出來，只記一些我覺得有趣的。
### Next 13

2022 年底 Next.js 就 release 到 Next 13 版，推出了 App Router, Nested Routing, Server Component, and Server Action 等新的概念，2023 年可以說把這些概念漸漸普及的一年，今年 Vercel 辦的 Next Conf 又把討論度推往一個新的巔峰，可以看到網路上大家正反面表達對於 Next 13 的看法，我覺得最有趣的就是讀 Kent C. Dodds 的 [Why I Won't Use Next.js](https://www.epicweb.dev/why-i-wont-use-nextjs) 和 Lee Robinson(VP of Product at Vercel) 的 [Why I'm Using Next.js](https://leerob.io/blog/using-nextjs) 這兩篇。可以說是把對於 Next 13 正反面意見都寫下來，~~想吃瓜~~ or 想多了解在吵什麼的可以去看看。

今年我也將 Next 13 應用在一些 Project 上然後玩了幾次。我對他的看法算是偏正面中夾帶一點小抱怨，我覺得 Vercel 真的想把 Web development 的效能面優化到極致，真的 respect their effort，身爲在意效能的工程師真的很喜歡新的 Next 13。不過還是有些小抱怨，就如 Kent C. Dodds 文裡所說的一樣，Next 13 create too much magic，像是 override `fetch` 的 interface 把它改裝成自己可以 cache 的版本，雖然是好的，但就有點反直覺，可能有人沒注意到會以為這是他原本認識的 fetch。另外也有朋友指出，對於平常沒在 follow Next.js update 的人來說，學習曲線有點陡，畢竟這是另外一套 mental model，開發者必須用全新的思維思考怎樣切割 components & build UI。

### Svelte & SvelteKit

Web dev frameworks 百家爭鳴，2023 年已經聽過太多新崛起的 libraries & frameworks，例如 Solid, Qwik, Astro。Svelte 也是我有在關注的其中一員，之前大概是被 Youtuber Fireship 洗腦的關係，被他簡潔的語法吸引，剛好那時候想寫一個自己的 Blog，於是就開始自學了 Svelte & SvelteKit ，然後用來架這個 Blog 了 lol。

首先先誇一下 Svelte 的官方 Tutorial 真的是我看過最棒的教學，身為一個對 Web dev 稍微有經驗的 Developer 真的學起來很輕鬆，還有 Interactive code playground 在網頁中讓你即時 compile 真的很方便（[Tutorial 連結](https://learn.svelte.dev/tutorial/welcome-to-svelte)）。再來聊聊開發體驗 (DX) 的部分，雖然 Project 的 scope 不大，但還是有感受到語法的簡潔，少了像是 `useState` & `useEffect` 等不段重複的 code，然後像是 state management, animation 之類的工具 Svelte 原生就提供了，就不需要加入類似 Redux, Zustand 和 Framer motion 之類的套件。不過 SvelteKit 整體而言還沒有 Nextjs 那麼強大，可能是因為還很年輕，不像 Next.js 有自動 Image Optimization & Generate Dynamic OG 這麼方便，這是稍微美中不足的部分，期待之後能快點補上。

<Callout>
	順帶一提，Svelte 最近即將要進化到 Svelte 5 了，拋棄以往簡潔的語法，新增了 Rune，有點稍微往 React style 的語法移動，不過底層是用 Signal 來實作 Reactivity，還是令人非常期待，有興趣的話可以先來看看 Rich Harris 的介紹影片 🎉
	<Youtube id="RVnxF3j3N8U" />
</Callout>

### PayloadCMS

第一個被我使用的 Headless CMS (Content Management System)，提供一個純後台來管理網站的內容，適合用在電商或者 Blog。最一開始架 Blog 的時候是想用 Svelte 當前端然後用 Request-time 時去 fetch 我存在後台的文章（Server-side Rendering），於是 Survey CMS 一番後選擇這個 PayloadCMS，選擇的原因包括後台 UI 好看、Highly Customizable(可加很多 Plugins)、Auto-generate RestAPI & GraphQL endpoints、回傳的文章格式是用 nested tree 的形式讓我可以自由決定該怎麼呈現。雖然有一個個人覺得嚴重的缺點，就是後台的文章編輯器不支援 Markdown 輸入法，不過這點可以用 [payload-plugin-lexical](https://github.com/AlessioGr/payload-plugin-lexical) 這個插件來解決（不過現在 PayloadCMS 2.0 好像已經把這個非官方插件變成 native support 了）。

整體而言是蠻強大的工具，不過後來我把 Blog 變成用 [MDsevX](https://mdsvex.pngwn.io/) 來寫，就把這個部分拔掉了。雖然每次新發佈一篇就要 rebuild，不過效能方面因為是純 static site 的關係好了非常多。

### Houdini

承上，以前是用 GraphQL 的方式來 fetch data，我需要找到一個好用的 Svelte GQL Client，於是在找了很多套件之後發現這個好用的 GraphQL type-safety Client，他基本上是藉由他的 Vite Plugin 來 Monitor 你寫的 GraphQL queries 然後來 auto-generate type，setup 起來蠻快的、用起來也毫無阻力，推薦給想用 Svelte + GraphQL 的人。

### Supabase

好用的 Backend-as-a-Service，提供免費的 Postgres 可以使用，介面非常友善，不需要會 SQL 也能使用。除了基本的 Database 功能外，還帶有 Row-level Security & Authentication 等功能，功能非常全面，希望之後能有機會把這些功能都用過一遍。

## Focus Areas in 2024
2024 想玩的。除了在 Web dev 上持續精進以外，還想多跨到比較後端 & Infra 的部分。

### Test

之前其實沒什麼寫過 Unit test 的經驗，只有用過 Cypress 來寫 End-to-end test。希望 2024 年能把寫 Test 這項技能 Pick up 起來。我覺得會不會寫 Test 是區分 Junior & Senior 的一大關鍵，即使學會寫 Test 不會幫助你突然變成 Senior，但肯定會讓合作的夥伴省下更多麻煩和時間去找出 Bug 和 Debug，能多做一點善事，Why not。

### Go

會突然想學 Go 的動機是想熟悉一項 Backend Language，2023 年嘗試學過 Rust，但後來太忙加上對我來說負擔有點大就先擱置計劃。Go 同樣也是現在的主流之一，之前看到北美很多職缺都有提到 Go，加上 Go 的設計哲學：Simplicity & Minimalism，看起來比較平易近人一些，於是希望 2024 年能撥點時間來學。（Btw 其實在大學時期就有寫過一點點 Go，只是太久沒用大概都忘了 XD）

### System Design

以前就有在偶爾看 ByteByteGo 的文章，不過沒有看得很勤。會想開始認真熟悉 System Design 的原因大概有兩過，首先明年 2025 年我大概也要開始找 new grad 的職缺，雖然不知道 new grad 面試會不會考 System Design，但我可以先準備起來放，再來是我想將知識拓展到除了 Web dev 之外的領域，我覺得想當一名 Fullstack Dev or Software Engineer 光會開發可能不太夠，at some point 一定會遇到需要 Scale 的問題，這時候系統設計就能派上用場，凸顯出價值。

## Some thoughts

最後記錄一下今年的心境，一些 Random thoughts。

1. 我覺得身為偏前端的 Developer，常常會有一種感覺就是，這些技能像是 React, Next 現在一堆人都會了，那我有什麼特別的？To be honest，雖然討厭很多人以為前端就是門簡單的技術，但他的確入門門檻不高，前端工程內確實有非常好上手的部分，所以常常是轉職的首選。這個事實導致我常常有點知識焦慮，我無時無刻都想要變強然後證明自己不像普通的前端開發者一樣，想讓自己變得特別。
2. 首先，先定義何謂變強才有努力的方向，個人我想追求的「厲害」大概分成兩部分，擁有穩固的知識底子和強大的實作能力。這大概也是為什麼今年想多花時間在系統設計、理解 React 底層上，因為我覺得知識底子是我目前相對偏弱的部分。
3. 最好別把自己綁在某個技術上，像是別只學 React or Nextjs。前端的潮流是會變的，即使 React 現在看似還是主流，但也不能保證未來永遠都是。我覺得看待這些工具的方法要改變，現在我覺得要以更宏觀的視角來看待這些技術，不要把技能點全投資在上面的概念，多去接觸一些更 High-level 的概念，之後要學其他東西才能把這些知識帶到新的東西上，學習起來也快。
4. T 型 Developer 大概是我想追求的，T 表示我覺得我應該 T 字發展自己的 Skill set。希望自己能投資在其他領域上，但同時持續專精一個我最擅長或最有興趣的領域。

就這樣，繼續努力啦！





