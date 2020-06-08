<template>
  <div :class="[$style.btn, $style.sectionbtn]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style lang="scss" module>
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  text-decoration: none;
}

.sectionbtn {
  background-color: #000000;
  border: none;
  border-radius: 50px;
  color: #f0f0f0;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding: 18px 32px;
  margin-top: 42px;
  text-transform: uppercase;
}
</style>
