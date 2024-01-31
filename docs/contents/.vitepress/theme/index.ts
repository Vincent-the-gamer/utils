import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client' 
import '@shikijs/vitepress-twoslash/style.css' 
import type { EnhanceAppContext } from 'vitepress'
import './rainbow.scss'
import "./vars.scss"

//@ts-ignore
import Layout from "./Layout.vue"

export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app }: EnhanceAppContext) {
        app.use(TwoslashFloatingVue)
    },
};