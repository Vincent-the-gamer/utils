---
layout: doc
title: "If-Else小工具"
lastUpdated: true
---

# If-Else小工具

## useIf

- 描述: `合并多个if`
- 返回值: `一个数组，结果索引与参数的规则条目一一对应, true的条目返回内部函数执行结果，false的条目返回null`

```ts twoslash
// @noErrors
import { useIf } from '@vincent-the-gamer/utils'

const result = useIf([
  [2 > 1, () => 'yeah, 2 > 1'], // 函数会被调用，结果为函数的返回值
  [2 === 1, () => 'yeah, 2 === 1'], // 函数不会被调用，结果直接给null
])

// result 值为 ["yeah, 2 > 1", null]
```

## useIfElse

- 描述: `创建一个if-else链`
- 返回值: `返回true的条目的函数返回值，如果没有一个是true, 则取fallback的函数返回值`

```ts twoslash
// @noErrors
import { _, useIfElse } from '@vincent-the-gamer/utils'

const result = useIfElse([
  [2 < 1, () => 'aaa'], // 不满足条件，继续
  // @ts-expect-error
  [2 === 1, () => 'bbb'], // 不满足条件，继续
  [2 > 1, () => 'ccc'], // 满足条件，调用函数
  [_, () => 'not reached'] // 没有匹配任何条件，调用兜底的函数
])

// result 值为 "ccc"
```
