<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
body {
  font-family: $font-family;
  color: $primary-color-text;
  margin: 0;
  padding: 0;
  background-color: $background-white;
}
</style>
