<template>
  <div id="productPage">
    <router-view />
    <Products v-bind:products="products"> </Products>
  </div>
</template>

<script>
import Products from "@/components/Products";

export default {
  name: "productPage",
  components: {
    Products
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "bal",
          price: 12
        },
        {
          id: 2,
          name: "product2",
          price: 13
        },
        {
          id: 3,
          name: "product3",
          price: 22.2
        }
      ]
    };
  }
};
</script>

<style scoped></style>
