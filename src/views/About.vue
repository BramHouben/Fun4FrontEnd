<template>
  <v-content>
    <!-- <v-alert type="success">{{username}}</v-alert> -->
    <h1>Wat is bal.com?</h1>
    <v-row align="center">
      <v-row justify="space-around">
        <p>Bal.com is mijn project</p>
      </v-row>
    </v-row>
    <h1>Wat verkopen we?</h1>
    <v-row align="center">
      <v-row justify="space-around">
        <p>We verkopen voetbalspullen voor jong en oud!</p>
      </v-row>
    </v-row>
  </v-content>
</template>



<script>
export default {
  // data() {
  //   return {
  //     username: this.$store.state.currentUser
  //   };
  // },
  // created() {
  //   this.setName();
  // },
  methods: {
    // async setName() {
    // await this.$store.dispatch("getUsername");
    // }
  }
};
</script>