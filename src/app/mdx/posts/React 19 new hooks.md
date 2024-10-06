---
title: React 19 new hooks
description: New patterns introduced in React Conf 2024
publishedAt: 2024-05-15
tags:
  - react
published: true
coverImgSrc: posts/react-conf-2024-small.webp
backgroundImgSrc: posts/react-conf-2024-big.webp
lang: en
---
## `useTransition`

This is not a new hook in React 19 actually. However, in React 19, now we can pass an `async` function to `useTransition` to create an "asynchronous" transitions.

For those who aren't familiar with this hook, `useTransition` is designed to let us updating the state and rendering in non-blocking way. The update this way is called (non-blocking) "Transition". It's useful when there's a "heavy" or performance-expensive state change (need to wait a while for rerender) and you want it to be interruptable and the other UI stays responsive during this render.

When a Transition is interrupted, it will resume after event finished (mouse click) during the Transition. If multiple Transitions are ongoing, their DOM updates will be batched to one rerender.

Now, in React 19, `useTransition` can also help us handling API fetching and offering the loading state. For example, it can be used at form submission. If multiple form submissions are sent at the same time, the UI remains responsive and their resulting updates will be batched to one single paint. Another perk is that it already provides the loading state, we don't have to add `setLoading(true)` before async API calling and `setLoading(false)` afterward by ourselves.

## `useActionState`

> By convention, functions that use async transitions are called "Actions".

`useActionState` is useful when you need "async transition", which is called Action, and you want setting state in that transition. It basically replaced the need to write `useState` & `useTransition` combo code like this

```ts

function Component(){
	const [data, setData] = setState(null);
	const [isPending, startTransition] = useTransition();

	const submitAction = () = {
		startTransition(async() => {
			// some API fetching or form submission
			startTransition(() => {
				setData(newData);
			})
		})
	}
	
	return <form onSubmit={submitAction} />
	// or  
	return <button onClick={submitAction} />
}
```

With `useActionState`, we can modify into this
```ts

function Component(){
	const [state, submitAction, isPending] = useActionState(async (prevState, formData) => {
		// form submission (async)
		return newData // set state to newData
	}, null)
	
	return <form action={submitAction} />
	// or
	return <button formAction={submitAction} />
}
```

The first argument is the Action (async Transition) and the second argument is the initial value of the state. When the `submitAction` is called, `useActionState` will return the last result of the Action as `state`. When multiple actions ongoing, the Transitions will be batched and only one update to the `state`.

The state here is also a great place to store error message of the form submission if there's no other data need to be stored in the `state`.

Note that, React 19 also introduces new `react-dom` features, which are `action` props in `<form>` and `formAction` props in `<form>`, `<button>`, and `input`. These props automatically make them automatically submit forms with Actions. When the Action succeeds, React will automatically reset the form for uncontrolled inputs.

## Thoughts

There are also other new hooks such as `useOptimistic` and `useFormStatus` and new API like `use`. I am not gonna introduce all of them. Go to [react.dev](https://react.dev/blog/2024/04/25/react-19) if you want to learn more.

I really look forward to adopting these new hooks when React 19 is stable. Not sure how much performance improvement I can experience after doing it. At least I can remove lots of boilerplate code and feel better.

And I think these changes will significantly change how we dealing with form submission. Since I am a huge [react-hook-form](https://react-hook-form.com/) user (it's a good library for form validation but isn't using Action now), I hope they can integrate well with React 19 and provide us some migration guides as soon as React 19 is ready. (I already saw some [discussions](https://github.com/orgs/react-hook-form/discussions/11832) in their repo. Nice.)

## Takeaway

Here are some takeaways and actionable suggestions after learning these new hooks:
- Use sync `startTransition` if your app have some complex state changes which results in slow rerender
- [After React 19 stable] Eliminate some boilerplate code like `setIsLoading(true)` and `setIsLoading(false)` before and after API calling. Replace by async `useTransition` or `useActionState`
- Try to adopt `useOptimistic` somewhere in your app! This could largely improve user experience if uses correctly and make your app looks faster and better.
