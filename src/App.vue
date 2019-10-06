<template>
<div id="app">
    <A />
    <hr>
    <button @click="registerNestedModule">Register nested/d</button>
    <B />
</div>
</template>

<script>
import A from './components/A.vue'
import B from './components/B.vue'
import storeD from './store/modules/nested/d'
import storeMixin from './mixins/store'

export default {
    name: 'app',
    components: {
        A,
        B
    },
    methods: {
        registerNestedModule() {
            this.$store.registerModule(['nested'], {
                namespaced: true
            })
            this.$store.registerModule(['nested', 'd'], storeD)
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

button {
    margin: 10px;
}
</style>
