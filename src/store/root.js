/* eslint-disable prettier/prettier */
import * as type from './action-types';
import { getBannerList } from '@/api/public';

export default {
    state: {
        bannerList: []
    },
    mutations: {
        async [type.SET_BANNER_LIST](state, payload) {
            state.bannerList = payload
        }
    },
    actions: {
        async [type.SET_BANNER_LIST]({ commit }) {
            try {
                let bannerList = await getBannerList()
                commit(type.SET_BANNER_LIST, bannerList)
            } catch (error) {
                // Promise.reject(error)
                throw Error(error)
            }
        }
    },
    modules: {}
}
