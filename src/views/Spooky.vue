<template>
  <div>
    <b-navbar
      ref="navbar"
      :class="[$style.navbar, { bg: isActive }]"
      toggleable="md"
      fixed="top"
    >
      <b-nav-item :to="'/'">
        <img :class="$style.img" src="@/assets/logo.png" alt="Logo" />
      </b-nav-item>
    </b-navbar>
    <div :class="$style.background" id="header">
      <h1>Spooky Trouble</h1>
      <div :class="$style.hero" @click="openGame">
        <img
          :class="$style.logo"
          src="@/assets/spooky-logo.png"
          alt="Spooky Trouble logo"
        />
        <img
          src="@/assets/Character.png"
          alt="Spooky Trouble character"
        />
        <img
          :class="$style.floor"
          src="@/assets/Floor.png"
          alt="Spooky Trouble grond"
        />
        <img
          :class="[$style.spook, $style.first]"
          src="@/assets/Spook1.png"
          alt="Spooky Trouble spook"
        />
        <img
          :class="[$style.spook, $style.second]"
          src="@/assets/Spook2.png"
          alt="Spooky Trouble spook"
        />
      </div>
    </div>
    <base-section id="service" :class="$style.service">
      <b-container :class="$style.container" fluid>
        <base-row>
          <b-row data-aos="fade-up">
            <b-col lg="6">
              <div :class="$style.thumb">
                <base-text-container
                  :title="'Why'"
                  :paragraph="
                    'Spooky Trouble is a game I made for my minor creative design and technology. My primary goal was to learn how to create pixel art and create a game using Unity. I chose Unity because I felt held back by processing, a program where I created the first version of Spooky Trouble with.'
                  "
                />
              </div>
            </b-col>
            <b-col lg="6">
              <div :class="[$style.thumb, $style.hover]">
                <img
                  :class="$style.image"
                  src="@/assets/Character.png"
                  alt="Spooky Trouble character"
                />
              </div>
            </b-col>
          </b-row>
        </base-row>
        <base-row>
          <b-row data-aos="fade-up">
            <b-col lg="6">
              <div :class="$style.thumb">
                <base-text-container
                  :title="'Story'"
                  :paragraph="
                    'You find yourself in an old and abandoned house. You hear noises, old wood creaking. You see something and rub your eyes, are those ghosts? Find your way out.'
                  "
                >
                </base-text-container>
              </div>
            </b-col>
            <b-col lg="6">
              <div :class="[$style.thumb, $style.hover]">
                <img
                  :class="$style.image"
                  src="@/assets/Spook1.png"
                  alt="Spooky Trouble spook"
                />
                <img
                  :class="$style.boo"
                  src="@/assets/Boo.png"
                  alt="Boo tekst"
                />
              </div>
            </b-col>
          </b-row>
        </base-row>
        <base-row>
          <b-row data-aos="fade-up">
            <b-col lg="6">
              <div :class="$style.thumb">
                <base-text-container
                  :title="'Goal'"
                  :paragraph="
                    'To find your way out you have to collect all the keys to unlock the doors.'
                  "
                ></base-text-container>
              </div>
            </b-col>
            <b-col lg="6">
              <div :class="[$style.thumb, $style.hover]">
                <img
                  :class="$style.image"
                  src="@/assets/Key.png"
                  alt="Foto sleutel"
                />
              </div>
            </b-col>
          </b-row>
        </base-row>
        <base-row>
          <b-row data-aos="fade-up">
            <b-col lg="6">
              <div :class="$style.thumb">
                <base-text-container
                  :title="'How to play'"
                  :paragraph="
                    'The game is played using the keyboard. You use the arrowkeys to move around, up and down, the spacebar to jump, z key to prone and x to pickup and interact with items.'
                  "
                ></base-text-container>
              </div>
            </b-col>
            <b-col lg="6">
              <div :class="[$style.thumb, $style.hover]">
                <img
                  :class="$style.image"
                  src="@/assets/Keys.png"
                  alt="Foto toetsenbord"
                />
              </div>
            </b-col>
          </b-row>
        </base-row>
        <base-button @click.native="openGame">
          Play Game
        </base-button>
      </b-container>
    </base-section>
  </div>
</template>
<script>
import BaseTextContainer from '@/components/BaseTextContainer.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseRow from '@/components/BaseRow.vue';
import BaseSection from '@/components/BaseSection.vue';
export default {
  name: 'Spooky',
  components: {
    BaseTextContainer,
    BaseButton,
    BaseRow,
    BaseSection,
  },
  data() {
    return { scrollPosition: null, isActive: false };
  },
  methods: {
    openGame() {
      window.open('https://spookytrouble-10a66.web.app/');
    },
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
.background {
  height: calc(100vh - 150px);
  text-align: center;

  h1 {
    margin-top: 150px;
    font-size: 3rem;
  }
  .hero {
    background: url('../assets/spooky-background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: $default-border-radius;
    padding: 10rem 10rem 40px 10rem;

    &:hover {
      cursor: pointer;
    }

    .logo {
      top: 60px;
      position: absolute;
      right: 210px;
      height: 110px;
      transform: rotate(-6deg);
    }

    .spook {
      height: 100px;
      position: absolute;
    }
    .first {
      top: 280px;
      right: 400px;
    }
    .second {
      top: 120px;
      left: 400px;
    }
    .floor {
      position: absolute;
      top: 404px;
      right: 0;
      z-index: -1;
      border-radius: $default-border-radius;
    }
  }
}

.service {
  background: $background-color;
  text-align: center;

  .container {
    max-width: 70vw;
  }

  .thumb {
    background: $background-white;
    border-radius: $default-border-radius;
    padding: $spacing-default;
    margin-bottom: $spacing-default;
    transition: $transition;
    min-height: 400px;
    -webkit-box-shadow: $box-shadow;
    -moz-box-shadow: $box-shadow;
    box-shadow: $box-shadow;

    img {
      margin-top: 40px;
    }
  }

  .hover {
    height: 400px;
    padding: $spacing-default;
    &:active {
      background: rgba($color: $primary-color-text, $alpha: 0.8);
      color: $background-color;
      padding-top: 30px;
    }
    &:hover {
      background: rgba($color: $primary-color-text, $alpha: 0.8);
      color: $background-color;
      padding-top: 30px;
    }
  }

  .boo {
    height: 60px;
    margin-top: -200px;
    transform: rotate(10deg);
  }
}

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
