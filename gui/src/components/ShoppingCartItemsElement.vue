<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Winkelmand</v-btn>
    </template>
    <v-card>
      <v-card-title>test</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;"></v-card-text>
      <li v-for="(item, index) in productlist" v-bind:key="index">
        {{ item }}
        <v-divider></v-divider>
      </li>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">Kopen</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "cartLive",
  // props: ["productlist"],
  data() {
    return {
      dialog: false,
      drawer: true,
      productlist: ["test1", "test2"]
    };
  }
};
</script>
