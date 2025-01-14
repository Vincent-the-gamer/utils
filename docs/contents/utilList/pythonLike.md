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

## all()

Similar usage as Python all()

```ts twoslash
// @noErrors
import { all } from '@vincent-the-gamer/utils'

const conditionList1 = [
  10 < 11,
  'sasd'.length > 0,
]

const conditionList2 = [
  10 > 11,
  'sasd'.length > 0,
]

all(conditionList1) // true
all(conditionList2) // false
```

## any()

Similar usage as Python any()

```ts twoslash
// @noErrors
import { any } from '@vincent-the-gamer/utils'

const conditionList1 = [
  10 > 11,
  'sasd'.length < 0,
]

const conditionList2 = [
  10 > 11,
  'sasd'.length > 0,
]

any(conditionList1) // false
any(conditionList2) // true
```

## divmod()

Similar usage as Python divmod()

```ts twoslash
// @noErrors
import { divmod } from '@vincent-the-gamer/utils'

divmod(10, 3) // [3, 1]
divmod(9, 3) // [3, 0]
```
