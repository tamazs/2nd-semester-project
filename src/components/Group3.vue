<template>
    <div id="group3body">
        <div id="group3text">
            <h1 id="group3title">Junior</h1>
            <p id="juniortime">{{ $t('groups.group3time') }}</p>
            <p id="juniortext">{{ $t('groups.group3text') }}</p>
            <p id="juniorleader">{{ $t('groups.group3leader') }} <a href="mailto:junior@vessterhavsgruppen.dk" id="juniormail">junior@vessterhavsgruppen.dk</a></p>
        </div>
        <div id="group3pic">
            <v-img :src="require('/src/assets/junior.png')" id="juniorpic"></v-img>
        </div>
    </div>
</template>

<script>
export default {
    name: "Group3"
}
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

#group3body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
        align-items: center;
        height: auto;
    }

    #group3title {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: #225384;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

    #juniortext {
        color: #225384;
        max-width: 600px;
    }

    #juniorpic {
        top: 40%;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 80vw;
    }

    #group3pic {
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
    }

    #juniortime {
        color: #225384;
    }
    
    #juniorleader {
        color: #225384;
    }

    #juniormail {
        color: #225384;
        font-size: 16px;
        text-decoration: underline;
        margin: 0;
    }

@media only screen and (min-width: 688px) {

    #group3body {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 30px;
        align-items: center;
        height: auto;
    }

    #group3title {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: #225384;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

    #juniortext {
        color: #225384;
        max-width: 600px;
    }

    #juniorpic {
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 62vw;
    }

    #group3pic {
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
    }
}


</style>