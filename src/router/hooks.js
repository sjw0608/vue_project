/* eslint-disable */
import store from '../store/index'
import * as types from '../store/action-types'

export default {
    // 取消上一个页面发送的请求
    'cancelToken': async function (to, from, next) {
        const cancelToken = store.state.ajaxTokens
        cancelToken.forEach(item => item.Cancel()); 
        store.commit(types.CLEAR_REQUSET_TOKEN)
        next()
    }
};
