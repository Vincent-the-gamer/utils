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
import { toCamel } from "@vincent-the-gamer/utils"

let str = "pal-world"
let str2 = "pal_world"
toCamel(str) // palWorld
toCamel(str2) // palWorld
```

## toPascal
- 描述: `转换kebab-case，snake_case为大驼峰(PascalCase)的字符串。`
- 返回: `大驼峰形式的字符串`

```ts twoslash
import { toPascal } from "@vincent-the-gamer/utils"

let str = "pal-world"
let str2 = "pal_world"
toPascal(str) // PalWorld
toPascal(str2) // PalWorld
```

## kebab-case转为snake_case
看代码就行

::: tip 注意
会将大写字母转为小写。
:::

```ts twoslash
import { kebabToSnake } from "@vincent-the-gamer/utils"

let str = "Git-Hub"
kebabToSnake(str) // git_hub
```

## snake_case 转为 kebab-case
看代码就行

::: tip 注意
会将大写字母转为小写。
:::

```ts twoslash
import { snakeToKebab } from "@vincent-the-gamer/utils"

let str = "bili_bili"
snakeToKebab(str) // bili-bili
```

## 首字母
### 大写/小写
```ts twoslash
import { capitalizeFirst, uncapitalizeFirst } from "@vincent-the-gamer/utils"

capitalizeFirst("palworld")  // Palworld
uncapitalizeFirst("Palworld") // palworld
```