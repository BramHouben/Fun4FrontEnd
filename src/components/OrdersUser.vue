<template>
  <v-content>
    <h1>Crud</h1>

    <div class="flex-table">
      <div>ID</div>
      <div>Date</div>
      <div>TotalPrice</div>
      <div>Details</div>
    </div>

    <!-- todo verander dit naar orders-->
    <div v-for="order in renderOrders" v-bind:key="order.id" class="flex-table">
      <div>{{order.id}}</div>
      <div>{{order.date}}</div>
      <div>{{order.totalPrice}}</div>
      <div>
        <OrdersUserDetails :product="order"></OrdersUserDetails>
      </div>
    </div>
  </v-content>
</template>

<script>
// import { mapState } from "vuex";
import OrdersUserDetails from "@/components/OrdersUserDetails";

export default {
  name: "crud",
  props: ["orders"],

  components: {
    OrdersUserDetails
  },
  data() {
    return {
      // search: ""
      //   productname: "",
      //   productprice: ""
    };
  },
  mounted() {
    console.log("loaded test");
    this.$store.dispatch("loadOrders");
  },

  computed: {
    // ...mapState(["orders"]),

    renderOrders() {
      return this.$store.state.ordersLoaded;
    }
  },

  methods: {
    changeProduct() {
      this.OrdersUserDetails.dialog = true;
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