<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import * as type from "@/store/action-types";
import { mapActions, mapState } from "vuex";
import * as validate from "@/utils/validate";
export default {
  computed: {
    ...mapState(["bannerList"])
  },
  methods: {
    ...mapActions([type.SET_BANNER_LIST])
  },
  mounted() {
    // this[type.SET_BANNER_LIST]();
    console.log(validate);
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
