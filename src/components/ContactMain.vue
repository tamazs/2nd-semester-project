<template>
  <div id="contactbody">
      <div id="socials1">
        <a href="https://www.facebook.com/Vesterhavsgruppen-DDS-908378059235877" target="_blank">
        <v-img id="facebook"
        :src="require('../assets/facebook.svg')">
        </v-img>
        </a>
        <a href="https://www.youtube.com/user/BlaaSpejder" target="_blank">
        <v-img id="youtube"
        :src="require('../assets/youtube.svg')"></v-img>
        </a>
      </div>
      <div id="socials2">
        <a href="https://www.instagram.com/detdanskespejderkorps/" target="_blank">
        <v-img id="instagram"
        :src="require('../assets/instagram.svg')"></v-img>
        </a>
        <a href="https://twitter.com/blaaspejder" target="_blank">
        <v-img id="twitter"
        :src="require('../assets/twitter.svg')"></v-img>
        </a>
      </div>
      <div id="form">
        <div id="contactme">
            <h3 id="sendme">{{ $t('contact.form') }} </h3>
            <form class="contact-form" id="contactform" @submit.prevent="sendEmail">
                <label>{{ $t('contact.name') }}</label>
                <input id="inputname" type="text" name="user_name" v-model="user_name">
                <label>Email</label>
                <input id="inputemail" type="email" name="user_email" v-model="user_email">
                <label>{{ $t('contact.message') }}</label>
                <textarea id="inputmessage" name="message" v-model="message"></textarea>
                <input id="sendbutton" type="submit" value="Send">
            </form>
        </div>
      </div>
  </div>
</template>


<script>
import emailjs from 'emailjs-com';

  export default {
    name: 'ContactMain',

    components: {

    },

    data() {
    return {
      user_name: '',
      user_email: '',
      message: ''
    }
  },
    

    methods: { 
      sendEmail(e) {
          console.log(this.user_name, this.user_email, this.message, e.target)
          
        try {
            emailjs.sendForm('service_fgiz86s', 'template_e3f0z6l', e.target,
            'user_sEjqvyPtqSgxH82Erwb5V', {
            user_name: this.user_name,
            user_email: this.user_email,
            message: this.message
            
        }).then(res => console.log(res))
        } catch(error) {
            console.log({error})
        }
        // Reset form field
        this.user_name = ''
        this.user_email = ''
        this.message = ''
        },
    }
  } 
</script>

<style lang="scss">

#contactbody {
            height: auto;
            background-color: white;
    }

        #socials1 {
            display: flex;
            justify-content: space-around;
            margin-top: 150px;
            margin-bottom: 150px;

                #facebook,#youtube {
                    max-height: 60px;
                    max-width: 60px;
                }
        }

        #socials2 {
            display: flex;
            justify-content: space-around;
            margin-bottom: 150px;

                #instagram,#twitter {
                    max-height: 60px;
                    max-width: 60px;
                }
        }

        #contactme {
            display: block;
            background-color: #F2F2F2;
            border: none;
            border-radius: 40px;
            height: auto;
            width: 70%;
            padding: 20px;
            margin-bottom: 80px;


                #sendme {
                    margin-bottom: 10px;
                }
        }

        #contactform {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

                #inputname,#inputemail {
                    border: 1px rgb(102, 102, 102) solid;
                    margin-bottom: 10px;
                    background-color: white;
                }

                #inputmessage {
                    border: 1px rgb(102, 102, 102) solid;
                    margin-bottom: 15px;
                    background-color: white;
                    height: 70px;
                }

                #sendbutton {
                    color: white;
                    background-color: #225384;
                    border-radius: 30px;
                    height: 35px;
                    font-weight: bold;
                    width: 50%;
                    align-self: center;
                }
        }

        #form {
            display: flex;
            justify-content: center;

        }

@media only screen and (min-width: 688px) {

    #contactbody {
            height: auto;
            background-color: white;
    }

        #socials1 {
            display: flex;
            justify-content: space-around;
            margin-top: 150px;
            margin-bottom: 150px;

                #facebook,#youtube {
                    max-height: 80px;
                    max-width: 80px;
                }
        }

        #socials2 {
            display: flex;
            justify-content: space-around;
            margin-bottom: 150px;

                #instagram,#twitter {
                    max-height: 80px;
                    max-width: 80px;
                }
        }

        #contactme {
            display: block;
            background-color: #F2F2F2;
            border: none;
            border-radius: 40px;
            height: auto;
            width: 40%;
            padding: 20px;
            margin-bottom: 40px;

                #sendme {
                    margin-bottom: 10px;
                }
        }

        #contactform {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

                #inputname,#inputemail {
                    border: 1px rgb(102, 102, 102) solid;
                    margin-bottom: 10px;
                    background-color: white;
                }

                #inputmessage {
                    border: 1px rgb(102, 102, 102) solid;
                    margin-bottom: 15px;
                    background-color: white;
                    height: 300px;
                }

                #sendbutton {
                    color: white;
                    background-color: #225384;
                    border-radius: 30px;
                    height: 35px;
                    font-weight: bold;
                    width: 40%;
                    align-self: center;
                }
        }

        #form {
            display: flex;
            justify-content: center;

        }
}
</style>