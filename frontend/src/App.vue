<template>
  <div id="app">
    <Navbar v-if="showNavbar" />
    <router-view />
    <Footer v-if="showNavbar" />
  </div>
</template>

<script>
import Navbar from "./components/common/Navbar.vue";
import Footer from "./components/common/Footer.vue"
import '@fortawesome/fontawesome-free/css/all.css';


export default {
  components: { Navbar, Footer },
  computed: {
    showNavbar() {
      return !["/login", "/register"].includes(this.$route.path);
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}
</style>
