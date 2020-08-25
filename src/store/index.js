/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
import root from './root';

Vue.use(Vuex);

const files = require.context('./modules', false, /\.js$/)
// 根据当前store中的模块名解析vuex的状态
files.keys().forEach(key => {
  let moduleName = key.replace(/\.\//,'').replace(/\.js$/,'');
  let store = files(key).default
  let module = root.modules = (root.modules || {})
  module[moduleName] = store
  // 命名空间，不加空间没有作用域
  module[moduleName].namespaced = true
})

export default new Vuex.Store(root);
