<template>
  <ul>
    <li class="clients__listelement" v-for="userClient in userClients" v-on:click="handleNextClick()">
      <a class="clients__listelement__link":href="userClient.scheme" target="_blank"><img class="clients__listelement__img" :src="userClient.icon">{{ userClient.title }}</a>
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
      clients: {
        windows7: [
          {
            title: 'gPodder',
            scheme: 'gpodder://',
            icon: 'windows/gpodder.png',
            install: 'http://gpodder.org/downloads'
          },
          {
            title: 'iTunes',
            scheme: 'itpc://',
            icon: 'osx/itunes.png',
            install: 'http://www.apple.com/itunes/',
            customFeedType: 'itunes-url'
          }
        ],
        windows8: [
          {
            title: 'gPodder',
            scheme: 'gpodder://',
            icon: 'windows/gpodder.png',
            install: 'http://gpodder.org/downloads'
          },
          {
            title: 'iTunes',
            scheme: 'itpc://',
            icon: 'osx/itunes.png',
            install: 'http://www.apple.com/itunes/',
            customFeedType: 'itunes-url'
          },
          {
            title: 'Podscout',
            scheme: 'podscout://',
            icon: 'windows/podscout.png',
            store: 'http://apps.microsoft.com/windows/de-de/app/podscout/f4316b46-7682-4cea-948b-53d135b2df17'
          }
        ],
        windows81: [
          {
            title: 'gPodder',
            scheme: 'gpodder://',
            icon: 'windows/gpodder.png',
            install: 'http://gpodder.org/downloads'
          },
          {
            title: 'iTunes',
            scheme: 'itpc://',
            icon: 'osx/itunes.png',
            install: 'http://www.apple.com/itunes/',
            customFeedType: 'itunes-url'
          },
          {
            title: 'Podscout',
            scheme: 'podscout://',
            icon: 'windows/podscout.png',
            store: 'http://apps.microsoft.com/windows/de-de/app/podscout/f4316b46-7682-4cea-948b-53d135b2df17'
          }
        ],
        windows10: [
          {
            title: 'gPodder',
            scheme: 'gpodder://',
            icon: 'windows/gpodder.png',
            install: 'http://gpodder.org/downloads'
          },
          {
            title: 'iTunes',
            scheme: 'itpc://',
            icon: 'osx/itunes.png',
            install: 'http://www.apple.com/itunes/',
            customFeedType: 'itunes-url'
          },
          {
            title: 'Podscout',
            scheme: 'podscout://',
            icon: 'windows/podscout.png',
            store: 'http://apps.microsoft.com/windows/de-de/app/podscout/f4316b46-7682-4cea-948b-53d135b2df17'
          }
        ],
        windowsphone: [
          {
            title: 'BringCast',
            scheme: 'bringcast://subscribe/',
            icon: 'windowsphone/bringcast.png',
            store: 'http://windowsphone.com/s?appId=e5abef38-d413-e011-9264-00237de2db9e'
          },
          {
            title: 'gramocast',
            scheme: 'gramocast://subscribe/',
            icon: 'windowsphone/gramocast.png',
            store: 'http://windowsphone.com/s?appId=ebb52054-5071-4aa4-9537-00399d06a99e'
          },
          {
            title: 'Podcast Lounge',
            scheme: 'podcastlounge://subscribe/',
            icon: 'windowsphone/podcastlounge.png',
            store: 'http://windowsphone.com/s?appId=83bc0329-8e02-410e-b6d2-da3c0c1d971d'
          },
          {
            title: 'Podcast Picker',
            scheme: 'podcastpicker://',
            icon: 'windowsphone/podcastpicker.png',
            store: 'http://windowsphone.com/s?appId=79b72069-b656-47d2-bab1-fa2d4061825e'
          },
          {
            title: 'Podcasts',
            scheme: 'podcast:',
            icon: 'windowsphone/podcasts.png'
          }
        ],
        android: [
          {
            title: 'AntennaPod',
            scheme: 'antennapod-subscribe://',
            icon: 'android/antennapod.png',
            store: 'https://play.google.com/store/apps/details?id=de.danoeh.antennapod'
          },
          {
            title: 'BeyondPod',
            scheme: 'beyondpod://',
            icon: 'android/beyondpod.png',
            store: 'https://play.google.com/store/apps/details?id=mobi.beyondpod'
          },
          {
            title: 'Player.fm',
            scheme: 'https://player.fm/subscribe?id=',
            icon: 'android/playerfm.png',
            store: 'https://play.google.com/store/apps/details?id=fm.player'
          },
          {
            title: 'Podcast Addict',
            scheme: 'podcastaddict://',
            icon: 'android/podcastaddict.png',
            store: 'https://play.google.com/store/apps/details?id=com.bambuna.podcastaddict'
          },
          {
            title: 'Podcatcher Deluxe',
            scheme: 'pcd://',
            icon: 'android/podcatcher-deluxe.png',
            store: 'https://play.google.com/store/search?q=pub:Kevin%20Hausmann'
          },
          {
            title: 'Podkicker',
            scheme: 'podkicker://subscribe/',
            icon: 'android/podkicker.png',
            store: 'https://play.google.com/store/apps/details?id=ait.podka'
          },
          {
            title: 'uPod',
            scheme: 'upod://',
            icon: 'android/upod.png',
            store: 'https://play.google.com/store/apps/details?id=mobi.upod.app'
          }
        ],
        ios: [
          {
            title: 'Castro',
            scheme: 'castro://subscribe/',
            icon: 'ios/castro.png',
            store: 'https://itunes.apple.com/de/app/castro-high-fidelity-podcasts/id723142770'
          },
          {
            title: 'Downcast',
            scheme: 'downcast://',
            icon: 'ios/downcast.png',
            store: 'https://itunes.apple.com/de/app/downcast/id393858566'
          },
          {
            title: 'iCatcher',
            scheme: 'icatcher://',
            icon: 'ios/icatcher.png',
            store: 'https://itunes.apple.com/de/app/icatcher!-podcast-app/id414419105'
          },
          {
            title: 'Instacast',
            scheme: 'instacast://',
            icon: 'ios/instacast.png',
            store: 'https://itunes.apple.com/de/app/instacast-4-podcast-client/id577056377'
          },
          {
            title: 'Overcast',
            scheme: 'overcast://x-callback-url/add?url=',
            icon: 'ios/overcast.png',
            store: 'https://itunes.apple.com/de/app/overcast-podcast-player/id888422857'
          },
          {
            title: 'PocketCasts',
            scheme: 'pktc://subscribe/',
            icon: 'ios/pocketcasts.png',
            store: 'https://itunes.apple.com/de/app/pocket-casts/id414834813'
          },
          {
            title: 'Podcasts',
            scheme: 'pcast://',
            icon: 'ios/podcasts.png',
            store: 'https://itunes.apple.com/de/app/podcasts/id525463029'
          },
          {
            title: 'Podcat',
            scheme: 'podcat://',
            icon: 'ios/podcat.png',
            store: 'https://itunes.apple.com/app/podcat/id845960230'
          },
          {
            title: 'PodGrasp',
            scheme: 'podgrasp://subscribe/',
            icon: 'ios/podgrasp.png',
            store: 'https://itunes.apple.com/de/app/podgrasp-podcast-player/id531648276'
          },
          {
            title: 'RSSRadio',
            scheme: 'rssradio://',
            icon: 'ios/rssradio.png',
            store: 'https://itunes.apple.com/app/rssradio-premium-podcast-downloader/id679025359'
          }
        ],
        linux: [
          {
            title: 'Clementine',
            scheme: 'itpc://',
            icon: 'linux/clementine.png'
          },
          {
            title: 'gPodder',
            scheme: 'gpodder://',
            icon: 'linux/gpodder.png',
            install: 'http://gpodder.org/downloads'
          }
        ],
        osx: [
          {
            title: 'Downcast',
            scheme: 'downcast://',
            icon: 'osx/downcast.png',
            store: 'https://itunes.apple.com/de/app/downcast/id668429425?mt=12&uo=4'
          },
          {
            title: 'Instacast',
            scheme: 'instacast://',
            icon: 'osx/instacast.png',
            store: 'https://itunes.apple.com/de/app/instacast/id733258666?mt=12&uo=4'
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
        ]
      },
      userClients: []
    }
  },
  methods: {
    handleNextClick() {
      store.dispatch(store.actions.panelFinish());
    }
  },
  mounted: function () {
    let userAgent = (window.navigator && navigator.userAgent) || '';
    userAgent.toLowerCase();
    for (let key in this.uas) {
      if (this.uas.hasOwnProperty(key)) {
        let regex = new RegExp(this.uas[key]);
        if (regex.test(userAgent)) {
          this.userClients = this.clients[key];
          return key;
        }
      }
    }
  }
}

</script>
