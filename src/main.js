import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/header_footer/Header_Comp.vue';
import Footer from './components/header_footer/Footer_Comp.vue';

const app =  createApp(App);

app.component('app-header',Header);
app.component('app-footer',Footer);
app.mount('#app')