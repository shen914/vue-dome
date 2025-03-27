import { createRouter,createWebHashHistory } from "vue-router"
import HTML from "../views/HTML.vue"

const routes = [
    {
        path:'/',
        name:'HTML',
        component: HTML
    },
    {
        path:'/CSS',
        name:'CSS',
        component: () => import('../views/CSS.vue'),
    },
    {
        path:'/JavaScript',
        name:'JavaScript',
        component: () => import('../views/JavaScript.vue')
    },
    {
        path:'/Ajax',
        name:'Ajax',
        component: () => import('../views/Ajax.vue')
    },
    {
        path:'/XML',
        name:'XML',
        component: () => import('../views/XML.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router