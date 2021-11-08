<template>
  <header class="header">
    <!-- Logo Starts Here -->
    <router-link class="logo" :to="{ name: 'Home' }"
      ><img src="../assets/logo.jpg" alt="logo"
    /></router-link>
    <!-- Logo Ends Here -->

    <!--Search Input Area Starts Here-->
    <input
      @change="mutateSearchInputInVuex"
      v-model="searchInput"
      type="text"
      placeholder="Search Stock Symbol"
    />
    <!--Search Input Area Ends Here-->

    <!--User-Admin Switcher Starts Here-->
    <div class="switch-container">
      <router-link class="logs-route" :to="{ name: 'RouteLogs' }"
        >Logs</router-link
      >
      <div class="user-switch">
        <span class="user-status">{{ adminStatus }}</span>
        <label class="switch">
          <input
            @change="mutateAdminStatusInVuex"
            v-model="isAdmin"
            type="checkbox"
            checked
          />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    <!--User-Admin Switcher Ends Here-->
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      searchInput: "",
      isAdmin: false,
    };
  },
  methods: {
    //Whenever the admin status changes, this function is invoked and mutates Vuex's "isAdmin" value
    mutateAdminStatusInVuex() {
      this.$store.commit("SET_ADMIN", this.isAdmin);
    },
    //Whenever the sarch input changes, this function is invoked and mutates Vuex's "searchInput" value
    mutateSearchInputInVuex() {
      if (this.searchInput !== "") {
        this.$store.commit("SET_SEARCH_INPUT", this.searchInput);
        this.goSearchResultView();
        this.searchInput = "";
      }
    },
    //Programmatic navigation for going SearchResult view when searchInput is changed
    goSearchResultView() {
      this.$router.push({
        name: "SearchResult",
        params: { symbol: this.searchInput },
      });
    },
  },
  //Calculates which type of use is active based on isAdmin value, if isAdmin is false; it is normal user, if isAdmin is true; it is Admin
  computed: {
    adminStatus() {
      return this.isAdmin === false ? "User" : "Admin";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding: 0 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}
.logo {
  height: 80%;
  display: flex;
  align-items: center;
}
img {
  height: 100%;
  width: auto;
}
input {
  font-size: 18px;
  width: 300px;
  height: 40px;
  padding-left: 50px;
  border: 1px solid rgb(190, 190, 190);
  border-radius: 5px;
  outline: none;
  background-image: url("../assets/search_icon.png");
  background-repeat: no-repeat;
  background-size: 25px;
  background-position-y: center;
  background-position-x: 10px;
}
.switch-container {
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logs-route {
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  border: 1px solid grey;
  border-radius: 10px;
}
.logs-route:hover {
  background-color: rgb(231, 247, 247);
}
.user-switch {
  display: flex;
  align-items: center;
}
.user-status {
  width: 50px;
  font-size: 18px;
  font-weight: 400;
  margin-right: 10px;
}

/* Slider checkbox styling for user-admin switcher */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #2196f3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>
