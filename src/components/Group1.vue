<template>
    <div id="group1body">
        <div id="group1text">
            <h1 id="group1title">Mikro</h1>
            <p id="mikrotime">{{ $t('groups.group1time') }}</p>
            <p id="mikrotext">{{ $t('groups.group1text') }}</p>
            <p id="mikroleader">{{ $t('groups.group1leader') }} <a href="mailto:mikro@vesterhavsgruppen.dk" id="mikromail">mikro@vesterhavsgruppen.dk</a></p>
        </div>
        <div id="group1pic">
            <v-img :src="require('/src/assets/mikro.png')" id="mikropic"></v-img>
        </div>
    </div>
</template>

<script>
export default {
    name: "Group1"
}
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

#group1body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
        align-items: center;
        height: auto;
    }

    #group1title {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: #225384;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

    #mikrotext {
        color: #225384;
        max-width: 600px;
    }

    #mikropic {
        top: 40%;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 80vw;
    }

    #group1pic {
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
    }

    #mikrotime {
        color: #225384;
    }
    
    #mikroleader {
        color: #225384;
    }

    #mikromail {
        color: #225384;
        font-size: 16px;
        text-decoration: underline;
        margin: 0;
    }

@media only screen and (min-width: 688px) {

    #group1body {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 30px;
        align-items: center;
        height: auto;
    }

    #group1title {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: #225384;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

    #mikrotext {
        color: #225384;
        max-width: 600px;
    }

    #mikropic {
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 62vw;
    }

    #group1pic {
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
    }
}


</style>