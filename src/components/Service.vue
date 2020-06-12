<template>
  <section id="service" :class="$style.service">
    <b-container :class="$style.container" fluid>
      <div>
        <h1>Ik heb ervaring met</h1>
      </div>

      <div :class="$style.row">
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
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Service',
};
</script>

<style lang="scss" module>
.service {
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  background: $background-color;
  text-align: center;
  width: 100%;
  display: inline-block;

  .container {
    max-width: 70vw;
  }

  .row {
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;

    .servicethumb {
      background: $background-white;
      border-radius: 5px;
      padding: 42px 22px;
      position: relative;
      top: 0;
      margin-bottom: 10px;
      transition: 0.5s;
      height: 300px;
      box-shadow: black;

      &:hover {
        background: rgba($color: $primary-color-text, $alpha: 0.8);
        color: $background-color;
        padding: 50px 30px;
      }
    }

    .iconcontainer {
      padding-bottom: 8px;
    }
  }
}
</style>
