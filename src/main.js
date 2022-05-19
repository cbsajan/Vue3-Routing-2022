import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'

import Header from './components/header_footer/Header_Comp.vue';
import Footer from './components/header_footer/Footer_Comp.vue';
import Articles from './components/Articles/Index_Comp.vue'
import Article from './components/Articles/Article_Comp.vue'

import Contact from './components/Contact/Index_Comp.vue';
import Home from './components/Index_comp.vue';
import NotFound from './components/404_Error_Comp.vue'

const app =  createApp(App);
const theData = (route) => {
    console.log(route);

    return {
        crazyProp: route.path + ' some other crazy prop'
    }
}
const routes = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', component: Home },
        { path:'/articles', component: Articles },
        { path:'/contact', component: Contact },
        { path:'/article/:articleId', component: Article, props:theData },
        { path:'/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass:'active'
});

app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(routes)
app.mount('#app')