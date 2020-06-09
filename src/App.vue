<template>
  <div>
    <base-navbar />
    <router-view />
  </div>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar.vue';
export default {
  name: 'App',
  components: {
    BaseNavbar,
  },
};
</script>

<style lang="scss">
body {
  font-family: $font-family;
  color: $primary-color-text;
  margin: 0;
  padding: 0;
  background-color: $background-color;
}
</style>
