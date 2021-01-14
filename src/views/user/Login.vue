<template>
  <div class="login-wrap">
    <el-form class="login-container">
      <h1 class="title">用户登录</h1>
      <el-form-item label="">
        <el-input type="text" v-model="username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input
          type="password"
          v-model="password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="doSubmit()">登录</el-button>
      </el-form-item>
      <el-row style="text-align: center; margin-top: -10px">
        <el-col :span="12">
          <el-link type="primary">忘记密码</el-link>
        </el-col>
        <el-col :span="12">
          <el-link type="primary" @click="doRegister()">用户注册</el-link>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {login,getUserInfo} from '@/api/public';
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async doSubmit() {
      let param={
        username:this.username,
        password:this.password
      }
      let data = await login(param)
      await localStorage.setItem('token',data.data.token)
      await this.getUser(data.data.id)
      this.$router.push('/')
    },
    doRegister() {
      this.$router.push({path:'/reg'})
    },
    async getUser(id){
      const params = {
          id:id
      }
      let data = await getUserInfo({params})
      localStorage.setItem('userInfo',JSON.stringify(data.data))
    }
  },
};
</script>

<style lang="sass" scoped>
.login-wrap
  width: 400px
  margin: 0 auto
  padding: 30px
  background-color: #efefef
  border-radius: 10px

.title
  margin-bottom: 20px
  text-align: center
</style>