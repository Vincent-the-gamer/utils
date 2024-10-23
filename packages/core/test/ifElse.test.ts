import { expect, it } from 'vitest'
import { _, useIf, useIfElse } from '../src/ifElse'

it('useIf', () => {
  const result = useIf([
    [2 > 1, () => 'yeah, 2 > 1'], // handler will be called
    // @ts-expect-error
    [2 === 1, () => 'yeah, 2 === 1'], // handler will not be called
  ])
  expect(result).toStrictEqual(
    ['yeah, 2 > 1', null],
  )
})

// output: ccc
it('useIfElse', () => {
  const result = useIfElse([
    [2 < 1, () => 'aaa'], // continue
    // @ts-expect-error
    [2 === 1, () => 'bbb'], // continue
    [2 > 1, () => 'ccc'], // true, call the func
    [_, () => 'not reached'], // else
  ])
  expect(result).toBe('ccc')
})

it('useIfElse fallback', () => {
  const result = useIfElse([
    [2 < 1, () => 'aaa'], // continue
    // @ts-expect-error
    [2 === 1, () => 'bbb'], // continue
    [_, () => 'not reached'], // call fallback func
  ])
  expect(result).toBe('not reached')
})
