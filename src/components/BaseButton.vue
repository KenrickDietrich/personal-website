<template>
  <button :class="$style.btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style lang="scss" module>
.btn {
  border: 1px solid transparent;
  background-color: $primary-color-text;
  border-radius: 50px;
  color: #f0f0f0;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding: 18px 32px;
  margin-top: 42px;
  text-transform: uppercase;

  &:hover {
    background-color: $background-color;
    color: $primary-color-text;
    border-color: $primary-color-text;
    transition: $transition;
  }

  // TODO: NEEDS CLEVER WAY TO GET ACCESIBILTIY BACK
  &:focus {
    outline: 0;
  }
}
</style>
