<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name:'sandBox',
  data(){
    return{
      
    }
  },
  mounted(){
   this.CreateMap()
  },
   methods:{
     CreateMap(){
         var viewer = new Cesium.Viewer('cesiumContainer')
     }

   }
}
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
#cesiumContainer{
  width: 100%;
  height: 919px;
}
</style>
