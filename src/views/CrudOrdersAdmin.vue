<template>
  <div id="CrudOrdersAdmin">
    <router-view />
    <ordersCrud v-if="ordersAdminloaded" v-bind:ordersArray="ordersAdmin"></ordersCrud>
  </div>
</template>

<script>
import ordersCrud from "@/components/CrudOrders.vue";

export default {
  components: {
    ordersCrud
  },
  data() {
    return {
      ordersAdmin: [],
      ordersAdminloaded: false
    };
  },
  async created() {
    await this.$store.dispatch("getAllOrdersPlaced").then(result => {
      console.log(result);
      this.ordersAdminloaded = true;
      this.ordersAdmin = result;
    });
  }
};
</script>

<style>
</style>