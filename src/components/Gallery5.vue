<template>
    <div id="gallery5body">
        <h1 id="gallery5title">Sommerlejr for Junior og trop til Kulsø 2013</h1>
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
  name: 'Gallery5',
  components: {
  },
  data() {
    return {
     items: [
          {
            src: require('../assets/gallery5/pic1.jpeg'),
          },
          {
            src: require('../assets/gallery5/pic2.jpeg'),
          },
          {
            src: require('../assets/gallery5/pic3.jpeg'),
          },
          {
            src: require('../assets/gallery5/pic4.jpeg'),
          },
          {
            src: require('../assets/gallery5/pic5.jpeg'),
          },
          {
            src: require('../assets/gallery5/pic6.jpeg'),
          },
        ],
  }}
};
</script>

<style lang="scss">

    #carousel {
      width: 100%;
    }

    #gallery5body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }

    #gallery5title {
        max-width: 80%;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #133454;
        font-size: 2em;
    }

@media only screen and (min-width: 688px) {

    #carousel {
      width: 80%;
    }

    #gallery5body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }

    #gallery5title {
        max-width: 80%;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
        font-weight: normal;
        letter-spacing: 10px;
        color: #133454;
        font-size: 3em;
    }
}
</style>