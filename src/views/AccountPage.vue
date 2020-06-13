<template>
  <div id="accountPage">
    <router-view />
    <Account></Account>
    <ChangeAccount></ChangeAccount>
  </div>
</template>


<script>
import Account from "@/components/Account";
import ChangeAccount from "@/components/ChangeAccountDetails.vue";
export default {
  components: {
    Account,
    ChangeAccount
  }
};
</script>