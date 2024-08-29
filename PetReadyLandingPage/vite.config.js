import { defineConfig, normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve(__dirname, './assets') + '/[!.]*'), // Copy all assets
          dest: normalizePath('./assets'), // Destination directory for assets
        },
        {
          src: normalizePath(path.resolve(__dirname, './form.html')), // 1️⃣ Copy form.html
          dest: normalizePath('./'), // 2️⃣ Place it directly in the output root
        },
      ],
    }),
  ],
});
