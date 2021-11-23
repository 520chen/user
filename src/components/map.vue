<template>
<div>
  <div id="map"></div>
  <div class="address">当前位置在：{{address}}</div>
  <el-button type="primary" @click="saveAddress">保存当前位置</el-button>
</div>
</template>

<script>

import {addUser} from '../request/api'
export default {
  data() {
    return {
      address:''
    }
  },
  mounted() {
    // this.initMap()
  },
  methods: {
    initMap() {
      // var map = new AMap.Map('map', {
      //   resizeEnable: true,
      // });
      // AMap.plugin('AMap.Geolocation', ()=> {
      //   var geolocation = new AMap.Geolocation({
      //     enableHighAccuracy: true, //是否使用高精度定位，默认:true
      //     timeout: 10000, //超过10秒后停止定位，默认：5s
      //     buttonPosition: 'RB', //定位按钮的停靠位置
      //     buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      //     zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
      //   });
      //   map.addControl(geolocation);
      //   geolocation.getCurrentPosition( (status, result)=> {
      //     this.address = result.formattedAddress
      //   });
      // });
    },
    saveAddress(){
      let params = {
        name:'admin',
        address:this.address
      }
      addUser(params).then(res=>{
        if(res.code == '200') {
          this.$message.success('保存成功！')
        }
      })
    }
  }
}
</script>

<style scoped>
#map {
  height: 500px;
  margin-bottom: 20px;
}
.address {
  font-size: 30px;
}
</style>
