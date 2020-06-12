<template>
  <div :class="$style.row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseRow',
};
</script>

<style lang="scss" module>
.row {
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
}
</style>
