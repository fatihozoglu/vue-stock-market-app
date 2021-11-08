<template>
  <div class="cards-container">
    <div class="card" style="background-color: #fa5c01">
      <p class="card-heading">OPEN ($)</p>
      <p class="card-body">
        {{ Number(stockDataLastDayInfo["1. open"]).toLocaleString("en-US") }}
      </p>
    </div>
    <div class="card" style="background-color: #8f83f4">
      <p class="card-heading">HIGH ($)</p>
      <p class="card-body">
        {{ Number(stockDataLastDayInfo["2. high"]).toLocaleString("en-US") }}
      </p>
    </div>
    <div class="card" style="background-color: #3e8870">
      <p class="card-heading">LOW ($)</p>
      <p class="card-body">
        {{ Number(stockDataLastDayInfo["3. low"]).toLocaleString("en-US") }}
      </p>
    </div>
    <div class="card" style="background-color: #fa5292">
      <p class="card-heading">CLOSE ($)</p>
      <p class="card-body">
        {{ Number(stockDataLastDayInfo["4. close"]).toLocaleString("en-US") }}
      </p>
    </div>
    <div class="card" style="background-color: #25a9ed">
      <p class="card-heading">VOLUME ($)</p>
      <p class="card-body">
        {{ Number(stockDataLastDayInfo["5. volume"]).toLocaleString("en-US") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarsContainer",
  computed: {
    stockDataLastDayInfo() {
      return this.$store.state.stockData[0][
        Object.keys(this.$store.state.stockData[0])
      ];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
}
.card {
  padding: 20px;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0px 20px 15px -17px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 20px 15px -17px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 20px 15px -17px rgba(0, 0, 0, 0.4);
}
.card-heading {
  margin-bottom: 5px;
  margin: 0;
}
.card-body {
  font-size: 28px;
  font-weight: 800;
  margin: 0;
}
</style>
