<template>
  <div class="page">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="用户信息"
                   name="first">
        <!-- 用户管理 -->
        <div class="user_container">
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
                    <div class="user-info-name">ada</div>
                    <div>{{role}}</div>
                  </div>
                </div>
                <div class="user-info-list">
                  上次登录时间：
                  <span>2020-04-08</span>
                </div>
                <div class="user-info-list">
                  上次登录地点：
                  <span>广州</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <div class="info_right">
            <blockquote class="default">
              <p>用户相关信息<a target="_blank">{{this.$route.path}}</a></p>
            </blockquote>
            <div class="info_item">
              <div><label>用户秘钥:</label><span>***********</span></div>
              <div><label>注册时间:</label><span>2020-04-08</span></div>
              <div><label>秘钥有效时间:</label><span>2020-04-13</span></div>
              <div><label>登录时间:</label><span>2020-04-08</span></div>
              <div><label>秘钥过期时间</label><span>2020-04-23</span></div>
              <div><label>有效天数:</label><span>5</span></div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置设置"
                   name="second">配置设置</el-tab-pane>
      <el-tab-pane label="角色管理"
                   name="third">角色管理</el-tab-pane>
      <el-tab-pane label="下载管理"
                   name="fourth">下载管理</el-tab-pane>
    </el-tabs>

  </div>

</template>

<script>

export default {
  data () {
    return {
      activeName: 'first'
    };
  },
  created () { },
  methods: {
    handleClick (tab, event) {
    }
  },
  computed: {
    role () {
      return this.name === 'admin' ? '超级管理员' : '普通用户';
    }
  },
  watch: {

  },
};
</script>
<style >
.el-tabs__item {
  width: 100px;
  text-align: center;
}
.el-tabs__active-bar {
  width: 80px !important;
}
.el-col {
  padding-left: 0;
  padding-right: 0;
  width: 462px;
}
.el-row {
  margin-left: 0;
  margin-right: 0;
}
</style>
<style  scoped>
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
.default {
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
  background-color: #f3f5f7;
  border-color: #42b983;
  font-size: 19px;
}
.info_item div {
  line-height: 30px;
  margin-bottom: 10px;
}
.info_item div label {
  width: 200px;
  line-height: 30px;
  box-sizing: border-box;
  float: left;
  vertical-align: middle;
  padding: 0px 27px;
}
.user_container {
  height: 400px;
  width: 100%;
  background: #f6f6f6;
  display: flex;
  padding: 10px;
  /* justify-content: space-between; */
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
.info_right {
  padding: 20px;
  width: 65%;
  margin-left: 5%;
  background-color: #fff;
  border: 1px solid #ebeef5;
}
</style>
