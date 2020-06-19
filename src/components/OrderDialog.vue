<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on" @click="getInfo(order.id)">Details</v-btn>
    </template>
    <v-card class="cardprops">
      <v-card-title>Details</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <h3>Order id: {{ order.id }}</h3>
        <h2>Totale Prijs: {{ totalPrice }}</h2>
        <div
          v-for="orderdetails in orderdetails.productOrderedList"
          v-bind:key="orderdetails.id"
          class="flex-table"
        >
          <div>
            Naam:{{ orderdetails.productName }} en aantal:{{
            orderdetails.count
            }}
          </div>
        </div>
      </v-card-text>
      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "OrderDetails",
  props: ["order"],
  data() {
    return {
      dialog: false,
      orderdetails: [],
      totalPrice: 0
    };
  },
  methods: {
    async getInfo(orderid) {
      return await this.$store
        .dispatch("getDetails", { id: orderid })
        .then(result => {
          this.orderdetails = result;
          this.totalPrice = this.orderdetails.totalPrice;
        });
    }
  }
};
</script>

<style scoped></style>
