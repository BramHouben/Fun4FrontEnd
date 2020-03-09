<template>
  <div id="productPage">
    <router-view />
    <Products v-bind:products="products"></Products>
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
        },
        {
          id: 4,
          name: "product4",
          price: 13
        },
        {
          id: 5,
          name: "product5",
          price: 13
        },
        {
          id: 6,
          name: "product6",
          price: 13
        },
        {
          id: 7,
          name: "product7",
          price: 13
        },
        {
          id: 8,
          name: "product8",
          price: 13
        },
        {
          id: 9,
          name: "product9",
          price: 13
        },
        {
          id: 10,
          name: "product10",
          price: 13
        }
      ]
    };
  }
};
</script>
