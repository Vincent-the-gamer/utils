---
layout: doc
title: "环境"
lastUpdated: true
---

# 环境

## env
- 描述: `获取当前运行时环境。`
- 返回值: 
    - `node`: 你在 **Node.js** 环境中.
    - `browser`: 你在 **浏览器** 环境中.

```ts
import { env } from "@vincent-the-gamer/utils"

console.log(env) // "node" | "browser"
```

## getCurrentPlatform
- 描述: `获取当前用户操作系统类型`
- 返回值: "windows" | "macOS" | "linux" | "mobile"

```ts
import { getCurrentPlatform } from "@vincent-the-gamer/utils"

console.log(getCurrentPlatform()) // "windows" | "macOS" | "linux" | "mobile"
```