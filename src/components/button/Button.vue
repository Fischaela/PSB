<template>
  <button class="big button">
    <span class="label">
      <SubscribeIcon class="icon"></SubscribeIcon>
      Subscribe
    </span>
  </button>
</template>

<script>
import store from 'store'

import SubscribeIcon from 'icons/SubscribeIcon.vue'

export default {
  components: {
    SubscribeIcon,
  }
}
</script>

<style lang="scss">
  @import '~styles/variables';
  .button {
    color: $text-color;
    text-align: center;
    text-transform: uppercase;
    background-color: $background-color;
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
