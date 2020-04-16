const state = {
    role: 'admin' //用户权限
  }

  const mutations = {
    GET_ROLE: (state, role) => { //state固定参数,后面一个传进来的参数
      state.tokenUser = role
    }
    //组件中$store.commit(‘方法名’，传参)来触发我们mutations中的方法
  }

  const actions = {
    setToken ({ commit }, payload) { //action中的方法只能传递一个参数,多的话后面的参数并不会被传递 ,使用{commit}注册actions
      commit("SET_TOKEN", payload)
      //组件中使用分发actions,
      /*
      1.使用dispatch分发
            methods:{
                   setToken(payload){
                       return this.$store.setToken;
                  }
              }
      2.使用mapActions
      methods: {
      ...mapActions(['setToken'])
      组件中使用:<button @click="setToken(payload)">increment</button>
    }*/
      /******
       *    组件中获取vueX的三种方式:
       *    1.直接使用this.$store.state.名称来拿到
       *    2.使用计算属性computed,计算属性可以在输出前改变我们data中的数据,所以可以根据这个特性,计算我们vueX中的存储变量
       *      (1).使用vueX中的mapState  数组形式
       *      computed:{
       *          ...mapState(["getToken"])
       * }
       *        (2)使用es6赋值
       *      computed:{
       *          ...mapState({
       *             token:state=>state.token
       *  })
       * }
       * *****/
    }
  }
  export default { //抛出state,mutations,actions
    state,
    mutations,
    actions
  }

