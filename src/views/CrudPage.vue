<template>
  <div id="crudPage">
    <router-view />
    <Crud></Crud>
  </div>
</template>


<script>
import Crud from "@/components/Crud.vue";
export default {
  components: {
    Crud
  }
};
</script>