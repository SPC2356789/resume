import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
// import Experience from './views/Experience.vue';
// import Education from './views/Education.vue';
// import Certificates from './views/Certificates.vue';
// import Projects from './views/Projects.vue';

const routes = [
    { path: '/vue', name: 'App', component: App },
    // { path: '/experience', name: 'Experience', component: Experience },
    // { path: '/education', name: 'Education', component: Education },
    // { path: '/certificates', name: 'Certificates', component: Certificates },
    // { path: '/projects', name: 'Projects', component: Projects },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
