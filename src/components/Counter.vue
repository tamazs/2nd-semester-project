<template>
    <div id="counter">
        <div id="scoutnumber">
            <div id="numberplus">
                <h1 id="number">20</h1>
                <p id="number">+</p>
            </div>
            <p id="countertext">{{ $t('counter.scouts') }} </p>
        </div>
        <div id="groupnumber">
                <h1 id="number">5</h1>
            <p id="countertext">{{ $t('counter.groups') }} </p>
        </div>
        <div id="citynumber">
                <h1 id="number">6</h1>
            <p id="countertext">{{ $t('counter.cities') }} </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Counter'
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