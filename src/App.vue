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
import NestedModuleD from './store/modules/nested/d'

export default {
    name: 'app',
    components: {
        A,
        B
    },
    methods: {
        registerNestedModule() {
            if (!(this.$store && this.$store.state && this.$store.state['nested'])) {
                this.$store.registerModule(['nested'], {
                    namespaced: true
                })
                console.info("register nested", this.$store)
            }
            if (!(this.$store && this.$store.state && this.$store.state['nested'] && this.$store.state.nested['d'])) {
                this.$store.registerModule(['nested', 'd'], NestedModuleD)
                console.info("register nested/d", this.$store)
            }
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
