<template>
  <section id="contact" :class="$style.container">
    <base-row>
      <h2>Contact Info</h2>
      <div :class="$style.content">
        <div :class="$style.label">
          <font-awesome-icon
            :class="$style.icon"
            :icon="['fas', 'envelope']"
            size="2x"
          />
          <a href="mailto:kenrickdietrich@gmail.com">
            kenrickdietrich@gmail.com
          </a>
        </div>
        <div :class="$style.label">
          <font-awesome-icon
            :class="$style.icon"
            :icon="['fas', 'phone']"
            size="2x"
          />
          <label>06 39 27 14 49</label>
        </div>
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
    padding: $spacing-default;
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
