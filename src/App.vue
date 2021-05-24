<template>
  <v-card class="overflow-hidden" id="desktopnav">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
      text>
        HOME
      </v-btn>
      <v-btn
      text>
        GROUPS
      </v-btn>
      <v-btn
      text>
        ABOUT US
      </v-btn>
      <v-btn
      text>
        GALLERY
      </v-btn>
      <v-btn
      text>
        CONTACT
      </v-btn>

    </v-app-bar>
  </v-card>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
@import url("https://use.typekit.net/srn1jpl.css");

template {
  margin: 0;
  padding: 0;
  font-family: 'proxima-nova', sans-serif;
}

v-btn {
  font-family: 'proxima-nova', sans-serif;
}

</style>
