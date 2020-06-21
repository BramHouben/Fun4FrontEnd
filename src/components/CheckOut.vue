<template>
  <v-content>
    <div v-if="cart.length>=1">
      <v-list two-line>
        <v-list-item v-for="product in cart" :key="product.product.id">
          <v-list-item-avatar>
            <v-img :src="product.product.picture" width="80px"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{product.product.productName}}</v-list-item-title>
            <v-list-item-subtitle>Hier moet nog een omschrijving</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-content v-if="product.product.discount==null">
            <v-list-item>{{product.product.price}}</v-list-item>
          </v-list-item-content>

          <v-list-item-content v-if="product.product.discount!=null">
            <v-list-item>Korting: {{product.product.discount}}</v-list-item>
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item>{{product.aantal}}</v-list-item>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>
      </v-list>
      <h1>{{TotalCartSum}}</h1>
      <v-btn class="primary" @click="checkout()">Checkout</v-btn>
    </div>
    <div v-if="cartempty">
      <h1>winkelwagen is leeg!</h1>
    </div>
  </v-content>
</template>
      
<script>
export default {
  data() {
    return {
      cart: [],
      cartempty: false
    };
  },

  methods: {
    returnCart() {
      this.cart = this.$store.state.products;
      if (this.cart.length == 0) {
        this.cartempty = true;
      }
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
        if (e.product.discount != null) {
          var ttOneProductdiscount = e.aantal * e.product.discount;
          sum += ttOneProductdiscount;
        } else {
          var ttOneProduct = e.aantal * e.product.price;
          sum += ttOneProduct;
        }
      });
      sum = parseFloat(sum).toFixed(2);
      return sum;
    }
  },
  created() {
    this.returnCart();
  }
};
</script>
      
<style scoped>
</style>