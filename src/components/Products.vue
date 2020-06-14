<template>
  <v-content>
    <v-container grid-list-md>
      <v-layout row justify-space-around>
        <v-flex md3 v-for="product in productsloaded" v-bind:key="product.id">
          <v-card max-width="400" class="cardMain">
            <v-img class="black--text align-end" height="150px" :src="product.picture"></v-img>
            <v-card-title>{{ product.productName }}</v-card-title>
            <v-card-subtitle v-if="product.discount ==null" class="pb-0">{{ product.price }} Euro</v-card-subtitle>
            <v-card-subtitle
              v-if="product.discount !=null"
              class="pb-0 red"
            >Oude prijs {{ product.price }} Euro</v-card-subtitle>
            <v-card-subtitle v-if="product.discount !=null" class="pb-0">{{ product.discount }} Euro</v-card-subtitle>
            <v-card-actions>
              <v-btn icon color="pink">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn v-on:click="addToCart(product)">Kopen</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Products",

  // data() {
  //   return {
  //     productList: []
  //   };
  // },

  mounted() {
    this.$store.dispatch("loadProducts");
  },

  computed: {
    ...mapState(["posts"]),
    productsloaded() {
      return this.$store.state.productsLoaded;
    }
  },
  methods: {
    addToCart: function(newproduct) {
      // alert("test " + this.newproduct);

      if (event) {
        // alert(product.name);

        this.$store.dispatch("addProduct", {
          product: newproduct,
          aantal: 1
        });
      }
    }
  }
};
</script>

<style scoped></style>
