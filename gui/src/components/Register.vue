<template>
  <v-content>
    <h1>Register</h1>
    <v-row align="center">
      <v-row justify="space-around">
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="email" :rules="emailRegels" label="E-mail" required></v-text-field>

          <v-text-field
            type="password"
            v-model="password"
            :rules="passwordRegels"
            label="Wachtwoord"
            required
          ></v-text-field>

          <v-checkbox
            v-model="Checkbox"
            label="Hierin komt nog iets te staan"
            required
            :rules="checkboxRegels"
          ></v-checkbox>

          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Registreren</v-btn>
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
    ],
    Checkbox: false,
    checkboxRegels: [v => !!v || "Je moet het vinkje aanklikken!"],

    passwordRegels: [
      v => !!v || "Wachtwoord is verplicht",
      v => (v && v.length >= 5) || "minimaal 5 karakter"
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    }
  }
};
</script>
 
 <style>
</style>