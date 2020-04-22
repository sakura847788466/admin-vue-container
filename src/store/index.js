import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import my from './modules/my'
import createVuexAlong from "vuex-along";
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    my
  },
  getters,
  plugins: [
    createVuexAlong({
      // 设置保存的集合名字，避免同站点下的多项目数据冲突
      name: "hello-vuex-along",
      local: {
        list: ["settings"],
        // 过滤模块setting数据， 将其他的存入 localStorage
        isFilter: true,
      },
      session: {
        // 保存模块user中的sessionStorage
        list: ["user.interfaceInfo"],
      },
    }),
  ],
})

export default store
