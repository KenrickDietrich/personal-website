<template>
  <base-section id="portfolio" :class="$style.portfolio">
    <b-container class="container" fluid>
      <h1>Portfolio</h1>
      <base-row>
        <b-row :class="$style.row">
          <b-col lg="4" :class="$style.wrapper">
            <div :class="$style.thumb" @click="spookyTrouble">
              <div :class="$style.overlay" tabindex="0">
                Spooky Trouble
              </div>
              <img
                src="@/assets/spookytrouble.png"
                alt="Foto van Spooky Trouble game"
                class="img-fluid"
              />
            </div>
          </b-col>
          <b-col lg="4" :class="$style.wrapper">
            <div :class="$style.thumb" @click="gent">
              <div :class="$style.overlay" tabindex="0">
                Gent In The Middle
              </div>
              <img
                src="@/assets/gent.png"
                alt="Foto van Gent In The Middle website"
                class="img-fluid"
              />
            </div>
          </b-col>
          <b-col lg="4" :class="$style.wrapper">
            <div :class="$style.thumb" @click="aileen">
              <div :class="$style.overlay" tabindex="0">
                Aileen Dietrich
              </div>
              <img
                src="@/assets/aileen.png"
                alt="Foto van Aileen Dietrich website"
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

  .row {
    display: flex;
    justify-content: center;
    .wrapper {
      width: 100%;
      max-width: 600px;
    }
  }

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

      &:focus {
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
