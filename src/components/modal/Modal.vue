<template>
  <div class="popup">
    <div class="popup__modal">
      <div class="popup__modal__inner">
        <div class="popup__topbar">
          <button class="popup__topbar__button popup__topbar__button--help" :style="topbarButtonStyle" v-if="panel() === 0">
            <help-icon color="#666666"></help-icon>
          </button>
          <button class="popup__topbar__button popup__topbar__button--back" v-if="panel() !== 0" v-on:click="handleBackClick()">
            <back-icon color="#666666"></back-icon>
          </button>
          <span class="popup__topbar__title">Subscribe</span>
          <button class="popup__topbar__button popup__topbar__button--close" v-on:click="handleCloseClick()">
            <close-icon color="#666666"></close-icon>
          </button>
        </div>
        <div class="popup__panels">
          <PodcastPanelComponent v-if="panel() === 0" class="popup__panel popup__panel--podcast"></PodcastPanelComponent>
          <ClientsPanelComponent v-if="panel() === 1" class="popup__panel popup__panel--podcast"></ClientsPanelComponent>
          <FinishPanelComponent v-if="panel() === 2" class="popup__panel popup__panel--podcast"></FinishPanelComponent>
        </div>
      </div>
      <a href="https://podlove.org" title="Podlove" target="_blank" class="popup__logo"><powered-by-podlove-icon width="130px" height="16px"></powered-by-podlove-icon></a>
    </div>
  </div>
</template>

<script>
import store from 'store';
import PodcastPanelComponent from './PanelPodcast';
import ClientsPanelComponent from './PanelClients';
import FinishPanelComponent from './PanelFinish';
import BackIcon from 'icons/BackIcon';
import CloseIcon from 'icons/CloseIcon';
import HelpIcon from 'icons/HelpIcon';
import PoweredByPodloveIcon from 'icons/PoweredByPodloveIcon';

export default {
  data() {
    return {
      modal: this.$select('modal'),
      theme: this.$select('theme')
    }
  },
  computed: {
    topbarButtonStyle() {
      let modifier = '';

      if (this.hoverState) {
        modifier = 'Hover';
      }

      return {
        color: this.theme.unthemedButton['backgroundColor' + modifier]
      }
    }
  },
  methods: {
    handleBackClick() {
      if (this.panel() === 2) {
        store.dispatch(store.actions.panelClients());
      } else {
        store.dispatch(store.actions.panelPodcast());
      }
    },
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
    FinishPanelComponent,
    BackIcon,
    CloseIcon,
    HelpIcon,
    PoweredByPodloveIcon
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
  .popup__logo {
    background-color: #F2F2F2;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    bottom: 0;
    color: #666666;
    font-size: 10px;
    height: 35px;
    left: 0;
    padding: 11px;
    position: absolute;
    text-align: center;
    width: 100%;
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
