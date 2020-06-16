<template>
  <v-content>
    <v-container grid-list-md>
      <!-- <v-text-field class="mx-3" flat solo-inverted v-model="search" @click:clear="clearSearch"></v-text-field> -->
      <v-layout row justify-space-around>
        <v-flex md3 v-for="product in productsArray" v-bind:key="product.id">
          <v-card max-width="400" class="mx-auto">
            <v-img class="black--text align-end" height="200" :src="product.picture"></v-img>
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
  props: {
    productsArray: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: "",
      productsloaded: []
    };
  },

  // mounted() {
  //   this.$store
  //     .dispatch("loadProducts")
  //     .then((this.productsloaded = this.$store.state.productsLoaded));
  // },

  computed: {
    ...mapState(["posts"])
  },
  methods: {
    clearSearch() {
      this.search = "";
    },
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
    // getProductsloaded() {
    //    this.$store.state.productsLoaded;
    // }
  }
};
</script>

<style src= "../css/ProductPage.css" scoped>
