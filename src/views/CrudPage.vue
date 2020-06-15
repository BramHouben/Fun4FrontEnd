<template>
  <div id="crudPage">
    <InterServerErrorPage v-if="!productsloaded"></InterServerErrorPage>
    <router-view />
    <Crud v-if="productsloaded" v-bind:productsArray="products"></Crud>
  </div>
</template>


<script>
import Crud from "@/components/Crud.vue";
import InterServerErrorPage from "@/components/InternalServerErrorPage";
export default {
  components: {
    Crud,
    InterServerErrorPage
  },

  data() {
    return {
      products: [],
      productsloaded: false
    };
  },
  mounted() {
    this.$store.dispatch("loadProducts").then(result => {
      this.products = result;
      console.log(this.$store.state.productsLoaded);
      this.productsloaded = this.$store.state.productsLoaded;
    });
  }
};
</script>