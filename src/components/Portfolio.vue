<template>
  <base-section id="portfolio" :class="$style.portfolio">
    <b-container class="container" fluid>
      <h1>Portfolio</h1>
      <base-row>
        <b-row>
          <b-col md="4" sm="4">
            <div
              :class="$style.thumb"
              @click="spookyTrouble"
              tabindex="0"
            >
              <div :class="$style.overlay">Spooky Trouble</div>
              <img
                src="@/assets/spookytrouble.png"
                alt="image"
                class="img-fluid"
              />
            </div>
          </b-col>
          <b-col md="4" sm="4">
            <div :class="$style.thumb" @click="gent" tabindex="0">
              <div :class="$style.overlay">Gent In The Middle</div>
              <img
                src="@/assets/gent.png"
                alt="image"
                class="img-fluid"
              />
            </div>
          </b-col>
          <b-col md="4" sm="4">
            <div :class="$style.thumb" @click="aileen" tabindex="0">
              <div :class="$style.overlay">Aileen Dietrich</div>
              <img
                src="@/assets/aileen.png"
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
  name: 'Portfolio',
  components: {
    BaseRow,
    BaseSection,
  },
  methods: {
    spookyTrouble() {
      this.$router.push({ name: 'Spooky' });
    },
    gent() {
      window.open('https://gentinthemiddle.nl/');
    },
    aileen() {
      window.open('https://www.aileendietrich.nl/');
    },
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
