<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2>用户登录</h2>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
// import { Card, Form, FormItem, Input, Button } from 'element-ui';

export default {
  // components: {
  //   ElCard: Card,
  //   ElForm: Form,
  //   ElFormItem: FormItem,
  //   ElInput: Input,
  //   ElButton: Button,
  // },
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      users: [
        { username: 'admin', password: '123456' },
      ],
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
  submitForm() {
    if (this.users) {
      const user = this.users.find((user) => user.username === this.loginForm.username);
      if (user && user.password === this.loginForm.password) {
        // localStorage.setItem('token', this.loginForm.username);
        this.$router.push('/');
      } else {
        this.$message.error('用户名或密码错误');
      }
    }
  },
},
};
</script>
<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  background-image: url('@/assets/images/img.svg');
}

.login-card {
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>