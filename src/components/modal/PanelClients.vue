<template>
  <div class="clients">
    <div class="">
      <button class="">App<span class=""></span></button><!--
      --><button class="">Cloud<span class=""></span></button>
    </div>
    <div>
      <ul>
        <li>
          <a href="" target="_blank"><img src="">Client</a>
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
      store.dispatch(store.actions.panelFinish());
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
  .clients {
    color: #666666;
    font-family: 'Roboto';
    font-size: 14px;
    text-align: center;

    padding: 64px 20px 40px 20px;
    position: absolute;
    width: 300px;
    height: 100%;
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
