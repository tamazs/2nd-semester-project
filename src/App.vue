<template>
  <div id="app">
    <div id="navbar">
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          elevate-on-scroll
          scroll-target="#scrolling-techniques-7"
          id="desktopnav"
        >

          <v-toolbar-title>Title</v-toolbar-title>

          <v-spacer></v-spacer>

          <router-link to="/">Home</router-link>
          <router-link to="/groups">Groups</router-link>
          <router-link to="/about">About us</router-link>
          <router-link to="/gallery">Gallery</router-link>
          <router-link to="/contact">Contact</router-link>
        </v-app-bar>
      </v-card>
    </div>
      <router-view />

      <div id="mobilenav">
        <v-bottom-navigation
          v-model="value"
          :background-color="color"
          dark
          shift
          >
          <v-btn to="/">
              <span>Home</span>

              <v-icon>mdi-home</v-icon>
          </v-btn>

          <v-btn to="/groups">
            <span>Groups</span>

            <v-icon>mdi-account-multiple</v-icon>
          </v-btn>

          <v-btn to="/about">
            <span>About us</span>

            <v-icon>mdi-information</v-icon>
          </v-btn>

          <v-btn to="/gallery">
            <span>Gallery</span>

            <v-icon>mdi-image</v-icon>
          </v-btn>
          <v-btn to="/contact">
            <span>Contact</span>

            <v-icon>mdi-email</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',

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

#app {
  margin: 0;
  padding: 0;
  font-family: 'proxima-nova', sans-serif;
}

#navbar {
  display: none;
}

a {
  font-size: 20px;
  text-decoration: none;
  margin: 0;
  padding: 0;
  
}

a.router-link-active {
  border-bottom: 3px solid #225384;
}

#desktopnav {
  background-color: white;
}

@media only screen and (min-width: 992px) {
    #navbar {
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
