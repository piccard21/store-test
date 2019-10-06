export default {
    namespaced: true,
    state: { count: 0 },
    mutations: {
      incrementC (state) {
        // `state` is the local module state
        console.info("modc", state)

        state.count++
      }
    },
    getters: {
        doubleCountC (state) {
            return state.count * 2
        }
    }
}