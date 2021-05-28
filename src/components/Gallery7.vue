<template>
    <div id="gallery7body">
        <h1 id="gallery7title">Korpslejr 2009</h1>
            <hooper id="hooper7">
                <slide>
                <v-img :src="require('/src/assets/gallery7/pic1.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery7/pic2.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery7/pic3.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery7/pic4.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery7/pic5.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery7/pic6.jpeg')" id="galleryimage"></v-img>
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
  name: 'Gallery7',
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

    #gallery7body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }

    #gallery7title {
        max-width: 80%;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #133454;
        font-size: 2em;
    }

    #hooper7 {
        margin-bottom: 70px;
    }

@media only screen and (min-width: 688px) {

    #galleryimage {
        height: 600px;
    }

    #gallery7body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }

    #gallery7title {
        max-width: 80%;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
        font-weight: normal;
        letter-spacing: 10px;
        color: #133454;
        font-size: 3em;
    }

    #hooper7 {
        margin-bottom: 70px;
    }

}
</style>