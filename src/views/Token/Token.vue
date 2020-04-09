<template>
  <div class="list"
       style="width:100%;">
    <div class="list-item">
      <p class="chunk"><span>*</span><i>dsAppid</i> <input type="text"
               placeholder=""
               maxlength="39"> <samp class="tip-info"> 用户唯一标识 <span class="ds_appid-warn-tip"></span></samp></p>
    </div>
    <div class="list-item">
      <p class="chunk"><span>*</span><i>dsToken</i> <input type="text"
               placeholder=""
               maxlength="32"> <samp class="tip-info"> token值(访问令牌) <span class="secret-warn-tip"></span></samp></p>
    </div>
    <div class="list-item">
      <p class="chunk"><span>*</span><i>dsNumber</i> <input type="text"
               placeholder=""
               maxlength="16"> <samp class="tip-info"> 打印机编号 <span class="secret-warn-tip"></span></samp></p>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.list {
  margin-top: 30px;
  flex-direction: row;
  margin-bottom: 26px;
  width: 100%;
  /* height: 110px; */
  background: #fafafa;
}
.list-item {
  font-size: 20px;
}
.chunk {
  color: #333333;
  font-size: 14px;
  line-height: 34px;
}
.chunk > span {
  float: left;
  margin-left: 20px;
  margin-right: 10px;
  color: rgba(216, 15, 15, 0.68);
}
.list-item i {
  display: inline-block;
  font-style: normal;
  width: 85px;
}
input[type="text"] {
  width: 200px;
  height: 20px;
  outline: none;
}
</style>
