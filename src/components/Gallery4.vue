<template>
    <div id="gallery4body">
        <h1 id="gallery4title">Sommerlejr for minier på Kulsø 2014</h1>
            <hooper id="hooper">
                <slide>
                <v-img :src="require('/src/assets/gallery4/pic1.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery4/pic2.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery4/pic3.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery4/pic4.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery4/pic5.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery4/pic6.jpeg')" id="galleryimage"></v-img>
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
  name: 'Gallery4',
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

    #galleryimage {
        height: 600px;
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