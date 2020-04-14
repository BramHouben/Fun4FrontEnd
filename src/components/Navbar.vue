<template>
  <nav>
    <v-app-bar color="white" dense white app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Bal</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="primary" to="/products">Products</v-btn>
      <v-btn class="ma-2" outlined color="primary" to="/crud">Crud</v-btn>
      <v-btn class="ma-2" outlined color="primary" to="/about">About</v-btn>
      <v-spacer></v-spacer>
      <cartLive></cartLive>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="primary" to="/login">Login</v-btn>
      <v-btn class="ma-2" outlined color="primary" to="/register">Register</v-btn>
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list nav dense app>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>-->
  </nav>
</template>

<script>
import cartLive from "@/components/ShoppingCartItemsElement";

export default {
  name: "NavbarComponent",
  components: {
    cartLive
  }
  // data() {
  //   return {
  //     dialog: false,
  //     drawer: true
  //   };
  // }
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
