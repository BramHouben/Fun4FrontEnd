<template>
  <div id="loginPage">
    <router-view />
    <Login></Login>
  </div>
</template>


<script>
import Login from "@/components/Login";
export default {
  components: {
    Login
  }
};
</script>