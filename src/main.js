import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'

//definir las rutas
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },{
        path: "/category/:title",
        name: "Home",
        component: CategoryDetails
    },{
        path: "/meal/:title",
        name: "Meal",
        component: MealDetails
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App)

app.use(router)

app.mount('#app')

//export default router

//createApp(App).use(router).mount('#app')