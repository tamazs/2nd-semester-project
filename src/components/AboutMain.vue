<template>
    <div id="aboutmain">
        <div id="boxau1">
            <h2 id="abouttitle">{{ $t('about.title') }}</h2>
            <p id="abouttext">{{ $t('about.text') }}</p>
        </div>
        <div id="boxau2">
            <v-img :src="require('/src/assets/powell.jpeg')" id="powellpic"></v-img>
        </div>
        <div id="boxau3">
            <h2 id="goalstitle">{{ $t('about.title2') }}</h2>
            <p id="goaltext">{{ $t('about.text2') }}</p>
        </div>
        <div id="boxau4">
            <video :src="video" id="video" loop muted autoplay playsinline></video>
        </div>
        <div id="boxau5">
            <h2 id="valuetitle">{{ $t('about.title3') }}</h2>
            <div id="aboutcards">
                <div id="aboutrow1">
                    <v-card
                        class="mx-auto mb-16"
                        max-width="300"
                        height="400"
                    >
                        <v-img
                        class="white--text align-end"
                        height="400px"
                        :src="require('/src/assets/Fun.jpg')"
                        >
                        <v-card-title id="smalltitle">{{ $t('about.smalltitle1') }}</v-card-title>
                        </v-img>
                    </v-card>
                    <v-card
                        class="mx-auto mb-16"
                        max-width="300"
                        height="400"
                    >
                        <v-img
                        class="white--text align-end"
                        height="400px"
                        :src="require('/src/assets/adventures.jpg')"
                        >
                        <v-card-title id="smalltitle">{{ $t('about.smalltitle2') }}</v-card-title>
                        </v-img>
                    </v-card>
                </div>
                <div id="aboutrow2">
                    <v-card
                        class="mx-auto mb-16"
                        max-width="300"
                        height="400"
                    >
                        <v-img
                        class="white--text align-end"
                        height="400px"
                        :src="require('/src/assets/Community.jpg')"
                        >
                        <v-card-title id="smalltitle">{{ $t('about.smalltitle3') }}</v-card-title>
                        </v-img>
                    </v-card>
                    <v-card
                        class="mx-auto mb-16"
                        max-width="300"
                        height="400"
                    >
                        <v-img
                        class="white--text align-end"
                        height="400px"
                        :src="require('/src/assets/Friendship.jpg')"
                        >
                        <v-card-title id="smalltitle">{{ $t('about.smalltitle4') }}</v-card-title>
                        </v-img>
                    </v-card>
                </div>
            </div>
        </div>
        <div id="boxau6">
            <h2 id="dresstitle">{{ $t('about.title4') }}</h2>
        </div>
        <div id="boxau7">
            <v-img dark :src="require('/src/assets/dress.png')" id="dress"></v-img>
        </div>
    </div>
</template>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

#aboutmain {
        margin-top: 120px;
        height: auto;
        display: grid;
        grid-template-columns: 100vw;
        grid-template-rows: auto auto auto auto auto auto auto;
        grid-template-areas: 
        "boxau1"
        "boxau2"
        "boxau3"
        "boxau4"
        "boxau5"
        "boxau6"
        "boxau7";
    }

    #boxau1 {
        grid-area: boxau1;
        height: 500px;
        background-color: white;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #boxau2 {
        grid-area: boxau2;
        height: 500px;
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #boxau3 {
        grid-area: boxau3;
        height: 500px;
        background-color: #0E7432;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #boxau4 {
        grid-area: boxau4;
        height: 200px;
        margin: 0;
        padding: 0;
        min-width: 100%;
        overflow: hidden;
    }

    #boxau5 {
        grid-area: boxau5;
        height: auto;
        background-color: #0E7432;
        padding: 30px;
    }

    #boxau6 {
        grid-area: boxau6;
        height: 500px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
    }

    #boxau7 {
        grid-area: boxau7;
        height: 500px;
        background-color: white;
        padding: 30px;
    }

    #abouttitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: #0E7432;
        letter-spacing: 3px;
        margin-bottom: 20px;
        text-align: center;
        left: 50%;
        right: 50%;
    }

    #abouttext {
        color: #0E7432;
        max-width: 400px;
        text-align: center;
    }

    #video {
        height: auto;
        width: 100vw;
        margin: 0;
        padding: 0;
    }

    #goalstitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: white;
        letter-spacing: 3px;
        margin-bottom: 50px;
        text-align: center;
    }

    #goaltext {
        color: white;
        max-width: 800px;
        margin-bottom: 50px;
        text-align: center;
    }

    #valuetitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: white;
        letter-spacing: 3px;
        margin-bottom: 60px;
        text-align: center;
    }

    #dresstitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: #0E7432;
        letter-spacing: 3px;
        margin-bottom: 20px;
        text-align: center;
    }

    #smalltitle {
        font-family: 'Alfa Slab One', cursive;
    }

    #powellpic {
        max-height: 400px;
        max-width: 300px;
        padding: 0;
    }

    #dress {
        max-height: 500px;
        max-width: 400px;
    }

    #aboutrow1 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #aboutrow2 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

@media only screen and (min-width: 890px) {

    #aboutmain {
        margin-top: 150px;
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr auto auto auto 1fr;
        grid-template-areas: 
        "boxau1 boxau2"
        "boxau3 boxau3"
        "boxau4 boxau4"
        "boxau5 boxau5"
        "boxau6 boxau7";
    }

    #boxau1 {
        grid-area: boxau1;
        height: auto;
        background-color: white;
        padding: 30px;
        width: 1fr;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #boxau2 {
        grid-area: boxau2;
        height: auto;
        padding: 30px;
        width: 1fr;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #boxau3 {
        grid-area: boxau3;
        height: 400px;
        background-color: #0E7432;
        padding: 30px;
        width: 2fr;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #boxau4 {
        grid-area: boxau4;
        height: 800px;
        margin: 0;
        padding: 0;
        width: 100vw;
        overflow: hidden;
    }

    #boxau5 {
        grid-area: boxau5;
        height: auto;
        background-color: #0E7432;
        padding: 30px;
        width: 2fr;
    }

    #boxau6 {
        grid-area: boxau6;
        height: auto;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
        width: 1fr;
    }

    #boxau7 {
        grid-area: boxau7;
        height: auto;
        background-color: white;
        padding: 30px;
        width: 1fr;
    }

    #abouttitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: #0E7432;
        letter-spacing: 3px;
        margin-bottom: 20px;
        text-align: center;
        left: 50%;
        right: 50%;
    }

    #abouttext {
        color: #0E7432;
        max-width: 400px;
        text-align: center;
    }

    #video {
        height: auto;
        width: 100vw;
        margin: 0;
        padding: 0;
    }

    #goalstitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: white;
        letter-spacing: 3px;
        margin-bottom: 50px;
        text-align: center;
    }

    #goaltext {
        color: white;
        max-width: 800px;
        margin-bottom: 50px;
        text-align: center;
    }

    #valuetitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: white;
        letter-spacing: 3px;
        margin-bottom: 60px;
        text-align: center;
    }

    #dresstitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: #0E7432;
        letter-spacing: 3px;
        margin-bottom: 20px;
        text-align: center;
    }

    #smalltitle {
        font-family: 'Alfa Slab One', cursive;
    }

    #powellpic {
        max-width: 400px;
        max-height: 600px;
    }

    #dress {
        max-height: 700px;
        max-width: 600px;
        margin: 0;
        padding: 0;
    }

    #aboutrow1 {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    #aboutrow2 {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
}
</style>

<script>
export default {
    name: 'AboutMain',

    components: {

    },

    data: () => ({
        video: '../files/video.mp4'
    }),

    methods: {

      },
}
</script>