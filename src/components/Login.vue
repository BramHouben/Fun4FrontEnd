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
            :rules="passwordRegels"
            label="Wachtwoord"
            required
          ></v-text-field>

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
    valid: true,

    emailRegels: [
      v => !!v || "E-mail is verplicht",
      v => /.+@.+\..+/.test(v) || "Email moet echt zijn"
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    }
  }
};
</script>
