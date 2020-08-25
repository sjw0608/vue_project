"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessage = exports.isPromise = exports.isSymbol = exports.isArray = exports.isObject = exports.isFunction = exports.isUndefined = exports.isNull = exports.isNumber = exports.isString = exports.validZipCode = exports.validEmail = exports.validStrogePwd = exports.validPassword = exports.validIdCard = exports.validMobile = void 0;

/* eslint-disable prettier/prettier */

/**
 * @description: 正则校验
 * @author: 宋江伟
 * @time: 2020-08-24
 */
// 手机号码验证
var validMobile = function validMobile(mobile, callback) {
  var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
  return errorMessage(reg, mobile, '手机号码', callback);
}; // 身份证号码验证


exports.validMobile = validMobile;

var validIdCard = function validIdCard(id, callback) {
  var reg = /^\d{15}|\d{18}$/;
  return errorMessage(reg, id, '身份证号码', callback);
}; // 密码验证(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)


exports.validIdCard = validIdCard;

var validPassword = function validPassword(password, callback) {
  var reg = /^[a-zA-Z]\w{5,17}$/;
  return errorMessage(reg, password, '密码', callback);
}; // 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)


exports.validPassword = validPassword;

var validStrogePwd = function validStrogePwd(password, callback) {
  var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
  return errorMessage(reg, password, '密码', callback);
}; // 邮箱验证


exports.validStrogePwd = validStrogePwd;

var validEmail = function validEmail(email, callback) {
  var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return errorMessage(reg, email, '邮箱', callback);
}; // 邮政编码


exports.validEmail = validEmail;

var validZipCode = function validZipCode(zipCode, callback) {
  var reg = /^[0-9]{6}$/;
  return errorMessage(reg, zipCode, '邮政编码', callback);
}; // 数据类型校验


exports.validZipCode = validZipCode;
var dataType = ['String', 'Number', 'Null', 'Undefined', 'Function', 'Object', 'Array', 'Symbol', 'Promise'];

var isType = function isType(type) {
  return function (ctx) {
    return Object.prototype.toString.call(ctx) == "[object ".concat(type, "]");
  };
};

var utilType = {};
dataType.forEach(function (type) {
  utilType["is".concat(type)] = isType(type);
});
var isString = utilType.isString,
    isNumber = utilType.isNumber,
    isNull = utilType.isNull,
    isUndefined = utilType.isUndefined,
    isFunction = utilType.isFunction,
    isObject = utilType.isObject,
    isArray = utilType.isArray,
    isSymbol = utilType.isSymbol,
    isPromise = utilType.isPromise;
/**
 * @description: 错误提示
 * @param {reg} reg  正则表达式
 * @param {value} value  校验数据
 * @param {String} text 错误提示简称
 * @param {Function} callback 
 */

exports.isPromise = isPromise;
exports.isSymbol = isSymbol;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isString = isString;

var errorMessage = function errorMessage(reg, value, text, callback) {
  if (!value) {
    return callback && callback(new Error("\u8BF7\u8F93\u5165".concat(text)));
  } else if (!reg.test(value)) {
    return callback && callback(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684".concat(text)));
  } else {
    return callback && callback();
  }
};

exports.errorMessage = errorMessage;