"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _hooks = _interopRequireDefault(require("./hooks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_vue["default"].use(_vueRouter["default"]);

var files = require.context("./routers", false, /\.router.js$/);

var routes = [];
files.keys().forEach(function (key) {
  routes.push.apply(routes, _toConsumableArray(files(key)["default"]));
});
var router = new _vueRouter["default"]({
  mode: "history",
  routes: routes
});
Object.values(_hooks["default"]).forEach(function (hook) {
  router.beforeEach(hook.bind(router));
});
var _default = router;
exports["default"] = _default;