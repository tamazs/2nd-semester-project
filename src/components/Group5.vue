<template>
    <div id="group5body">
        <div id="group5text">
            <h1 id="group5title">Klan</h1>
            <p id="klantext">{{ $t('groups.group5text') }}</p>
        </div>
        <div id="group5pic">
            <v-img :src="require('/src/assets/clan.png')" id="klanpic"></v-img>
        </div>
    </div>
</template>

<script>
export default {
    name: "Group5"
}
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

#group5body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
        align-items: center;
        height: auto;
        margin-bottom: 40px;
    }

    #group5title {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: #225384;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

    #klantext {
        color: #225384;
        max-width: 600px;
    }

    #klanpic {
        top: 40%;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 80vw;
    }

    #group5pic {
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
    }

@media only screen and (min-width: 688px) {

    #group5body {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 30px;
        align-items: center;
        height: auto;
    }

    #group5title {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: #225384;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

    #klantext {
        color: #225384;
        max-width: 600px;
    }

    #klanpic {
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 62vw;
    }

    #group5pic {
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
    }
}


</style>