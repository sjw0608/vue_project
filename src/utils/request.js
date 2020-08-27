/* eslint-disable prettier/prettier */
import axios from 'axios'
// import { baseUrL } from '@/config'
import store from '../store/index'
import * as types from '../store/action-types'

const baseUrl = 'http://172.16.6.201:8093/collegeIdealReport'

const CancelToken = axios.CancelToken

class Http {
    constructor() {
        this.baseURL = baseUrl
        this.timeout = 3000
    }
    // 配置请求和响应拦截器
    setInterceptor(instance, url) {
        instance.interceptors.request.use(config => {
            config.cancelToken = new CancelToken(res => {
                store.commit(types.SET_REQUEST_TOKEN, { 'UrlPath': config.url, 'Cancel': res })
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
            delete this.queue[url]
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
        this.setInterceptor(instance, opts.url)
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
