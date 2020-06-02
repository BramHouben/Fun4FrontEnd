<template>
  <v-content>
    <h1>Crud</h1>

    <div class="flex-table">
      <div>ID</div>
      <div>Name</div>
      <div>Price</div>
      <div>Change</div>
      <div>Delete</div>
    </div>

    <div v-for="product in renderProducts" v-bind:key="product.id" class="flex-table">
      <div>{{product.id}}</div>
      <div>{{product.productName}}</div>
      <div>{{product.productPrice}}</div>
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
    <!-- <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="renderProducts"
      :items-per-page="50"
      :search="search"
      class="elevation-1"
    ></v-data-table>-->
  </v-content>
</template>

<script>
import { mapState } from "vuex";
import CrudChange from "@/components/CrudDialog";

export default {
  name: "crud",
  props: ["products"],

  components: {
    CrudChange
  },
  data() {
    return {
      // search: ""
      productname: "",
      productprice: ""
    };
  },
  mounted() {
    console.log("loaded test");
    this.$store.dispatch("loadProducts");
  },

  computed: {
    ...mapState(["posts"]),

    renderProducts() {
      return this.$store.state.productsLoaded;
    }
    // headers() {
    //   return [
    //     { text: "id", value: "id" },
    //     { text: "name", value: "productName" },
    //     { text: "price", value: "productPrice" }
    //   ];
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