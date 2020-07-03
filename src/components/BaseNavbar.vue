<template>
  <div>
    <b-navbar
      ref="navbar"
      :class="[$style.navbar, { bg: isActive }]"
      toggleable="md"
      fixed="top"
    >
      <b-nav-item
        href
        v-scroll-to="{
          el: '#header',
          duration: 1500,
          offset: -80,
        }"
      >
        <img :class="$style.img" src="@/assets/logo.png" alt="Logo" />
      </b-nav-item>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse :class="$style.items" id="nav-collapse" is-nav>
        <b-nav-item
          href
          v-scroll-to="{ el: '#about', duration: 1500, offset: -80 }"
          >Over mij</b-nav-item
        >
        <b-nav-item
          href
          v-scroll-to="{
            el: '#service',
            duration: 1500,
            offset: -80,
          }"
          >Service</b-nav-item
        >
        <b-nav-item
          href
          v-scroll-to="{
            el: '#portfolio',
            duration: 1500,
            offset: -80,
          }"
          >Portfolio</b-nav-item
        >
        <b-nav-item
          href
          v-scroll-to="{
            el: '#contact',
            duration: 1500,
            offset: -80,
          }"
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
  height: 90px;
  background-color: rgba($color: $background-color, $alpha: 0);
  transition: $transition;

  .img {
    width: 80px;
  }

  a {
    color: $primary-color-text;
    &:hover {
      color: rgba($color: $primary-color-text, $alpha: 0.5);
    }
  }

  li {
    list-style-type: none;
  }
}
</style>

<style lang="scss">
.bg {
  background-color: $background-color;
  transition: $transition;
}
</style>
