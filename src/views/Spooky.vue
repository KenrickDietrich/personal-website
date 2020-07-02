<template>
  <div>
    <div :class="$style.background" id="header">
      <h1>Spooky Trouble</h1>
      <div :class="$style.hero">
        <img :class="$style.logo" src="@/assets/spooky-logo.png" />
        <img src="@/assets/Character.png" />
        <img :class="$style.floor" src="@/assets/Floor.png" />
        <img
          :class="[$style.spook, $style.first]"
          src="@/assets/Spook1.png"
        />
        <img
          :class="[$style.spook, $style.second]"
          src="@/assets/Spook2.png"
        />
      </div>
    </div>
    <p>
      Spooky Trouble is a game I made for my minor creative design and
      technoligy. The primary goal was to 
    </p>
  </div>
</template>
<script>
export default {
  name: 'Spooky',
};
</script>

<style lang="scss" module>
.background {
  height: calc(100vh - 150px);
  background: $background-white;
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
    padding: 10rem 10rem 58px 10rem;

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
      top: 420px;
      right: 60px;
      z-index: -1;
    }
  }
}
</style>
