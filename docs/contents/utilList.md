---
layout: doc
title: "Util List"
lastUpdated: true
---

# Utils

## Environments

### env
- description: `get current runtime`
- returns: 
    - `node`: You are in **Node.js** environment.
    - `browser`: You are in **browser** environment.

```ts
import { env } from "@vincent-the-gamer/utils"

console.log(env) // "node" | "browser"
```

### getCurrentPlatform
- description: `get user's current os type.`
- returns: "windows" | "macOS" | "linux" | "mobile"

```ts
import { getCurrentPlatform } from "@vincent-the-gamer/utils"

console.log(getCurrentPlatform()) // "windows" | "macOS" | "linux" | "mobile"
```

## Audio Handlers

### detectBPM

::: warning
This function only works in browser.
:::

- description: `Detect mp3 audio BPM(beats per minute).`
- returns: `number of BPM`

```ts
import { detectBPM } from "@vincent-the-gamer/utils"

console.log(detectBPM()) // 120  (for example)
```

### ncm2mp3

::: warning
This function only works in Node.js.
:::

- description: `Transform .ncm audios into .mp3 audios.`
- inputs: 
    - `ncm directory`
    - `mp3 output directory`
    - `songcover output directory`
- outputs:
    - `mp3 files`
    - `song covers`


```ts
import { ncm2mp3 } from "@vincent-the-gamer/utils"

// just look if mp3 files have been generated.
await ncm2mp3(
    "ncm", 
    "mp3", 
    "songcover"
)
```

# Coming Soon!
Please wait...