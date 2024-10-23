import { expect, it } from 'vitest'
import { env, getCurrentPlatform } from '../src/env'

it('env', () => {
  expect(env).toBe('node')
})

it('get current platform.', () => {
  expect(getCurrentPlatform()).toEqual('macOS')
})
