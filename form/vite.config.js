import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/majipoem/",
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    outDir: "../docs",
    assetsInlineLimit: 2048,
  }
})
