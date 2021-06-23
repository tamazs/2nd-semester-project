<template>
    <div id="gallery1body">
        <h1 id="gallery1title">Juniorsommerlejr på Forlev 2019</h1>
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
  name: 'Gallery1',
  components: {
  },
  data() {
    return {
     items: [
          {
            src: require('../assets/gallery1/pic1.jpeg'),
          },
          {
            src: require('../assets/gallery1/pic2.jpeg'),
          },
          {
            src: require('../assets/gallery1/pic3.jpeg'),
          },
          {
            src: require('../assets/gallery1/pic4.jpeg'),
          },
          {
            src: require('../assets/gallery1/pic5.jpeg'),
          },
          {
            src: require('../assets/gallery1/pic6.jpeg'),
          },
        ],
  }}
};
</script>

<style lang="scss">

    #carousel {
      width: 100%;
    }

    #gallery1body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }

    #gallery1title {
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

    #gallery1body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }

    #gallery1title {
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