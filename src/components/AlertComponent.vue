<template>
  <div class="alert-component">
    <div class="alert-box">You are not authorized to navigate this page.</div>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
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
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.alert-box {
  width: 40%;
  text-align: center;
  padding: 50px 30px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
}
</style>
