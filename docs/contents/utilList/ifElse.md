---
layout: doc
title: "If-Else"
lastUpdated: true
---

# If-Else tools

## useIf
- description: `combine multiple ifs`

```ts
import { useIf } from "@vincent-the-gamer/utils"

function sayHaha(){
    console.log("haha")
}

useIf([
    [2 > 1, sayHaha], // handler will be called
    // @ts-expect-error
    [2 === 1, sayHaha], // handler will not be called
])
```
