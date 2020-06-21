<template>
  <v-content>
    <h1>Orders</h1>

    <div class="flex-table">
      <div>Date</div>
      <div>OrderID</div>
      <div>user</div>
    </div>

    <!-- todo verander dit naar orders-->
    <div v-for="order in ordersArray" v-bind:key="order.id" class="flex-table">
      <div>{{order.timeBought}}</div>
      <div>{{order.orderDetailsId}}</div>
      <div>{{order.userId}}</div>
    </div>
  </v-content>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "ordersCrud",
  props: {
    ordersArray: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.flex-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, 20%);
}
</style>