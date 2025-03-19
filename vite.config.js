import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    // server: {
    //     port: 3001, // 確保與 Docker 映射一致
    //     host: '0.0.0.0', // 允許外部訪問（Docker 必須）
    // },
    server: {
        host: '127.0.0.1',

        base: '/',
        hmr: {
            base: '/',

            host: '127.0.0.1',
            overlay: true,  // 禁用 HMR 錯誤提示
        },
    },
    plugins: [
        tailwindcss(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources', // 將 @ 指向 resources 資料夾
        },
    },
});
