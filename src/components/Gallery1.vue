<template>
    <div id="gallery1body">
        <h1 id="gallery1title">Juniorsommerlejr på Forlev 2019</h1>
            <hooper id="hooper">
                <slide>
                <v-img :src="require('/src/assets/gallery1/pic1.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery1/pic2.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery1/pic3.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery1/pic4.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery1/pic5.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery1/pic6.jpeg')" id="galleryimage"></v-img>
                </slide>

                <hooper-navigation slot="hooper-addons"></hooper-navigation>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
    </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'Gallery1',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
  data() {
    return {
     
  }}
};
</script>

<style lang="scss">

#galleryimage {
        height: 400px;
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

    #galleryimage {
        height: 600px;
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
        letter-spacing: 10px;
        color: #133454;
        font-size: 3em;
    }
}
</style>