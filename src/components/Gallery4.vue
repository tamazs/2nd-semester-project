<template>
    <div id="gallery4body">
        <h1 id="gallery4title">Sommerlejr for minier på Kulsø 2014</h1>
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
  name: 'Gallery4',
  components: {
  },
  data() {
    return {
     items: [
          {
            src: require('../assets/gallery4/pic1.jpeg'),
          },
          {
            src: require('../assets/gallery4/pic2.jpeg'),
          },
          {
            src: require('../assets/gallery4/pic3.jpeg'),
          },
          {
            src: require('../assets/gallery4/pic4.jpeg'),
          },
          {
            src: require('../assets/gallery4/pic5.jpeg'),
          },
          {
            src: require('../assets/gallery4/pic6.jpeg'),
          },
        ],
  }}
};
</script>

<style lang="scss">

    #carousel {
      width: 100%;
    }

    #gallery4body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        background-color: #133454;
    }

    #gallery4title {
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

    #gallery4body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        background-color: #133454;
    }

    #gallery4title {
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