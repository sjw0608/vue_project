import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const files = require.context("./routers", false, /\.router.js$/);

const routes = [];

files.keys().forEach(key => {
  routes.push(...files(key).default);
});

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
