---
layout: doc
title: "Python-like"
lastUpdated: true
---

# Python-like functions

## range()

Similar usage as Python range()

```ts twoslash
// @noErrors
import { range } from '@vincent-the-gamer/utils'

range(0, 5) // [0, 1, 2, 3, 4]
range(0, 10, 2) // [0, 2, 4, 6, 8]
range(0, -2, -1) // [0, -1]
```
