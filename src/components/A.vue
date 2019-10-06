<template>
<div>
    <div>
        <h4 style="display: inline-block;">Root:</h4>
        <button @click="increment">{{ count }}</button>
        <span style="display: inline-block;">{{ doubleCount }}</span>
    </div>
    <div>
        <h4 style="display: inline-block;">ModuleA:</h4>
        <button @click="incrementA">{{ countA }}</button>
        <span style="display: inline-block;">{{ doubleCountA }}</span>
    </div>
    <div>
        <h4 style="display: inline-block;">ModuleB:</h4>
        <span>{{countB}}</span>
        <button @click="incrementB">{{ countB }}</button>
        <span style="display: inline-block;">{{ doubleCountB }}</span>
    </div>
    <div>
        <h4 style="display: inline-block;">ModuleC - namespaced:</h4>
        <span>{{countC}}</span>
        <button @click="incrementC">{{ countC }}</button>
        <span style="display: inline-block;">{{ doubleCountC }}</span>
    </div>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    computed: {
        count() {
            return this.$store.state.count
        },
        countA() {
            return this.$store.state.a.count // -> `moduleA`'s state

        },
        countB() {
            return this.$store.state.b.count // -> `moduleB`'s state
        },
        countC() {
            return this.$store.state.c.count // -> `moduleC`'s state
        },
        doubleCount() {
            return this.$store.getters.doubleCount
        },
        doubleCountA() {
            return this.$store.getters.doubleCountA  
        },
        doubleCountB() {
            return this.$store.getters.doubleCountB
        },
        doubleCountC() {
            return this.$store.getters['c/doubleCountC']
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        incrementA() {
            this.$store.commit('incrementA')
        },
        incrementB() {
            this.$store.commit('incrementB')
        },
        incrementC() {
            this.$store.commit('c/incrementC')
        }
    },
    mounted() {
      console.info(this.$store)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
