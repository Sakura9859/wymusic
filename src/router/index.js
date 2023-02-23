import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout";
import Home from "@/views/Home";
import Search from "@/views/Search";
import Play from "@/views/Play";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    redirect: "/layout/home",
    component: Layout,
    children: [
      {
        path: "home",
        component: Home,
        meta: {
          title: "首页",
        },
      },
      {
        path: "search",
        component: Search,
        meta: {
          title: "搜索",
        },
      },
    ],
  },
  {
    path: "/play",
    component: Play,
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});
//vant组价

// const isLogin = false; // 登录状态(未登录)
// router.beforeEach((to, from, next) => {
//   if (to.path === "/my" && isLogin === false) {
//     alert("请登录");
//     next(false); // 阻止路由跳转
//   } else {
//     next(); // 正常放行
//   }
// });
export default router;
