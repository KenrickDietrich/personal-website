<template>
  <base-section id="about" :class="$style.about">
    <b-container class="container" fluid>
      <b-row style="align-items: center">
        <b-col md="6">
          <img src="../assets/about.jpg" alt="foto van Kenrick" />
        </b-col>
        <b-col md="5">
          <div :class="$style.text">
            <h1>Over mij</h1>
            <p>
              Ik ben Kenrick Dietrich en ben 20 jaar oud. Ik ben
              student HBO-ICT aan het Saxion in Enschede. Als
              front-end developer streef ik naar het onwikkelen van
              innovatieve en creatieve producten met oog voor
              accessibility en performance.
              <br />
              Ik ben gemotiveerd, doelgericht en een echte teamplayer.
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </base-section>
</template>

<script>
import BaseSection from '@/components/BaseSection.vue';
export default {
  name: 'About',
  components: {
    BaseSection,
  },
};
</script>

<style lang="scss" module>
.about {
  text-align: center;

  p {
    text-align: inherit;
  }

  img {
    max-width: 70%;
    border-radius: $default-border-radius;
    -webkit-box-shadow: $box-shadow;
    -moz-box-shadow: $box-shadow;
    box-shadow: $box-shadow;
  }
}

@media screen and (max-width: 1024px) {
  .text {
    padding-top: $spacing-large;
  }
}
</style>
