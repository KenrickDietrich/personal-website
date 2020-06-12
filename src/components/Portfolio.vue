<template>
  <base-section id="portfolio" :class="$style.portfolio">
    <b-container class="container" fluid>
      <h1>Portfolio</h1>
      <p>projecten die ik heb gedaan</p>

      <base-row>
        <b-row>
          <b-col md="4" sm="4">
            <div :class="$style.thumb">
              <div :class="$style.overlay">project 1</div>
              <img
                src="../assets/work-image1.jpg"
                alt="image"
                class="img-fluid"
              />
            </div>
          </b-col>
          <b-col md="4" sm="4">
            <div :class="$style.thumb">
              <div :class="$style.overlay">project 2</div>
              <img
                src="../assets/work-image2.jpg"
                alt="image"
                class="img-fluid"
              />
            </div>
          </b-col>
          <b-col md="4" sm="4">
            <div :class="$style.thumb">
              <div :class="$style.overlay">project 3</div>
              <img
                src="../assets/work-image3.jpg"
                alt="image"
                class="img-fluid"
              />
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
  name: 'Portfolie',
  components: {
    BaseRow,
    BaseSection,
  },
};
</script>

<style lang="scss" module>
.portfolio {
  text-align: center;

  .thumb {
    position: relative;
    margin-bottom: $spacing-default;
    border-radius: $default-border-radius;
    overflow: hidden;
    -webkit-box-shadow: $box-shadow;
    -moz-box-shadow: $box-shadow;
    box-shadow: $box-shadow;
    height: 420px;

    .overlay {
      position: absolute;
      background-color: rgba(0, 0, 0, 0);
      color: rgba(0, 0, 0, 0);
      height: 100%;
      width: 100%;
      text-align: left;
      padding: 20px;
      font-size: 30px;
      border-radius: $default-border-radius;

      &:hover {
        background-color: rgba(64, 70, 95, 0.92);
        color: $background-white;
        transition: $transition;
        -webkit-box-shadow: $box-shadow;
        -moz-box-shadow: $box-shadow;
        box-shadow: $box-shadow;
      }
    }
  }
}
</style>
