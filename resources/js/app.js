import { createApp } from 'vue';
import App from './App.vue'; // 主入口組件
import router from './router'; // 路由配置

// Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Material Design 圖標
import 'vuetify/styles'; // Vuetify 樣式
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// 創建 Vuetify 實例
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light', // 預設主題，可選
    },
});

// 創建並配置 Vue 應用
const app = createApp(App);
app.use(router); // 使用路由
app.use(vuetify); // 使用 Vuetify

// 等待路由準備好再掛載
router.isReady().then(() => {
    app.mount('#app');
    console.log('Vue app initialized');
});
