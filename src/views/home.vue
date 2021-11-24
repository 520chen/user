<template>
<div class="home">
  <el-container>
    <el-aside width="200px">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <el-menu default-active="1" class="el-menu-vertical-demo" :router="true" @select="selectMenu">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>英雄管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/user-list">英雄列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>英雄图片</span>
          </template>
          <el-menu-item-group>
            <!-- <el-menu-item index="/map">高德地图</el-menu-item> -->
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="title">英雄联盟人物管理</div>
        <div class="logout">
          <el-button type="text" @click="logout">退出</el-button>
        </div>
      </el-header>
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
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    selectMenu(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      this.$confirm('是否退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    }
  }
}
</script>

<style scoped>
.home {
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-header {
  position: relative;
  line-height: 60px;
  text-align: center;
  background-color: skyblue;
  color: #fff;
}

.logout {
  position: absolute;
  top: 0;
  right: 20px;
}

.logo {
  width: 200px;
  height: 100px;
}

.logo img {
  width: 100%;
  height: 100%;
}
</style>
