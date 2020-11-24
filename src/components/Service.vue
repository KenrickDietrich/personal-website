<template>
  <base-section id="service" :class="$style.service">
    <b-container :class="$style.container" fluid>
      <h1>Ik heb ervaring met</h1>

      <base-row>
        <b-row data-aos="fade-up" :class="$style.row">
          <b-col lg="4" :class="$style.wrapper">
            <div :class="$style.servicethumb" tabindex="0">
              <img
                :class="$style.icon"
                src="@/assets/vue-dot-js.svg"
              />
              <h2>Vue.js</h2>
            </div>
          </b-col>
          <b-col lg="4" :class="$style.wrapper">
            <div :class="$style.servicethumb" tabindex="0">
              <img :class="$style.icon" src="@/assets/react.svg" />
              <h2>React Native</h2>
            </div>
          </b-col>
          <b-col lg="4" :class="$style.wrapper">
            <div :class="$style.servicethumb" tabindex="0">
              <img :class="$style.icon" src="@/assets/swift.svg" />
              <h2>Swift</h2>
            </div>
          </b-col>
        </b-row>
      </base-row>
    </b-container>
  </base-section>
</template>

<script>
import BaseSection from '@/components/BaseSection.vue';
import BaseRow from '@/components/BaseRow.vue';
export default {
  name: 'Service',
  components: {
    BaseRow,
    BaseSection,
  },
};
</script>

<style lang="scss" module>
.service {
  background: $background-color;
  text-align: center;

  .container {
    max-width: 70vw;
  }
  .row {
    display: flex;
    justify-content: center;
    .wrapper {
      width: 100%;
      max-width: 400px;
    }
  }

  .servicethumb {
    background: $background-white;
    border-radius: $default-border-radius;
    padding: $spacing-large;
    margin-bottom: $spacing-default;
    height: 250px;
    -webkit-box-shadow: $box-shadow;
    -moz-box-shadow: $box-shadow;
    box-shadow: $box-shadow;

    .icon {
      max-height: 75%;
    }

    h2 {
      font-weight: 600;
      font-size: 24pt;
      padding: $spacing-default;
    }
  }
}
</style>
