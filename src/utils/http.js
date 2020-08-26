/* eslint-disable prettier/prettier */
const baseUrl = ''
class Http {
    constructor() {
        this.baseUrl = baseUrl
    }
    mergeOptions(options) {
        let token = uni.getStorageSync('token')
        return {
            ...options,
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
            url: `${this.baseUrl}${options.url}`,
            dataType: 'json'
        }
    }
    request(options) {
        const opts = this.mergeOptions(options)
        let promise = new Promise((resolve, reject) => {
            uni.request(opts).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })

        return promise
    }
    get(url, config = {}) {
        return this.request({
            method: 'get',
            url,
            ...config
        })
    }
    post(url, data) {
        return this.request({
            method: 'post',
            url,
            data
        })
    }
}

export default new Http();
