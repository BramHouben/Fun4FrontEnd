<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Winkelmand</v-btn>
    </template>
    <v-card>
      <v-card-title>Winkelmand</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;"></v-card-text>
      <li v-for="product in products" v-bind:key="product.product.id">
        {{
        product.product.id +
        " " +
        product.product.productName +
        " " +
        product.product.productPrice +
        " Aantal " +
        product.aantal
        }}
        <v-divider></v-divider>
      </li>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="BuyItems()">Kopen</v-btn>
      </v-card-actions>
      <p>{{ TotalCartSum }}</p>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "cartLive",
  props: ["productlist"],
  data() {
    return {
      dialog: false,
      drawer: false
    };
  },
  methods: {
    BuyItems() {
      // this.$store.dispatch("BuyProducts");
      this.dialog = false;
      this.$router.push("Checkout");
    }
  },
  computed: {
    TotalCartSum: function() {
      var sum = 0;
      this.products.forEach(e => {
        var ttOneProduct = e.aantal * e.product.productPrice;

        sum += ttOneProduct;
      });
      sum = parseFloat(sum).toFixed(2);
      return sum;
    },

    products() {
      return this.$store.state.products;
    }
  }
};
</script>
