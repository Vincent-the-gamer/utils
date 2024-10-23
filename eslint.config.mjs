import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  formatters: {
    markdown: 'prettier',
  },
  ignores: [
    'node_modules',
  ],
})
