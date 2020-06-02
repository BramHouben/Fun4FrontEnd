<template>
  <nav>
    <v-app-bar color="white" dense white app>
      <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
      <v-toolbar-title>Bal</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="primary" to="/products">Products</v-btn>
      <v-btn class="ma-2" outlined color="primary" to="/crud">Crud</v-btn>
      <v-btn class="ma-2" outlined color="primary" to="/about">About</v-btn>
      <v-spacer></v-spacer>
      <cartLive></cartLive>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="primary" v-if="isLoggedIn" to="/userdetails">{{username}}</v-btn>
      <v-btn class="ma-2" outlined color="primary" v-if="!isLoggedIn" to="/login">Login</v-btn>
      <v-btn class="ma-2" outlined color="primary" v-if="!isLoggedIn" to="/register">Register</v-btn>
      <v-btn class="ma-2" outlined color="primary" v-if="isLoggedIn" to="/login">Logout</v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import cartLive from "@/components/ShoppingCartItemsElement";

export default {
  name: "NavbarComponent",
  components: {
    cartLive
  },
  data() {
    return {
      isLoggedIn: this.$store.state.userloggedin,
      username: this.$store.state.currentUser
    };
  },

  // created() {
  //   // if (this.isLoggedIn != null) {
  //   // }

  //   console.log(this.isLoggedIn);
  //   console.log(this.username);
  // },
  methods: {
    getusername() {
      return this.username;
    }
  },

  mounted: function() {
    return this.getusername();
  },

  updated() {
    return this.getusername();
  }
  // computed: {
  //   checkuser() {
  //     if (this.username != "") {
  //       console.log("is true");

  //       return true;
  //     } else {
  //       console.log("is false");
  //       return false;
  //     }
  //   }
  // }
};
</script>

<style scoped>
.mainNav {
  padding-bottom: 10px;
}
.ma-2 {
  margin-left: 5px;
}
</style>
