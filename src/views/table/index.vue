<template>
  <div class="page">
    <blockquote class="default">
      <p>dock包下载 <a target="_blank">{{this.$route.path}}</a></p>
    </blockquote>
    <div class="table-container">
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
        <el-table-column label="日期"
                         prop="date">
        </el-table-column>
        <el-table-column label="文件名"
                         prop="name">
        </el-table-column>
        <el-table-column label="大小"
                         prop="size">
        </el-table-column>
        <el-table-column align="right">
          <template slot="header"
                    slot-scope="scope">
            <el-input v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索" />
            <!-- @keyup.enter.native="searchKey()" -->
          </template>
          <template slot-scope="scope">
            <el-button size="mini"
                       type="danger"
                       @click="downloadSelection(scope.row)">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: "2020-04-02",
          name: "得实中间件包2",
          size: '660k',
          address: "https://vuejs.org/images/logo.png"
        },
        {
          date: "2020-04-02",
          name: "得实中间件包1",
          size: '660k',
          address: "http://xboot.exrick.cn/vue-template/excel"
        },
        {
          date: "2020-04-02",
          name: "得实中间件包1",
          size: '660k',
          address: "http://xboot.exrick.cn/vue-template/excel"
        },
        {
          date: "2020-04-02",
          name: "得实中间件包1",
          size: '660k',
          address: "http://xboot.exrick.cn/vue-template/excel"
        }
      ],
      search: ''
    };
  },
  created () { },
  methods: {
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    },
    //file下载
    downloadSelection (data) {

      const link = data.address
      if (link.length > 0) {
        let a = document.createElement("a");
        a.href = '';
        a.download = link
        document.body.appendChild(a);
        a.click();  //下载
        URL.revokeObjectURL(a.href);    // 释放URL 对象
        document.body.removeChild(a);   // 删除 a 标签
      } else {
        this.$message({ message: '下载失败', type: 'info' });
      }
    }
  }
};
</script>
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
  .default {
    padding: 0.1rem 1.5rem;
    border-left-width: 0.5rem;
    border-left-style: solid;
    margin: 1rem 0;
    background-color: #f3f5f7;
    border-color: #42b983;
  }
}

.table {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
