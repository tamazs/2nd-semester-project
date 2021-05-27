<template>
    <div id="landingpage">
        <div id="leftlandingdiv">
            <v-img :src="require('/src/assets/landing.png')" id="leftlanding"></v-img>
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
    background-color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

#leftlandingdiv {
    bottom: 0;
    left: 0;
    height: 100%;
    width: auto;
}

#leftlanding {
    width: 70vw;
    height: 100%;
    left: 0;
    bottom: 0;
}

#rightlanding {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
}

#landingtitle {
    font-family: 'Alfa Slab One', cursive;
    font-size: 3em;
    color: #133454;
    text-align: center;
    margin-bottom: 30px;
}

#desc {
    font-size: 1.5em;
    font-weight: lighter;
    color: #2F6FAD;
    margin-bottom: 30px;
}

#cta-landing {
    width: 170px;
    margin: 0;
}

.v-btn__content {
    color: white;
    font-weight: bold;
}
</style>