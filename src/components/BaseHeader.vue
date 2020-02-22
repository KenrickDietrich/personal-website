<template>
  <div :class="$style.background">
    <div :class="$style.hero">
      <h1>I am test</h1>
      <p></p>
      <button>Hire me</button>
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
}
</style>
