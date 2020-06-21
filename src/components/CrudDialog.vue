<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Change Item</v-btn>
    </template>
    <v-card class="cardprops">
      <v-card-title>Change</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <h3>id: {{product.id}}</h3>
        <h3>Name: {{product.productName}}</h3>
        <h3>Price: {{product.price}}</h3>
      </v-card-text>
      <v-divider></v-divider>
      <v-form ref="form">
        <v-text-field v-model="product_id" label="ID" solo disabled filled></v-text-field>
        <v-text-field label="Name" filled :rules="inputRulesName" v-model="newName"></v-text-field>
        <v-text-field
          label="Price"
          type="number"
          :rules="inputRulesNumber"
          filled
          v-model="newPrice"
        ></v-text-field>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="changeItem(product)">Change</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["product"],
  name: "CrudChange",
  data() {
    return {
      newName: "",
      newPrice: 0,
      dialog: false,
      product_id: this.product.id,
      inputRulesName: [v => v.length >= 5 || "Name has to be a length of 5"],
      inputRulesNumber: [
        v => {
          if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
          return "Number has to be between 0 and 999!";
        }
      ]
    };
  },
  methods: {
    changeItem: async function(product) {
      if (this.$refs.form.validate()) {
        await this.$store
          .dispatch("editProduct", {
            id: product.id,
            productName: this.newName,
            price: this.newPrice
          })
          .then(result => {
            if (result.status == 200) {
              this.dialog = false;
              this.$router.go("/crud");
            }
          });
      }
    }
  }
};
</script>
<style scoped>
.cardprops {
  height: 25%;
}
</style>