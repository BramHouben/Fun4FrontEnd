<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Change</v-btn>
    </template>
    <v-card>
      <v-card-title>Change</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;"></v-card-text>

      <v-card-actions>
        <v-btn color="blue darken-1" text @click="BuyItems()">Kopen</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CrudChange",

  data() {
    return {
      dialog: false
    };
  }
};
</script>
