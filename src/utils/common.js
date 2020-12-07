/**
 * @description 前端题目汇总
 * @time 2020-11-16
 */


 /**
  * 一、获取 url 中的参数
  * 1. 指定参数名称，返回该参数的值 或者 空字符串
  * 2. 不指定参数名称，返回全部的参数对象 或者 {}
  * 3. 如果存在多个同名参数，则返回数组
  */
// eg: getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe','key') => [1,2,3]
const getUrlParam = (sUrl, sKey) => {
    let search = sUrl.split('?')[1].split('#')[0]
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
	search.replace(reg, (rs, $1, $2) => {
		const name = decodeURIComponent($1)
		let val = decodeURIComponent($2)
        obj[name] =obj.hasOwnProperty(name)? [].concat(obj[name],val) : obj[name] = val 
		return rs
	})
	return sKey ? obj[sKey] || '': obj
} 

/**
 * 二、封装函数 f，使 f 的 this 指向指定的对象
 */

const bindThis = (f, oTarget) =>{
    let args = Array.prototype.slice.call(arguments, 2);
    return function(){
        return f.apply(oTarget, Array.prototype.slice.call(arguments).concat(args));
    }
}

/**
 * 三、数组转树
 */
const toTree = (data) => {
    let result = []
    if(!Array.isArray(data)) {
        return result
    }
    data.forEach(item => {
        delete item.children;
    });
    let map = {};
    data.forEach(item => {
        map[item.id] = item;
    });
    data.forEach(item => {
        let parent = map[item.pid];
        if(parent) {
            (parent.children || (parent.children = [])).push(item);
        } else {
            result.push(item);
        }
    });
    return result;
}

/**
 * 四、斐波那契数据
 * function fibonacci(n) {
    if(n === 1 || n === 2){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
    }   
 */

const fibonacci = (n) => {
    let f1 = 1
    let f2 = 1
    for (let i =2;i<n;++i) {
        f2 += f1
        f1 = f2-f1
    }
    return f2
}