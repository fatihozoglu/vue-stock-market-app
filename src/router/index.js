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
    // BeforeEnter Navigation Guard for RouteLogs Component to prevent unauthorized navigation attemp from normal users
    beforeEnter: (to, from, next) => {
      if (store.state.isAdmin) next();
      else {
        //When an unauthorized attempt occures, we set alarmStatus in Vuex to true for showing the AlertComponent.vue component
        store.commit("SET_ALERT_STATUS", {
          status: true,
          message:
            "You are not authorized to navigate this page. Please Sign in as Admin",
        });
        store.commit("SET_ROUTE_CHANGE_ARRAY", {
          warning: true,
          name: `Unauthorized Navigation Attempt - ${new Date().toLocaleString(
            "en-US"
          )}`,
        });
        //This enables to stay on the same page when an unauthorized navigation attempt occures
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
