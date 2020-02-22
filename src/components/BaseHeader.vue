<template>
  <div :class="$style.background">
    <div :class="$style.hero">
      <h2>Hallo</h2>
      <h1>Ik ben Kenrick Dietrich</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHeader"
};
</script>

<style lang="scss" module>
.background {
  height: 100vh;
  background: url("../assets/header-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: $default-border-radius;
  padding: $spacing-default;
}
</style>
