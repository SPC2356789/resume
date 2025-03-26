<template>
    <div class="bg-gray-100 min-h-screen font-sans">
        <NavBar/>
        <!-- 根據路由決定顯示內容 -->
        <div v-if="isHome()">
            <HeroSection :hero="hero"/>
            <AboutSection :about-text="aboutText" :experience="experience"/>
            <CertificatesSection :certificates="certificates"/>
            <WorksSection :works="works"/>
            <HackmdSection/>
            <ContactSection :contact="contact"/>
        </div>
        <router-view v-else v-slot="{ Component }">
            <component :is="Component" v-bind="routeProps"/>
        </router-view>
    </div>

</template>


<script setup>
import {ref, computed} from 'vue';

import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import WorksSection from './components/WorksSection.vue';
import HackmdSection from './components/HackmdSection.vue';
import ContactSection from './components/ContactSection.vue';
import CertificatesSection from './components/CertificatesSection.vue'; //
import {useRoute} from 'vue-router';
// 集中管理的響應式資料
const route = useRoute();

// 如果是根路由，顯示完整頁面
const isHome = () => route.path === '/vue' ||route.path === '/';


// 根據路由動態決定 props
const routeProps = computed(() => {
    switch (route.name) {
        case 'About':
            return {
                aboutText: aboutText.value,
                experience: experience.value,
            };
        case 'Certificates':
            return {
                certificates: certificates.value,
            };
        case 'Works':
            return {
                works: works.value,
            };
        default:
            return {}; // 其他路由不傳遞 props
    }
});
// 集中管理參數
const hero = ref(
    {
        wel: '歡迎',
        im: '您好，我是一名全端工程師，具備紮實的前後端開發能力，致力於打造高效、安全且優質的網頁應用程式。前端方面，我擅長使用 Vue.js 與 Tailwind CSS 開發響應式介面，結合 Vite 的熱重載技術提升開發效率，確保使用者體驗流暢且視覺設計符合現代標準。後端方面，我熟悉 Laravel 框架，能設計穩定的 API。',
        drc: '這個履歷使用laravel為基底，以SPA的概念使用VUE語法架構在render的一頁式免費網站',
        about: '關於我',
        image: '/storage/photo.jpg', // 從 public 引用
    })
const aboutText = ref('我是一名全端開發者，擅長 Laravel、FilamentPHP、Vue、Tailwind CSS 和 Vite，具備豐富的前後端開發經驗。我擅於將創意融入技術，結合過去經驗打造高效解決方案。去年，我主導 Yesman 專案，成功運用 Vue 開發前端，並交付一個中等規模的 Laravel 後端項目，展現了我處理複雜專案的能力。我習慣使用 Docker 優化開發流程，並在資安意識提升的背景下，考取紅帽證照（RHCSA）並完成思科 CCNA 課程。這些經驗使我能熟練整合 Linux 系統與網路知識，為企業提供安全、高效的技術支持。');
const experience = ref([
    {
        role: '全端開發者',
        company: 'Yesman 專案',
        period: '2024/9 開始',
        description: '主導開發登山行程報名網站，使用 Vue 打造前端介面，並以 Laravel 實現後端功能，成功交付相當規模專案。'
    },
    {
        role: '學習',
        company: '上課',
        period: '2024/9 ~ 2025/3',
        description: '考取資安相關證照、完成CCNA等課程'
    },
    {
        role: 'php後端工程師',
        company: '客製化網頁公司',
        period: '2022/12~2024/3',
        description: '協助開發專案、維護舊有專案，使用php原生程式碼，受到相當精實的鍛鍊'
    },
    {
        role: '開發新手',
        company: '職訓局學習網頁技術',
        period: '2022/3~2022/10',
        description: '非常重要的轉折點，在職訓局學習網頁製作等相關技術',
    }
    // 可以添加更多經歷
]);
const works = ref([
    {
        id: 1,
        title: 'YESMAN登山報名網(即將上線)',
        description: '登山行程報名網站，支援全客製化。前端使用 Vue，後端基於 Laravel，搭配 Tailwind CSS 打造現代化介面，後台採用 FilamentPHP 實現 RBAC 管理。',
        gitLink: 'https://github.com/SPC2356789/yesmans',
        siteLink: 'https://phpstack-1437293-5372187.cloudwaysapps.com/',
    },
    {
        id: 2,
        title: 'thorabv',
        description: '這是我在前公司參與的開發專案，我參與高達40%的部分，涵蓋多語系、物流、金流、與一些資料的CRUD。',
        gitText: '因前公司財產權問題故無法提供相關程式碼',
        siteLink: 'https://www.thorabv.com/',
    },
]);

const contact = ref({
    email: 'rtggjkdsgn@gmail.com',
    phone: '0989816399',
},);

const certificates = ref({
    credlyUrl: 'https://www.credly.com/users/shengjung-chen',
    cont: '隨著 AI 與網路技術的進步，我致力於提升自己的資安能力。為此，我於去年底完成思科網路學院 CCNA 的三期課程，系統性學習網路知識。此外，我積極考取國際知名的紅帽證照（如 RHCSA），證明我具備熟練操作 Linux 系統的能力。這些努力使我在技術開發中能更好地應對資安挑戰並整合網路解決方案。',
});
</script>
