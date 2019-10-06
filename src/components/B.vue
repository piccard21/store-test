<template>
<div v-if="$store.state.nested">
    <div>
        <h4 style="display: inline-block;">nested/d:</h4>
        <button @click="increment">{{ count }}</button>
        <span>{{ doubleCount }}</span>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.nested.d.count
        },
        doubleCount() {
            return this.$store.getters['nested/d/doubleCount']
        }
    },
    methods: {
        increment() {
            this.$store.commit('nested/d/increment')
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
