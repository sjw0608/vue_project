<template>
  <div id="app">
    <el-container>
      <el-header style="padding:0">
        <Header />
      </el-header>
      <el-main class="app-main">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.el-main {
  height: calc(100vh);
}
</style>
