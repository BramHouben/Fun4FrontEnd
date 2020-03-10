<template>
  <!-- <div id="app">
    <app-header></app-header>
    <router-view></router-view>

    <app-footer></app-footer>
  </div>-->

  <v-app id="app">
    <app-header></app-header>

    <router-view />
  </v-app>
</template>

<script>
import NavbarComponent from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    "app-header": NavbarComponent
    // "app-footer": Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50; 
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
