import Vue from "vue"
import VueRouter from "vue-router";

const Home = () => import("views/home/Home");
const Catagory = () => import("views/catagory/Catagory");
const Profile = () => import("views/profile/Profile");
const Cart = () => import("views/cart/Cart");
const Detail = () => import("views/detail/Detail");

Vue.use(VueRouter);

const  routes = [

    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/profile",
        component:Profile
    },
    {
        path:"/cart",
        component:Cart
    },
    {
        path:"/catagory",
        component:Catagory
    },
    {
        path:"/detail/:id",
      component:Detail
    },
];
const router = new VueRouter({
    mode:"history",
    routes
});

export default router;
