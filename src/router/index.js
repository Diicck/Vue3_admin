import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/',redirect:'/index'},
        {path:'/index',component:()=>import('../layout/index.vue'),
        children:[
            {path: '/users', component: () => import('../views/users/index.vue')},
            {path: '/banners', component: () => import('../views/banner/index.vue')},
            {path: '/pays', component: () => import('../views/pay/index.vue')},
            {path: '/members', component: () => import('../views/member/index.vue')},
            {path: '/phones', component: () => import('../views/phone/index.vue')},
            {path: '/inpatients', component: () => import('../views/inpatient/index.vue')},
            {path: '/customers', component: () => import('../views/customer/index.vue')},
            {path: '/sections', component: () => import('../views/section/index.vue')},
            {path: '/experts', component: () => import('../views/expert/index.vue')},
            {path: '/user', component: () => import('../views/user/index.vue')},
        ]
        },

    ]
})
export default router
