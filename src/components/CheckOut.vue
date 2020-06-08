<template>
  <v-content>
    <h3>{{cart}}</h3>
    <h1>Totale prijs: {{TotalCartSum}}</h1>
    <div>
      <v-btn class="ma-2" color="primary" v-on:click="checkout()">Checkout</v-btn>
    </div>
  </v-content>
</template>
      
<script>
export default {
  data() {
    return {
      cart: this.returnCart()
    };
  },

  methods: {
    returnCart() {
      return this.$store.state.products;
    },
    async checkout() {
      console.log("checkout begin");
      await this.$store.dispatch("checkout");
      this.$router.push("/products");
    }
  },
  computed: {
    TotalCartSum: function() {
      var sum = 0;
      this.cart.forEach(e => {
        sum += e.product.productPrice;
      });
      sum = parseFloat(sum).toFixed(2);
      return sum;
    }
  }
};
</script>
      
      <style>
</style>