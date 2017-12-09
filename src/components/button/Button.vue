<template>
  <button class="button" :style="buttonStyle">
    <span class="label">
      <SubscribeIcon class="icon" :color="theme.button.iconColor"></SubscribeIcon>
      Subscribe
    </span>
  </button>
</template>

<script>
import store from 'store';
import SubscribeIcon from 'icons/SubscribeIcon.vue';

export default {
  components: {
    SubscribeIcon,
  },
  data() {
    return {
      theme: this.$select('theme')
    }
  },
  computed: {
    buttonStyle() {
      return {
        color: this.theme.button.textSize,
        backgroundColor: this.theme.button.backgroundColor
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variables';
  .button {
    text-align: center;
    text-transform: uppercase;
    border-radius: 0;
    width: 100%;
  }
  .button.big {
    font-size: 16px;
    width: 180px;
    height: 54px;
  }
  .icon {
    vertical-align: middle;
    width: 30px;
    height: 30px;
  }
  .label {
    position: inline-block;
  }
</style>
