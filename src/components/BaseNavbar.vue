<template>
  <div>
    <b-navbar
      ref="navbar"
      :class="[$style.navbar, { bg: isActive }]"
      toggleable="md"
      fixed="top"
    >
      <div href="#" v-scroll-to="{ el: '#header', duration: 1500 }">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse :class="$style.items" id="nav-collapse" is-nav>
        <b-nav-item
          href
          v-scroll-to="{ el: '#about', duration: 1500 }"
          >Over mij</b-nav-item
        >
        <b-nav-item
          href
          v-scroll-to="{ el: '#service', duration: 1500 }"
          >Service</b-nav-item
        >
        <b-nav-item
          href
          v-scroll-to="{ el: '#portfolio', duration: 1500 }"
          >Portfolio</b-nav-item
        >
        <b-nav-item
          href
          v-scroll-to="{ el: '#contact', duration: 1500 }"
          >Contact</b-nav-item
        >
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'BaseNavbar',
  data() {
    return { scrollPosition: null, isActive: false };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 300) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>

<style lang="scss" module>
.navbar {
  img {
    width: 30%;
    display: block;
  }

  .items {
    a {
      color: $primary-color-text;
    }

    li {
      list-style-type: none;
    }
  }
}
</style>

<style lang="scss">
.bg {
  background-color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
