<template>
    <div id="404">
        <TypeEffect />
    </div>
</template>

<script>
import TypeEffect from './TypingEffect/Index_Comp.vue'
export default {

    components: {
        TypeEffect
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');

body {
    margin: 0;
    padding: 0;
}

#404 {
    font-family: 'Righteous', arial;
    font-weight: normal;
    font-size: 4rem;
    color: #241E17;

    width: 100%;
    min-height: 100vh;
}
</style>