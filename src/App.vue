<template>
  <div id="app">
    <HeaderComponent
      @setAdminStatus="getAdminStatus"
      @setSearchInput="getSearchInput"
    />
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
    return {
      isAdmin: false,
      searchInput: "",
    };
  },
  methods: {
    //Gets user-admin status from HeaderComponent
    getAdminStatus(value) {
      this.isAdmin = value;
    },
    // Gets search input value from HeaderComponent
    getSearchInput(value) {
      this.searchInput = value;
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
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
