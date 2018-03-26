<template>
  <div class="clients">
    <div class="clients__tabs">
      <button class="clients__tab" :class="{ 'clients__tab--active': activeTab === 0 }" :style="activeTabStyle(0)" v-on:click="handleTabClick()" :disabled="activeTab === 0">App<span class="clients__tab__indicator" :style="activeIndicatorStyle(0)"></span></button><!--
      --><button class="clients__tab" :class="{ 'clients__tab--active': activeTab === 1 }" :style="activeTabStyle(1)" v-on:click="handleTabClick()" :disabled="activeTab === 1">Cloud<span class="clients__tab__indicator" :style="activeIndicatorStyle(1)"></span></button>
    </div>
    <div>
      <clientsOs v-if="activeTab === 0"></clientsOs>
      <clientsCloud v-if="activeTab === 1"></clientsCloud>
    </div>
  </div>
</template>

<script>
import store from 'store';
import clientsOs from '../clients/clientsOs';
import clientsCloud from '../clients/clientsCloud';

export default {
  data() {
    return {
      hoverState: false,
      activeTab: 0,
      show: this.$select('show'),
      theme: this.$select('theme')
    }
  },
  computed: {
    buttonStyle() {
      let modifier = '';

      if (this.hoverState) {
        modifier = 'Hover';
      }

      return {
        color: this.theme.unthemedButton['textColor' + modifier],
        backgroundColor: this.theme.unthemedButton['backgroundColor' + modifier]
      }
    }
  },
  methods: {
    handleTabClick() {
      if (this.activeTab === 0) {
        this.activeTab = 1;
      } else {
        this.activeTab = 0;
      }
    },
    updateHoverState(isHover) {
      console.log(isHover)
      this.hoverState = isHover;
    },
    activeTabStyle(index) {
      let color = 'inherit';

      if (index === this.activeTab) {
        color = this.theme.unthemedButton['backgroundColor'];
      }
      return {
        color: color
      }
    },
    activeIndicatorStyle(index) {
      let backgroundColor = 'inherit';

      if (index === this.activeTab) {
        backgroundColor = this.theme.unthemedButton['backgroundColor'];
      }

      return {
        backgroundColor: backgroundColor
      }
    }
  },
  components: {
    clientsOs,
    clientsCloud
  }
}
</script>

<style lang="scss">
  @import '~styles/variables';
  .clients {
    color: #666666;
    font-family: 'Roboto';
    font-size: 14px;
    text-align: center;

    padding: 48px 0 0 0;
    position: absolute;
    width: 300px;
    height: 100%;
  }
  .clients__listelement {
    border-bottom: 1px solid #E1E1E1;
    cursor: pointer;
    font-size: 16px !important;
    font-weight: 200 !important;
    list-style: none !important;
    padding: 0;
    position: relative;
    text-align: left;
  }
  .clients__listelement__img {
    height: 28px !important;
    left: 18px;
    position: absolute;
    width: 28px !important;
  }
  .clients__listelement__link {
    border: none;
    color: inherit;
    display: block;
    font-weight: 200 !important;
    padding: 10px 20px 10px 58px;
    text-decoration: none;
  }
  .clients__tabs {
    background-color: #F2F2F2;
    border-bottom: 1px solid #CBCBCB;
    border-top: 1px solid #E1E1E1;
    padding: 0 20px;
    height: 48px;
  }
  .clients__tab {
    background-color: transparent;
    border: none;
    color: #AAAAAA;
    cursor: pointer;
    display: inline-block;
    font-size: 16px !important;
    font-weight: 300;
    height: 100%;
    line-height: 1em;
    margin: 0;
    padding: 16px 0 14px 0;
    outline: none;
    width: 50%;
  }
  .clients__tab--active {
    position: relative;

    .clients__tab__indicator {
      transform: scaleX(1);
    }
  }
  .clients__tab__indicator {
    bottom: -1.5px;
    display: block;
    height: 3px;
    left: 20px;
    position: absolute;
    right: 20px;
    transform-origin: 50% 50%;
    transition: transform 0.25s cubic-bezier(0.62, 0.28, 0.23, 0.99);
    width: 90px;
  }
  .finish__button {
    border-radius: 1px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    font-weight: 500;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 21px;
    outline: none;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.1s cubic-bezier(0.62, 0.28, 0.23, 0.99);
    width: 100%;
  }
  .finish__button--hover {
    box-shadow: none;
    transform: translateY(1px);
  }
</style>
