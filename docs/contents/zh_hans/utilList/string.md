---
layout: doc
title: "字符串"
lastUpdated: true
---

# 字符串工具

## toCamel
- 描述: `转换kebab-case，snake_case为小驼峰(camelCase)的字符串。`
- 返回: `小驼峰形式的字符串`

```ts twoslash
// @noErrors
import { toCamel } from '@vincent-the-gamer/utils'

const str = 'pal-world'
const str2 = 'pal_world'
toCamel(str) // palWorld
toCamel(str2) // palWorld
```

## toPascal
- 描述: `转换kebab-case，snake_case为大驼峰(PascalCase)的字符串。`
- 返回: `大驼峰形式的字符串`

```ts twoslash
// @noErrors
import { toPascal } from '@vincent-the-gamer/utils'

const str = 'pal-world'
const str2 = 'pal_world'
toPascal(str) // PalWorld
toPascal(str2) // PalWorld
```

## kebab-case转为snake_case
看代码就行

::: tip 注意
会将大写字母转为小写。
:::

```ts twoslash
// @noErrors
import { kebabToSnake } from '@vincent-the-gamer/utils'

const str = 'Git-Hub'
kebabToSnake(str) // git_hub
```

## snake_case 转为 kebab-case
看代码就行

::: tip 注意
会将大写字母转为小写。
:::

```ts twoslash
// @noErrors
import { snakeToKebab } from '@vincent-the-gamer/utils'

const str = 'bili_bili'
snakeToKebab(str) // bili-bili
```

## 首字母
### 大写/小写
```ts twoslash
// @noErrors
import { capitalizeFirst, uncapitalizeFirst } from '@vincent-the-gamer/utils'

capitalizeFirst('palworld') // Palworld
uncapitalizeFirst('Palworld') // palworld
```

## Bilibili BV和AV互转
AVxxxx 以及 BVxxxx 是B站视频编号的两种编码形式。
这里提供两个函数来互相转换这两者。

```ts twoslash
// @noErrors
import { avToBv, bvToAv } from '@vincent-the-gamer/utils'

// BV必须为大写字母
bvToAv('BV1Q541167Qg') // AV455017605

// AV可以是任意大小写，或者省略
avToBv('882584971') // BV1mK4y1C7Bz
avToBv('av498566183') // BV1AK411W7wq
avToBv('AV455017605') // BV1Q541167Qg
```
