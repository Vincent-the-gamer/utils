---
layout: doc
title: "音频处理"
lastUpdated: true
---

# 音频处理

## detectBPM（检测BPM）

::: warning 注意
这个方法只能在浏览器环境中使用
:::

- 描述: `检测音频BPM(beats per minute, 每分钟节拍数).`
- 返回值: `BPM数值`

```ts
import { detectBPM } from "@vincent-the-gamer/utils/client"

const audioBuffer: AudioBuffer  // 请将您的音频转为AudioBuffer
const bpm = (detectBPM(audioBuffer) as any) * 1
console.log(bpm) // 120  (举例)
```

## ncm转mp3

::: warning 注意
该方法只能在 Node.js 中使用。
:::

- 描述: `把.ncm音频转为.mp3音频`
- 输入: 
    - `ncm路径`
    - `mp3输出路径`
    - `songcover(歌曲封面图片)输出路径`
- 输出:
    - `mp3 文件`
    - `歌曲封面图片`


```ts twoslash
import { ncm2mp3 } from "@vincent-the-gamer/utils/server"

// just look if mp3 files have been generated.
await ncm2mp3(
    "ncm", 
    "mp3", 
    "songcover"
)
```

## 使用例
我的GitHub Repo: [Nemassler](https://github.com/Vincent-the-gamer/Nemassler)