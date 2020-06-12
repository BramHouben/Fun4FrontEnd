<template>
  <div id="CrudOrdersAdmin">
    <router-view />
    <ordersCrud></ordersCrud>
  </div>
</template>

<script>
import ordersCrud from "@/components/CrudOrders.vue";

export default {
  components: {
    ordersCrud
  }
};
</script>

<style>
</style>