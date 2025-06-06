// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
// import DefaultTheme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme-without-fonts'
// import './style.css' // 預設css
import './scss/styleTwo.css' // 自定義css
import './fonts/font.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
