<template>
  <div>
    <b-navbar
      ref="navbar"
      :class="[$style.navbar, { bg: isActive }, { menu: menuOpen }]"
      toggleable="md"
      fixed="top"
    >
      <b-navbar-nav>
        <b-nav-item
          :class="$style.logo"
          href
          v-scroll-to="{
            el: '#header',
            duration: 1500,
            offset: -80,
          }"
        >
          <img
            :class="$style.img"
            src="@/assets/logo.png"
            alt="Logo"
          />
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-toggle
        target="nav-collapse"
        @click="openMenu"
      ></b-navbar-toggle>

      <b-collapse :class="$style.items" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            href
            v-scroll-to="{
              el: '#about',
              duration: 1500,
              offset: -80,
            }"
            @click="closeMenu"
            ><div :class="$style.underline">
              Over mij
            </div></b-nav-item
          >
          <b-nav-item
            href
            v-scroll-to="{
              el: '#service',
              duration: 1500,
              offset: -80,
            }"
            @click="closeMenu"
            ><div :class="$style.underline">Ervaring</div>
          </b-nav-item>
          <b-nav-item
            href
            v-scroll-to="{
              el: '#portfolio',
              duration: 1500,
              offset: -80,
            }"
            @click="closeMenu"
          >
            <div :class="$style.underline">Portfolio</div>
          </b-nav-item>
          <b-nav-item
            href
            v-scroll-to="{
              el: '#contact',
              duration: 1500,
              offset: -80,
            }"
            @click="closeMenu"
          >
            <div :class="$style.underline">Contact</div></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'BaseNavbar',
  data() {
    return { scrollPosition: null, isActive: false, menuOpen: false };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (screen.width < 767) {
        this.isActive = true;
      }
      if (this.scrollPosition > 300) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    openMenu() {
      if (window.innerWidth < 767) {
        this.menuOpen = !this.menuOpen;
      }
    },
    closeMenu() {
      if (window.innerWidth < 767) {
        this.menuOpen = !this.menuOpen;
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
  display: flex;
  justify-content: space-between;
  align-content: flex-start;

  .logo {
    a {
      padding: 0;
      display: unset;
    }
  }

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

  .underline {
    display: inline-block;
    position: relative;
    color: hsl(222, 25%, 14%);
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      left: 0;
      top: 30px;
      background-color: black;
      transform-origin: bottom right;
      transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
}
</style>

<style lang="scss">
.bg {
  background-color: $background-color;
  transition: $transition;
}
.menu {
  height: 260px;
}

@media screen and (max-width: 768px) {
  .navbar {
    background-color: $background-color;
  }
}
</style>
