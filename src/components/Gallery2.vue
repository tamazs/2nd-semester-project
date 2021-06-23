<template>
    <div id="gallery2body">
        <h1 id="gallery2title">Gruppesommerlejr til Tydal 2016</h1>
            <v-carousel hide-delimiters :touch="{
                left: () => activeSlide--,
                right: () => activeSlide++
                }" id="carousel">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            id="carouselpic"
            ></v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>

export default {
  name: 'Gallery2',
  components: {
  },
  data() {
    return {
     items: [
          {
            src: require('../assets/gallery2/pic1.jpg'),
          },
          {
            src: require('../assets/gallery2/pic2.jpg'),
          },
          {
            src: require('../assets/gallery2/pic3.jpg'),
          },
          {
            src: require('../assets/gallery2/pic4.jpg'),
          },
          {
            src: require('../assets/gallery2/pic5.jpg'),
          },
          {
            src: require('../assets/gallery2/pic6.jpg'),
          },
        ],
  }}
};
</script>

<style lang="scss">

    #carousel {
      width: 100%;
    }

    #gallery2body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        background-color: #133454;
    }

    #gallery2title {
        max-width: 80%;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
        font-weight: normal;
        letter-spacing: 0px;
        color: white;
        font-size: 2em;
    }

@media only screen and (min-width: 688px) {

    #carousel {
      width: 80%;
    }

    #gallery2body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        background-color: #133454;
    }

    #gallery2title {
        max-width: 80%;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
        font-weight: normal;
        letter-spacing: 10px;
        color: white;
        font-size: 3em;
    }
}
</style>