/* eslint-disable prettier/prettier */
/**
 * @description: 正则校验
 * @author: 宋江伟
 * @time: 2020-08-24
 */

// 手机号码验证
export const validMobile = (mobile, callback) => {
    const reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    return errorMessage(reg, mobile, '手机号码', callback)
}
// 身份证号码验证
export const validIdCard = (id, callback) => {
    const reg = /^\d{15}|\d{18}$/
    return errorMessage(reg, id, '身份证号码', callback)
}
// 密码验证(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
export const validPassword = (password, callback) => {
    const reg = /^[a-zA-Z]\w{5,17}$/
    return errorMessage(reg, password, '密码', callback)
}
// 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)
export const validStrogePwd = (password, callback) => {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/
    return errorMessage(reg, password, '密码', callback)
}
// 邮箱验证
export const validEmail = (email, callback) => {
    const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return errorMessage(reg, email, '邮箱', callback)
}
// 邮政编码
export const validZipCode = (zipCode, callback) => {
    const reg = /^[0-9]{6}$/
    return errorMessage(reg, zipCode, '邮政编码', callback)
}

// 数据类型校验
const dataType = ['String', 'Number', 'Null', 'Undefined', 'Function', 'Object','Array','Symbol','Promise']
const isType = (type) => (ctx) => Object.prototype.toString.call(ctx) == `[object ${type}]`
const utilType = {}
dataType.forEach(type => {
    utilType[`is${type}`] = isType(type)
})
export const {isString,isNumber,isNull,isUndefined,isFunction,isObject,isArray,isSymbol,isPromise } = utilType

/**
 * @description: 错误提示
 * @param {reg} reg  正则表达式
 * @param {value} value  校验数据
 * @param {String} text 错误提示简称
 * @param {Function} callback 
 */
export const errorMessage = (reg, value, text, callback) => {
    if (!value) {
        return callback && callback(new Error(`请输入${text}`))
    } else if (!reg.test(value)) {
        return callback && callback(new Error(`请输入正确的${text}`))
    } else {
        return callback && callback()
    }
}