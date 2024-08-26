import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home/index.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        components: {
            default: Home,
        },
        meta: { requiresAuth: false },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { 
            top: 0,
            behavior: 'smooth',
        };
    },
});

export default router;
