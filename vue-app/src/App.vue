<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>





<script>
import Nav from "./views/Nav";
export default {
  components: {
    Nav
  }
};
</script>

<style scoped>
#app {
  display: flex;
}
</style>
