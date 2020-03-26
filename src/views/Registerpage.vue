<template>
  <div id="regiserPage">
    <router-view />
    <register></register>
  </div>
</template>


<script>
import Register from "@/components/Register";
export default {
  components: {
    Register
  }
};
</script>