<template>
  <div class="page">
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="search-form">
          <div class="ui small fluid icon input">
            <el-input v-model="role" placeholder="请输入搜索关键词" style="width:255px;" >
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
              <i class="icon el-icon-caret-bottom"></i>
              <a class="text" @click="toggleList(index)">{{item.title}}</a>
              <ul v-show="item.isShow">
                <li
                  class
                  v-for="(i,index) in item.listMenu"
                  :key="index"
                  :class="{on:isCurrent(i.id)}"
                  @click="toggleMsgList(i.id)"
                >
                  <div class="wholerow"></div>
                  <i class="icon"></i>
                  <a class="text">{{i.title}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="workspace">
      <div class="page-right" style="margin-left:40px;" id="page">
        <div class="page-item" v-show="msgId==='1.1'">
          <div class="page-header">
            <h2>1.1 得实中间件使用指南</h2>
          </div>
          <ul>
            <li>
              <h4>接入本平台，调用 API 必须遵循以下规则</h4>
              <ul class="inside">
                <li>
                  请设置模块连接服务器，使用IP或域名：
                  <p style="color:red">IP格式：129.204.67.94</p>
                  <p style="color:red">域名格式：open.dascomyun.com</p>
                </li>
              </ul>
            </li>
            <li></li>
            <li>
              <h4>应用管理</h4>
            </li>
            <div class="text-center">
              <img src="../../assets/user/text1.png" alt="应用管理" />
              <p>用户注册账号成功后系统会分配一个 dsAappid 和 secret</p>
            </div>
          </ul>
          <ul>
            <li>
              <h4>应用打印过程</h4>
            </li>
            <li>
              <div class="text-center">
                <img src="../../assets/user/text2.png" alt="应用打印的流程图" />
                <p>应用打印的流程图</p>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h4>获取访问令牌</h4>
            </li>
            <li>
              <div class="text-center">
                <img src="../../assets/user/text3.png" alt="获取访问令牌" />
                <p>两个参数必须填写</p>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h4>打印或预览</h4>
            </li>
            <li>
              <div class="text-center">
                <img src="../../assets/user/text4.png" alt="打印或预览" />
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h4>透传打印</h4>
            </li>
            <li>
              <div class="text-center">
                <img src="../../assets/user/text5.png" alt="透传打印" />
                <p>接收已生成好的透传数据，直接打印</p>
              </div>
            </li>
          </ul>
          <div class="page-footer text-right">
            <span>
              <a href="#" @click.prevent="next('1.2')">1.2. API调用协议说明</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "dashboard",
  data() {
    return {
      list: [
        {
          id: 1,
          title: "1.开发文档",
          isShow: true,
          listMenu: [
            {
              id: "1.1",
              title: "1.1 API接入指南",
              isShow: true
            },
            {
              id: "1.2",
              title: "1.2. API调用协议说明",
              isShow: true
            },
            {
              id: "1.3",
              title: "1.3. API参数规定说明",
              isShow: true
            },
            {
              id: "1.4",
              title: "1.4. 得实中间件功能说明",
              isShow: true
            }
          ]
        },
        {
          id: 2,
          title: "2.API接口",
          isShow: true,
          listMenu: [
            {
              id: "2.1",
              title: "2.1. 获取访问令牌",
              isShow: false
            },
            {
              id: "2.2",
              title: "2.2. 电子发票打印预览",
              isShow: false
            },
            {
              id: "2.3",
              title: "2.3. 获取设备状态",
              isShow: false
            },
            {
              id: "2.4",
              title: "2.4. 无限制通用打印",
              isShow: false
            },
            {
              id: "2.5",
              title: "2.5. 透传数据打印",
              isShow: false
            },
            {
              id: "2.6",
              title: "2.6. 快递面单打印",
              isShow: false
            },
            {
              id: "2.7",
              title: "2.7. 自定义点坐标打印",
              isShow: false
            },
            {
              id: "2.8",
              title: "2.8. 查询打印结果",
              isShow: false
            },
            {
              id: "2.9",
              title: "2.9. 绑定设备",
              isShow: false
            },
            {
              id: "2.10",
              title: "2.10. 创建更新回调地址",
              isShow: false
            },
            {
              id: "2.11",
              title: "2.11. 获取设备待打印任务",
              isShow: false
            }
          ]
        },
        {
          id: 3,
          title: "3.状态码",
          isShow: true,
          listMenu: [
            {
              id: "3.1",
              title: "3.1. 状态码表",
              isShow: false
            },
            {
              id: "3.2",
              title: "3.2. 状态码表",
              isShow: false
            },
            {
              id: "3.3",
              title: "3.3. 状态码表",
              isShow: false
            }
          ]
        },
        {
          id: 4,
          title: "更新信息",
          isShow: true,
          listMenu: [
            {
              id: "4.1",
              title: "4.1. 更新信息",
              isShow: false
            },
            {
              id: "4.2",
              title: "4.2. 更新信息",
              isShow: false
            },
            {
              id: "4.3",
              title: "4.3. 更新信息",
              isShow: false
            }
          ]
        },
        {
          id: 5,
          title: "SDK下载",
          isShow: true
        }
      ],
      input: "",
      msgId: "1.1",
      index: null,
      role:1
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    toggleList(index) {
      this.msgId = index + 1 + ".1";
      this.list[index].isShow = !this.list[index].isShow;
    },
    toggleMsgList(id) {
      this.msgId = id;
    },
    isCurrent(id) {
      if (this.msgId === id) {
        return true;
      }
    },
    get() {
      console.log(this.$store.state.user);
    }
  },
  computed: {
  //  ...mapState("user",["role"])
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.on {
  background-color: #0b9eff;
  color: white;
}
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
  flex-direction: row;
  width: 1400px;
  .sidebar {
    flex: 0.5;
  }
  .search-form {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    flex: none;
  }
  .ui.small.input {
    font-size: 0.92857143em;
  }
  .sidebar-body {
    flex: auto;
    overflow: hidden;
    position: relative;
    .catalog-body {
      padding: 12px 0;
      display: flex;
      flex-direction: column;
      height: 770px;
      width: 278px;
      overflow-y: scroll;
      overflow-x: hidden;
      table-layout: fixed;
      word-wrap: break-word;
      word-break: break-all;
      ul {
        padding-right: 10px;
        list-style: none;
        padding: 0;
        padding-right: 10px;
        margin: 0;
        li {
          line-height: 30px;
          margin-left: 24px;
          cursor: pointer;
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
        }
      }
    }
  }
  .workspace {
    flex: 2;
    overflow-y: scroll;
    overflow-x: hidden;
    .page-header {
      text-align: center;
    }
  }
}
</style>
