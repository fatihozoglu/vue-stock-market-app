<template>
  <v-app>
    <div id="app">
      <HeaderComponent class="header-component" />
      <AlertComponent v-if="alertStatus" />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import AlertComponent from "./components/AlertComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    AlertComponent,
  },
  computed: {
    alertStatus() {
      return this.$store.state.alertStatus.status;
    },
  },
  watch: {
    //Whenever the route changes, we add route change information Object to routeChangeArray in Vuex
    $route(to, from) {
      let newRouteItem = {
        name: `Route Change - ${new Date().toLocaleString("en-US")}`,
        children: [
          { name: `From : ${from.fullPath}` },
          { name: `To : ${to.fullPath}` },
        ],
      };
      this.$store.commit("SET_ROUTE_CHANGE_ARRAY", newRouteItem);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  background-color: #f4f8f9;
  width: 100vw;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
}
.header-component {
  height: 80px;
}
</style>
