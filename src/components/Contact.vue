<template>
  <section id="contact" :class="$style.container">
    <base-row>
      <h2>Contact Info</h2>
      <div :class="$style.content">
        <a
          :class="$style.label"
          href="mailto:kenrickdietrich@gmail.com"
        >
          kenrickdietrich@gmail.com
        </a>
        <label :class="$style.label">06 39 27 14 49</label>
      </div>
    </base-row>
  </section>
</template>

<script>
import BaseRow from '@/components/BaseRow.vue';
export default {
  name: 'Contact',
  components: {
    BaseRow,
  },
};
</script>

<style lang="scss" module>
.container {
  text-align: center;
  background: #fafafa;

  h2 {
    padding: $spacing-large;
  }

  .label {
    padding: $spacing-small;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 20px;

    a {
      color: #0051a8;
    }

    .icon {
      margin-right: $spacing-small;
    }
  }
}
</style>
