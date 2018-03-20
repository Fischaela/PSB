<template>
  <div>
    <div class="cover" v-if="theme.button.cover === 'cover'" :style="coverStyle"></div>
    <button class="button" :style="buttonStyle" @mouseenter="updateHoverState(true)" @mouseleave="updateHoverState(false)" v-on:click="handleButtonClick()">
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
      theme: this.$select('theme'),
      hoverState: false
    }
  },
  computed: {
    buttonStyle() {
      let modifier = '';

      if (this.hoverState) {
        modifier = 'Hover';
      }

      return {
        border: this.theme.button['border' + modifier],
        color: this.theme.button['textColor' + modifier],
        fontSize: this.theme.button.textSize,
        backgroundColor: this.theme.button['backgroundColor' + modifier],
        width: this.theme.button.width,
        height: this.theme.button.height
      }
    },
    coverStyle() {
      return {
        backgroundImage: 'url("' + this.theme.cover.url + '")',
        width: this.theme.cover.width,
        height: this.theme.cover.height
      }
    },
    iconStyle() {
      let modifier = '';

      if (this.hoverState) {
        modifier = 'Hover';
      }

      return {
        color: this.theme.icon['color' + modifier],
        width: this.theme.icon.width,
        height: this.theme.icon.height
      }
    }
  },
  methods: {
    updateHoverState(isHover) {
      this.hoverState = isHover;
    },
    handleButtonClick() {
      let iframeDimensions = {
        width: 0,
        height: 0
      };

      store.dispatch(store.actions.openModal());

      if ('parentIFrame' in window) {
        console.log('2',parentIFrame);
        parentIFrame.getPageInfo(function(callback) {
          parentIFrame.size(callback.clientHeight, callback.clientWidth);
        });
        parentIFrame.sendMessage('openModal');
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
  .cover {
    background-size: cover;
    cursor: pointer;
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
