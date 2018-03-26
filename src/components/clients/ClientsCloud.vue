<template>
  <ul>
    <li class="clients__listelement" v-for="client in clients" v-on:click="handleNextClick()">
      <a class="clients__listelement__link":href="client.scheme" target="_blank"><img class="clients__listelement__img" :src="client.icon">{{ client.title }}</a>
    </li>
  </ul>
</template>

<script>
import store from 'store';

export default {
  data() {
    return {
      uas: {
        windows7: new RegExp('Windows NT 6.1'),
        windows8: new RegExp('Windows NT 6.2'),
        windows81: new RegExp('Windows NT 6.3'),
        windows10: new RegExp('Windows NT 10.0'),
        windowsphone: new RegExp('trident', 'i'),
        android: new RegExp('android', 'i'),
        ios: new RegExp('(ipad|iphone|ipod)', 'i'),
        linux: new RegExp('linux', 'i'),
        osx: new RegExp('macintosh', 'i')
      },
      clients: [
        {
          title: 'gpodder.net',
          scheme: 'http://gpodder.net/subscribe?url=',
          icon: 'cloud/gpoddernet.png',
          register: 'https://gpodder.net/',
          http: true
        },
        {
          title: 'Player.fm',
          scheme: 'https://player.fm/subscribe?id=',
          icon: 'cloud/playerfm.png',
          register: 'https://player.fm/',
          http: true
        },
        {
          title: 'Pocket Casts',
          scheme: 'http://pcasts.in/feed/',
          icon: 'cloud/pocketcasts.png',
          register: 'https://play.pocketcasts.com/',
          http: false
        }
      ]
    }
  },
  methods: {
    handleNextClick() {
      store.dispatch(store.actions.panelFinish());
    }
  }
}

</script>
