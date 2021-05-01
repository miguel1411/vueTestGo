<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "./components/Navbar";

export default{
  components: {
    navbar,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>