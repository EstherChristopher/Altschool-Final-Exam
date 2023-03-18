import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import SpecificRepo from '@/components/SpecificRepo.vue/';
import HelloWorld from '@/components/HelloWorld.vue/';


const router = createRouter({
    history: createWebHistory(),
    routes: [    
        { path: "/SpecificRepo/:reponame", component: SpecificRepo, name: 'SpecificRepo' },
        { path: '/HelloWorld', component: HelloWorld },
        {path: "/", redirect: "/HelloWorld"},
         {
             path: "/:notFound(.*)",
             component: () => import("./components/WildcardRoute")
           },
    ]
});

const app = createApp(App)

app.use(router);
app.mount('#app')
