<template>
  <section :class="$style.section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'BaseSection',
};
</script>

<style lang="scss" module>
.section {
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  width: 100%;
  display: inline-block;
}
</style>
