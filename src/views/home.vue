<template>
<div class="home">
  <el-container>
    <el-aside width="200px">
      <div class="logo">
        <img src="../assets/bg3.jpg" alt="">
      </div>
      <el-menu default-active="1" class="el-menu-vertical-demo" :router="true" @select="selectMenu">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>用户列表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/user-list">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>测试功能</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/map">高德地图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>测试后台管理系统</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    selectMenu(key, keyPath){
      // console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.home {
  height: 100%;
  /* background: url('../assets/bg1.jpg') no-repeat;
  background-size: cover; */
}

.el-container {
  height: 100%;
}

.el-header {
  text-align: center;
  line-height: 60px;
}
.el-header .title {
  text-align: center;
  color: #000;
}
.logo {
  width: 200px;
  height: 60px;
}
.logo img {
  width: 100%;
  height: 100%;
}
</style>
