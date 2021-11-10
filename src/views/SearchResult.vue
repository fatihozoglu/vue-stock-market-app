<template>
  <!-- Showing this component if we got the stockData from API in Vuex -->
  <main class="main" v-if="stockData">
    <h1 class="title">
      {{ searchInput }} Last Market Session {{ timeSeriesName }} Information
    </h1>
    <CardsContainer />
    <CandlestickChart class="chart" />
  </main>
</template>

<script>
import CardsContainer from "../components/CardsContainer.vue";
import CandlestickChart from "../components/CandlestickChart.vue";

export default {
  name: "SearchResult",
  components: {
    CardsContainer,
    CandlestickChart,
  },
  computed: {
    searchInput() {
      return this.$store.state.searchInput;
    },
    stockData() {
      return this.$store.state.stockData;
    },
    timeSeriesName() {
      return this.$store.getters.timeSeriesName;
    },
  },
  watch: {
    //Whenever searchInput data in Vuex changes we fetch the data again for new searchInput
    searchInput() {
      this.$store.dispatch("fetchStockData");
    },
  },
  created() {
    //Fetch data when this component is created and add searchInput into localStorage for using in page refresh
    if (this.searchInput === "")
      this.$store.commit(
        "SET_SEARCH_INPUT",
        localStorage.getItem("searchInput")
      );
    this.$store.dispatch("fetchStockData");
  },
};
</script>

<style scoped>
.main {
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
  box-shadow: 0px 0px 5px 1px rgb(128, 128, 128);
}
</style>
