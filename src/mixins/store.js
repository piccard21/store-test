export default {
    methods: {
      registerStoreModule (moduleName, storeModule) {  
        if (!_.get(this.$store.state, moduleName))
        {
          this.$store.registerModule(moduleName, storeModule);
        }
      }
    }
  }