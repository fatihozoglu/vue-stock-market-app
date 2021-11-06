import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAdmin: false,
    searchInput: "",
    stockData: "",
    timeSeries: "TIME_SERIES_DAILY",
  },
  mutations: {
    SET_ADMIN(state, payload) {
      state.isAdmin = payload;
    },
    SET_SEARCH_INPUT(state, payload) {
      state.searchInput = payload;
    },
    SET_STOCK_DATA(state, payload) {
      state.stockData = payload;
    },
    SET_TIME_SERIES(state, payload) {
      state.timeSeries = payload;
    },
  },
  actions: {
    fetchStockData(context) {
      console.log("New Fetch");
      fetch(
        `https://alpha-vantage.p.rapidapi.com/query?function=${context.state.timeSeries}&symbol=${context.state.searchInput}&datatype=json`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
            "x-rapidapi-key":
              "3f6c2cfd89msha6a53de41a6dc67p1a51dcjsn759408a3571f",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          let arrayData = Object.keys(res[context.getters.timeSeriesName]).map(
            (item) => ({
              [item]: res[context.getters.timeSeriesName][item],
            })
          );
          arrayData = arrayData.slice(0, 100);
          context.commit("SET_STOCK_DATA", arrayData);
          console.log(context.state.stockData);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  getters: {
    timeSeriesName(state) {
      switch (state.timeSeries) {
        case "TIME_SERIES_DAILY":
          return "Time Series (Daily)";
        case "TIME_SERIES_WEEKLY":
          return "Weekly Time Series";
        case "TIME_SERIES_MONTHLY":
          return "Monthly Time Series";
      }
    },
  },
});
