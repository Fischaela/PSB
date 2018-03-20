<template>
  <div class="finish">
    FINISH
    <button class="" v-text="" v-on:click="handleBackClick()">Back</button>
  </div>
</template>

<script>
import store from 'store';

export default {
  data() {
    return {
      show: this.$select('show'),
      theme: this.$select('theme')
    }
  },
  methods: {
    handleBackClick() {
      store.dispatch(store.actions.panelClients());
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variables';
  .finish {
    color: #666666;
    font-family: 'Roboto';
    font-size: 14px;
    text-align: center;

    padding: 64px 20px 40px 20px;
    position: absolute;
    width: 300px;
    height: 100%;
  }
</style>

