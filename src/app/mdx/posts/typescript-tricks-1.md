---
title: Typescript Tricks
description: A few things you need to know as a TS dev
publishedAt: 2024-01-07
tags:
  - typescript
  - learning
  - web-dev
published: true
coverImgSrc: posts/ts-trick-small.webp
backgroundImgSrc: posts/ts-trick-big.webp
lang: en
---
## Preface

As a web developer with 1-2 years of experience, sometimes I felt like I didn't fully understand TypeScript. Although I spent most of my time coding in TypeScript and knew how to use some everyday types to write maintainable frontend/backend code, reading complex TypeScript source code with many unfamiliar magical keywords like `infer`, `extends`, `never`, and numerous generic type annotations often overwhelmed me.

So, this winter break, I decided to start from the very bottom and learn TypeScript fundamentals as if I were a beginner. I want to share an amazing website I used called [TypeHero](https://typehero.dev/explore). It's kind of like LeetCode for TypeScript, containing many challenges categorized from simple to hard. It's an ideal starting point for refreshing your TypeScript knowledge or tackling tricky TypeScript challenges. Highly recommended!

Now, I would like to share a few useful TypeScript tricks I learned after completing the Beginner and Learner sections of TypeHero.

## Generic Type & Constraints

The first important concept you'll probably learn is Generic Type. It provides a way for developers to tell a function or a type that certain slots' types will be decided when they are used.

For example:
```ts
function MyConsoleLogger<T>(obj: T) {
	console.log(`The object passed in is: ${obj}`)
}
```
When defining this function, you won't know what type of argument will be passed in; it could be a `string` or a `number`. You'll only know the exact type when it's used, so you need a generic type here to let the function know that `obj` could be any type.

But what if we need to restrict the function to accept only `number` and `string` types, and we want to trigger a type error for any unexpected types? For example, it would be odd to pass an object like `{x: 1, y: 2}` (which would log "The object passed in is: [object Object]").

You could use Generic Type Constraints to handle this case. To declare the constraint, we use syntax like `extends ...` after the generic type `T` to tell the function that the type `T` will be `string | number`.
```ts
function MyConsoleLogger<T extends string | number>(obj: T) {
	console.log(`The object passed in is: ${obj}`)
}

// type error
MyConsoleLog({ x: 1});

// okay
MyConsoleLog(123)
```

### Practice 📝

1. [Generic Function Arguments](https://typehero.dev/challenge/generic-function-arguments)
2. [Generic Type Arguments](https://typehero.dev/challenge/generic-type-arguments)
3. [Generic Type Constraint](https://typehero.dev/challenge/generic-type-constraints)
## Recursive type

The next trick I want to cover is recursive type. Sometimes, we would want to access certain or all properties inside an object or an array. In this case, we could use recursive trick to achieve this. It's easier to explain by example. Here I use this challenge: [Deep Readonly](https://typehero.dev/challenge/deep-readonly).

The challenge want us to implement a type wrapper `DeepReadonly<T>` which we can pass in an object type and make every parameter of an object and its sub-objects recursively readonly.

For example
```ts
type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type Todo = DeepReadonly<X> // should be same as `Expected`

// TODO
type DeepReadonly<T extends object> = unknown
```

Actually, the solution for this problem is the same as other recursive problems' solutions in any programming languages. The intuition is to iterate through all properties inside an object. If we encounter objects inside, we called the `DeepReadonly` again to resolve that, else, we just simply add a `readonly` in front of it.

```ts
type DeepReadonly<T extends object> = {
	readonly [K in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
}
```

However, there is an edge case when `T[P]`'s type if `Function`. Since `T[P] extends object` holds true when it is a function(function is an object), we must explicitly handle this kind of situation, so we add another ternary operator inside it to solve this.  

```ts
type DeepReadonly<T extends object> = {
	readonly [P in keyof T]: T[P] extends object ? T[P] extends Function? T[P]: DeepReadonly<T[P]> : T[P];
} 
```

Great. That's it. You learned how to write recursive in TypeScript!

### Practice 📝

1. [Awaited](https://typehero.dev/challenge/awaited)

## Array operation

We can use TypeScript to derive a new array type from an existing array type by using some array tricks! For example, we can get the length of the array type and make it a type, or we can get the first item or the last item of an array, or we can pop an item from an array type and make it a new type!

Most of the array operations, we need an important keyword `infer`. With `infer`, you can declare a type in the conditional syntax and use it to express the type you are referring to.

Let's start from a simple example, let's say we want to get the first item of an array, how to do?

In Javascript, we can do this
```js
const arr = [1, 2, 3, 4]
const [firstItem, ...rest] = arr
console.log(`The first item is ${firstItem}`)
```

Actually, in Typescript, we can do the same thing.
```ts
type MyChildren = ["Joe", "James", "Frank"]
type ExpectedOldestChild = "Joe"
Expect<Equal<ExpectedOldestChild, GetFirst<MyChildren>>>

type GetFirst<T extends Array<any>> = T extends [infer First, ...rest: infer Rest] ? First : never;
```
First, we split the array type `T` into two parts: `First` and `Rest` just like we did in Javascript. `First` is the type of the first item which is what we want in the end and `Rest` is rest of the array type we won't use in this case. The whole line actually is like telling the compiler: If the array can be split like this, we return the `First`, else return `never`.

Note that here we must use the keyword `infer` to temporarily declare the type of the first item and the type of rest items in the conditional syntax so that we can use them later.

### Practice 📝

1. [Concat](https://typehero.dev/challenge/concat)
2. [Push](https://typehero.dev/challenge/push)
3. [Include](https://typehero.dev/challenge/includes)
4. [Length of Tuple](https://typehero.dev/challenge/length-of-tuple)
5. [Last of Array](https://typehero.dev/challenge/last-of-array)

## Wrap up

To wrap up, mastering TypeScript's advanced features can significantly help you writing better and more flexible code while building product and also help you read others' code faster! Although these concepts might seem complex at first, they're essential for writing more efficient and type-safe code. If you wish to level up your TypeScript skills and refresh your knowledge in TypeScript, checkout [TypeHero](https://typehero.dev/explore)! Happy coding!