<template>
<div id="app">
    <A />
    <hr>
    <B />
</div>
</template>

<script>
import A from './components/A.vue'
import B from './components/B.vue'

export default {
    name: 'app',
    components: {
        A,
        B
    },
    data() {
        return {
            TODO: "global, lokal"
        }
    },
    methods: {},
    mounted() {
        console.info(this)
        console.info(this.TODO)
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
