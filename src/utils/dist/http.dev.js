"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable prettier/prettier */
var baseUrl = '';

var Http =
/*#__PURE__*/
function () {
  function Http() {
    _classCallCheck(this, Http);

    this.baseUrl = baseUrl;
  }

  _createClass(Http, [{
    key: "mergeOptions",
    value: function mergeOptions(options) {
      var token = uni.getStorageSync('token');
      return _objectSpread({}, options, {
        header: options.method == 'get' ? {
          'Token': token,
          'X-Requested-With': 'XMLHttpRequest',
          "Accept": "application/json",
          "Content-Type": "application/json; charset=UTF-8"
        } : {
          'Token': token,
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json; charset=UTF-8'
        },
        url: "".concat(this.baseUrl).concat(options.url),
        dataType: 'json'
      });
    }
  }, {
    key: "request",
    value: function request(options) {
      var opts = this.mergeOptions(options);
      var promise = new Promise(function (resolve, reject) {
        uni.request(opts).then(function (res) {
          resolve(res);
        })["catch"](function (err) {
          reject(err);
        });
      });
      return promise;
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