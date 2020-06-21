<template>
  <v-content>
    <h1>Account</h1>

    <!-- <h2>naam: {{username}}</h2> -->
    <v-spacer></v-spacer>
    <h2>Verander details</h2>
    <v-col cols="12" sm="6">
      <v-text-field v-model="newUsername" label="Username"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field v-model="newPassword" label="Password" type="password" :rules="passwordRegels"></v-text-field>
    </v-col>
    <v-btn
      color="success"
      class="mr-4"
      v-on:click="updateAccount(newUsername,newPassword)"
    >Update account</v-btn>
    <v-btn color="error" @click="deleteAccount()">Delete account</v-btn>
  </v-content>
</template>

<script>
export default {
  name: "ChangeAccount",

  data() {
    return {
      username: this.$store.state.currentUser,
      newUsername: "user",
      newPassword: "",
      //   emailRegels: [
      //     v => !!v || "E-mail is verplicht",
      //     v => /.+@.+\..+/.test(v) || "Email moet echt zijn"
      //   ],
      passwordRegels: [
        v => !!v || "Wachtwoord is verplicht",
        v => (v && v.length >= 5) || "minimaal 5 karakter"
      ]
    };
  },

  methods: {
    updateAccount: async function() {
      await this.$store
        .dispatch("UpdateUser", {
          name: this.newUsername,
          password: this.newPassword
        })
        .then(() => {
          if (!this.$store.state.userloggedin) {
            this.$router.push("/login");
          }
        });
    },
    deleteAccount: async function() {
      await this.$store.dispatch("deleteUser").then(() => {
        // this.$router.push("/login")
        if (!this.$store.state.userloggedin) {
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style scoped>
</style>