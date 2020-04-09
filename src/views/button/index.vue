<template>
  <div class="page">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="用户信息"
                   name="first">
        <!-- 用户管理 -->
        <div class="user_container">
          <div class="userInfo">

          </div>
          <div class="otherInfo">

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
</style>
<style lang="scss" scoped>
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

  .user_container {
    height: 400px;
    width: 100%;
    background: #f6f6f6;
    display: flex;
    .userInfo {
      height: 400px;
      flex: 1;
    }
    .otherInfo {
      height: 400px;
      flex: 1;
    }
  }
}
</style>
