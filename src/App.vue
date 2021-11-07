<template>
  <div id="app">
    <HeaderComponent class="header-component" />
    <router-view :routeChangeArray="routeChangeArray" />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  data() {
    return {
      routeChangeArray: [],
    };
  },
  components: {
    HeaderComponent,
  },
  watch: {
    $route(to, from) {
      let newRouteItem = `User went from "${from.path}" to "${to.path}"`;
      this.routeChangeArray.push(newRouteItem);
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
