<template>
  <div class="page">
    <div class="left">
         <strong>可用接口列表:</strong>
    <div class="title-list">
      <div class="listBox">接口名称<input type="text"
               maxlength="20"
               class="api-name-val"
               v-model="optionTitle"
               disabled
               style="height:19px"></div>
      <div class="title-option"
           :style="{height:height+'px'}"
           ref="opt">
        <div class="api-name1" @click="switchOption(item.type,item.title,index)" v-for="(item,index) in InterfaceInfo" :key="index">{{item.title}}</div>

      </div>
      <div class="sanjiao ripple"
           @click="toggleOption"></div>
    </div>
    <br><br>
    <strong>接口参数信息:</strong>
    <Token v-if="type==='token'"
           :toggleCheckResult="toggleCheckResult" />
    <Type v-if="type==='type'"
          :toggleCheckResult="toggleCheckResult" />
    <!-- 输出结果 -->
      <CheckResult />
    </div>
    <div class="right">
         <div class="workspace">
      <div class="page-right" style="margin-left:40px;" id="page">
        <div class="page-item" v-show="msgId==='1.1'">
          <div class="page-header">
            <h2>1.接口使用指南</h2>
             <ul>
            <li>
              <h4>调试须知,调用 API 必须遵循以下规则</h4>
              <ul class="inside">
                <li>
                  请设置模块连接服务器，使用IP或域名：
                  <p style="color:red">IP格式：129.204.67.94</p>
                  <p style="color:red">域名格式：open.dascomyun.com</p>
                </li>
              </ul>
            </li>
          </ul>
          </div>

          <ul>
            <li>
              <h4>接口调试</h4>
            </li>
              <div class="text-center">
                <img src="../../assets/user/text3.png" alt="获取访问令牌"  style="width:100%;"/>
                <p>填写相关的参数,点击调试接口</p>
              </div>
          </ul>
          <ul>
            <li>
              <h4>接口详情</h4>
            </li>
              <div class="text-center">
                <p>项目名称:{{InterfaceInfo.title}}</p>
                <p>接口描述:{{InterfaceInfo.description}}</p>

              </div>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Token from '../Token/Token'
import Type from '../Type/Type'
import {getInterface} from '../../api/index'
import CheckResult from '../../components/CheckResult/CheckResult'
import testData from '../../utils/data'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      checkResult: true,
      result: {},
      type: 'token',
      height: 0,
      toggle: true,
      optionTitle: '获取令牌接口',
      msgId:'1.1',
      role_id:{}
    }
  },
  mounted(){
    this.getInterface()
  },
  methods: {

    toggleCheckResult (type, result) {
      this.checkResult = type
      this.result = result
    },
    closeCheckResult () {
      this.checkResult = false
      this.result = {}
    },

    //通过id获取的接口
    getInterface(){
      const id ="5e99b13702743900451a8d43"
      getInterface(id).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    //点击显示接口列表
    toggleOption () {
      if (this.toggle) {
        this.height = 20 * this.$refs.opt.children.length
        this.toggle = !this.toggle
      } else {
        this.height = 0
        this.toggle = !this.toggle
      }
    },
    //点击接口项切换对应的组件
    switchOption (option,title,index) {

      switch (option) {
        case 'token':
          this.optionTitle = title
          break
        case 'print':
          this.optionTitle = title
          break
        case 'penetrate':
          this.optionTitle = title
          break
        case 'type':
          this.optionTitle = title
          break
        case 'unlimitedPrint':
          this.optionTitle = title
          break
        default:
          this.optionTitle = ''
          break
      }

      this.type = option
      this.height = 0
      this.toggle = true
      this.checkResult = false
    },
  },
  components: { Token, Type ,CheckResult},
  computed:{
    ...mapState("user",["InterfaceInfo"])
  },
  watch:{
    test(){
      if(this.InterfaceInfo.interfaceRole!==''){
        const role_id =[]
        // role_id.push()
      }
    }
  },
}
</script>

<style scoped>
.page {
  box-sizing: border-box;
  margin: 20px;
  padding: 30px;
  min-height: 833px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
}
.left,.right{
  flex:1;
}
.left{
  padding:26px 20px 0px 0px;
}
.right{
  margin-left:10px;
}
.workspace{
  height:829px;
  overflow-y:auto;
}
.title-list {
  display: flex;
  display: -webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box; /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox; /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  position: relative;
  flex-direction: row;
  -ms-flex-direction: row;
  margin-top: 30px;
  margin-bottom: 40px;
  font-size: 20px;
}

.title-option {
  box-sizing: border-box;
  z-index: 1;
  display: block;
  overflow: hidden;
  position: absolute;
  top: 8px;
  left: 126px;
  height: 0;
  width: 198px;
  border: 1px solid #cecece;
  border-top: 1px solid transparent;
  background-color: #ffffff;
  transition: 0.3s;
}

.title-option > div {
  z-index: 1;
  font-size: 14px;
  color: #666666;
  text-align: center;
  cursor: pointer;
  line-height: 20px;
}

.title-option > div:hover {
  background-color: #f5f5f5;
}

/*参数列表*/
/*公共样式*/

.listBox {
  width: 100%;
  height: 36px;
  background: #fafafa;
  line-height: 36px;
  font-size: 14px;
  padding-left: 20px;
  box-sizing: border-box;
  position: relative;
}
.chunk > span {
  float: left;
  margin-left: 20px;
  color: rgba(216, 15, 15, 0.68);
}
input[type="text"] {
  margin-left: 50px;
  width: 198px;
  text-align: center;
  background: white;
  border: 1px solid #cecece;
}

.sanjiao {
  z-index: 5;
  position: absolute;
  width: 10px;
  height: 8px;
  top: 12px;
  left: 300px;
  transition: 0.3s;
  background: url("../../assets/user/pull.png") no-repeat;
  cursor: pointer;
}
.ivu-list-item {
  text-decoration: underline;
  cursor: pointer;
}
</style>
