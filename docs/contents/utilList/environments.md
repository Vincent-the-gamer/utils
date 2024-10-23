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
// @noErrors
import { env } from '@vincent-the-gamer/utils'

console.log(env) // "node" | "browser"
```

## getCurrentPlatform

- description: `get user's current os type.`
- returns: "windows" | "macOS" | "linux" | "mobile"

```ts twoslash
// @noErrors
import { getCurrentPlatform } from '@vincent-the-gamer/utils'

console.log(getCurrentPlatform()) // "windows" | "macOS" | "linux" | "mobile"
```
