---
layout: doc
title: "Environments"
lastUpdated: true
---
# Environments

## env
- description: `get current runtime`
- returns: 
    - `node`: You are in **Node.js** environment.
    - `browser`: You are in **browser** environment.

```ts twoslash
import { env } from "@vincent-the-gamer/utils"

console.log(env) // "node" | "browser"
```

## getCurrentPlatform
- description: `get user's current os type.`
- returns: "windows" | "macOS" | "linux" | "mobile"

```ts twoslash
import { getCurrentPlatform } from "@vincent-the-gamer/utils"

console.log(getCurrentPlatform()) // "windows" | "macOS" | "linux" | "mobile"
```
