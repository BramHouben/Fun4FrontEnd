<template>
  <div id="productPage">
    <router-view />
    <InterServerErrorPage v-if="!productsloaded"></InterServerErrorPage>
    <Products v-if="productsloaded" v-bind:productsArray="products"></Products>
  </div>
</template>

<script>
import Products from "@/components/Products";
import InterServerErrorPage from "@/components/InternalServerErrorPage";

export default {
  name: "productPage",
  components: {
    Products,
    InterServerErrorPage
  },
  data() {
    return {
      products: [],
      productsloaded: false
    };
  },

  mounted() {
    this.$store.dispatch("loadProducts").then(result => {
      this.products = result;
      console.log(this.$store.state.productsLoaded);
      this.productsloaded = this.$store.state.productsLoaded;
    });
  }
};
</script>
