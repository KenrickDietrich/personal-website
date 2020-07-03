<template>
  <div>
    <h2>{{ title }}</h2>
    <p>
      {{ paragraph }}
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseTextContainer',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    paragraph: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
h2 {
  padding: $spacing-default;
}

p {
  padding: $spacing-default;
}
</style>
