---
layout: doc
title: "If-Else"
lastUpdated: true
---

# If-Else tools

## useIf
- description: `combine multiple ifs`
- returns: `an array, the results of rules are in the same of their original index. true statements get the return value of their inner function, while the falses gets null.`

```ts twoslash
// @noErrors
import { useIf } from "@vincent-the-gamer/utils"

const result = useIf([
    [2 > 1, () => "yeah, 2 > 1"], // handler will be called
    [2 === 1, () => "yeah, 2 === 1"], // handler will not be called
])

// result is ["yeah, 2 > 1", null]
```

## useIfElse
- description: `Create a if-else chain`
- returns: `result of true statement or fallback result if no true statement.`

```ts twoslash
import { useIfElse, _ } from "@vincent-the-gamer/utils"

const result = useIfElse([
    [2 < 1, () => "aaa"], // continue
    // @ts-expect-error
    [2 === 1, () => "bbb"], // continue
    [2 > 1, () => "ccc"], // true, call the func
    [_, () => "not reached"] // else（fallback)
])

// result is: "ccc"
```