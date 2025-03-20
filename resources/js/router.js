import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'; // 根組件
import Hackmd from './components/HackmdSection.vue'; // About 頁面
import About from './components/AboutSection.vue'; // About 頁面
import Certificates from './components/CertificatesSection.vue'; // About 頁面
import Works from './components/WorksSection.vue'; // About 頁面

const routes = [

    { path: '/vue/', name: 'APP', component: App },
    { path: '/vue/hackmd', name: 'Hackmd', component: Hackmd },
    { path: '/vue/about', name: 'About', component: About },
    { path: '/vue/certificates', name: 'Certificates', component: Certificates },
    { path: '/vue/works', name: 'Works', component: Works },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    console.log('Navigating to:', to.path);
    next();
});

export default router;
