<template>
  <div class="page">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover"
                 class="mgb20"
                 style="height:252px;">
          <div class="user-info">
            <img src="../../assets/user/user.gif"
                 class="user-avator"
                 alt />
            <div class="user-info-cont">
              <div class="user-info-name">{{name}}</div>
              <div>{{role}}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>{{currentTime}}</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>{{city}}</span>
          </div>
        </el-card>
        <el-card shadow="hover"
                 style="height:252px;">
          <div slot="header"
               class="clearfix">
            <span>语言详情</span>
          </div>Vue
          <el-progress :percentage="71.3"
                       color="#42b983"></el-progress>JavaScript
          <el-progress :percentage="24.1"
                       color="#f1e05a"></el-progress>CSS
          <el-progress :percentage="13.7"></el-progress>HTML
          <el-progress :percentage="5.9"
                       color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20"
                class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover"
                     :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover"
                     :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-2">
                <i class="el-icon-lx-notice grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover"
                     :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover"
                 style="height:403px;">
          <div slot="header"
               class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0"
                       type="text">添加</el-button>
          </div>
          <el-table :show-header="false"
                    :data="todoList"
                    style="width:100%;">
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div class="todo-item"
                     :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <template>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-button @click="getVersionInfo">点击生成秘钥</el-button>
  </div>
</template>
<script>

import Schart from 'vue-schart';
import {location} from '../../utils/location'
import {mapState} from "vuex"
import {getVersionInfo} from '../../api/index'
export default {
  name: 'dashboard',
  data () {
    return {
      todoList: [
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要写100行代码加几个bug吧',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: true
        },
        {
          title: '今天要写100行代码加几个bug吧',
          status: true
        }
      ],
      data: [
        {
          name: '2018/09/04',
          value: 1083
        },
        {
          name: '2018/09/05',
          value: 941
        },
        {
          name: '2018/09/06',
          value: 1139
        },
        {
          name: '2018/09/07',
          value: 816
        },
        {
          name: '2018/09/08',
          value: 327
        },
        {
          name: '2018/09/09',
          value: 228
        },
        {
          name: '2018/09/10',
          value: 1065
        }
      ],
      options: {
        type: 'bar',
        title: {
          text: '最近一周各品类销售图'
        },
        xRorate: 25,
        labels: ['周一', '周二', '周三', '周四', '周五'],
        datasets: [
          {
            label: '家电',
            data: [234, 278, 270, 190, 230]
          },
          {
            label: '百货',
            data: [164, 178, 190, 135, 160]
          },
          {
            label: '食品',
            data: [144, 198, 150, 235, 120]
          }
        ]
      },
      options2: {
        type: 'line',
        title: {
          text: '最近几个月各品类销售趋势图'
        },
        labels: ['6月', '7月', '8月', '9月', '10月'],
        datasets: [
          {
            label: '家电',
            data: [234, 278, 270, 190, 230]
          },
          {
            label: '百货',
            data: [164, 178, 150, 135, 160]
          },
          {
            label: '食品',
            data: [74, 118, 200, 235, 90]
          }
        ]
      },
      currentTime: '',//进入时间
      city:'广州',
    };
  },
  mounted () {
    // this.changeDate()
    // this.getLocation()
    // this.getVersionInfo()
    this.setToken()
  },
  components: {
    Schart,

  },
  computed: {
    ...mapState("user",["name"]),
    role () {
      return this.name === 'admin' ? '超级管理员' : '普通用户';
    },

  },

  methods: {
    changeDate () {
      this.currentTime =
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes()
        const city = this.city
        const currentTime = this.currentTime
        const time ={city,currentTime}
       this.$store.dispatch("user/setAdress_time", time);

    },
    getLocation() {
          let _that = this;
          let geolocation = location.initMap("map-container"); //定位
          AMap.event.addListener(geolocation, "complete", result => {
          _that.city = result.addressComponent.city;
          });
    },
    //setToken
    setToken(){
      // console.log(window.location.href)
      const url = "http://localhost:9002/#/example/user?token=thdByZpOxru1QfgkAycNRZSpnD600eYeDaUZrIVr";
      const test = url.split('=')[1]
      localStorage.setItem('Token',test)
    },
    getAllEa(){
      getAllEa().then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    getInterfaces(){//获取所有的接口
      const project=[]
      getInterfaces(project).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    getVersionInfo(){
        const id ='5e83ff741ad1b93f20821a15'
      getVersionInfo(id).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>


<style scoped>
.page {
  box-sizing: border-box;
  margin: 20px auto;
  padding: 30px;
  min-height: 833px;
  border-radius: 20px;
  background-color: #ffffff;
  height: 888px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
}
.el-row {
  margin-bottom: 20px;
}
.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}
.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}
.grid-num {
  font-size: 30px;
  font-weight: bold;
}
.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}
.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}
.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}
.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}
.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}
.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}
.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}
.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}
.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}
.user-info-list span {
  margin-left: 70px;
}
.mgb20 {
  margin-bottom: 20px;
}
.todo-item {
  font-size: 14px;
}
.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
.schart {
  width: 100%;
  height: 300px;
}
</style>
