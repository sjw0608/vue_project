<template>
  <el-row class="header-row">
    <el-col :span="18">
      <el-menu
        class="menu"
        mode="horizontal"
        background-color="#333"
        text-color="#fff"
        active-text-color="fff"
        :router="true"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/article">发表文章</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6">
      <div class="nav-right">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#333"
          text-color="#fff"
          active-text-color="fff"
        >
          <el-menu-item index="login" v-if="!isLogin">
            <router-link to="/login">登录</router-link>
          </el-menu-item>
          <el-menu-item index="reg" v-if="!isLogin">
            <router-link to="/reg">注册</router-link>
          </el-menu-item>
          <el-submenu index="profile" v-if="isLogin">
            <template slot="title">{{ userInfo.username }}</template>
            <el-menu-item index="logout" @click="layoutLogin">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : {},
    };
  },
  // watch:{},
  computed: {
    isLogin() {
      return Object.keys(this.userInfo).length;
    },
  },
  methods:{
    layoutLogin(){
      this.userInfo = {}
      localStorage.clear()
      this.$router.push('/login')
    }
  }
};
</script>
<style lang="scss">
.header-row {
  height: 100%;
  background: #333;
  .logo {
    margin: 5px;
    height: 50px;
  }
  .menu,
  .logo {
    display: inline-block;
  }
  .nav-right {
    float: right;
    li {
      display: inline-block;
      text-align: center;
      line-height: 60px;
    }
    a {
      color: #fff;
    }
  }
}
</style>
