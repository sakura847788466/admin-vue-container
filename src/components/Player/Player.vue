<template>
 <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>角色列表</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <el-row>
        <el-button  type="primary" icon="md-add">添加</el-button>
        <el-button  icon="md-trash">批量删除</el-button>
        <el-button  icon="md-refresh">刷新</el-button>
        <el-button type="dashed" @click="openTip=!openTip">{{openTip ? "关闭提示" : "开启提示"}}</el-button>
  </el-row>
  <el-row v-show="openTip" style="margin-top:10px;">
        <el-alert show-icon>
          已选择
          <span class="select-count">{{selectCount}}</span> 项
          <a class="select-clear" @click="clearSelectAll">清空</a> 这里还可以做一些数据统计显示
        </el-alert>
      </el-row>
   <el-row>
         <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
     <el-table-column
      label="身份"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.role }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
      </el-row>
</el-card>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      selectCount:0,
      openTip:true,
       tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          role:'admin',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '张三',
          role:'user',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '李四',
          role:'editor',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王五',
          role:'user',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
  },
  mounted() {
  },
  methods: {
    clearSelectAll(){
      console.log("选择")
    },
     handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>

</style>


