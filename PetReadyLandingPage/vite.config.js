import { defineConfig, normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: normalizePath(path.resolve(__dirname, './assets') + '/[!.]*'), // Copy all assets
                    dest: 'assets', // Destination directory for assets
                },
                {
                    src: normalizePath(path.resolve(__dirname, './styles.css')), // Copy the CSS file
                    dest: '', // Place it directly in the output root
                },
                {
                    src: normalizePath(path.resolve(__dirname, './form.html')), // Copy the HTML file
                    dest: '', // Place it directly in the output root
                },
            ],
        }),
    ],
});
