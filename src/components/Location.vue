<template>
    <div id="location">
        <h2 id="locationtitle">
            {{ $t('location.title') }}
        </h2>
        <div id="mapembed">
            <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.0403699158423!2d8.446289515919961!3d55.47939418048115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b20d8442ed02d%3A0x2a118d81eb2fdc8c!2sBakkevej%2014%2C%206700%20Esbjerg!5e0!3m2!1shu!2sdk!4v1621952737638!5m2!1shu!2sdk" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Location'
}
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

#location {
        background-color: white;
        height: auto;
        padding: 30px;
    }

    #locationtitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: #133454;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

    #map {
        margin-bottom: 90px;
        width: 600px;
        height: 400px;
    }

    #mapembed {
        display: flex;
        justify-content: center;
    }

@media only screen and (min-width: 688px) {

    #location {
        background-color: white;
        height: auto;
        padding: 30px;
    }

    #locationtitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: #133454;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

    #map {
        margin-bottom: 90px;
        width: 900px;
        height: 600px;
    }

    #mapembed {
        display: flex;
        justify-content: center;
    }
}

</style>