/* eslint-disable prettier/prettier */
const userRouter = [
    {
        path: '/login',
        name: 'Login',
        component: () => import(/*webpackChunkName:"login"*/ "@/views/user/Login.vue")
    },
    {
        path:'/reg',
        name:'Reg',
        component: () => import(/*webpackChunkName:"login"*/ "@/views/user/Reg.vue")
    }
]

export default userRouter