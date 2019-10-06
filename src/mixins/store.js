export default {
    methods: {
      registerStoreModule (moduleName, storeModule)
      {
        const store = this.$store;
  
        if (!_.get(this.$store.state, moduleName))
        {
          store.registerModule(moduleName, storeModule);
        }
      }
    }
  }