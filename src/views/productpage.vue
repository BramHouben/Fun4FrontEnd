<template>
  <div id="productPage">
    <router-view />
    <Products></Products>
  </div>
</template>

<script>
import Products from "@/components/Products";

export default {
  name: "productPage",
  props: ["productsLoaded"],
  components: {
    Products
  }
};
</script>
