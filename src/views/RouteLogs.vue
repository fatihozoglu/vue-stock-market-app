<template>
  <main class="logs">
    <v-treeview dense hoverable :items="items">
      <template v-slot:label="{ item }">
        <span v-if="item.warning" style="color: red">
          {{ item.name }}
        </span>
        <span v-else>
          {{ item.name }}
        </span>
      </template>
    </v-treeview>
  </main>
</template>

<script>
export default {
  name: "RouteLog",
  computed: {
    items() {
      return this.$store.state.routeChangeArray;
    },
  },
};
</script>

<style scoped>
.logs {
  padding: 40px 70px;
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
  background-color: white;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 10px;
}
</style>
