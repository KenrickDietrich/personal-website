<template>
  <base-section id="service" :class="$style.service">
    <b-container :class="$style.container" fluid>
      <div>
        <h1>Ik heb ervaring met</h1>
      </div>

      <base-row>
        <b-row data-aos="fade-up">
          <b-col md="4" sm="4">
            <div :class="$style.servicethumb">
              <div :class="$style.iconcontainer">
                <font-awesome-icon
                  :icon="['fab', 'vuejs']"
                  size="6x"
                />
              </div>
              <h4>Vue.js</h4>
              <p>Vue.js websites of web applicaties</p>
            </div>
          </b-col>
          <b-col md="4" sm="4">
            <div :class="$style.servicethumb">
              <div :class="$style.iconcontainer">
                <font-awesome-icon
                  :icon="['fab', 'android']"
                  size="6x"
                />
              </div>
              <h4>Android</h4>
              <p>Naitive Android apps</p>
            </div>
          </b-col>
          <b-col md="4" sm="4">
            <div :class="$style.servicethumb">
              <div :class="$style.iconcontainer">
                <font-awesome-icon
                  :icon="['fab', 'java']"
                  size="6x"
                />
              </div>
              <h4>java</h4>
              <p>Java applicaties</p>
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

  .servicethumb {
    background: $background-white;
    border-radius: $default-border-radius;
    padding: 42px 22px;
    margin-bottom: $spacing-default;
    transition: $transition;
    height: 300px;
    -webkit-box-shadow: $box-shadow;
    -moz-box-shadow: $box-shadow;
    box-shadow: $box-shadow;

    &:hover {
      background: rgba($color: $primary-color-text, $alpha: 0.8);
      color: $background-color;
      padding: 50px 30px;
    }
  }

  .iconcontainer {
    padding-bottom: $spacing-default;
  }
}
</style>
