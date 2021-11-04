<template>
  <main class="main" v-if="stockData">
    <h1 class="title">
      {{ stockData["Meta Data"]["2. Symbol"] }} Last Day Information
    </h1>
    <CardsContainer class="cards-container" :symbol="symbol" />
    <CandlestickChart class="chart" />
  </main>
</template>

<script>
import CardsContainer from "../components/CardsContainer.vue";
import CandlestickChart from "../components/CandlestickChart.vue";

export default {
  name: "Home",
  components: { CardsContainer, CandlestickChart },
  props: {
    symbol: {
      type: String,
      required: true,
    },
  },
  computed: {
    searchInput() {
      return this.$store.state.searchInput;
    },
    stockData() {
      return this.$store.state.stockData;
    },
  },
  watch: {
    $route() {
      this.$store.dispatch("fetchStockData", this.searchInput);
    },
  },
  mounted() {
    this.$store.dispatch("fetchStockData", this.searchInput);
  },
};
</script>

<style scoped>
.main {
  width: 100vw;
  min-height: 100vh;
  padding: 30px 70px 50px 70px;
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
</style>
