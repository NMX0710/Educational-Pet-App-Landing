import { defineConfig, normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve(__dirname, './styles.css')), // Copy the CSS file
          dest: normalizePath('./'), // Place it directly in the output root or `assets` folder as needed
        },
        {
          src: normalizePath(path.resolve(__dirname, './form.html')), // Copy form.html
          dest: normalizePath('./'),
        },
      ],
    }),
  ],
});
