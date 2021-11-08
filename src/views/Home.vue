<template>
  <main class="home-component">
    <h1>Find the best investment opportunity for your future...</h1>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home-component {
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 70px 70px;
  color: rgb(51, 51, 51);
  background-image: url("../assets/investment.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
