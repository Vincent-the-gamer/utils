---
layout: doc
title: "工具集"
lastUpdated: true
---

# 工具集

## 环境

### env
- 描述: `获取当前运行时环境。`
- 返回值: 
    - `node`: 你在 **Node.js** 环境中.
    - `browser`: 你在 **浏览器** 环境中.

```ts
import { env } from "@vincent-the-gamer/utils"

console.log(env) // "node" | "browser"
```

### getCurrentPlatform
- 描述: `获取当前用户操作系统类型`
- 返回值: "windows" | "macOS" | "linux" | "mobile"

```ts
import { getCurrentPlatform } from "@vincent-the-gamer/utils"

console.log(getCurrentPlatform()) // "windows" | "macOS" | "linux" | "mobile"
```

## 音频处理

### detectBPM（检测BPM）

::: warning 注意
这个方法只能在浏览器环境中使用
:::

- 描述: `检测音频BPM(beats per minute, 每分钟节拍数).`
- 返回值: `BPM数值`

```ts
import { detectBPM } from "@vincent-the-gamer/utils"

const bpm = (detectBPM() as any) * 1
console.log(bpm) // 120  (举例)
```

### ncm转mp3

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


```ts
import { ncm2mp3 } from "@vincent-the-gamer/utils"

// just look if mp3 files have been generated.
await ncm2mp3(
    "ncm", 
    "mp3", 
    "songcover"
)
```

# 即将登场!
敬请期待...