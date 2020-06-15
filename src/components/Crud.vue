<template>
  <v-content>
    <v-alert
      :value="alert"
      color="green"
      border="top"
      transition="scale-transition"
      dismissible
    >Discount process done</v-alert>
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
    <v-col cols="12" sm="6">
      <v-text-field v-model="productname" label="name"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field v-model="productprice" label="number" type="number"></v-text-field>
    </v-col>
    <v-btn
      color="success"
      class="mr-4"
      v-on:click="addProduct(productname,productprice)"
    >Add Product</v-btn>
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
      productprice: ""
      // productList: []
    };
  },
  // mounted() {
  //   console.log("loaded test");
  //   this.$store.dispatch("loadProducts");
  // },

  computed: {
    ...mapState(["posts"])

    // renderProducts() {
    //   return this.$store.state.productsLoaded;
    // }
  },

  methods: {
    changeProduct() {
      this.crudPopup.dialog = true;
    },
    deleteProduct(product) {
      console.log(product.id);
      this.$store.dispatch("removeProduct", {
        product_id: product.id
      });
      // window.location.reload();
    },
    async addProduct(productname, productprice) {
      console.log(productname);
      console.log(productprice);
      await this.$store.dispatch("addProductToStore", {
        product_name: productname,
        product_price: productprice
      });
      this.productname = "";
      this.productprice = "";
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