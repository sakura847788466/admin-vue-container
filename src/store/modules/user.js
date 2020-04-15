
import {getUserInfo} from '../../api/index'
// import createVuexAlong from 'vuex-along'
const user = {
  namespaced: true, //开启命令空间模式,
  state: {
    name: 'ada',
    userInfo:'',
    token: '1111',
    avatar: '',
    role: {
      admin: 'user',
    },
    time:{}
  }
}

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo;
  },
  SET_ADRESS_TIME: (state, time) => {
    state.time = time;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  }
};

const actions = {


  // save time  when the user come in
  setAdress_time({commit},time){
    commit('SET_ADRESS_TIME',time);
  },
  //get user's info by token
  async setUserInfo({commit},token){
      //  const token ='thdByZpOxru1QfgkAycNRZSpnD600eYeDaUZrIVr'
        getUserInfo(token).then(res=>{
          commit('SET_USERINFO',res.data)
        }).catch(err=>{
          console.log(err)
        })
  },
  // user logout
  logout({commit,state}) {

    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          removeToken();
          resetRouter();
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
export default {
  namespaced: true,//命名空间打开
  state: user.state,
  mutations,
  actions
  // plugins: [createVuexAlong({
  //   name:'user_state',
  //   session:{

  //   },
  //   local:{
  //     user:['userInfo']
  //   }
  // })]
};
