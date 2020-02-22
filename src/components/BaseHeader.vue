<template>
  <div :class="$style.test">This is a test</div>
</template>

<script>
export default {
  name: "BaseHeader"
};
</script>

<style lang="scss" module>
.test {
  background-color: $color-primary;
  height: 100px;
  width: 1000px;
}
</style>
