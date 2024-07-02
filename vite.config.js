import { defineConfig } from 'vite';
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
    root: '.',
    publicDir: 'static', // Ensure this points to your static folder
    plugins: [
        wasm(),
        topLevelAwait()
    ],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});