<template>
  <section id="about" :class="$style.about">
    <b-container class="container" fluid>
      <b-row>
        <b-col>
          <img
            src="../assets/about.jpg"
            alt="image"
            class="img-fluid"
          />
        </b-col>
        <b-col>
          <div>
            <h1>Wie ik ben</h1>
            <p>Dit is de paragraaf met informatie text</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" module>
.about {
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
  width: 100%;
  display: inline-block;

  img {
    max-width: 70%;
    border-radius: $default-border-radius;
  }
}
</style>
