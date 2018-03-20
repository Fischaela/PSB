<template>
  <div class="container">
    <img class="podcast-cover" :v-if="show.cover" :src="show.cover">
    <div class="">
      <h1 v-text="show.title"></h1>
      <p v-if="show.subtitle" v-text="show.subtitle"></p>
      <button class="" v-text="">Next</button>
    </div>
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
  }
}
</script>

<style lang="scss">
  @import '~styles/variables';
</style>
