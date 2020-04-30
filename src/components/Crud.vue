<template>
  <v-content>
    <h1>Crud</h1>
    <ul>
      <li v-for="product in renderProducts" v-bind:key="product.id">
        {{
        product.id + " "+ product.productName + " "+ product.productPrice
        }}
        <v-btn class="ma-2" outlined color="primary" v-on:click="changeProduct">Change</v-btn>
        <v-btn class="ma-2" color="error" v-on:click="deleProduct">Delete</v-btn>
      </li>
    </ul>
    <v-spacer></v-spacer>
    <h2>product toevoegen</h2>
    <v-btn color="success" class="mr-4" v-on:click="addProduct">Add Product</v-btn>
  </v-content>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "crud",
  props: ["products"],
  mounted() {
    console.log("loaded test");
    this.$store.dispatch("loadProducts");
  },

  computed: {
    ...mapState(["posts"]),

    renderProducts() {
      return this.$store.state.productsLoaded;
    }
  }
};
</script>
