---
title: What is Event Loop
description: Basic interview question you should know
publishedAt: 2024-10-29
tags:
  - frontend
  - javascript
published: true
coverImgSrc:
lang: en
---

```js
function func1() {
  console.log("func1");
}
function func2() {
  console.log("func2");
}
console.log("script start");
setTimeout(() => {
  console.log("timeout");
}, 0);
async function func3() {
  await func4();
  console.log("func3");
}
async function func4() {
  console.log("func4");
}
func1();
func2();
func3();
new Promise((resolve) => {
  console.log("promise 1");
  resolve("promise 2");
}).then((data) => {
  console.log(data);
});
console.log("script end");
```

## Preface

This was actually one of the interview question I was asked in an interview for a software engineer role at TikTok. Although I said this is the interview question you should know, I actually failed to explain clearly the correct output and how the event loop works lol.

I feel like event loop is the concept that people will always forget if we don't regularly refresh (at least for me, it is). Anyway, after the interview, I decided to refresh the concept again and write an article to strengthen my memory. I will explain event loop in a simplified way (I might skip some details).

Btw, the answer for this question above is at the very end.

## Key Components

### JavaScript engine

It's responsible for parsing, interpreting, and executing JS code in browser or other environment. It translates JS to machine code that can be executed by computer.

Not really important here actually.

### Call stack

Obviously, it's a stack, which has "first-in, last-out" property. It's used to keep track of which functions are called and the order of function calls. When each function is called, it's pushed to the top of the call stack (precisely, a "frame" is pushed and it contains local variables, parameters, and other info about the function).

Example:

```js
function fn1() {
  console.log(1);
  fn2();
  console.log(2);
}
function fn2() {
  console.log(3);
}

fn1();
// first, when we call fn1(), the call stack might look like this
// --> [fn1]
// next, we execute fn1, log 1 here
// and we call fn2, we push a new function onto call stack
// --> [fn1, fn2]
// after fn2 log 3, it finishes and popped from call stack
// --> [fn1]
// and log 2, fn1 finishes, we pop fn1
// --> []
```

### Event loop

JS is a single-threaded language, only has one call stack, runs synchronously. To avoid a long-running task blocking other important tasks to run, JavaScript uses event loop mechanism. The idea is basically like this: pushing long-running tasks into a queue (which are task queue and microtask queue, we will get into that later), and only do this task **IF** the call stack is empty. Therefore, long-running tasks won't block the execution.

Event loop basically schedules tasks from task queue and microtask queue if the call stack is empty.

### Task queue

Callback-based Web API such as `setTimeout(callback, delay)` will push the callback to the task queue after the browser finishes the execution.

### Microtask queue

Microtask is a specialized task queue which handles the callback in `.then(callback)`, `.catch(callback)`, `.finally(callback)`, function body below `await`(This is actually equivalent to `.then(callback)`), and other microtasks(ignore now).

The callback will be pushed onto microtask queue once the promise is fulfilled (resolved).

**Microtask queue has higher priority over task queue.**

<Callout type="Note">
	`Promise.then()` and the function body after `await` are basically the same thing. You can do the conversion in your brain if you have trouble solving this kind of interview problem.
	```ts
	// a function that return a Promise
	async function asyncFn(): Promise<TData> {
		// ignore...
	}

    // use Promise.then() ...
    asyncFn().then((data: TData) => {
    	nextTask(data)
    })
    // use await ...
    const data = await asyncFn()
    nextTask(data)

    // these two are actually the same
    ```

</Callout>

## Breakdown

Alright. We've already got the minimal knowledge about the event loop to solve this problem. Let's breakdown what will happen when we run this:

```js
function func1() {
  console.log("func1");
}
function func2() {
  console.log("func2");
}
console.log("script start");
setTimeout(() => {
  console.log("timeout");
}, 0);
async function func3() {
  await func4();
  console.log("func3");
}
async function func4() {
  console.log("func4");
}
func1();
func2();
func3();
new Promise((resolve) => {
  console.log("promise 1");
  resolve("promise 2");
}).then((data) => {
  console.log(data);
});
console.log("script end");
```

- First, we initialized two functions `func1` and `func2` (haven't been called yet).
- Next, we log `script start` 1️⃣
- Next, we call a `setTimeout` which has delay equals to 0 ms. This means, after 0 ms, the callback will be pushed onto task queue.
  - So now, task queue be like `[ console.log("timeout") ]`
- Then, initialized `func3` and `func4`.
- Then, we call `func1` and `func2`, which are easy cases since it runs synchronously.
  - They are pushed onto call stack and pop after finishing.
  - We log `func1` 2️⃣ and `func2` 3️⃣
- Next, we push `func3` onto call stack
  - And it pushes `func4` onto call stack, which return a `Promise<void>` since it's an async function.
  - The promise is immediately resolved. Therefore, log `func4` 4️⃣
  - The rest of function body is pushed to the microtask queue.
  - Microtask queue: `[ console.log("func3") ]`
- Next, we initialize a promise by its constructor `new Promise()`.
  - Again, push this constructor function onto call stack and execute
  - The promise is immediately resolved and log `promise 1` 5️⃣
  - And push the part in `.then()` onto microtask queue.
  - Microtask queue: `[ console.log("func3"), console.log("promise 2") ]`
- Finally, we execute the last line and log `script end` 6️⃣
- Okay, the call stack is finally empty now. It's time for our event loop to start working and scheduling the callbacks.
  - Remember. Microtask queue has higher priority.
  - Therefore, we start popping the first item in microtask queue until it's empty.
    - We log `func 3` 7️⃣ and `promise 2` 8️⃣
  - Lastly, after the microtask queue is empty. We finally can pop the item in task queue.
    - We log `timeout` 9️⃣

So the answer is:

```py
script start
func1
func2
func4
promise 1
script end
func3
promise 2
timeout
```

## Takeaway

- Event loop runs when nothing in call stack.
- Microtask queue has higher priority than task queue.
- The part under the `await` in `async` function will be pushed into the microtask queue when the Promise we are currently waiting is fulfilled. (Just like how `.then()` works.)
