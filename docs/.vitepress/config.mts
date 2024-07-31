import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import nav from './config/nav'
import sidebar from './config/sidebar'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  title: "My Awesome Projectzzzz",
  description: "A VitePress Site A VitePress SiteA VitePress Site",
  base:"/yuying/",
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md: any) => {
      md.use(demoblockPlugin, {
        customClass: 'demoblock-custom'
      })
    }
  },

  vite: {
    plugins: [demoblockVitePlugin(), vueJsx()],
  },

  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
