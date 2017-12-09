<template>
  <div>
    <span v-if="theme.button.format === 'cover'">
      <img src="http://meta.metaebene.me/media/newz/newz-logo-600x600.jpg" />
    </span>
    <button class="button" :style="buttonStyle">
      <span class="label">
        <SubscribeIcon class="icon" :color="theme.icon.color" :style="iconStyle"></SubscribeIcon>
        <span v-if="theme.button.format !== 'square'">Subscribe</span>
      </span>
    </button>
  </div>
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
    },
    iconStyle() {
      return {
        width: this.theme.icon.width,
        height: this.theme.icon.height
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
