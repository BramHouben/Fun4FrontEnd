<template>
  <div id="ordersPage">
    <router-view />
    <Order></Order>
  </div>
</template>


<script>
import Order from "@/components/OrdersUser";
export default {
  components: {
    Order
  }
};
</script>