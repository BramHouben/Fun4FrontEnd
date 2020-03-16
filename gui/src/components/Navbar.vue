<template>
  <nav>
    <v-app-bar color="white" dense white app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Bal</v-toolbar-title>
      <!-- <v-toolbar-side-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon> -->
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="primary" to="/products"
        >Products</v-btn
      >
      <v-btn class="ma-2" outlined color="primary" to="/about">About</v-btn>
      <v-spacer></v-spacer>

      <v-dialog v-model="dialog" scrollable max-width="300px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Winkelmand</v-btn>
        </template>
        <v-card>
          <v-card-title>test</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;"> </v-card-text>
          <li v-for="cartItem in cartItems" :key="cartItem.id">
            {{ cartItem.name }}
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="dialog = false"
                >Kopen</v-btn
              >
            </v-card-actions>
          </li></v-card
        >
      </v-dialog>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="primary" to="/login">Login</v-btn>
      <v-btn class="ma-2" outlined color="primary" to="/register"
        >Register</v-btn
      >
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
    </v-navigation-drawer> -->
  </nav>
</template>

<script>
import ShoppingCartItemsElement from "@/components/ShoppingCartItemsElement";

export default {
  name: "NavbarComponent",

  data() {
    return {
      dialog: false,
      drawer: true
    };
  }
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
