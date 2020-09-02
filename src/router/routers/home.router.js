/* eslint-disable prettier/prettier */
const homeRouter = [
    {
        path: '/index',
        name: 'Index',
        component: () => import(/*webpackChunkName:"home"*/ "@/views/home/Index.vue")
    },
    {
        path: '/article',
        name: 'Article',
        component: () => import(/*webpackChunkName:"home"*/ "@/views/article/article.vue")
    },
    {
        path: '*',
        component: () => import(/*webpackChunkName:"home"*/ "@/views/home/Index.vue")
    }
]

export default homeRouter
