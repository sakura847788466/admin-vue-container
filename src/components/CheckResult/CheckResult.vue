<template>
    <transition name="fade">
        <div class="check-result" v-if="isShow">
          <p class="title">检查结果：</p>
          <span class="close" @click="close">关闭</span>
          <div class="list-item">
            <div class="chunk">接 口 名 称:</div>
            <p class="r-api-name-val">{{result_s.apiName}}</p>
          </div>
          <div class="list-item">
            <div class="chunk">请 求 地 址:</div>
            <p class="r-address">
              {{result_s.url}}
            </p>
          </div>
          <div class="list-item">
            <div class="chunk">返 回 结 果:</div>
            <p class="r-result">
              {{result_s.data}}
            </p>
          </div>
          <div class="list-item">
            <div class="chunk">状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态:</div>
            <p class="r-tip" :style="result_s.status=='成功'?{'color':'green'}:{'color':'red'}">{{result_s.status}}</p>
          </div>
        </div>
    </transition>

</template>

<script>
import Bus from '../../utils/bus'
import { mapState } from 'vuex'
  export default {
    name: "CheckResult",
    data(){
      return{
        result_s:'',
        isShow:false
      }
    },
    mounted(){
      this.result_s=this.result.result
        this.isShow=this.result.result.isShow
    },
    methods: {
      close() {
        this.isShow=!this.isShow
      }
    },
    created(){
      // Bus.$on('result',e=>{
      //   this.result_s=e
      //   this.isShow=e.isShow
      // })
    },
    computed:{
      ...mapState(['result','result'])
    }
  }
</script>

<style scoped>
  /*返回结果样式*/
  .list-item {
    display: flex;
    position: relative;
    flex-direction: row;
    -ms-flex-direction: row;
    font-size: 16px;
    padding: 3px 0;
  }

  .chunk {
    width: 121px;
    height: 24px;
    display: inline-block;
    text-align: center;
    line-height: 54px;
    color: #333333;
    font-size: 14px;
  }
  .title{
    padding-bottom: 20px;
    padding-top: 30px;
    font-size: 18px;
    color: #333333;
    background: white;
  }
  .check-result {
    /* width: 770px; */
    position: relative;
    top:40px;
    margin-bottom: 25px;
    background: #FAFAFA;
  }

  .close {
    position: absolute;
    font-size: 12px;
    top: 5px;
    right: 10px;
    color: #666666;
    cursor: pointer;
  }

  .check-result .list-item > p {
    margin-left: 10px;
    color: #666666;
    font-size: 14px;
    line-height: 24px;
  }
</style>
