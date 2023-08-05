import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/client/registration',
        name: 'registration',
        component: () => import('@/views/client/AuthView.vue')
    }, {
        path: '/client/login',
        name: 'login',
        component: () => import('@/views/client/AuthView.vue')
    },
    {
        path: '/client/profile',
        name: 'profile',
        component: () => import('@/views/client/AuthView.vue')
    },
    {
        path: '/admin/signUp',
        name: 'signUp',
        component: () => import('@/views/admin/AdminAuthView.vue')
    }, {
        path: '/admin/signIn',
        name: 'signIn',
        component: () => import('@/views/admin/AdminAuthView.vue')
    },
    {
        path: '/admin/account',
        name: 'account',
        component: () => import('@/views/admin/AdminAuthView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
