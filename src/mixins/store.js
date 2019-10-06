export default {
    methods: {
      registerStoreModule (moduleName, storeModule) {  
        const defaultModule = {
            namespaced: true
        }

        // nested module
        if(_.isArray(moduleName)) {
            moduleName.forEach((m,i,a) => {
                const curr = a.slice(0, i+1)
   
                if (!_.get(this.$store.state, curr)) { 
                  this.$store.registerModule(curr, (i!==a.length-1) ? defaultModule : storeModule);
                  this.$log("register module",  curr, (i!==a.length-1) ? defaultModule : storeModule, this.$store)
                }
            })
        }
        // root module
        else if(_.isString(moduleName)) {
          this.$store.registerModule(moduleName, storeModule);
        }
        else {
          this.$log("Nope ...")
        }
      }
    }
  }