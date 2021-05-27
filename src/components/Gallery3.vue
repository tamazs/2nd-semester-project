<template>
    <div id="gallery3body">
        <h1 id="gallery3title">Juniorsommerlejr på Housens Odde 2015</h1>
            <hooper id="hooper">
                <slide>
                <v-img :src="require('/src/assets/gallery3/pic1.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery3/pic2.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery3/pic3.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery3/pic4.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery3/pic5.jpeg')" id="galleryimage"></v-img>
                </slide>
                <slide>
                <v-img :src="require('/src/assets/gallery3/pic6.jpeg')" id="galleryimage"></v-img>
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
  name: 'Gallery3',
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
    height: 600px;
}

#gallery3body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
}

#gallery3title {
    max-width: 80%;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: normal;
    letter-spacing: 10px;
    color: #133454;
}
</style>