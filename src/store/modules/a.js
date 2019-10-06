export default {
    state: { count: 0 },
    mutations: {
      incrementA (state) {
        // `state` is the local module state
          console.info("modA", state)

        state.count++
      }
    },
    getters: {
        doubleCountA (state) {
            return state.count * 2
        }
    }
}