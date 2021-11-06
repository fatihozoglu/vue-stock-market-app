<template>
  <main class="main" v-if="stockData">
    <CandlestickChart class="chart" />
  </main>
</template>

<script>
import CandlestickChart from "../components/CandlestickChart.vue";

export default {
  name: "SearchResult",
  components: { CandlestickChart },
  computed: {
    searchInput() {
      return this.$store.state.searchInput;
    },
    stockData() {
      return this.$store.state.stockData;
    },
  },
  watch: {
    searchInput() {
      this.$store.dispatch("fetchStockData");
    },
  },
  mounted() {
    this.$store.dispatch("fetchStockData");
  },
};
</script>

<style scoped>
.main {
  width: 100vw;
  min-height: 100vh;
  padding: 30px 70px 70px;
}
.title {
  font-size: 18px;
  font-weight: 600;
  color: rgb(97, 97, 97);
  margin-bottom: 10px;
}
.cards-container {
  margin-bottom: 30px;
}
.chart {
  box-shadow: 0px 0px 10px 3px rgb(128, 128, 128);
}
</style>
