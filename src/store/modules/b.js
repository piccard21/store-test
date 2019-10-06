export default {
    state: { count: 0 },
    mutations: {
      incrementB (state) {
        // `state` is the local module state
        console.info("modB", state)

        state.count++
      }
    },
    getters: {
        doubleCountB (state) {
            return state.count * 2
        }
    }
}