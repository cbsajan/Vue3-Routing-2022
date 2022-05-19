<template>
    <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">Beardit.com</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/articles" class="nav-link">Articles</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{
                        name: 'contact',
                        params: {
                            from: 'navbar'
                        }
                    }" class="nav-link">Contact</router-link>
                </li>
            </ul>
        </header>
    </div>
</template>


<style>
body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
</style>

<!-- 
    Another Way  

    <template>
    <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">Beardit.com</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item">
                
                        Another Way
                        <router-link to="/" custom v-slot="{ isActive }">
                        <a href="/" class="nav-link" :class="[isActive && 'active']">Home</a>
                    </router-link>
                   
                </li>
                <li class="nav-item">
                     <router-link to="/articles" custom v-slot="{ isActive }">
                        <a href="/articles" class="nav-link" :class="[isActive && 'active']">Articles</a>
                    </router-link>
                   
                </li>
                <li class="nav-item">
                   <router-link to="/contact" custom v-slot="{ isActive }">
                        <a href="/contact" class="nav-link" :class="[isActive && 'active']">Contact</a>
                    </router-link>
                    <router-link to="/contact" class="nav-link">Contact</router-link>
                </li>
            </ul>
        </header>
    </div>
</template>


<style>
body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
</style>
 -->