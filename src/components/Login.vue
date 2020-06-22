<template>
  <v-content>
    <v-alert
      :value="alert"
      color="red"
      id="alertLogin"
      border="top"
      transition="scale-transition"
      dismissible
      >Login Failed</v-alert
    >
    <h1>Login</h1>

    <v-row align="center">
      <v-row justify="space-around">
        <v-form ref="form" v-model="valid">
          <v-text-field
            id="textFieldUsername"
            v-model="email"
            :rules="emailRegels"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            id="textFieldPassword"
            type="password"
            v-model="password"
            label="Wachtwoord"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            id="buttonLogin"
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
    alert: false,
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        // console.log(this.email);
        // console.log(this.password);
        this.Setuser();

        //this.setName();
        // console.log(this.$store.state.userloggedin);

        // }
      }
    },
    async Setuser() {
      await this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password,
      });

      if (this.$store.state.userloggedin == true) {
        await this.$store.dispatch("getUsername");
        await this.$store.dispatch("checkAdminRights");

        this.$router.push("/products");
      } else {
        this.alert = true;
      }
    },
    // async setName() {
    //   this.$store.dispatch("getUsername");
    // }
  },

  mounted() {
    this.$store.state.currenUser = "";
  },

  computed: {
    currentuserget() {
      return this.$store.state.currenUser;
    },
  },
};
</script>
