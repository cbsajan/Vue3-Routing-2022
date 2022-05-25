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
import Notify from './components/notify_Comp.vue';
import Login from './components/login_comp.vue';
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
        { path:'/articles/:articleId', component: Article, props:theData },
        // { path:'/articles', component: Articles, children:[
        //     { path:':articleId', component: Article, props:theData }
        // ] },
        // { path:'/contact', redirect:'/' },
        { path:'/contact', components: {
            default: Contact,
            notify: Notify
        }, name:'contact'},
        { path:'/login', component:Login},
        { path:'/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass:'active'
});


routes.beforeEach((to,from,next)=>{
    const isAuth = false;

    if(to.path === '/'){
        next()
    } else {
        if(to.path !== '/login' && !isAuth) return next({path:'/login'});
        else if(to.path === '/login' && isAuth) return next({path:'/'})
        return next();
    }
});


routes.afterEach(()=>{
    console.log('after each')
});
app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(routes)
app.mount('#app')