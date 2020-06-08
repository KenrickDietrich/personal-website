<template>
  <section id="portfolio">
    <b-container class="container" fluid>
      <div class="container-service">
        <div>
          <h1>Portfolio</h1>
          <p>projecten die ik heb gedaan</p>
        </div>

        <div class="row-container">
          <b-row>
            <b-col md="4" sm="4">
              <div class="portfolio-thumb">
                <div class="portfolio-overlay">project 1</div>
                <img
                  src="../assets/work-image1.jpg"
                  alt="image"
                  class="img-fluid"
                />
              </div>
            </b-col>
            <b-col md="4" sm="4">
              <div class="portfolio-thumb">
                <div class="portfolio-overlay">project 2</div>
                <img
                  src="../assets/work-image2.jpg"
                  alt="image"
                  class="img-fluid"
                />
              </div>
            </b-col>
            <b-col md="4" sm="4">
              <div class="portfolio-thumb">
                <div class="portfolio-overlay">project 3</div>
                <img
                  src="../assets/work-image3.jpg"
                  alt="image"
                  class="img-fluid"
                />
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
  name: 'Portfolie',
};
</script>
