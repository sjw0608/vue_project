"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _index = _interopRequireDefault(require("../store/index"));

var types = _interopRequireWildcard(require("../store/action-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var baseUrl = 'http://172.16.6.201:8093/collegeIdealReport';
var CancelToken = _axios["default"].CancelToken;

var Http =
/*#__PURE__*/
function () {
  function Http() {
    _classCallCheck(this, Http);

    this.baseURL = baseUrl;
    this.timeout = 3000;
  } // 配置请求和响应拦截器


  _createClass(Http, [{
    key: "setInterceptor",
    value: function setInterceptor(instance, url) {
      var _this = this;

      instance.interceptors.request.use(function (config) {
        config.cancelToken = new CancelToken(function (res) {
          _index["default"].commit(types.SET_REQUEST_TOKEN, {
            'UrlPath': config.url,
            'Cancel': res
          });
        });
        return config;
      });
      instance.interceptors.response.use(function (res) {
        if (res.status === 200) {
          return Promise.resolve(res.data);
        } else {
          // switch(){ // todo ... } 
          return Promise.reject(res);
        }
      }, function (err) {
        delete _this.queue[url];
        return Promise.reject(err);
      });
    } // 合并参数

  }, {
    key: "mergeOptions",
    value: function mergeOptions(options) {
      return _objectSpread({
        baseURL: this.baseURL,
        timeout: this.timeout
      }, options);
    }
  }, {
    key: "request",
    value: function request(options) {
      var opts = this.mergeOptions(options);

      var instance = _axios["default"].create();

      this.setInterceptor(instance, opts.url); // 当调用axios.requset时 内不会创建一个axios的实例 并且给这个实例传入配置参数

      return instance(opts);
    }
  }, {
    key: "get",
    value: function get(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.request(_objectSpread({
        method: 'get',
        url: url
      }, config));
    }
  }, {
    key: "post",
    value: function post(url, data) {
      return this.request({
        method: 'post',
        url: url,
        data: data
      });
    }
  }]);

  return Http;
}();

var _default = new Http();

exports["default"] = _default;