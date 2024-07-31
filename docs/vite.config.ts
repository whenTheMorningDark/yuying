import { resolve } from 'node:path'

import { defineConfig } from 'vite'

import type { ConfigEnv, UserConfigExport } from 'vite'

export default defineConfig(({ command }: ConfigEnv): any => {
  const isServe = command === 'serve'

  return <UserConfigExport>{
    resolve: {
      alias: [{ find: /^yuying-ui$/, replacement: resolve(__dirname, '../index.ts') }],
      dedupe: isServe ? ['../components', 'vue'] : ['vue']
    },
    server: {
      port: 9001,
      host: '0.0.0.0'
    },
    build: {
      reportCompressedSize: false,
      chunkSizeWarningLimit: 10 * 1024
    }
  }
})
