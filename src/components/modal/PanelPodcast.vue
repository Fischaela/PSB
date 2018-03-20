<template>
  <div class="podcast">
    <img class="podcast__cover" :v-if="show.cover" :src="show.cover">
    <div class="podcast__copy">
      <h1 class="podcast__title" v-text="show.title"></h1>
      <p class="podcast__text" v-if="show.subtitle" v-text="show.subtitle"></p>
    </div>
    <button class="podcast__button" :class="{ 'podcast__button--hover': hoverState }" :style="buttonStyle" v-text="" @mouseenter="updateHoverState(true)" @mouseleave="updateHoverState(false)" v-on:click="handleNextClick()">Next</button>
  </div>
</template>

<script>
import store from 'store';

export default {
  data() {
    return {
      hoverState: false,
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
    handleNextClick() {
      store.dispatch(store.actions.panelClients());
    },
    updateHoverState(isHover) {
      console.log(isHover)
      this.hoverState = isHover;
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variables';
  .podcast {
    color: #666666;
    font-family: 'Roboto';
    font-size: 14px;
    text-align: center;

    padding: 64px 20px 40px 20px;
    position: absolute;
    width: 300px;
    height: 100%;
  }
  .podcast__button {
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
  .podcast__button--hover {
    box-shadow: none;
    transform: translateY(1px);
  }
  .podcast__copy {
    margin: 20px 0;
    overflow: hidden;
    height: 90px;
  }
  .podcast__cover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 0 auto;
    width: 160px;
    height: 160px;
  }
  .podcast__text {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.4em;
    margin: 0;
  }
  .podcast__title {
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    margin: 0 0 10px 0;
  }
</style>
