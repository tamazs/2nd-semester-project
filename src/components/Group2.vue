<template>
    <div id="group2body">
        <div id="group2text">
            <h1 id="group2title">Mini</h1>
            <p id="minitime">{{ $t('groups.group2time') }}</p>
            <p id="minitext">{{ $t('groups.group2text') }}</p>
            <p id="minileader">{{ $t('groups.group2leader') }} <a href="mailto:mini@vesterhavsgruppen.dk" id="minimail">mini@vesterhavsgruppen.dk</a></p>
        </div>
        <div id="group2pic">
            <v-img :src="require('/src/assets/mini.png')" id="minipic"></v-img>
        </div>
    </div>
</template>

<script>
export default {
    name: "Group2"
}
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

#group2body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
        align-items: center;
        height: auto;
        background-color: #225384;
    }

    #group2title {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: white;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

    #minitext {
        color: white;
        max-width: 600px;
    }

    #minipic {
        top: 40%;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 80vw;
    }

    #group2pic {
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
    }

    #minitime {
        color: white;
    }
    
    #minileader {
        color: white;
    }

    #minimail {
        color: white;
        font-size: 16px;
        text-decoration: underline;
        margin: 0;
    }

@media only screen and (min-width: 688px) {

    #group2body {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 30px;
        align-items: center;
        height: auto;
        background-color: #225384;
    }

    #group2title {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: white;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
        text-align: right;
    }

    #minitext {
        color: white;
        max-width: 600px;
        text-align: right;
    }

    #minipic {
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 62vw;
    }

    #group2pic {
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
    }

    #minitime {
        color: white;
        text-align: right;
    }
    
    #minileader {
        color: white;
        text-align: right;
    }

    #minimail {
        color: white;
        font-size: 16px;
        text-decoration: underline;
        text-align: right;
        margin: 0;
    }
}


</style>