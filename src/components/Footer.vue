<template>
  <footer>
    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Bal.com</strong>
      </v-col>
    </v-footer>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
/* .footerPrimary {
  background: #42b983;
  padding: 6px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  display: inline-block;
  color: white;
} */
</style>
