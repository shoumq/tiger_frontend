import { createRouter, createWebHistory } from "vue-router";
import Index from './pages/Index.vue';
import Admin from './pages/Admin.vue';
import Book from './pages/Book.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Profile from './pages/Profile.vue';
import Edit from './pages/Edit.vue';
import Error404 from './pages/404.vue'

export default createRouter({
    hashbang: false,
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/admin',
            component: Admin,
        },
        {
            path: '/book/:id',
            component: Book,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/profile',
            component: Profile,
        },
        {
            path: '/edit/:id',
            component: Edit,
        },
        {
            path: '/404',
            component: Error404,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404'
        },
    ]
})
