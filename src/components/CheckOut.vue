<template>
  <v-content>
    <h1>{{cart}}</h1>

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
    checkout() {
      console.log("checkout begin");
      this.$store.dispatch("checkout");
    }
  }
};
</script>
      
      <style>
</style>