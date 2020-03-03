<template>
  <!-- <div v-bind:key="product.id" v-for="product in products">
      <h2>Name: {{product.name}}</h2>
      <h4>Price: {{product.price}}</h4>
    </div> -->

  <v-container grid-list-md>
    <v-layout row justify-space-around>
      <v-flex md3 v-for="product in products" v-bind:key="product.id">
        <v-card max-width="400" class="cardMain">
          <v-img class="white--text align-end" height="200px" src="">
            <v-card-title>{{ product.name }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0"
            >{{ product.price }} Euro</v-card-subtitle
          >

          <v-card-actions>
            <v-btn icon color="pink">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn class="btnBuy" text>
              Kopen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Products",
  props: ["products"]
};
</script>

<style scoped></style>
