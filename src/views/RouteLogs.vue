<template>
  <main class="logs">
    <div
      class="route-item"
      v-for="(route, index) in this.$store.state.routeChangeArray"
      :key="index"
    >
      {{ route }}
    </div>
  </main>
</template>

<script>
export default {
  name: "RouteLog",
};
</script>

<style scoped>
.logs {
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.route-item {
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 400;
  background-color: rgb(248, 255, 255);
  border: 1px solid rgb(180, 180, 180);
  border-radius: 10px;
}
</style>
