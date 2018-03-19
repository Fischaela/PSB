<template>
  <div class="popup">
    <div class="popup__modal">
      <div class="popup__modal__inner">
        <div class="popup__topbar">
          <button class="popup__topbar__button popup__topbar__button--help" v-on:click="handleCloseClick()">X</button>
          <button class="popup__topbar__button popup__topbar__button--back"></button>
          <h1 class="popup__topbar__title"></h1>
          <button class="popup__topbar__button popup__topbar__button--close"></button>
        </div>
        <div class="popup__panels">
          <div class="popup__panel popup__panel--podcast"></div>
          <div class="popup__panel popup__panel--clients"></div>
          <div class="popup__panel popup__panel--finish"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from 'store';

export default {
  data() {
    return {
      theme: this.$select('theme')
    }
  },
  methods: {
    handleCloseClick() {
      if ('parentIFrame' in window) {
        parentIFrame.size('auto', 'auto');
        parentIFrame.sendMessage('closeModal');
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variables';
  .popup {
    font-family: "Roboto", sans-serif;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    padding: 0;
    position: fixed;
    left: 50px;
    right: 0;
    top: 0;
    bottom: 0;
    transition: opacity 0.25s cubic-bezier(0.62, 0.28, 0.23, 0.99);
    vertical-align: middle;
  }
  .popup__modal {
    border-radius: 1px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    margin: -230px auto 0 auto;
    padding: 0;
    position: relative;
    top: 50%;
    width: 300px;
    height: 460px;
  }
  .popup__modal__inner {
    position: relative;
    height: 100%;
  }
  .popup__topbar {
    color: #AAAAAA;
    font-size: 14px;
    font-weight: 300;
    line-height: 14px;
    text-align: center;

    padding: 17px 0 15px 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
  }
</style>
