import { createWebHistory, createRouter } from "vue-router";
import Mamber from './mamberResist.vue';
import Login from './LogInpage.vue';
const routes = [
    {
        path: "/mamber",
        component: Mamber,
    },
    {
        path: "/",
        component: Login,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 