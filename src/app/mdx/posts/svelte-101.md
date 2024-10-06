---
title: Svelte 101
description: Why not just write React
publishedAt: 2023-10-24
tags:
  - svelte
published: true
coverImgSrc: posts/svelte-101-small.webp
backgroundImgSrc: posts/svelte-101-big.webp
lang: en
---

<script>
	import Callout from "../lib/mdsvex/custom/Callout.svelte";
	import Youtube from "../lib/mdsvex/custom/Youtube.svelte";
</script>

## Svelte? What's that?

If you are a web developer or front-end enthusiast, you've probably heard of this before. If not, it's also understandable. These years, new web frameworks keep showing up. It's not the old era that React/Vue/Angular dominate. Now, we have [Qwik](https://qwik.builder.io/), [Svelte](https://svelte.dev/), [Solid](https://www.solidjs.com/), [Lit](https://lit.dev/), etc. Crazy.

So... in case you haven't heard of it before, Svelte is a new JavaScript framework. It functions just like other UI frameworks such as React and Vue. The ultimate goal of them are building websites by writing JavaScript(or TypeScript), HTML, and CSS. Of course, you might want to ask why creating a new UI framework that solves the same problem. Let's dive into what makes Svelte special.

![Svelte Interest Ratio Over Time, from https://2022.stateofjs.com](https://i.imgur.com/Osorwht.png)

## What's special?

### Compiler

React uses virtual DOM and the diffing algorithm to update the UI when states change. You can think that virtual DOM is a tree data structure that encodes how the UI looks like and the arrangements of the HTML nodes. Each time there is a state change, React runtime will perform the diffing algorithm like this:

1. Get the previous and current snapshots of the virtual DOM.
2. Recursively compare the nodes from the root.
3. Update the changed node.
4. UI changed!

Unlike React which utilizes virtual DOM and the diffing algorithm to manipulate the DOM, Svelte does not. Svelte is actually a compiler. At build time, Svelte will know how things could change in the app and then generate the update code for updating the UI. It's like skipping the first step and the second step of the diffing algorithm above. Svelte magically knows how to update the UI without processing the tree. Svelte moves those computational-intensive jobs to compile time. Therefore, it's faster. (At least they claimed. 😆)

### Prevent writing problematic code

It's actually the same thing as above. In React, it's easy you write something not efficient in functional components. For example, keep doing expensive calculations on every rerendering or keep re-creating new virtual DOM objects on every rerendering. Some of these errors might significantly harm the performance, and some of them are actually not that serious. However, it's dangerous when programmers (especially beginners) don't know exactly how things work in React. When applications get more complex, they will end up not knowing where and how to optimize.
The diffing algorithm is valuable but with certain caveats. Read the article published on Svelte blog to learn more!

### Write less code

<Callout type="Deprecated">
	Before you read further, please keep in mind that some of the Svelte 4 syntax below would be outdated soon since Svelte 5 is coming out. Give a peek into latest Svelte API via watching this video made by Rich Harris. 🎉
	<Youtube id="RVnxF3j3N8U" />
</Callout>

Actually, in my opinion, it's the main reason why people love Svelte. In React, when we want to create a state which has reactivity. We write something like this:
`const [foo, setFoo] = useState(initValue)`
And when we want to mutate the state, we write: `setFoo(newStateValue)` Svelte's creator Rich Harris claimed it's boilerplate pattern in this article. In Svelte, we can create creating reactive state variable and update it by simply writing `let foo = initValue` and `foo = newStateValue`. In my opinion and experience, although I think React is not that bad, Svelte's simple syntax really makes development faster. It takes fewer characters to implement the same feature.

### Smaller bundle size

Svelte apps generally have a smaller bundle size compared to equivalent applications written in React. This advantage is primarily due to the Svelte compiler. While Svelte components are compiled into efficient vanilla JavaScript during build-time, React relies on a runtime approach. During the build process for a React app, packages like `react-dom` and `react` are bundled into the main JavaScript file. Your React code, in contrast to Svelte's, is then interpreted and executed at runtime. If you still not convinced, let's look at the numbers(reference):
Svelte produces smaller bundles than Reactjs. Svelte's bundle size is 1.6KB gzipped version while Reactjs bundled size is 42.2KB, this is due to its compile-time approach. Also, Reactjs tends to generate more code than Svelte as it needs to maintain the virtual DOM.

## Basic concept & syntax

In this part, I want to introduce some basic syntax and concepts of Svelte. And maybe also mention the counterpart of React. The goal is to help React's dev have a quick idea of how to develop in Svelte. Let's get started!

- The first thing you need to know is that, in React, we can export or write multiple functional components in a `.tsx` file or `.jsx`, right? However, in Svelte, that's not how it works. In Svelte's world, to define a reusable component, we create `.svelte` files, and for each `.svelte` file, we can only define exactly one component. Well, it is a little bit annoying at first since we need to create so many files for components when developing. However, actually, it does provide some benefits. For example, inside each `.svelte` file, the CSS you defined will not interfere with each other. That's very useful when you like to write pure CSS.
- In React, for each functional component, we can only return one node. A popular workaround is wrapping the nodes inside `<>...</>` or using `<React.Fragment>...</React.Fragment>`. However, in Svelte, don't worry about this. You can return an arbitrary number of nodes.
- For each `.svelte` file, there are three sections, from top to bottom, Script section for your logic. You can write Javascript here. If you want to opt in Typescript, write `lang="ts"` in the `<script>` tag, then HTML code, and finally Style section for defining CSS classes.
- To define a state, simply declare a variable by let. Svelte will keep the DOM in sync with your self-defined variable(state). That's reactivity. Equivalent to useState in React.
- Use `$:` to define a variable when you want that variable to get updated when its dependent values change. That's called Reactive Values. It's similar to useMemo and useCallback. `$:` can also be followed by an arbitrary statement, e.g. `$: console.log(foo)`. This code snippet will run when the state foo gets updated. It's also similar to useEffect.
- Svelte's reactivity is triggered by assignments. Methods that mutate arrays or objects will not trigger updates by themselves. Rule of thumb: the updated variable must directly appear on the LHS of the assignment.
- Svelte does provide store API out of the box. We don't need to worry about whether to use Redux or other state management libraries just like we are developing in React.
- Svelte provides Context API just like React. Context API allows us to avoid prop drilling. But it's not reactive like Store API. Sometimes, we can use store + context to pass reactive state to children.
- Use slot or even named slots to pass components as children. Slots can have a fallback. Use a special variable `$$slots` to see if slots are passed in or not.
- Svelte has features like Framer Motion out-of-the-box. Use spring or tweened from svelte/motion to get a variable that will interpolate when the value is changing. svelte/transition and svelte/easing provide utils functions.

Make sure to check out Svelte's awesome tutorial on their website if you want to learn it!

## My experience

> Disclaimer: It's just my personal experience.

I think Svelte actually saves me time to build an app. Thanks to its short syntax and syntax sugars. For the performance part, I did not experience a significant performance boost. Maybe it's because the scale of the application I am developing is not big enough. Therefore, I cannot confirm if it's better than React. While I've talked about so many benefits of Svelte, I did experience some drawbacks. Svelte is a relatively young framework. When it comes to debugging, the online resource of Svelte isn't as much as React. In addition, I haven't seen any companies looking for Svelte dev now in the US. If you are trying to get a Frontend dev job. Learning Svelte is not the most important thing since it's not the mainstream of Frontend right now. So, in summary, learn Svelte if you want to try something new and apply it to your side projects!

> Disclaimer 2: This is my learning notes of Svelte. So, although I've tried my best to minimize errors, it might still contain some. Contact me if there's something wrong! Thanks 🤞!
