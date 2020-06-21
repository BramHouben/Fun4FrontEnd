<template>
  <v-content>
    <h1>Orders</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Date</th>
            <th class="text-left">OrderID</th>
            <th class="text-left">user</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in ordersArray" v-bind:key="order.id">
            <td>{{ order.timeBought }}</td>
            <td>{{ order.orderDetailsId }}</td>
            <td>{{ order.userId }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-content>
</template>

<script>
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