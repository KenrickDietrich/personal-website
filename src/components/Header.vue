<template>
  <div :class="$style.background" id="header">
    <div :class="$style.hero">
      <h1>{{ title }}</h1>
      <p>{{ paragraph }}</p>
      <base-button
        v-scroll-to="{ el: '#about', duration: 1500, offset: -80 }"
      >
        discover more
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'Header',
  components: {
    BaseButton,
  },
  props: {
    title: {
      type: String,
      default: '',
      required: false,
    },
    paragraph: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>

<style lang="scss" module>
.background {
  height: 100vh;
  background: url('../assets/header.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .hero {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: $default-border-radius;
    padding: $spacing-default;
  }
}
</style>
