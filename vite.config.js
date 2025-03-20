import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    // server: {
    //     port: 3001, // 確保與 Docker 映射一致
    //     host: '0.0.0.0', // 允許外部訪問（Docker 必須）
    // },
    server: {
        host: 'localhost',

        base: '/',
        hmr: {
            base: '/',

            host: 'localhost',
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

    build: {
        outDir: 'public/build',
        manifest: 'manifest.json', // 明確指定文件名，確保輸出到 public/build/manifest.json
    },

    resolve: {
        alias: {
            '@': '/resources', // 將 @ 指向 resources 資料夾
        },
    },
});
