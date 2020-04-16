<template>
  <div class="list"
       style="width:100%;">
    <div class="list-item">
      <p class="chunk"><span>*</span><i>dsAppid</i> <input type="text"
               placeholder=""
               maxlength="39" v-model="dsAppid"> <samp class="tip-info"> 用户唯一标识 <span class="ds_appid-warn-tip"></span></samp></p>
    </div>
    <div class="list-item">
      <p class="chunk"><span>*</span><i>secret</i> <input type="text"
               placeholder=""
               maxlength="32" v-model="secret"> <samp class="tip-info">用户秘钥<span class="secret-warn-tip"></span></samp></p>
    </div>
      <div><el-button size="mini" class="debugger" @click="Click">调试接口</el-button></div>
  </div>
</template>

<script>
import {getToken} from '../../api/index'
export default {
  name:'token',
  data(){
    return{
      dsAppid:'',
      secret:'',
      isShow:false
    }
  },
  methods:{
    Click(){
      const {dsAppid,secret} =this
      getToken(dsAppid,secret).then(res=>{
        console.log(res)
        const result = {
              data: res.data.accessToken,
              status: '成功',
              apiName: '获取访问令牌',
              url: 'https://open.dascomyun.com/api/v1.1/jsonWebTokens/getTokens',
              isShow:!this.isShow
            }
            // this.loading = false
            sessionStorage.setItem('token',res.data.accessToken)
            // this.saveGetToken(res.data.accessToken)
            // this.toggleCheckResult(true, result)
            // Bus.$emit('result',result)
             console.log(this.$store.result.state)

      }).catch(err=>{
        const result = {
              data: err.data,
              status: '失败',
              apiName: '获取访问令牌',
              url: 'https://open.dascomyun.com/api/v1.1/jsonWebTokens/getTokens',
              isShow:!this.isShow
            }
             this.$store.dispatch('result/setReSuLect',result)
            console.log(this.$store.state.result.result)

      })
    }
  }
}
</script>

<style scoped>
.list {
  margin-top: 30px;
  flex-direction: row;
  margin-bottom: 26px;
  width: 100%;
  /* height: 110px; */
  background: #fafafa;
}
.list-item {
  font-size: 20px;
}
.chunk {
  color: #333333;
  font-size: 14px;
  line-height: 34px;
}
.chunk > span {
  float: left;
  margin-left: 20px;
  margin-right: 10px;
  color: rgba(216, 15, 15, 0.68);
}
.list-item i {
  display: inline-block;
  font-style: normal;
  width: 85px;
}
input[type="text"] {
  width: 200px;
  height: 20px;
  outline: none;
}
.debugger{
      margin-left: 21px;
    background-color: #00BCD4;
    color: #fff;
    position: absolute;
}
</style>
