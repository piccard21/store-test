export default {
    namespaced: true,
    state: { count: 0 },
    mutations: {
      increment (state) {
        // `state` is the local module state
        console.info("modd", state)

        state.count++
      }
    },
    getters: {
        doubleCount (state) {
            return state.count * 2
        }
    }
}