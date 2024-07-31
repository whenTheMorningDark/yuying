import DefaultTheme from 'vitepress/theme'
import { install as YuYingUi } from 'yuying-ui'
import type { App } from 'vue'
import type { Router } from 'vitepress'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
export default {
  ...DefaultTheme,
  enhanceApp({ app, router }: { app: App, router: Router }) {
    enhanceApp(app)
  }
}

function enhanceApp(app: App) {
    app.use(YuYingUi)
    useComponents(app)
  }
