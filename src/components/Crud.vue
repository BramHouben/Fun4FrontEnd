<template>
  <v-content>
    <v-alert
      :value="alert"
      color="green"
      border="top"
      transition="scale-transition"
      dismissible
    >Discount process done</v-alert>
    <v-alert
      :value="productAddedSuccesful"
      color="green"
      border="top"
      transition="scale-transition"
      dismissible
    >{{messageText}}</v-alert>
    <!-- <v-alert
      :value="errorProduct"
      color="red"
      border="top"
      transition="scale-transition"
      dismissible
    >Error adding product!</v-alert>-->
    <h1>Crud</h1>

    <div class="flex-table">
      <div>ID</div>
      <div>Name</div>
      <div>Price</div>
      <div>Change</div>
      <div>Delete</div>
    </div>

    <div v-for="product in productsArray" v-bind:key="product.id" class="flex-table">
      <div>{{product.id}}</div>
      <div>{{product.productName}}</div>
      <div>{{product.price}}</div>
      <div>
        <CrudChange :product="product"></CrudChange>
      </div>

      <div>
        <v-btn class="ma-2" color="error" v-on:click="deleteProduct(product)">Delete</v-btn>
      </div>
    </div>

    <v-spacer></v-spacer>
    <h2>product toevoegen</h2>

    <v-row align="center">
      <v-row justify="space-around">
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="productname" label="Product name" required></v-text-field>

          <v-text-field v-model="productprice" label="Product price" type="number" required></v-text-field>
          <v-file-input v-model="picture" accept="image/*" label="Foto"></v-file-input>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            v-on:click="addProduct(productname,productprice,picture)"
          >Add Product</v-btn>
        </v-form>
      </v-row>
    </v-row>

    <v-btn color="error" class="mr-4" v-on:click="setDiscounts()">Discount store</v-btn>
  </v-content>
</template>

<script>
import { mapState } from "vuex";
import CrudChange from "@/components/CrudDialog";

export default {
  name: "crud",
  props: {
    productsArray: {
      type: Array,
      required: true
    }
  },

  components: {
    CrudChange
  },
  data() {
    return {
      // search: ""
      alert: false,
      productname: "",
      messageText: "",
      productprice: "",
      valid: true,
      productAddedSuccesful: false,
      errorProduct: false,
      picture: null
    };
  },

  computed: {
    ...mapState(["posts"])
  },

  methods: {
    // validate() {
    //   console.log( this.$refs.form.validate());
    // },

    changeProduct() {
      this.crudPopup.dialog = true;
    },
    deleteProduct(product) {
      console.log(product.id);
      this.$store.dispatch("removeProduct", {
        product_id: product.id
      });
    },

    async addProduct(productname, productprice, picture) {
      await this.$store.dispatch("addProductToStore", {
        product_name: productname,
        product_price: productprice,
        picture: picture
      });
      this.productname = "";
      this.productprice = "";
      this.productAddedSuccesful = this.$store.getters.getproductAddedSuccesful;
      this.messageText = "Product succesful added!";
    },
    async setDiscounts() {
      await this.$store.dispatch("DiscountProducts").then(result => {
        if (result.status == 200) {
          console.log("200");
          this.alert = true;
        }
      });
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