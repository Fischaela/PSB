<template>
  <div class="clients">
    <div class="clients__tabs">
      <button class="clients__tab" :class="{ 'clients__tab--active': activeTab === 0 }" :style="activeTabStyle(0)" v-on:click="handleTabClick()">App<span class="clients__tab__indicator" :style="activeIndicatorStyle(0)"></span></button><!--
      --><button class="clients__tab" :class="{ 'clients__tab--active': activeTab === 1 }" :style="activeTabStyle(1)" v-on:click="handleTabClick()">Cloud<span class="clients__tab__indicator" :style="activeIndicatorStyle(1)"></span></button>
    </div>
    <div>
      <ul>
        <li v-for="client in clients">
          <a :href="client.scheme" target="_blank"><img :src="client.icon">{{ client.title }}</a>
        </li>
      </ul>
    </div>
    <button class="finish__button" :class="{ 'podcast__button--hover': hoverState }" :style="buttonStyle" v-text="" @mouseenter="updateHoverState(true)" @mouseleave="updateHoverState(false)" v-on:click="handleNextClick()">Next</button>
  </div>
</template>

<script>
import store from 'store';

export default {
  data() {
    return {
      hoverState: false,
      activeTab: 0,
      show: this.$select('show'),
      clients: [
        {
          title: 'Downcast',
          scheme: 'downcast://',
          icon: 'osx/downcast.png',
          store: 'https://itunes.apple.com/de/app/downcast/id668429425?mt=12&uo=4',
        },
        {
          title: 'Instacast',
          scheme: 'instacast://',
          icon: 'osx/instacast.png'
        },
        {
          title: 'iTunes',
          scheme: 'itpc://',
          icon: 'osx/itunes.png',
          install: 'http://www.apple.com/itunes/',
          customFeedType: 'itunes'
        },
        {
          title: 'PodGrasp',
          scheme: 'podgrasp://subscribe/',
          icon: 'osx/podgrasp.png',
          store: 'https://itunes.apple.com/de/app/podgrasp-podcast-player/id530928805'
        }
      ],
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
    handleNextClick() {
      store.dispatch(store.actions.panelFinish());
    },
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
