<template>
  <section id="service">
    <b-container class="container" fluid>
      <div class="container-service">
        <div class="section-title">
          <h1 class="title">{{ title }}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur venenatis
            tincidunt.
          </p>
        </div>

        <div class="service-row-container">
          <b-row data-aos="fade-up">
            <b-col md="4" sm="4">
              <div class="service-thumb">
                <div class="icon-container">
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
              <div class="service-thumb">
                <div class="icon-container">
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
              <div class="service-thumb">
                <div class="icon-container">
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
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Service',
  data: function() {
    return {
      title: 'Ik heb ervaring met',
    };
  },
};
</script>
