<template>
  <v-app id="app">
    <div id="navbar">
      <v-card class="overflow-hidden">
        <v-app-bar
          elevate-on-scroll
          id="desktopnav"
        >

          <v-toolbar-title  id="toolbarlogo">
            <img :src="require('/src/assets/logo.png')" height="40">
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <router-link :to="`/${$i18n.locale}`" id="desknavlink" exact>{{ $t('nav.home') }} </router-link>
          <router-link :to="`/${$i18n.locale}/groups`" id="desknavlink" exact>{{ $t('nav.groups') }}</router-link>
          <router-link :to="`/${$i18n.locale}/about`" id="desknavlink" exact>{{ $t('nav.about') }}</router-link>
          <router-link :to="`/${$i18n.locale}/gallery`" id="desknavlink" exact>{{ $t('nav.gallery') }}</router-link>
          <router-link :to="`/${$i18n.locale}/contact`" id="desknavlink" exact>{{ $t('nav.contact') }}</router-link>
          <LanguageSwitcher />
        </v-app-bar>
      </v-card>
    </div>
      <div id="mobilenav">
        <v-bottom-navigation
          v-model="value"
          :background-color="color"
          dark
          shift
          >
          <v-btn :to="`/${$i18n.locale}`" exact>
              <span>{{ $t('nav.home') }}</span>

              <v-icon>mdi-home</v-icon>
          </v-btn>

          <v-btn :to="`/${$i18n.locale}/groups`" exact>
            <span>{{ $t('nav.groups') }}</span>

            <v-icon>mdi-account-multiple</v-icon>
          </v-btn>

          <v-btn :to="`/${$i18n.locale}/about`" exact>
            <span>{{ $t('nav.about') }}</span>

            <v-icon>mdi-information</v-icon>
          </v-btn>

          <v-btn :to="`/${$i18n.locale}/gallery`" exact>
            <span>{{ $t('nav.gallery') }}</span>

            <v-icon>mdi-image</v-icon>
          </v-btn>
          <v-btn :to="`/${$i18n.locale}/contact`" exact>
            <span>{{ $t('nav.contact') }}</span>

            <v-icon>mdi-email</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </div>
      <transition name="view">
        <router-view />
      </transition>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    LanguageSwitcher: () => import('@/components/LanguageSwitcher'),
  },

  data: () => ({ value: 1 }),

  computed: {
      color () {
        switch (this.value) {
          case 0: return '#225384'
          case 1: return '#133454'
          case 2: return '#0A4E22'
          case 3: return '#225384'
          case 4: return '#133454'
          default: return 'blue-grey'
        }
      },
    },
  };
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");

html {
  scroll-behavior: smooth;
}

#app {
  margin: 0;
  padding: 0;
  font-family: 'proxima-nova', sans-serif;
}

#desknavlink {
  display: none;
}


#desktopnav {
background-color: white;
z-index: 99;
position: fixed;
width: 100vw;
top: 0;
}

#mobilenav {
      display: unset;
      position: fixed;
      z-index: 99;
      width: 100vw;
      bottom: 0;
    }

a {
    font-size: 20px;
    text-decoration: none;
    margin: 0;
    }

#toolbarlogo {
  margin-left: 30px;
  top: 50%;
  bottom: 50%;
}

.view-enter-active, .view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition-delay: 0.5s;
}

.view-enter, .view-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}

.view-enter-to, .view-leave {
  opacity: 1;
  transform: translateX(0px);
}

@media only screen and (min-width: 992px) {
    #desknavlink {
    display: unset;
    }

    #mobilenav {
    display: none;
    }

    a {
    font-size: 20px;
    text-decoration: none;
    margin-right: 3rem;
    color: #133454;
    }

  a.router-link-active {
    border-bottom: 3px solid #225384;
  }
}

</style>
