import pagesBuild from '@hono/vite-cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['/app/style.css'],
          output: {
            assetFileNames: 'static/assets/[name].[ext]'
          }
        }
      },
      plugins: [client()]
    }
  } else {
    return {
      plugins: [
        honox({
          devServer: {
            adapter
          }
        }),
        pagesBuild()
      ]
    }
  }
})
