<template>
  <div class="docMain">
    <ue :value="defaultMsg" :config="config" ref="ue"></ue>
    <div>
      <el-button type="primary" @click="getUeditorContent">主要按钮</el-button>
    </div>

    <div v-html="content"></div>
  </div>
</template>

<script>
import Ue from "@/components/Ue/ue.vue";
export default {
  components: {
    Ue
  },
  data() {
    return {
      content: "",
      defaultMsg: "测试",
      config: {}
    };
  },
  mounted() {
    // this.$refs.ue.style = "width:auto";
  },
  methods: {
    getUeditorContent() {
      // this.$refs.ue
      let content = this.$refs.ue.getUEContent();
      this.content = content;
      console.log(content);
    }
  }
};
</script>

<style lang="scss" scoped>
.docMain {
  width: 100%;
}
</style>
