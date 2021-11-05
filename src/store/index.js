import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAdmin: false,
    searchInput: "",
    stockData: "",
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
  },
  actions: {
    fetchStockData(context) {
      console.log("New Fetch");
      fetch(
        `https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=${context.state.searchInput}&outputsize=compact&datatype=json`,
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
          context.commit("SET_STOCK_DATA", res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
