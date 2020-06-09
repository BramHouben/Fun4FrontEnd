<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Details</v-btn>
    </template>
    <v-card class="cardprops">
      <v-card-title>Detials</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <h3>id: {{order.id}}</h3>
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
      dialog: false
    };
  }
};
</script>
    
    <style scoped>
</style>