<template>
  <v-content>
    <h1>Account</h1>
    <h2>naam: {{username}}</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Tijd</th>
            <th class="text-center">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in ordersArray" v-bind:key="order.id">
            <td>{{ order.orderDetailsId }}</td>
            <td>{{ order.timeBought }}</td>
            <td>
              <OrderDetails :order="order"></OrderDetails>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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