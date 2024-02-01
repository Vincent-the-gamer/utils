---
layout: doc
title: "If-Else小工具"
lastUpdated: true
---

# If-Else 小工具

## useIf
- 描述: `把多个if组合在一起`

```ts
import { useIf } from "@vincent-the-gamer/utils"

function sayHaha(){
    console.log("haha")
}

useIf([
    [2 > 1, sayHaha], // 会调用函数
    [2 === 1, sayHaha], // 不会调用函数
])
```

## useIfElse
- 描述: `创建一个 if-else 链`

```ts
import { useIfElse } from "@vincent-the-gamer/utils"

useIfElse([
    [2 < 1, () => {console.log("aaa")}], // 继续判断
    [2 === 1, () => {console.log("bbb")}], // 继续判断
    [2 > 1, () => {console.log("ccc")}], // 满足条件，调用函数，并且结束流程
    ["_", () => {console.log("not reached")}] // else
])
```
