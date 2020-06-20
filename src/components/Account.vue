<template>
  <v-content>
    <h1>Account</h1>
    <h2>naam: {{username}}</h2>
    <div class="flex-table">
      <div>Order id</div>

      <div>Time</div>
      <div>Details</div>
    </div>
    <div v-if="ordersArray.length>=1">
      <div v-for="order in ordersArray" v-bind:key="order.id" class="flex-table">
        <div>{{order.orderDetailsId}}</div>

        <div>{{order.timeBought}}</div>
        <div>
          <OrderDetails :order="order"></OrderDetails>
        </div>
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
  props: {
    ordersArray: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      username: this.$store.state.currentUser
    };
  }

  // methods: {
  //   returnOrders: async function() {
  //     await this.$store.dispatch("getOrdersUser");

  //     this.orders = this.$store.state.ordersLoaded;
  //   }
  // },

  // created() {
  //   this.returnOrders();
  // }
};
</script>

<style scoped>
.flex-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, 20%);
}
</style>