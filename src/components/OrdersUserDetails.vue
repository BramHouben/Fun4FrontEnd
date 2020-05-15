<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Change Item</v-btn>
    </template>
    <v-card class="cardprops">
      <v-card-title>Details</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <h3>Hier moet datum</h3>
      </v-card-text>
      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["order"],
  name: "CrudDetails",
  data() {
    return {
      dialog: false
    };
  }
};
</script>
<style scoped>
.cardprops {
  height: 25%;
}
</style>