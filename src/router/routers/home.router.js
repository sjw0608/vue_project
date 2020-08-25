/* eslint-disable prettier/prettier */
const homeRouter = [
    {
        path: '/index',
        name: 'Index',
        component: () => import(/*webpackChunkName:"home"*/ "@/views/home/Index.vue")
    },
    {
        path: '*',
        component: () => import(/*webpackChunkName:"home"*/ "@/views/home/Index.vue")
    }
]

export default homeRouter
