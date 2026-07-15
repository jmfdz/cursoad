import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'ua' ? '/accesibilidad/docx/' : '/',
  plugins: mode === 'ua' ? [vue()] : [vue(), cloudflare()],
}))
