import { expect, it } from 'vitest'
import { avToBv, bvToAv, capitalizeFirst, kebabToSnake, snakeToKebab, toCamel, toPascal, uncapitalizeFirst } from '../src/string'

it('to camelCase', () => {
  const str = 'pal-world'
  const str2 = 'pal_world'
  expect(toCamel(str)).toBe('palWorld')
  expect(toCamel(str2)).toBe('palWorld')
})

it('to PascalCase', () => {
  const str = 'pal-world'
  const str2 = 'pal_world'
  expect(toPascal(str)).toBe('PalWorld')
  expect(toPascal(str2)).toBe('PalWorld')
})

it('kebab <-> snake', () => {
  const str = 'Git-Hub'
  const str2 = 'bili_bili'
  expect(kebabToSnake(str)).toBe('git_hub')
  expect(snakeToKebab(str2)).toBe('bili-bili')
})

it('capitalize or uncapitalize', () => {
  expect(capitalizeFirst('palworld')).toBe('Palworld')
  expect(uncapitalizeFirst('Palworld')).toBe('palworld')
})

it('bV <-> AV', () => {
  expect(bvToAv('BV1Q541167Qg')).toBe('AV455017605')
  expect(avToBv('882584971')).toBe('BV1mK4y1C7Bz')
  expect(avToBv('av498566183')).toBe('BV1AK411W7wq')
  expect(avToBv('AV455017605')).toBe('BV1Q541167Qg')
})
