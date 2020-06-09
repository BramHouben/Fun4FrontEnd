<template>
  <v-content>
    <!-- <v-container>
      <h2 class="display-2 mb-4">cart</h2>
      <v-list-item two-line>
        <template v-for="(product,index) in cart">
          <v-list-item :key="product.product.id" avatar>
            <v-list-item-avatar>
              <img :src="product.product.picture" width="75px" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{product.product.productName}}</v-list-item-title>
              <v-list-item-subtitle>omschrijving</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item>{{product.product.productPrice}}</v-list-item>
          </v-list-item>
          <v-divider v-if="index+1 <cart.length" :key="index"></v-divider>
        </template>
      </v-list-item>
    </v-container>-->

    <v-list two-line>
      <v-list-item v-for="product in cart" :key="product.product.id">
        <v-list-item-avatar>
          <v-img :src="product.product.picture" width="80px"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{product.product.productName}}</v-list-item-title>
          <v-list-item-subtitle>Hier moet nog een omschrijving</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item>{{product.product.productPrice}}</v-list-item>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item>{{product.aantal}}</v-list-item>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>
    </v-list>
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
        var ttOneProduct = e.aantal * e.product.productPrice;
        sum += ttOneProduct;
      });
      sum = parseFloat(sum).toFixed(2);
      return sum;
    }
  }
};
</script>
      
<style scoped>
</style>