
const user = {
  namespaced: true, //开启命令空间模式,
  state: {
   InterfaceInfo:'',
   interfaceRole:''
  }
}

const mutations = {
  SAVE_INTERFACE: (state, interfaceInfo) => {
    //先从本地拿
    // localStorage.getItem('interfaceInfo')
    state.InterfaceInfo = interfaceInfo;
    state.interfaceRole =interfaceInfo.interfaceRole
  },

};

const actions = {
 saveInterfaceInfo({commit},interfaceInfo){
          //触发更改前先存储在本地
          // localStorage.setItem('interfaceInfo', JSON.stringify(interfaceInfo))
          commit('SAVE_INTERFACE',interfaceInfo)
  },

}
export default {
  namespaced: true,//命名空间打开
  state: user.state,
  mutations,
  actions
};
