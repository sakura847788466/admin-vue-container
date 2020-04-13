<template>
 <el-card class="box-card">
     <el-row>
        <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="已完成">用户管理</el-tab-pane>
        <el-tab-pane label="下载中">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
     </el-row>
 </el-card>
</template>

<script>
export default {
  name:'DownloadUser',
  data(){
    return{
       tabPosition: 'left'
    }
  },
}
</script>

<style >


</style>
