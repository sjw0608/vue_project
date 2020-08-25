/* eslint-disable prettier/prettier */
/**
 * @description: 公共方法
 * @author: 宋江伟
 * @time: 2020-08-24
 */

/**
 * @description: // 日期格式化
 * @param {*} time: 时间
 * @param {*} pattern: 转换后的时间格式
 */
export function parseTime(time, pattern) {
	if (arguments.length === 0 || !time) {
		return null
	}
	const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
	let date
	if (typeof time === 'object') {
		date = time
	} else {
		if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
			time = parseInt(time)
		} else if (typeof time === 'string') {
			time = time.replace(new RegExp(/-/gm), '/');
		}
		if ((typeof time === 'number') && (time.toString().length === 10)) {
			time = time * 1000
		}
		date = new Date(time)
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		let value = formatObj[key]
		// Note: getDay() returns 0 on Sunday
		if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
		if (result.length > 0 && value < 10) {
			value = '0' + value
		}
		return value || 0
	})
	return time_str
}

/**
 * @description: 获取地址栏url拼接的数据
 * @param {string} url
 * @returns {Object}
 */
export const getQueryObject = (url) => {
	url = url == null ? window.location.href : url
	const search = url.substring(url.lastIndexOf('?') + 1)
	const obj = {}
	const reg = /([^?&=]+)=([^?&=]*)/g
	search.replace(reg, (rs, $1, $2) => {
		const name = decodeURIComponent($1)
		let val = decodeURIComponent($2)
		val = String(val)
		obj[name] = val
		return rs
	})
	return obj
}

/**
 * @description: 函数防抖
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export const debounce = (func, wait, immediate) => {
	let timeout, args, context, timestamp, result
	const later = function () {
		// 据上一次触发时间间隔
		const last = +new Date() - timestamp
		// 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
		if (last < wait && last > 0) {
			timeout = setTimeout(later, wait - last)
		} else {
			timeout = null
			// 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
			if (!immediate) {
				result = func.apply(context, args)
				if (!timeout) context = args = null
			}
		}
	}
	return function (...args) {
		context = this
		timestamp = +new Date()
		const callNow = immediate && !timeout
		// 如果延时不存在，重新设定延时
		if (!timeout) timeout = setTimeout(later, wait)
		if (callNow) {
			result = func.apply(context, args)
			context = args = null
		}
		return result
	}
}

/**
 * @description: 获取数组中目标数据
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
export const find = (list, fn) => list.filter(fn)[0]

/**
 * @description: 深拷贝
 * @param {*} target 目标数据
 * @return {*} 拷贝后结果
 */
export const deepClone = (obj, cache = []) => {
	if (obj === null || typeof obj !== 'object') {
		return obj
	}
	// if obj is hit, it is in circular structure
	const hit = find(cache, c => c.original === obj)

	if (hit) {
		return hit.copy
	}
	const copy = Array.isArray(obj) ? [] : {}
	// put the copy into cache at first
	// because we want to refer it in recursive deepCopy
	cache.push({
		original: obj,
		copy
	})
	Object.keys(obj).forEach(key => {
		copy[key] = deepClone(obj[key], cache)
	})

	return copy
}
 