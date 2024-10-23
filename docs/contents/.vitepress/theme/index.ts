import type { EnhanceAppContext } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import DefaultTheme from 'vitepress/theme'
import './rainbow.css'
import './vars.css'
import '@shikijs/vitepress-twoslash/style.css'

// @ts-ignore
import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }: EnhanceAppContext) {
    // @ts-ignore
    app.use(TwoslashFloatingVue)
  },
}
