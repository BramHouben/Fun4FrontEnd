<template>
  <div>
    <div v-bind:key="product.id" v-for="product in products">
      <h2>Name: {{product.name}}</h2>
      <h4>Price: {{product.price}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: ["products"]
};
</script>

<style scoped>
</style>
