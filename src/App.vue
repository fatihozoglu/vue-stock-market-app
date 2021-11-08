<template>
  <div id="app">
    <HeaderComponent class="header-component" />
    <AlertComponent v-if="alertStatus" />
    <router-view />
  </div>
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
      return this.$store.state.alertStatus;
    },
  },
  watch: {
    $route(to, from) {
      let newRouteItem = `User navigated from "${from.path}" to "${to.path}"`;
      this.$store.commit("SET_ROUTE_CHANGE_ARRAY", newRouteItem);
    },
  },
};
</script>

<style scoped>
#app {
  background-color: #f4f8f9;
  width: 100vw;
  min-height: 100vh;
}
.header-component {
  width: 100vw;
  height: 80px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
