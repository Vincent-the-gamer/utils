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
import { snakeToKebab } from "@vincent-the-gamer/utils"

let str = "bili_bili"
snakeToKebab(str) // bili-bili
```

## First Letter
### Capitalize/Uncapitalize
```ts twoslash
import { capitalizeFirst, uncapitalizeFirst } from "@vincent-the-gamer/utils"

capitalizeFirst("palworld")  // Palworld
uncapitalizeFirst("Palworld") // palworld
```