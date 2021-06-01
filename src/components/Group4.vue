<template>
    <div id="group4body">
        <div id="group4text">
            <h1 id="group4title">Trop</h1>
            <p id="troptext">{{ $t('groups.group4text') }}</p>
        </div>
        <div id="group4pic">
            <v-img :src="require('/src/assets/trop.png')" id="troppic"></v-img>
        </div>
    </div>
</template>

<script>
export default {
    name: "Group4"
}
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

#group4body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
        align-items: center;
        height: auto;
        background-color: #225384;
    }

    #group4title {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: white;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

    #troptext {
        color: white;
        max-width: 600px;
    }

    #troppic {
        top: 40%;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 80vw;
    }

    #group4pic {
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
    }

@media only screen and (min-width: 688px) {

    #group4body {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 30px;
        align-items: center;
        height: auto;
        background-color: #225384;
    }

    #group4title {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: white;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
        text-align: right;
    }

    #troptext {
        color: white;
        max-width: 600px;
        text-align: right;
    }

    #troppic {
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 62vw;
    }

    #group4pic {
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
    }
}


</style>