import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: { exportType: 'default' },
        }),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    base: './',
    build: {
        outDir: 'E:/server/resources/service-transport/frontend',
        emptyOutDir: true,
        minify: 'esbuild',
        reportCompressedSize: false,
    },
});
