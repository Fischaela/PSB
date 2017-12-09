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
        border: this.theme.button.border,
        color: this.theme.button.textColor,
        fontSize: this.theme.button.textSize,
        backgroundColor: this.theme.button.backgroundColor,
        width: this.theme.button.width,
        height: this.theme.button.height
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
