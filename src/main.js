import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'

import Header from './components/header_footer/Header_Comp.vue';
import Footer from './components/header_footer/Footer_Comp.vue';
import Articles from './components/Articles/Index_Comp.vue'

import Contact from './components/Contact/Index_Comp.vue';
import Home from './components/Index_comp.vue';


const app =  createApp(App);

const routes = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', component: Home },
        { path:'/articles', component: Articles },
        { path:'/contact', component: Contact }
    ],
    linkActiveClass:'active'
});

app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(routes)
app.mount('#app')