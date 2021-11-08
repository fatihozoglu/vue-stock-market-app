import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: `/symbol/:symbol`,
    name: "SearchResult",
    component: () =>
      import(
        /* webpackChunkName: "search-result" */ "../views/SearchResult.vue"
      ),
  },
  {
    path: "/route-logs",
    name: "RouteLogs",
    component: () =>
      import(/* webpackChunkName: "search-result" */ "../views/RouteLogs.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.isAdmin) next();
      else {
        store.commit("SET_ALERT_STATUS", true);
        store.commit(
          "SET_ROUTE_CHANGE_ARRAY",
          `Unauthorized attemp to navigate "/route-logs" -- ${new Date().toLocaleString()}`
        );
        next({ path: from.fullPath });
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
