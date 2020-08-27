/* eslint-disable prettier/prettier */
import * as types from './action-types';
import { getBannerList } from '@/api/public';

export default {
    state: {
        bannerList: [],
        ajaxTokens: []
    },
    mutations: {
        async [types.SET_BANNER_LIST](state, payload) {
            state.bannerList = payload
        },
        [types.CLEAR_REQUSET_TOKEN](state) {
            state.ajaxTokens = []
        },
        [types.SET_REQUEST_TOKEN](state, payload) {
            //取消重复请求
            const ajaxTokens = state.ajaxTokens
            const find = ajaxTokens.filter(item => item.UrlPath === payload.UrlPath)
            if (find.length) {
                payload.Cancel()
            } else {
                state.ajaxTokens = [...state.ajaxTokens, payload]
            }
        }
    },
    actions: {
        async [types.SET_BANNER_LIST]({ commit }) {
            try {
                let bannerList = await getBannerList()
                commit(types.SET_BANNER_LIST, bannerList)
            } catch (error) {
                // Promise.reject(error)
                throw Error(error)
            }
        }
    },
    modules: {}
}
