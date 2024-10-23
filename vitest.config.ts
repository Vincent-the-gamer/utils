import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      'packages/core/test/*.test.?(c|m)[jt]s?(x)',
    ],
    exclude: [
      '**/node_modules/**',
    ],
  },
})
