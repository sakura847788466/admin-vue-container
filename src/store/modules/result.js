const result ={
  namespaced:true,
  state:{
    result:{}
  }
}

const mutations = {
  SET_RESULT:(state,result)=>{
    state.result = result
  },
  CLEAR_RESULT:(state)=>{
    state.result ={}
  }
}

const actions={
  setReSuLect({commit},result){
      commit("SET_RESULT",result)
  },
  clearResult({commit}){
    commit("CLEAR_RESULT")
  }
}
export default{
  namespaced: true,//命名空间打开
  state:result.state,
  mutations,
  actions
}
