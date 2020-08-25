/* eslint-disable prettier/prettier */
import axios from 'axios'
import { baseURL } from '@/config'

const CancelToken = axios.CancelToken

class Http {
    constructor() {
        this.baseURL = baseURL
        this.timeout = 3000
        this.pending = []
    }
    // 防止重复请求
    cancelPending(config) {
        const pending = this.pending
        pending.forEach((item, index) => {
            if (config) {
                if (item.UrlPath === config.url) {
                    item.Cancel() // 取消请求
                    pending.splice(index, 1) // 移除当前请求记录
                }
            } else {
                item.Cancel() // 取消请求
                pending.splice(index, 1) // 移除当前请求记录
            }
        })
    }
    // 配置请求和响应拦截器
    setInterceptor(instance) {
        instance.interceptors.request.use(config => {
            this.cancelPending(config)
            config.cancelToken = new CancelToken(res => {
                this.pending.push({ 'UrlPath': config.url, 'Cancel': res })
            })
            return config
        })
        instance.interceptors.response.use(res => {
            if (res.status === 200) {
                return Promise.resolve(res.data);
            } else {
                // switch(){ // todo ... } 
                return Promise.reject(res);
            }
        }, err => {
            return Promise.reject(err);
        })
    }
    // 合并参数
    mergeOptions(options) {
        return {
            baseURL: this.baseURL,
            timeout: this.timeout,
            ...options
        }
    }
    request(options) {
        const opts = this.mergeOptions(options)
        const instance = axios.create()
        this.setInterceptor(instance)
        // 当调用axios.requset时 内不会创建一个axios的实例 并且给这个实例传入配置参数
        return instance(opts)
    }
    get(url, config = {}) {
        return this.request({
            method: 'get',
            url: url,
            ...config
        })
    }
    post(url, data) {
        return this.request({
            method: 'post',
            url: url,
            data
        })
    }
}

export default new Http
