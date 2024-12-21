// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools'

import path from 'path';

export default defineConfig({
  plugins: [vue(), vueDevTools(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  // 配置路径别名
    }
  },
  server: {
    open: false  // 启动开发服务器时自动打开浏览器
  }
});
