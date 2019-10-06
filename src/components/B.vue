<template>
<div>
    <div>
        <h4 style="display: inline-block;">nested/d:</h4>
        <button @click="increment">{{ count }}</button>
        <span>{{ doubleCount }}</span>
    </div>
</div>
</template>

<script>
import storeD from './nested/d'

export default {
    created() {
        this.registerStoreModule(['nested', 'd'], storeD)
    },
    destroy() {
        this.$log("unregistrieren???? Oder werden die autom. zerstört? glaube nicht")
    },
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
