<template>
  <div class="popup">
    <div class="popup__modal">
      <div class="popup__modal__inner">
        <div class="popup__topbar">
          <button class="popup__topbar__button popup__topbar__button--help" v-if="panel() === 0">H</button>
          <button class="popup__topbar__button popup__topbar__button--back" v-if="panel() !== 0">B</button>
          <span class="popup__topbar__title">Subscribe</span>
          <button class="popup__topbar__button popup__topbar__button--close" v-on:click="handleCloseClick()">X</button>
        </div>
        <div class="popup__panels">
          <PodcastPanelComponent v-if="panel() === 0" class="popup__panel popup__panel--podcast"></PodcastPanelComponent>
          <ClientsPanelComponent v-if="panel() === 1" class="popup__panel popup__panel--podcast"></ClientsPanelComponent>
          <FinishPanelComponent v-if="panel() === 2" class="popup__panel popup__panel--podcast"></FinishPanelComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from 'store';
import PodcastPanelComponent from './PanelPodcast';
import ClientsPanelComponent from './PanelClients';
import FinishPanelComponent from './PanelFinish';

export default {
  data() {
    return {
      modal: this.$select('modal'),
      theme: this.$select('theme')
    }
  },
  methods: {
    handleCloseClick() {
      store.dispatch(store.actions.closeModal())
      if ('parentIFrame' in window) {
        parentIFrame.reset();
        parentIFrame.sendMessage('closeModal');
      }
    },
    panel() {
      return this.modal.panel
    }
  },
  components: {
    PodcastPanelComponent,
    ClientsPanelComponent,
    FinishPanelComponent
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
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: opacity 0.25s cubic-bezier(0.62, 0.28, 0.23, 0.99);
    vertical-align: middle;
  }
  .popup__modal {
    background-color: #FFFFFF;
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
    z-index: 1;
  }
  .popup__topbar__title {
    font-size: 14px;
    font-weight: 300;
    line-height: 14px;
    text-transform: uppercase;
  }
  .popup__topbar__button {
    position: absolute;
    top: 17px;
  }
  .popup__topbar__button--help,
  .popup__topbar__button--back {
    left: 20px;
  }
  .popup__topbar__button--close {
    right: 20px;
  }
</style>
