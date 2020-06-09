<template>
  <div id="checkOutPage">
    <router-view />
    <CheckOut></CheckOut>
  </div>
</template>

<script>
import CheckOut from "@/components/CheckOut";

export default {
  components: {
    CheckOut
  }
};
</script>

<style>
</style>