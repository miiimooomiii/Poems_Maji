import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

export default defineConfig({
  plugins: [solidPlugin()],
  base: "/majipoem/",
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    outDir: "../docs",
    assetsInlineLimit: 2048,
  }
})
