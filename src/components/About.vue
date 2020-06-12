<template>
  <base-section id="about" :class="$style.about">
    <b-container class="container" fluid>
      <b-row>
        <b-col>
          <img src="../assets/about.jpg" alt="image" />
        </b-col>
        <b-col>
          <div>
            <h1>Wie ik ben</h1>
            <p>Dit is de paragraaf met informatie text</p>
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

  img {
    max-width: 70%;
    border-radius: $default-border-radius;
  }
}
</style>
