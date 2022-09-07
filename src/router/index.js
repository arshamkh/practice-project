import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


const routes = [
    {
        path:"/home",
        name:"home",
        component:() => import ("../views/home/index.vue")
    },
    {
        path:"/contact",
        name:"contact",
        component:() => import("../views/contact/index.vue")
    },
    {
        path:"/call",
        name:"call",
        component:()=> import("../views/call/index.vue")
    },
    {
        path:"/book",
        name:"book",
        component:() => import("../views/book/index.vue")
    },
    {
        path:"/mike",
        name:"mike",
        component:() => import("../views/mike/index.vue")
    },
    {
        path:"/jennifer",
        name:"jennifer",
        component:() => import("../views/jennifer/index.vue")
    },
    {
        path:"/nicholas",
        name:"nicholas",
        component:() => import("../views/nicholas/index.vue")
    },
    {
        path:"/mona",
        name:"mona",
        component:() => import("../views/mona/index.vue")
    },
    {
        path:"/news",
        name:"news",
        component:() => import("../views/news/index.vue")
    },
];

const router = new VueRouter({
    mode:"history",
    routes,
});

export default router