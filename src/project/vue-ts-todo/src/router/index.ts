import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Todo from "../views/Todo.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: "Todo",
    path: "/",
    component: Todo,
  },
  {
    name: "Show",
    path: "/show",
    component: () => import("../views/Show.vue"),
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: "history",
  routes,
});

export default router;
