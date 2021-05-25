<template>
    <div id="sponsorbody">
        <v-img :src="require('/src/assets/ok.png')" id="okimg"></v-img>
        <p id="oktext">
            {{ $t('sponsor.text') }}
        </p>
    </div>
</template>

<script>
export default {
    name: "Sponsor"
}
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

    #sponsorbody {
        background-color: #B43600;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-around;
        padding: 10px;
        height: auto;
        align-items: center;
    }

    #okimg {
        max-width: 200px;
        max-height: 100px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    #oktext {
        color: white;
        max-width: 600px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

@media only screen and (min-width: 688px) {

    #sponsorbody {
        background-color: #B43600;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
        height: auto;
        align-items: center;
    }

    #okimg {
        max-width: 300px;
        max-height: 200px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    #oktext {
        color: white;
        width: 600px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
}
</style>