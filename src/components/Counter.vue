<template>
    <div id="counter">
        <div id="scoutnumber">
            <div id="numberplus">
                <VueJsCounter id="number" end="20"></VueJsCounter>
                <p id="number">+</p>
            </div>
            <p id="countertext">{{ $t('counter.scouts') }} </p>
        </div>
        <div id="groupnumber">
            <VueJsCounter id="number" end="5"></VueJsCounter>
            <p id="countertext">{{ $t('counter.groups') }} </p>
        </div>
        <div id="citynumber">
            <VueJsCounter id="number" end="6"></VueJsCounter>
            <p id="countertext">{{ $t('counter.cities') }} </p>
        </div>
    </div>
</template>

<script>
import VueJsCounter from 'vue-js-counter'
    export default {
        name: 'Counter',
        components: {
            VueJsCounter 
        }
    }
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

    #counter {
        background-color: #FAB129;
        font-family: 'proxima-nova', sans-serif;
        color: white;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 30px;
        height: auto;
        z-index: 3;
    }

    #number {
        font-family: 'Alfa Slab One', cursive;
        font-size: 40px;
    }

    #scoutnumber, #groupnumber, #citynumber {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #scoutnumber, #groupnumber {
        margin-bottom: 30px;
    }

    #countertext {
        font-family: 'proxima-nova', sans-serif;
        color: white;
        font-size: 20px;
    }

    #numberplus {
        display: flex;
        flex-direction: row;
    }

@media only screen and (min-width: 688px) {

    #counter {
        background-color: #FAB129;
        font-family: 'proxima-nova', sans-serif;
        color: white;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        padding: 60px;
        z-index: 3;
    }

    #number {
        font-family: 'Alfa Slab One', cursive;
        font-size: 60px;
    }

    #scoutnumber, #groupnumber, #citynumber {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #scoutnumber, #groupnumber {
        margin-bottom: 0;
    }

    #countertext {
        font-family: 'proxima-nova', sans-serif;
        color: white;
        font-size: 20px;
    }

    #numberplus {
        display: flex;
        flex-direction: row;
    }
}

</style>