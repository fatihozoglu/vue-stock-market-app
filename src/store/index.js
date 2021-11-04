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
    fetchStockData(context, symbol) {
      console.log("Fetching");
      fetch(
        `https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&datatype=json`,
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
        .then((res) => context.commit("SET_STOCK_DATA", res))
        .catch((err) => {
          console.error(err);
        });
    },
  },
  getters: {
    formattedStockData: (state) => {
      let dataArray = [];
      for (let data in state.stockData["Time Series (Daily)"]) {
        let newObject = {
          Date: data,
          Open: state.stockData["Time Series (Daily)"][data]["1. open"],
          High: state.stockData["Time Series (Daily)"][data]["2. high"],
          Low: state.stockData["Time Series (Daily)"][data]["3. low"],
          Close: state.stockData["Time Series (Daily)"][data]["4. close"],
          Volume: state.stockData["Time Series (Daily)"][data]["5. volume"],
        };
        dataArray.push(newObject);
      }
      return dataArray;
    },
  },
});
