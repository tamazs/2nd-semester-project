<template>
    <div id="Welcome">
        <h1 id="Welcometitle">{{ $t('2021.title') }}</h1>
        <div id="Welcomemain">
            <div id="Welcometext">
                <p id="p1">{{ $t('2021.p1') }}</p>
                <p id="p2">{{ $t('2021.p2') }}</p>
                <p id="p3">{{ $t('2021.p3') }}</p>
            </div>
            <div id="Welcomepics">
                <v-img :src="require('/src/assets/fire.svg')" id="welcomeimg1"></v-img>
                <v-img :src="require('/src/assets/log.svg')" id="welcomeimg2"></v-img>
                <v-img :src="require('/src/assets/tent.svg')" id="welcomeimg3"></v-img>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Welcome"
}
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

#Welcome {
        height: auto;
        background-color: #133454;
        padding: 30px;
    }

    #Welcomemain {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #Welcometext {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 60px;
    }

    #Welcomepics {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-right: 0;
    }

    #p1, #p2, #p3 {
        color: white;
        max-width: 600px;
        margin-bottom: 10px;
    }

    #Welcometitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: white;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

    #welcomeimg1, #welcomeimg2, #welcomeimg3 {
        max-height: 120px;
        max-width: 100px;
        margin-bottom: 100px;
    }

    #welcomeimg3{
        max-height: 130px;
        max-width: 150px;
    }

@media only screen and (min-width: 688px) {

#Welcometitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: white;
        margin-top: 40px;
        margin-bottom: 250px;
        letter-spacing: 3px;
    }

#welcomeimg1, #welcomeimg2, #welcomeimg3 {
        max-height: 200px;
        max-width: 150px;
        margin-bottom: 100px;
    }

#welcomeimg3{
        max-height: 100px;
        max-width: 200px;
 }

}


@media only screen and (min-width: 992px) {

    #Welcome {
        height: auto;
        background-color: #133454;
        padding: 30px;
    }

    #Welcomemain {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #Welcometext {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0;
    }

    #Welcomepics {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 50px;
        align-items: center;
    }

    #p1, #p2, #p3 {
        color: white;
        max-width: 600px;
        margin-bottom: 200px;
    }

    #welcomeimg1, #welcomeimg2, #welcomeimg3 {
        height: 200px;
        width: 150px;
        margin-bottom: 100px;
        max-height: none;
        max-width: none;
    }

    #welcomeimg3{
        height: 100px;
        width: 200px;
        max-height: none;
        max-width: none;
        margin-top: 100px;
    }
}
</style>