<template>
  <div class="login-wrap">
    <el-form class="login-container" ref="form" :model="form" label-width="80px">
      <h1 class="title">用户注册</h1>
      <el-form-item label="手机号" prop="username" :rules="[{required: true, message: '手机号不能为空'}]">
        <el-input type="text" v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="[{required: true, message: '密码不能为空'}]">
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code" :rules="[{required: true, message: '验证码不能为空'}]">
        <el-input
          type="text"
          v-model="form.code"
          autocomplete="off"
          class="codeInput"
          style="width:50%"
        >
        </el-input>
        <el-col v-html="codeImg" class="codeImg" @click.native.stop="getCode()"></el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%" @click="doSubmit()">注册</el-button>
        <!-- <el-button>重置</el-button> -->
      </el-form-item>
      <el-row style="text-align: center; margin-top: -10px;">
        <el-col :span="12">
          <el-link type="primary">忘记密码</el-link>
        </el-col>
        <el-col :span="12">
          <el-link type="primary" @click="doLogin()">登录</el-link>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {register,getCode} from '@/api/public';
export default {
  data() {
    return {
      form:{
        username: "",
        password: "",
        code:''
      },
      codeImg:''
    };
  },
  created(){
    this.getCode()
  },
  methods: {
    doSubmit() {
      this.$refs.form.validate(async (valid) => {
          if (valid) {
            let data = await register(this.form)
            this.$router.push('/')
          } else {
            return false;
          }
        });
    },
    async getCode(){
      let data = await getCode()
      this.codeImg = data.img
    },
    doLogin() {
      this.$router.push({path:'/login'})
    },
  },
};
</script>

<style lang="sass" scoped>
.login-wrap
  width: 400px;
  margin: 0 auto;
  padding: 30px;
  background-color: #efefef;
  border-radius: 10px;
  .title
    margin-bottom: 20px;
    text-align: center;
  .codeInput
    position: relative;
  .codeImg
    position: absolute;
    right: 0;
    display: inline-block;
    width: 50%;
    height: 100%;
</style>