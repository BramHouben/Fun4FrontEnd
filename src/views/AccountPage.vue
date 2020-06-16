<template>
  <div id="accountPage">
    <router-view />
    <Account v-if="ordersloaded" v-bind:ordersArray="orders"></Account>
    <ChangeAccount></ChangeAccount>
  </div>
</template>


<script>
import Account from "@/components/Account";
import ChangeAccount from "@/components/ChangeAccountDetails.vue";
export default {
  components: {
    Account,
    ChangeAccount
  },
  data() {
    return {
      orders: [],
      ordersloaded: false
    };
  },
  mounted() {
    this.$store.dispatch("getOrdersUser").then(result => {
      this.orders = result;
      console.log(result);
      console.log(this.$store.state.ordersLoadedSuccesful);
      this.ordersloaded = this.$store.state.ordersLoadedSuccesful;
    });
  }
};
</script>