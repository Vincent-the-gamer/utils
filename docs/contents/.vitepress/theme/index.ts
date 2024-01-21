import DefaultTheme from 'vitepress/theme'
import './rainbow.scss'
import "./vars.scss"

//@ts-ignore
import Layout from "./Layout.vue"

export default {
    ...DefaultTheme,
    Layout
};