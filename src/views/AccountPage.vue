<template>
  <div id="accountPage">
    <router-view />
    <Account></Account>
  </div>
</template>


<script>
import Account from "@/components/Account";
export default {
  components: {
    Account
  }
};
</script>