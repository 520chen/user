<template>
<div class="login">
  <el-form class="loginForm" ref="loginForm" :model="loginForm" :rules="loginRules" label-width="55px">
    <el-form-item>
      <div class="user">
        <img src="../assets/user.jpg" alt="">
      </div>
    </el-form-item>
    <el-form-item label="账号" prop="username">
      <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="login-btn" @click="loginSubmit('loginForm')">登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginRules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      },
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginSubmit(form) {
      this.$refs[form].validate((valid)=>{
        if(valid) {
          this.$message.success('登录成功！');
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style scoped>
.login {
  height: 100%;
  background: url('../assets/bg4.png');
}

.loginForm {
  position: absolute;
  left: 0;
  right: 0;
  width: 400px;
  padding: 15px 40px;
  margin: 200px auto;
  background: white;
}

.user {
  width: 150px;
  height: 150px;
  margin-left: 75px;
}

.user>img {
  width: 100%;
  height: 100%;
  border-radius: 75px;
}
.login-btn {
  width: 100%;
}
</style>
