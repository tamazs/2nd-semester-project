<template>
    <div id="landingpage">
        <v-img :src="require('/src/assets/landing.png')" id="leftlanding"></v-img>
        <div id="rightlanding">
            <h1 id="landingtitle">Vesterhavs<br>gruppen</h1>
            <h3 id="desc">{{ $t('landing.smalltext') }}</h3>
            <v-btn
                rounded
                color="#133454"
                id="cta-landing"
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

#leftlanding {
    max-width: 1100px;
    max-height: 850px;
    align-self: flex-end;
    z-index: 0;
}

#rightlanding {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: 200px;
    justify-content: center;
    align-items: center;
    z-index: 2;
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
}

.v-btn__content {
    color: white;
    font-weight: bold;
}

</style>