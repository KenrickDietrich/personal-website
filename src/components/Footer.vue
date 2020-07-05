<template>
  <section id="footer" :class="$style.footer">
    <div :class="$style.title">
      Copyright © 2020 Kenrick Dietrich software engineer
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" module>
.footer {
  background: #acacac;
  text-align: center;
  padding: 100px;
  .title {
    color: white;
    font-weight: 700;
  }
}
</style>
