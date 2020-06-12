<template>
  <v-content>
    <h1>Orders</h1>

    <div class="flex-table">
      <div>Date</div>
      <div>OrderID</div>
      <div>user</div>
    </div>

    <!-- todo verander dit naar orders-->
    <div v-for="order in orders" v-bind:key="order.id" class="flex-table">
      <div>{{order.orderDetailsId}}</div>
      <div>{{order.timeBought}}</div>
      <div>{{order.userId}}</div>
    </div>
  </v-content>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "ordersCrud",
  // props: ["orders"],

  data() {
    return {
      // search: ""
      //   productname: "",
      //   productprice: ""
      orders: []
    };
  },
  created() {
    console.log("Load orders");
    this.getOrders();
  },
  methods: {
    async getOrders() {
      await this.$store.dispatch("getAllOrdersPlaced").then(result => {
        console.log(result);
        this.orders = result;
      });
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