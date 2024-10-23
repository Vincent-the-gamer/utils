import { expect, it } from 'vitest'
import { all, any, divmod, range } from '../src/pythonLike'

it('range', () => {
  expect(range(0, 3)).toStrictEqual([0, 1, 2])
  expect(range(0, 5, 2)).toStrictEqual([0, 2, 4])
  expect(range(0, -2, -1)).toStrictEqual([0, -1])
})

it('all', () => {
  const conditionList1 = [
    10 < 11,
    'sasd'.length > 0,
  ]

  const conditionList2 = [
    10 > 11,
    'sasd'.length > 0,
  ]

  expect(all(conditionList1)).toBe(true)
  expect(all(conditionList2)).toBe(false)
})

it('any', () => {
  const conditionList1 = [
    10 > 11,
    'sasd'.length < 0,
  ]

  const conditionList2 = [
    10 > 11,
    'sasd'.length > 0,
  ]

  expect(any(conditionList1)).toBe(false)
  expect(any(conditionList2)).toBe(true)
})

it('divmod', () => {
  expect(divmod(10, 3)).toStrictEqual([3, 1])
  expect(divmod(9, 3)).toStrictEqual([3, 0])
})
