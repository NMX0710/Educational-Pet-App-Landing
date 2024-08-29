export default defineConfig({
    plugins: [
      viteStaticCopy({
        targets: [
            {
                src: normalizePath(path.resolve(__dirname, './assets') + '/[!.]*'), // Copy all assets
                dest: normalizePath('./assets'), // Destination directory for assets
            },
            {
                src: normalizePath(path.resolve(__dirname, './styles.css')), // 1️⃣ Copy the CSS file
                dest: normalizePath('./'), // 2️⃣ Place it directly in the output root or `assets` folder as needed
            },
            {
                src: normalizePath(path.resolve(__dirname, './form.html')),
                dest: normalizePath('./'),
            },
        ],
      }),
    ],
  });
  