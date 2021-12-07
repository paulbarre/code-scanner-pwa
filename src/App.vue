<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Locale />
  </div>
</template>

<script>
import Locale from './components/Locale.vue';

export default {
  name: 'App',
  components: {
    Locale,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
