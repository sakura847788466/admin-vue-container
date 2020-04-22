<template>
  <div class="list"
       style="width:100%;">
    <div class="list-item">
      <p class="chunk"><span>*</span><i>dsAppid</i> <input type="text"
               placeholder=""
               maxlength="39" v-model="dsAppid"> <samp class="tip-info">设备id<span class="ds_appid-warn-tip"></span></samp></p>
    </div>
    <div class="list-item">
      <p class="chunk"><span>*</span><i>secrte</i> <input type="text"
               placeholder=""
               maxlength="32" v-model="secret"> <samp class="tip-info">秘钥<span class="secret-warn-tip"></span></samp></p>
    </div>
      <div><el-button size="mini" class="debugger" @click="Click">调试接口</el-button></div>
    <Loading v-if="loading"/>

  </div>
</template>

<script>
import {mapActions,mapMutations,mapState} from 'vuex'
import {getToken} from '../../api/index'
import Loading from '../../components/Loading/Loading'
import Bus from '../../utils/bus'
import Ajax from '../../api/ajax'
export default {
  name:'token',
  data(){
    return{
      dsAppid:'',
      secret:'',
      isShow:false,
      loading: false,

    }
  },
  mounted(){
    console.log(this.Info)
  },
  methods:{
    Click(){
      const {dsAppid,secret} =this
        const isShow =!this.isShow
          this.loading = true

      getToken(dsAppid,secret).then(res=>{
        console.log(res)
        this.loading=false
        const result = {
              data: res.data.accessToken,
              status: '成功',
              apiName: this.Info[0].title,
              url: this.Info[0].requestAddress,
            }
            this.toggleCheckResult(true, result)

      }).catch(err=>{
        const result = {
              data: err.data,
              status: '失败',
              apiName: this.Info[0].title,
              url: this.Info[0].requestAddress,
            }

          setTimeout(()=>{
              this.loading=false
              const msg ={status:true,result:result}
              Bus.$emit('msg',msg)
          },3000)
      })
    },
  },
  components:{
    Loading
  },
  props:["Info"]

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
