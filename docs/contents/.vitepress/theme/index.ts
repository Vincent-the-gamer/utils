import DefaultTheme from 'vitepress/theme'
import './rainbow.css'
import "./vars.css"
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client' 
import '@shikijs/vitepress-twoslash/style.css' 
import type { EnhanceAppContext } from 'vitepress'

//@ts-ignore
import Layout from "./Layout.vue"

export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app }: EnhanceAppContext) {
        app.use(TwoslashFloatingVue) 
    },
};