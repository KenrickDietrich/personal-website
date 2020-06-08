<template>
  <section id="info">
    <div v-if="!show" class="btn section-btn" v-on:click="showBanner">
      discover more
    </div>
    <div v-if="show" class="info-text-box">
      <div>
        <h1 id="cv-title">Kenrick Dietrich</h1>
        <h2>Student software engineer</h2>
      </div>
      <div class="info-section">
        <h1>Werkervaring</h1>
        <div>
          <h2>Jeugdtrainer Zwemvereniging</h2>
          <h3>EZC | 2013-2104</h3>
          <p>Team belegeiding geven</p>
        </div>
        <div>
          <h2>Algemeen medewerker</h2>
          <h3>Bouwmaat Enschede | 2016 - 2017</h3>
          <p>
            Klanten advies geven<br />
            Vakkenvullen<br />
            Houtzagen
          </p>
        </div>
      </div>
      <div class="info-section">
        <h1>Opleiding</h1>
        <div>
          <h2>HAVO</h2>
          <h3>Het stedelijk lyceum het Kottenpark | 2013 – 2017</h3>
          <p>
            Vakken Nederlands, Engels, Wiskunde B, Scheikunde,
            Natuurkunde, Informatica Eindexamen behaald in 2017.
          </p>
        </div>
        <div>
          <h2>HBO-ICT</h2>
          <h3>Hogeschool Saxion | 2017-heden</h3>
          <p>2e jaar software engineer.</p>
        </div>
      </div>
    </div>
    <div v-if="show" class="info-side-banner">
      <div class="info-side-banner-text">
        <div class="info-side-banner-img-wrapper">
          <img
            class="info-side-banner-img"
            src="../assets/pasfoto.png"
            alt="pasfoto"
          />
        </div>
        <div class="info-side-banner-text-wrapper">
          <h1 class="info-side-banner-title">Personalia</h1>
          <div class="line"></div>
          <ul style="list-style-type:none;" class="info-list">
            <li>
              <font-awesome-icon :icon="['fas', 'mapMarkerAlt']" />
              <i class="fas fa-map-marker-alt"></i>
              <div>
                Koenderinklanden 41<br />
                7542 WC Enschede
              </div>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <div>06-39271449</div>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <div>Kenrickdietrich@gmail.com</div>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <div>26-03-2000</div>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <div>Nederlands</div>
            </li>
          </ul>

          <h1 class="info-side-banner-title">Talen</h1>
          <div class="line"></div>
          <p>
            Nederlands en Engels.<br />
            Goed in woord en geschrift.
          </p>
          <h1 class="info-side-banner-title">Vaardigheden</h1>
          <div class="line"></div>
          <p>
            Java, HTML, CSS, JavaScript, Vue.Js, C++, Android
          </p>

          <h1 class="info-side-banner-title">Competenties</h1>
          <div class="line"></div>
          <ul class="info-list">
            <li>
              <div>Doorzettingsvermogen</div>
            </li>
            <li>
              <div>Sociaal</div>
            </li>
            <li>
              <div>Gefocust</div>
            </li>
            <li>
              <div>Teamspeler</div>
            </li>
          </ul>

          <h1 class="info-side-banner-title">Hobby's</h1>
          <div class="line"></div>
          <ul class="info-list">
            <li>
              <div>Waterpolo</div>
            </li>
            <li>
              <div>Drummen</div>
            </li>
            <li>
              <div>Vissen</div>
            </li>
            <li>
              <div>Zeilen</div>
            </li>
            <li>
              <div>Gamen</div>
            </li>
          </ul>

          <h1 class="info-side-banner-title">Nevenactiviteiten</h1>
          <div class="line"></div>
          <ul class="info-list">
            <li>
              <div>Websites bouwen</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Info',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showBanner() {
      this.show = true;
    },
  },
};
</script>
