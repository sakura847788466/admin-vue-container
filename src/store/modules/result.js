const result ={
  namespaced:true,
  state:{
    result:{},
    isShow:false
  }
}

const mutations = {
  SET_RESULT:(state,result)=>{
    state.result = result
  },
  CLEAR_RESULT:(state,result_c)=>{
    state.result =result_c.result,
    state.isShow =result_c.isShow
  }
}

const actions={
  setReSuLect({commit},result){
      commit("SET_RESULT",result)
  },
  clearResult({commit},result_c){
    commit("CLEAR_RESULT",result_c)
  }
}
export default{
  namespaced: true,//命名空间打开
  state:result.state,
  mutations,
  actions
}
