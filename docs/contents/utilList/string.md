---
layout: doc
title: "String"
lastUpdated: true
---

# String Utils

## toCamel
- description: `convert kebab-case or snake_case to camelCase.`
- returns: `camelized string.`

```ts twoslash
// @noErrors
import { toCamel } from "@vincent-the-gamer/utils"

let str = "pal-world"
let str2 = "pal_world"
toCamel(str) // palWorld
toCamel(str2) // palWorld
```

## toPascal
- description: `convert kebab-case or snake_case to PascalCase.`
- returns: `pascalized string.`

```ts twoslash
// @noErrors
import { toPascal } from "@vincent-the-gamer/utils"

let str = "pal-world"
let str2 = "pal_world"
toPascal(str) // PalWorld
toPascal(str2) // PalWorld
```

## kebab-case -> snake_case
Just look at the code.

::: tip Notice
This will lowercase the word.
:::

```ts twoslash
// @noErrors
import { kebabToSnake } from "@vincent-the-gamer/utils"

let str = "Git-Hub"
kebabToSnake(str) // git_hub
```

## snake_case -> kebab-case
Just look at the code.

::: tip Notice
This will lowercase the word.
:::

```ts twoslash
// @noErrors
import { snakeToKebab } from "@vincent-the-gamer/utils"

let str = "bili_bili"
snakeToKebab(str) // bili-bili
```

## First Letter
### Capitalize/Uncapitalize
```ts twoslash
// @noErrors
import { capitalizeFirst, uncapitalizeFirst } from "@vincent-the-gamer/utils"

capitalizeFirst("palworld")  // Palworld
uncapitalizeFirst("Palworld") // palworld
```

## Bilibili BV <-> AV
AVxxxx or BVxxxx is the number of Bilibili videos.
These functions give you a transformer between BV and AV.

```ts twoslash
// @noErrors
import { avToBv, bvToAv } from "@vincent-the-gamer/utils"

// BV must be capital letters.
bvToAv("BV1Q541167Qg") // AV455017605

// AV can be any case, or omitted.
avToBv("882584971") // BV1mK4y1C7Bz
avToBv("av498566183") // BV1AK411W7wq
avToBv("AV455017605") // BV1Q541167Qg
```