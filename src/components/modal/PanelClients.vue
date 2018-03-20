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
    <button class="" v-text="" v-on:click="handleBackClick()">Back</button>
    <button class="" v-text="" v-on:click="handleNextClick()">Next</button>
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
      store.dispatch(store.actions.panelPodcast());
    },
    handleNextClick() {
      store.dispatch(store.actions.panelFinish());
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
</style>
