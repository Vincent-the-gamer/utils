---
layout: doc
title: "Audio Handlers"
lastUpdated: true
---

# Audio Handlers

## detectBPM

::: warning
This function only works in browser.
:::

- description: `Detect audio BPM(beats per minute).`
- returns: `number of BPM`

```ts
import { detectBPM } from "@vincent-the-gamer/utils/client"

const audioBuffer: AudioBuffer  // please convert you audio into AudioBuffer
const bpm = (detectBPM(audioBuffer) as any) * 1
console.log(bpm) // 120  (for example)
```

## ncm2mp3

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


```ts twoslash
import { ncm2mp3 } from "@vincent-the-gamer/utils/server"

// just look if mp3 files have been generated.
await ncm2mp3(
    "ncm", 
    "mp3", 
    "songcover"
)
```

## Example
My GitHub Repo: [Nemassler](https://github.com/Vincent-the-gamer/Nemassler)