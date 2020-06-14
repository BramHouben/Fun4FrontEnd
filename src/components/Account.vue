<template>
  <v-content>
    <h1>Account</h1>
    <h2>naam: {{username}}</h2>
    <!-- <v-btn v-on:click="returnOrders()">bestellingen</v-btn> -->
    <div class="flex-table">
      <div>Order id</div>

      <div>Time</div>
      <div>Details</div>
    </div>
    <div v-for="order in orders" v-bind:key="order.id" class="flex-table">
      <div>{{order.orderDetailsId}}</div>

      <div>{{order.timeBought}}</div>
      <div>
        <OrderDetails :order="order"></OrderDetails>
      </div>
    </div>
  </v-content>
</template>

<script>
import OrderDetails from "@/components/OrderDialog";
export default {
  components: {
    OrderDetails
  },

  data() {
    return {
      username: this.$store.state.currentUser,
      orders: []
    };
  },

  methods: {
    returnOrders: async function() {
      await this.$store.dispatch("getOrdersUser");

      this.orders = this.$store.state.ordersLoaded;
    }
  },

  created() {
    this.returnOrders();
  }
};
</script>

<style scoped>
.flex-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, 20%);
}
</style>