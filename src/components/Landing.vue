<template>
    <div id="landingpage">
        <div id="leftlandingdiv1">
            <v-img :src="require('/src/assets/landing.png')" id="leftlanding1"></v-img>
        </div>
        <div id="rightlanding">
            <h1 id="landingtitle">Vesterhavs<br>gruppen</h1>
            <h3 id="desc">{{ $t('landing.smalltext') }}</h3>
            <v-btn
                rounded
                color="#133454"
                id="cta-landing"
                :to="`/${$i18n.locale}/join`"
            >
                {{ $t('landing.buttontext') }}
            </v-btn>
            <a href="#Welcome" id="readmore">{{ $t('landing.buttontext2') }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Landing',
}
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

#landingpage {
        height: 100vh;
        width: 100vw;
        background-color: white;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        position: relative;
    }

    #leftlandingdiv1 {
        bottom: 0;
        left: 0;
        height: 100%;
        width: auto;
        position: relative;
    }

    #leftlanding1 {
        width: 100vw;
        height: 100%;
        left: 0;
        bottom: 0;
    }

    #rightlanding {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 50%;
        bottom: 50%;
        left: 50%;
        right: 50%;
        position: absolute;
    }

    #landingtitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: white;
        text-align: center;
        margin-bottom: 30px;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #225384;
    }

    #desc {
        font-size: 1.5em;
        font-weight: lighter;
        color: white;
        margin-bottom: 30px;
        text-align: center;
    }

    #cta-landing {
        width: 170px;
        margin: 0;
    }

    #readmore {
        color: white;
        width: 170px;
        text-align: center;
        margin: 0;
        margin-top: 13px;
        font-size: 16px;
        font-weight: lighter;
    }

    .v-btn__content {
        color: white;
        font-weight: bold;
    }

@media only screen and (min-width: 1312px) {

    #landingpage {
        height: 100vh;
        background-color: white;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        position: relative;
        text-align: center;
    }

    #leftlandingdiv1 {
        bottom: 0;
        left: 0;
        height: 100%;
        width: auto;
    }

    #leftlanding1 {
        width: 62vw;
        height: 100%;
        left: 0;
        bottom: 0;
    }

    #rightlanding {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        right: 0%;
        top: 50%;
        bottom: 50%;
        position: absolute;
        align-self: center;
    }

    #landingtitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: #133454;
        text-align: center;
        margin-bottom: 30px;
        -webkit-text-stroke-width: 0;
    }

    #desc {
        font-size: 1.5em;
        font-weight: lighter;
        color: #2F6FAD;
        margin-bottom: 30px;
        text-align: center;
    }

    #cta-landing {
        width: 170px;
        margin: 0;
    }

    #readmore {
        color: #133454;
        width: 170px;
        text-align: center;
        margin: 0;
        margin-top: 13px;
        font-size: 16px;
        font-weight: lighter;
    }

    .v-btn__content {
        color: white;
        font-weight: bold;
    }
}
</style>