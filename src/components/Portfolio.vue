<template>
  <base-section id="portfolio" :class="$style.portfolio">
    <b-container class="container" fluid>
      <div class="container-service">
        <div>
          <h1>Portfolio</h1>
          <p>projecten die ik heb gedaan</p>
        </div>

        <base-row>
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
        </base-row>
      </div>
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
  background: #f9f9f9;
  text-align: center;
}

.portfolio-thumb {
  position: relative;
  top: 0;
  margin-bottom: 10px;
  transition: 0.5s;
}

.portfolio-overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0);
  height: 100%;
  width: 100%;
  text-align: left;
  padding: 20px;
  font-size: 30px;
  border-radius: 5px;
}

.portfolio-overlay:hover {
  background-color: rgba(64, 70, 95, 0.92);
  color: white;
  transition: 0.5s;
}
</style>
