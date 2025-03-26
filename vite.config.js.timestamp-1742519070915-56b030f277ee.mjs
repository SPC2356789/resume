// vite.config.js
import { defineConfig } from "file:///tmp/be8d9e71-814f-44ad-8928-2811a945da2e/node_modules/vite/dist/node/index.js";
import laravel from "file:///tmp/be8d9e71-814f-44ad-8928-2811a945da2e/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///tmp/be8d9e71-814f-44ad-8928-2811a945da2e/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import tailwindcss from "file:///tmp/be8d9e71-814f-44ad-8928-2811a945da2e/node_modules/@tailwindcss/vite/dist/index.mjs";
var vite_config_default = defineConfig({
  // server: {
  //     port: 3001, // 確保與 Docker 映射一致
  //     host: '0.0.0.0', // 允許外部訪問（Docker 必須）
  // },
  server: {
    host: "localhost",
    base: "/",
    hmr: {
      base: "/",
      host: "localhost",
      overlay: true
      // 禁用 HMR 錯誤提示
    }
  },
  plugins: [
    tailwindcss(),
    laravel({
      input: [
        "resources/css/app.css",
        "resources/js/app.js"
      ],
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    })
  ],
  build: {
    outDir: "public/build",
    manifest: "manifest.json"
    // 明確指定文件名，確保輸出到 public/build/manifest.json
  },
  resolve: {
    alias: {
      "@": "/resources"
      // 將 @ 指向 resources 資料夾
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvdG1wL2JlOGQ5ZTcxLTgxNGYtNDRhZC04OTI4LTI4MTFhOTQ1ZGEyZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3RtcC9iZThkOWU3MS04MTRmLTQ0YWQtODkyOC0yODExYTk0NWRhMmUvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3RtcC9iZThkOWU3MS04MTRmLTQ0YWQtODkyOC0yODExYTk0NWRhMmUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcblxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIC8vIHNlcnZlcjoge1xuICAgIC8vICAgICBwb3J0OiAzMDAxLCAvLyBcdTc4QkFcdTRGRERcdTgyMDcgRG9ja2VyIFx1NjYyMFx1NUMwNFx1NEUwMFx1ODFGNFxuICAgIC8vICAgICBob3N0OiAnMC4wLjAuMCcsIC8vIFx1NTE0MVx1OEEzMVx1NTkxNlx1OTBFOFx1OEEyQVx1NTU0Rlx1RkYwOERvY2tlciBcdTVGQzVcdTk4MDhcdUZGMDlcbiAgICAvLyB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiAnbG9jYWxob3N0JyxcblxuICAgICAgICBiYXNlOiAnLycsXG4gICAgICAgIGhtcjoge1xuICAgICAgICAgICAgYmFzZTogJy8nLFxuXG4gICAgICAgICAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICAgICAgICAgIG92ZXJsYXk6IHRydWUsICAvLyBcdTc5ODFcdTc1MjggSE1SIFx1OTMyRlx1OEFBNFx1NjNEMFx1NzkzQVxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHRhaWx3aW5kY3NzKCksXG4gICAgICAgIGxhcmF2ZWwoe1xuICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2Nzcy9hcHAuY3NzJyxcbiAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2pzL2FwcC5qcycsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIHZ1ZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUFzc2V0VXJsczoge1xuICAgICAgICAgICAgICAgICAgICBiYXNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlQWJzb2x1dGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICBdLFxuXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgb3V0RGlyOiAncHVibGljL2J1aWxkJyxcbiAgICAgICAgbWFuaWZlc3Q6ICdtYW5pZmVzdC5qc29uJywgLy8gXHU2NjBFXHU3OEJBXHU2MzA3XHU1QjlBXHU2NTg3XHU0RUY2XHU1NDBEXHVGRjBDXHU3OEJBXHU0RkREXHU4RjM4XHU1MUZBXHU1MjMwIHB1YmxpYy9idWlsZC9tYW5pZmVzdC5qc29uXG4gICAgfSxcblxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICdAJzogJy9yZXNvdXJjZXMnLCAvLyBcdTVDMDcgQCBcdTYzMDdcdTU0MTEgcmVzb3VyY2VzIFx1OENDN1x1NjU5OVx1NTkzRVxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlMsU0FBUSxvQkFBbUI7QUFDeFUsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUVoQixPQUFPLGlCQUFpQjtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS3hCLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUVOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNELE1BQU07QUFBQSxNQUVOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQTtBQUFBLElBQ2I7QUFBQSxFQUNKO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDTCxZQUFZO0FBQUEsSUFDWixRQUFRO0FBQUEsTUFDSixPQUFPO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxNQUNKO0FBQUEsTUFDQSxTQUFTO0FBQUEsSUFDYixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDTixvQkFBb0I7QUFBQSxVQUNoQixNQUFNO0FBQUEsVUFDTixpQkFBaUI7QUFBQSxRQUNyQjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFFQSxPQUFPO0FBQUEsSUFDSCxRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUE7QUFBQSxFQUNkO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLO0FBQUE7QUFBQSxJQUNUO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
