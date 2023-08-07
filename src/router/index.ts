import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {store} from "@/store/store";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: {
            requireAuth: false,
            showMenu: true
        }
    },
    {
        path: '/client/registration',
        name: 'registration',
        component: () => import('@/views/client/AuthView.vue'),
        meta: {
            requireAuth: false,
            showMenu: false
        }
    },
    {
        path: '/client/login',
        name: 'login',
        component: () => import('@/views/client/AuthView.vue'),
        meta: {
            requireAuth: false,
            showMenu: false
        }
    },
    {
        path: '/client/profile',
        name: 'profile',
        component: () => import('@/views/client/AuthView.vue'),
        meta: {
            requireAuth: true,
            showMenu: true
        }
    },
    {
        path: '/admin/registration',
        name: 'signUp',
        component: () => import('@/views/admin/AdminAuthView.vue'),
        meta: {
            requireAuth: false,
            showMenu: false
        }
    }, {
        path: '/admin/login',
        name: 'signIn',
        component: () => import('@/views/admin/AdminAuthView.vue'),
        meta: {
            requireAuth: false,
            showMenu: false
        }
    },
    {
        path: '/admin/profile',
        name: 'account',
        component: () => import('@/views/admin/AdminAuthView.vue'),
        meta: {
            requireAuth: true,
            showMenu: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to) => {
    if (to.meta.showMenu)
        store.commit('showMenuOn')
    else
        store.commit('showMenuOff')
})

export default router
