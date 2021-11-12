<template>
  <main class="logs">
    <!-- Vuetify v-treeview component for showing route changes and unauthorized navigation attempt to RouteLogs component-->
    <v-treeview dense hoverable :items="items">
      <!-- This part is used to style unauthorized navigation attempt items (They will be displayed in Red)-->
      <template v-slot:label="{ item }">
        <!-- If there is a warning property in the item(warning only exists in unauthorized navigation attempt objects) it's color is set as Red-->
        <span v-if="item.warning || item.query" style="color: red">
          {{ item.name }}
        </span>
        <!-- If there isn't a warning or query property in object(normal route change items) it will be displayed normally in black-->
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
    //Getting routeChangeArray items from Vuex which includes route change and unauthorized navigation attempt data
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
