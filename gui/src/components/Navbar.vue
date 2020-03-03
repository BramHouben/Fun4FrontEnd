<template>
  <div class="mainNav">
    <v-app-bar color="deep-purple accent-4" dense white>
      <v-toolbar-title>Bal</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="indigo" to="/products"
        >Products</v-btn
      >
      <v-btn class="ma-2" outlined color="indigo" to="/about">About</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="indigo" to="/login">Login</v-btn>
      <v-btn class="ma-2" outlined color="indigo" to="/register"
        >Register</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.ma-2 {
  margin-left: 5px;
}
</style>
