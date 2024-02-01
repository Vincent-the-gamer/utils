---
layout: doc
title: "If-Else"
lastUpdated: true
---

# If-Else tools

## useIf
- description: `combine multiple ifs`

```ts
import { useIf } from "@vincent-the-gamer/utils"

function sayHaha(){
    console.log("haha")
}

useIf([
    [2 > 1, sayHaha], // handler will be called
    [2 === 1, sayHaha], // handler will not be called
])
```

## useIfElse
- description: `Create a if-else chain`

```ts
import { useIfElse } from "@vincent-the-gamer/utils"

useIfElse([
    [2 < 1, () => {console.log("aaa")}], // continue
    [2 === 1, () => {console.log("bbb")}], // continue
    [2 > 1, () => {console.log("ccc")}], // true, call the func
    ["_", () => {console.log("not reached")}] // else
])
```