"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var types = _interopRequireWildcard(require("./action-types"));

var _public = require("@/api/public");

var _mutations;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = {
  state: {
    bannerList: [],
    ajaxTokens: []
  },
  mutations: (_mutations = {}, _defineProperty(_mutations, types.SET_BANNER_LIST, function _callee(state, payload) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state.bannerList = payload;

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }), _defineProperty(_mutations, types.CLEAR_REQUSET_TOKEN, function (state) {
    state.ajaxTokens = [];
  }), _defineProperty(_mutations, types.SET_REQUEST_TOKEN, function (state, payload) {
    //取消重复请求
    var ajaxTokens = state.ajaxTokens;
    var find = ajaxTokens.filter(function (item) {
      return item.UrlPath === payload.UrlPath;
    });

    if (find.length) {
      payload.Cancel();
    } else {
      state.ajaxTokens = [].concat(_toConsumableArray(state.ajaxTokens), [payload]);
    }
  }), _mutations),
  actions: _defineProperty({}, types.SET_BANNER_LIST, function _callee2(_ref) {
    var commit, bannerList;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref.commit;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap((0, _public.getBannerList)());

          case 4:
            bannerList = _context2.sent;
            commit(types.SET_BANNER_LIST, bannerList);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            throw Error(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  }),
  modules: {}
};
exports["default"] = _default;