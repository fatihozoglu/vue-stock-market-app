<template>
  <div id="app">
    <HeaderComponent class="header-component" />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  data() {
    return {};
  },
  methods: {},
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
