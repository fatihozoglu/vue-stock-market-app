import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAdmin: false,
    searchInput: "",
    stockData: "",
    timeSeries: "TIME_SERIES_DAILY",
    routeChangeArray: [],
    alertStatus: false,
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
    SET_ROUTE_CHANGE_ARRAY(state, payload) {
      state.routeChangeArray.push(payload);
    },
    SET_ALERT_STATUS(state, payload) {
      state.alertStatus = payload;
    },
  },
  actions: {
    fetchStockData(context) {
      fetch(
        `https://alpha-vantage.p.rapidapi.com/query?function=${context.state.timeSeries}&symbol=${context.state.searchInput}&datatype=json`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
            "x-rapidapi-key": process.env.VUE_APP_API_KEY,
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
