<template>
  <v-content>
    <h1>Login</h1>
    <v-row align="center">
      <v-row justify="space-around">
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="email"
            :rules="emailRegels"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="password"
            label="Wachtwoord"
            required
          ></v-text-field>
          <!-- <v-alert type="success">{{currentuserget}}</v-alert> -->
          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="validate"
            >Inloggen</v-btn
          >
        </v-form>
      </v-row>
    </v-row>
  </v-content>
</template>
<script>
export default {
  data: () => ({
    email: "",
    password: "",
    valid: true,
    emailRegels: [
      // v => !!v || "E-mail is verplicht",
      // v => /.+@.+\..+/.test(v) || "Email moet echt zijn"
    ],
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log(this.email);
        console.log(this.password);
        this.$store.dispatch("loginUser", {
          email: this.email,
          password: this.password,
        });
        this.$router.push("/about");
      }
    },
  },
  computed: {
    //return console.log("test");
    currentuserget() {
      return this.$store.state.currenUser;
    },

    //return this.$store.state.username;
  },
};
</script>
