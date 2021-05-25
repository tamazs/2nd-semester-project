<template>
    <div id="landingpage">
        <!-- <v-img :src="require('/src/assets/landing.png')" id="leftlanding"></v-img> -->
        <div id="rightlanding">
            <h1 id="landingtitle">Vesterhavs<br>gruppen</h1>
            <h3 id="desc">{{ $t('landing.smalltext') }}</h3>
            <v-btn
                rounded
                color="#133454"
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
    height: 98.5vh;
    background-color: white;
    display: flex;
    justify-content: space-between;
}



#rightlanding {
    display: flex;
    flex-direction: column;
    
}



</style>