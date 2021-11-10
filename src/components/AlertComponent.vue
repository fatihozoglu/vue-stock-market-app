<template>
  <!-- This is the alert component for unauthorized route navigation -->
  <div class="alert-component">
    <div class="alert-box">
      <span class="icon">&#9888;</span> You are not authorized to navigate this
      page.
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  // When the alert status is true in Vuex this component is visible for 3 seconds after created and then disappears
  created() {
    setTimeout(() => this.$store.commit("SET_ALERT_STATUS", false), 3000);
  },
};
</script>

<style scoped>
.alert-component {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  z-index: 10;
  padding-top: 100px;
}
.alert-box {
  width: 40%;
  height: fit-content;
  padding: 50px 30px;
  font-size: 20px;
  font-weight: 600;
  border: 2px solid grey;
  border-radius: 5px;
  background-color: rgba(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  font-size: 70px;
  color: rgb(187, 0, 0);
}
</style>
