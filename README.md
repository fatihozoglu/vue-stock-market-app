# Vue Stock Market App

This is the solution for Reengen Full Stack Bootcamp with Vuejs and Nodejs Week-3 Project. It is built with [Vuejs](https://vuejs.org/) by using [Vue CLI](https://cli.vuejs.org/), for state management: [Vuex](https://vuex.vuejs.org/), for routing: [Vue Router](https://router.vuejs.org/), for material design components and styling: [Vuetify](https://vuetifyjs.com/en/), for creating candlestick chart: [D3.js](https://d3js.org/) and for getting data from a REST API: [RapidAPI-Alpha-Vantage](https://rapidapi.com/alphavantage/api/alpha-vantage).

You can check the [live demo here](http://fozoglu-vue-stock-market-app.surge.sh/).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Project Setup](#project-setup)

## Overview

### The challenge

The Stock Market App will consist of these functionalities:

- User must search for a stock symbol in Home Page
- After searching the symbol route must change as "/symbol/:symbol" (e.g. symbol/GOOGL)
- Related stock information (open high, low, close and volume) must be displayed in a Candlestick Chart
- Default chart must display daily data and User must be able to change it with weekly or monthly data
- Every route change must be saved and displayed on a separate page
- There must be a user/admin switch in Header Component
- Only Admin must be able to display routes' log data
- If normall user tries to navigate to display logs, there must appear a warning
- Unauthorized navigation attemps to router change logs must also be displayed in logs with different styling

### Links

- Solution URL: [Github Link](https://github.com/fatihozoglu/vue-stock-market-app)
- Live Site URL: [Vue Stock Market App](http://fozoglu-vue-stock-market-app.surge.sh/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Custom Properties
- CSS Flexbox
- CSS Grid
- [Vuejs](https://vuejs.org/)
- [Vue CLI](https://cli.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)
- [D3.js](https://d3js.org/)
- [RapidAPI-Alpha-Vantage](https://rapidapi.com/alphavantage/api/alpha-vantage)

## Author

- Portfolio - [Fatih Özoğlu](https://fatihozoglu.github.io/react-portfolio/)
- Linkedin - [Fatih Özoğlu](https://www.linkedin.com/in/fatihozoglu/)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
