<template>
    <div id="gallery6body">
        <h1 id="gallery6title">Juniorsommerlejr 2011</h1>
            <hooper id="hooper">
                <slide>
                <v-img :src="require('/src/assets/gallery6/pic1.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery6/pic2.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery6/pic3.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery6/pic4.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery6/pic5.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery6/pic6.jpeg')" id="galleryimage"></v-img>
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
  name: 'Gallery6',
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
    }

    #gallery6body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        background-color: #133454;
    }

    #gallery6title {
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

    #galleryimage {
        height: 600px;
    }

    #gallery6body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        background-color: #133454;
    }

    #gallery6title {
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