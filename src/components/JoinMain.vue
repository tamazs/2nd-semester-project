<template>
  <div id="join">
    <div id="header">
      <v-parallax
      dark
      :src="require('/src/assets/parallax.jpeg')"
      id="parallax"
      >
        <v-row
        align="center"
        justify="center"
        >
          <v-col
          class="text-center"
          cols="12"
          >
            <h1 class="display-1 font-weight-thin mb-4" id="joinustoptitle">
            {{ $t('join.title') }}
            </h1>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    <div id="joinmain">
      <div id="box1">
        <h2 id="howtotitle">{{ $t('join.howtotitle') }}</h2>
        <p id="jointext">{{ $t('join.contact') }}</p>
      </div>
      <div id="box2">
        <div id="contact1">
          <v-icon id="contacticon">mdi-account</v-icon>
          <p id="helentext">Helén Buch Dubery<br>21 67 73 57</p>
        </div>
        <div id="contact2">
          <v-icon id="contacticon">mdi-account</v-icon>
          <p id="steffentext">Steffen Sørensen<br>40 29 26 71</p>
        </div>
        <div id="contact3">
          <v-icon id="contacticon">mdi-email</v-icon>
          <a id="mail" href="mailto:kontakt@vesterhavsgruppen.dk">kontakt@vesterhavsgruppen.dk</a>
        </div>
      </div>
      <div id="box3">
        <v-parallax dark :src="require('/src/assets/parallax2.jpeg')" id="parallax2"></v-parallax>
      </div>
      <div id="box4">
        <h2 id="paymenttitle">{{ $t('join.paymenttitle') }}</h2>
      </div>
      <div id="box5">
        <p id="jointext1">{{ $t('join.text1') }}</p>
      </div>
      <div id="box6">
        <p id="jointext2">{{ $t('join.payment') }}</p>
        <v-btn
            rounded
            color="#0A4E22"
            id="cta-join"
            href="https://medlem.dds.dk/member/signup/5412"
            target="_blank"
            >
                {{ $t('landing.buttontext') }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'JoinMain',

    components: {
      
    },
  }
</script>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

#joinustoptitle {
    font-family: 'Alfa Slab One', cursive;
    font-size: 2em;
    letter-spacing: 5px;
    padding-top: 200px;
    text-align: center;
  }

  #parallax {
    align-items: center;
    justify-items: center;
  }

  #howtotitle {
    font-family: 'Alfa Slab One', cursive;
    font-size: 2em;
    color: #0E7432;
    letter-spacing: 3px;
    margin-bottom: 20px;
    text-align: center;
    margin-bottom: 90px;
  }

  #paymenttitle {
    font-family: 'Alfa Slab One', cursive;
    font-size: 2em;
    color: white;
    letter-spacing: 3px;
  }

  #joinmain {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: 
    "box1"
    "box2"
    "box3"
    "box5"
    "box4"
    "box6";
  }

  #box1 {
      display: flex;
      flex-direction: column;
      grid-area: box1;
  }

  #box2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    grid-area: box2;
  }

  #box4 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0E7432;
    grid-area: box4;

  }

  #box6 {
    background-color: #0E7432;
    display: flex;
    flex-direction: column;
    grid-area: box6;
  }

  #contact1, #contact2, #contact3 {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
      margin-bottom: 10px;
  }


  #box1, #box2, #box4, #box5, #box6 {
    height: 500px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #box3 {
    height: auto;
    width: 1fr;
    grid-area: box3;
  }

  #jointext1 , #jointext{
      color: #0E7432;
      max-width: 400px;
  }

  #jointext2 {
      color: white;
      max-width: 400px;
      font-weight: normal;
      margin-bottom: 80px;
  }

  #contacticon {
      color: #0E7432;
  }

  #mail {
      text-decoration: none;
      color: #0E7432;
      margin-left: 20px;
      font-size: 16px;
  }

  #helentext, #steffentext {
      color: #0E7432;
      margin-left: 30px;
  }

  #box5 {
    grid-area: box5;
  }

@media only screen and (min-width: 688px) {

  #joinustoptitle {
    font-family: 'Alfa Slab One', cursive;
    font-size: 4em;
    letter-spacing: 5px;
    padding: 400px;
    text-align: center;
  }

  #parallax {
    align-items: center;
    justify-items: center;
  }

  #howtotitle {
    font-family: 'Alfa Slab One', cursive;
    font-size: 3em;
    color: #0E7432;
    letter-spacing: 3px;
    margin-bottom: 20px;
    text-align: center;
  }

  #paymenttitle {
    font-family: 'Alfa Slab One', cursive;
    font-size: 3em;
    color: white;
    letter-spacing: 3px;
  }

  #joinmain {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
    "box1 box2"
    "box3 box4"
    "box5 box6";
  }

  #box1 {
      display: flex;
      flex-direction: column;
  }

  #box2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  #box4 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0E7432;

  }

  #box6 {
    background-color: #0E7432;
    display: flex;
    flex-direction: column;
  }

  #contact1, #contact2, #contact3 {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
      margin-bottom: 10px;
  }


  #box1, #box2, #box4, #box5, #box6 {
    height: 500px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #box3 {
    height: auto;
    width: 1fr;
  }

  #jointext1 , #jointext{
      color: #0E7432;
      max-width: 400px;
  }

  #jointext2 {
      color: white;
      max-width: 400px;
      font-weight: normal;
      margin-bottom: 80px;
  }

  #contacticon {
      color: #0E7432;
  }

  #mail {
      text-decoration: none;
      color: #0E7432;
      margin-left: 20px;
      font-size: 16px;
  }

  #helentext, #steffentext {
      color: #0E7432;
      margin-left: 30px;
  }
}
</style>