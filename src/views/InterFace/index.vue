<template>
  <div class="page">
     <div class="sidebar" style="width:22%;" >
      <div class="sidebar-header">
        <div class="search-form">
          <div class="ui small fluid icon input">
            <el-input v-model="search" placeholder="请输入搜索关键词"  @keyup.enter.native="searchList(search)" >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
      </div>
      <div class="sidebar-body">
        <div class="catalog-body">
          <ul>
            <li class v-for="(item,index) in list" :key="index">
              <div class="wholerow"></div>
              <i :class="[item.isShow?'icon el-icon-caret-bottom':'icon el-icon-caret-right']"></i>

              <a class="text" @click="isShow(index)">{{item.title}}</a>
              <ul v-show="item.isShow" class="ul_item">
                <li

                  v-for="(i,index) in item.listMenu"
                  :key="index"
                >
                  <div class="wholerow"></div>
                  <i class="icon"></i>
                  <a class="text" @click="Tolist(index)">{{index+1}}.{{i.title}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <!-- right -->
      <div class="right">
        <div class="page-item" v-for="(item,index) in interfaceRole" :key="index" v-show="index==listIndex">
        <div class="page-header">
          <h2>{{index+1}}.{{item.title}}</h2>
        </div>
        <ul>
          <li>
            <h4>简要描述</h4>
          </li>
          <li>
            {{item.description}}
          </li>
        </ul>
        <ul>
          <li>
            <h4>请求地址</h4>
          </li>
          <li>
            {{item.requestAddress}}
          </li>
        </ul>
        <ul>
          <li>
            <h4>请求方式</h4>
          </li>
          <li>
            {{item.requestType}}
          </li>
        </ul>
        <ul>
          <li>
            <h4>请求头</h4>
          </li>
          <li>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>参数名</th>
                  <th>必选</th>
                  <th>类型</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="(item,index) in item.requestHeader" :key="index">
                  <td  >
                    {{item.parameterName}}
                  </td>
                  <td>
                   {{item.isChoice?'是':'否'}}
                  </td>
                  <td>
                    {{item.parameterType}}
                  </td>
                  <td>
                    {{item.parameterState}}
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
        <ul>
          <li>
            <h4>参数</h4>
          </li>
          <li>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>参数名</th>
                  <th>必选</th>
                  <th>类型</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="(item,index) in item.requestParamter" :key="index">

                  <td>
                    {{item.parameterName}}
                  </td>
                  <td>
                    {{item.isChoice?'是':'否'}}
                  </td>
                  <td>
                   {{item.parameterType}}
                  </td>
                  <td>
                    {{item.parameterState}}
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
        <ul>
          <li>
            <h4>请求示例</h4>
          </li>
          <li v-html='item.requestInstance'>
          </li>
        </ul>
        <ul>
          <li>
            <h4>返回示例</h4>
          </li>
          <li>成功</li>
          <li v-html='item.returnInstance'>

          </li>
        </ul>
        <ul>
          <li>
            <h4>返回参数说明</h4>
          </li>
          <li>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>参数名</th>
                  <th>类型</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center" v-for="(item,index) in item.returnParamter" :key="index">
                  <td>
                    {{item.parameterName}}
                  </td>
                  <td>
                   {{item.parameterType}}
                  </td>
                  <td>
                    {{item.parameterState}}
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
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
      role_id:{},
      Info:'',
      search:'',
      listIndex:'',
      findStatus:true,
       list: [
        {
          title: "接口列表",
          isShow: true,
          listMenu: []
        }
      ],
    }
  },
  mounted(){
    for(let i = 0;i<this.interfaceRole.length;i++){
       const data ={
         id:i,
         title:this.interfaceRole[i].title
       }
       this.list[0].listMenu.push(data)
    }
  },
  methods: {
    isShow(index){
      this.list[index].isShow = !this.list[index].isShow;

    },
    Tolist(index){
       this.listIndex = index
    },
    searchList(search){
    //   console.log(search)
    //  console.log (this.list.listMenu.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase())))
    console.log(this.searchMethod)
    }
  },
  components: { Token, Type ,CheckResult},
  computed:{
    ...mapState("user",["InterfaceInfo"]),
    ...mapState("user",["interfaceRole"]),
    searchMethod() { //模糊查询
        return this.list[0].listMenu.filter(value => {
            const new_list = value.title.toLowerCase().includes(this.search.toLowerCase())
            if(new_list.length==0||new_list.length==undefined){
                this.findStatus = false;
                return new_list
            }else{
              return new_list
            }
        })
    }
  },
  watch:{

  }
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
  overflow: auto;
}
ul,li{
  list-style: none;
}
ul{
  padding: 0;
  margin: 0;
}
.catalog-body {
    padding: 12px 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}
.catalog-body>ul{
    padding-right: 14px;
    height: 768px;
    overflow: auto;
}
.catalog-body>ul>li{
  margin-right: 0;
  position:relative;
}
 .catalog-body ul li .wholerow {
    width: 100%;
    position: absolute;
    left: 0;
    user-select: none;
    height: 30px;
}
.sidebar-body{
  border: 1px solid #dcd3d3;
    height: 782px;
    margin-top: 5px;
    border-radius: 4px;
    background-color: #f0f0f0;
}
.sidebar-body .catalog-body ul li i {
    position: relative;
    width: 24px;
    height: 24px;
    line-height: 24px;
    display: inline-block;
    text-decoration: none;
    vertical-align: middle;
    text-align: center;
}
.sidebar-body .catalog-body ul li .text {
    display: inline-block;
    line-height: 30px;
    word-break: keep-all;
    white-space: nowrap;
    color: #666;
    vertical-align: middle;
    position: relative;
}
.ul_item li{
  margin-left:24px;
}
/*  */
.left,.right{
  flex:1;
}
.left{
  padding:26px 20px 0px 0px;
}
.right{
  margin-left:20px;
  height: 800px;
    overflow: auto;
}
.workspace{
  height:829px;
  overflow-y:auto;
}
/*表格样式开始*/

.table {
    margin: 0 auto;
    width: 98%;
    border-collapse: collapse;
    border: 1px solid #ddd;
}

.table > thead > tr {
    height: 24px;
    line-height: 24px;
    /*background-color: #35B558;*/
}

.table td, .table th {
    box-sizing: border-box;
    padding: 8px;
    text-align: center;
    border: 1px solid #ddd;
    font-size: 14px;
}

.table th {
    color: #333;
    font-weight: 700;
}

/*表格样式结束*/
/*pre样式开始*/
pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
}

samp {
    color: #008626
}

span {
    color: #880000;
}
pre span{
    color: #080;
}
.inside li{
    margin: 10px 40px;
    list-style: circle;
}
.inside li pre{
    margin: 20px 0;
}
.flex li{
    width: 150px;
    display: flex;

}


</style>
