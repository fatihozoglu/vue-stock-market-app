import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/symbol/:symbol",
    name: "SearchResult",
    component: () =>
      import(
        /* webpackChunkName: "search-result" */ "../views/SearchResult.vue"
      ),
  },
  {
    path: "/route-logs",
    name: "RouteLogs",
    props: true,
    component: () =>
      import(/* webpackChunkName: "search-result" */ "../views/RouteLogs.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
