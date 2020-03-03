<template>
  <div class="mainNav">
    <v-app-bar color="primary" dense white>
      <v-toolbar-title>Bal</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="primary" to="/products"
        >Products</v-btn
      >
      <v-btn class="ma-2" outlined color="primary" to="/about">About</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="primary" to="/login">Login</v-btn>
      <v-btn class="ma-2" outlined color="primary" to="/register"
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
.mainNav {
  padding-bottom: 10px;
}
.ma-2 {
  margin-left: 5px;
}
</style>
