<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <base-header></base-header>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BaseHeader from "@/components/BaseHeader.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    BaseHeader
  }
};
</script>
