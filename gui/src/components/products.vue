<template>
  <v-content>
    <v-container grid-list-md>
      <v-layout row justify-space-around>
        <v-flex md3 v-for="product in products" v-bind:key="product.id">
          <v-card max-width="400" class="cardMain">
            <v-img class="black--text align-end" height="200px" src>
              <v-card-title>{{ product.name }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ product.price }} Euro</v-card-subtitle>
            <v-card-actions>
              <v-btn icon color="pink">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="btnBuy" v-on:click="addToCart">Kopen</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// import cartLive from "@/components/ShoppingCartItemsElement";
export default {
  name: "Products",
  props: ["products"],

  // components: {
  //   cartLive
  // },

  methods: {
    addToCart: function(event) {
      alert("test");
      if (event) {
        console.log("productkopen");
        this.$emit("test");
      }
    }
  }
};
</script>

<style scoped></style>
