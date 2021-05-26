<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calanderApi: "",  
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        eventClick: this.handleEventClick,
        selectable:true,
        events: [
          { title: 'Forældre - Gruppestyrelses-møde', date: '2021-01-06', id: '1 ' },
          { title: 'Mikro - Grupperådsmøde', date: '2021-02-24', id: '2 ' },
          { title: 'Mini - Grupperådsmøde', date: '2021-02-24', id: '3 ' },
          { title: 'Junior - Grupperådsmøde', date: '2021-02-24', id: '4 ' },
          { title: 'Trop - Grupperådsmøde', date: '2021-02-24', id: '5 ' },
          { title: 'Senior - Grupperådsmøde', date: '2021-02-24', id: '6 ' },
          { title: 'Forældre - Grupperådsmøde', date: '2021-02-24', id: '7 ' },
          { title: 'Senior - Vinterhike', date: '2021-02-05', id: '8 ' },
          { title: 'Senior - Vinterhike', date: '2021-02-06', id: '9 ' },
          { title: 'Senior - Vinterhike', date: '2021-02-07', id: '10 ' },
          { title: 'Mikro - Weekend', date: '2021-03-13', id: '11 ' },
          { title: 'Mikro - Weekend', date: '2021-03-14', id: '12 ' },
          { title: 'Junior - Natløb', date: '2021-03-19', id: '13 ' },
          { title: 'Junior - Natløb', date: '2021-03-20', id: '14 ' },
          { title: 'Forældre - Gruppestyrelsesmøde', date: '2021-03-03', id: '15 ' },
          { title: 'Mikro - Byløb', date: '2021-04-17', id: '16 ' },
          { title: 'Mini - Byløb', date: '2021-04-17', id: '17 ' },
          { title: 'Junior - Byløb', date: '2021-04-17', id: '18 ' },
          { title: 'Trop - Byløb', date: '2021-04-17', id: '19 ' },
          { title: 'Mikro - Sct. Georgsdag', date: '2021-04-24', id: '20 ' },
          { title: 'Mini - Sct. Georgsdag', date: '2021-04-24', id: '21 ' },
          { title: 'Junior - Sct. Georgsdag', date: '2021-04-24', id: '22 ' },
          { title: 'Trop - Sct. Georgsdag', date: '2021-04-24', id: '23 ' },
          { title: 'Senior - Sct. Georgsdag', date: '2021-04-24', id: '24 ' },
          { title: 'Forældre - Sct. Georgsdag', date: '2021-04-24', id: '25 ' },
          { title: 'Mikro - Marbækdag', date: '2021-05-17', id: '26 ' },
          { title: 'Mini - Marbækdag', date: '2021-05-17', id: '27 ' },
          { title: 'Junior - Marbækdag', date: '2021-05-17', id: '28 ' },
          { title: 'Trop - Marbækdag', date: '2021-05-17', id: '29 ' },
          { title: 'Senior - Marbækdag', date: '2021-05-17', id: '30 ' },
          { title: 'Mikro - Vandreture', date: '2021-05-29', id: '31 ' },
          { title: 'Mini - Vandreture', date: '2021-05-29', id: '32 ' },
          { title: 'Junior - Vandreture', date: '2021-05-29', id: '33 ' },
          { title: 'Trop - Vandreture', date: '2021-05-29', id: '34 ' },
          { title: 'Senior - Vandreture', date: '2021-05-29', id: '35 ' },
          { title: 'Trop - Servering til SwimCup', date: '2021-05-13', id: '36 ' },
          { title: 'Senior - Servering til SwimCup', date: '2021-05-13', id: '37 ' },
          { title: 'Forældre - Servering til SwimCup', date: '2021-05-13', id: '38 ' },
          { title: 'Trop - Servering til SwimCup', date: '2021-05-13', id: '39 ' },
          { title: 'Senior - Servering til SwimCup', date: '2021-05-13', id: '40 ' },
          { title: 'Forældre - Servering til SwimCup', date: '2021-05-13', id: '41 ' },
          { title: 'Trop - Servering til SwimCup', date: '2021-05-14', id: '42 ' },
          { title: 'Senior - Servering til SwimCup', date: '2021-05-14', id: '43 ' },
          { title: 'Forældre - Servering til SwimCup', date: '2021-05-14', id: '44 ' },
          { title: 'Trop - Servering til SwimCup', date: '2021-05-15', id: '45 ' },
          { title: 'Senior - Servering til SwimCup', date: '2021-05-15', id: '46 ' },
          { title: 'Forældre - Servering til SwimCup', date: '2021-05-15', id: '47 ' },
          { title: 'Trop - Servering til SwimCup', date: '2021-05-16', id: '48 ' },
          { title: 'Senior - Servering til SwimCup', date: '2021-05-16', id: '49 ' },
          { title: 'Forældre - Servering til SwimCup', date: '2021-05-16', id: '50 ' },
          { title: 'Forældre - Gruppestyrelsesmøde', date: '2021-05-07', id: '51 ' },
          { title: 'Mikor - Fælles møde inden sommerferien', date: '2021-06-22', id: '52 ' },
          { title: 'Mini - Fælles møde inden sommerferien', date: '2021-06-22', id: '53 ' },
          { title: 'Junior - Fælles møde inden sommerferien', date: '2021-06-22', id: '54 ' },
          { title: 'Trop - Fælles møde inden sommerferien', date: '2021-06-22', id: '55 ' },
          { title: 'Senior - Fælles møde inden sommerferien', date: '2021-06-22', id: '56 ' },
          { title: 'Forældre - Fælles møde inden sommerferien', date: '2021-06-22', id: '57 ' },
          { title: 'Mikro - Sommerlejr', date: '2021-07-05', id: '58 ' },
          { title: 'Mikro - Sommerlejr', date: '2021-07-06', id: '59 ' },
          { title: 'Mikro - Sommerlejr', date: '2021-07-07', id: '60 ' },
          { title: 'Mini - Sommerlejr', date: '2021-07-05', id: '61 ' },
          { title: 'Mini - Sommerlejr', date: '2021-07-06', id: '62 ' },
          { title: 'Mini - Sommerlejr', date: '2021-07-07', id: '63 ' },
          { title: 'Junior - Sommerlejr', date: '2021-07-03', id: '64 ' },
          { title: 'Junior - Sommerlejr', date: '2021-07-04', id: '65 ' },
          { title: 'Junior - Sommerlejr', date: '2021-07-05', id: '66 ' },
          { title: 'Junior - Sommerlejr', date: '2021-07-06', id: '67 ' },
          { title: 'Junior - Sommerlejr', date: '2021-07-07', id: '68 ' },
          { title: 'Junior - Sommerlejr', date: '2021-07-08', id: '69 ' },
          { title: 'Junior - Sommerlejr', date: '2021-07-09', id: '70 ' },
          { title: 'Junior - Sommerlejr', date: '2021-07-10', id: '71 ' },
          { title: 'Trop - Sommerlejr', date: '2021-07-03', id: '72 ' },
          { title: 'Trop - Sommerlejr', date: '2021-07-04', id: '73 ' },
          { title: 'Trop - Sommerlejr', date: '2021-07-05', id: '74 ' },
          { title: 'Trop - Sommerlejr', date: '2021-07-06', id: '75 ' },
          { title: 'Trop - Sommerlejr', date: '2021-07-07', id: '76 ' },
          { title: 'Trop - Sommerlejr', date: '2021-07-08', id: '77 ' },
          { title: 'Trop - Sommerlejr', date: '2021-07-09', id: '78 ' },
          { title: 'Trop - Sommerlejr', date: '2021-07-10', id: '79 ' },
          { title: 'Senior - Sommerlejr', date: '2021-07-03', id: '80 ' },
          { title: 'Senior - Sommerlejr', date: '2021-07-04', id: '81 ' },
          { title: 'Senior - Sommerlejr', date: '2021-07-05', id: '82 ' },
          { title: 'Senior - Sommerlejr', date: '2021-07-06', id: '83 ' },
          { title: 'Senior - Sommerlejr', date: '2021-07-07', id: '84 ' },
          { title: 'Senior - Sommerlejr', date: '2021-07-08', id: '85 ' },
          { title: 'Senior - Sommerlejr', date: '2021-07-09', id: '86 ' },
          { title: 'Senior - Sommerlejr', date: '2021-07-10', id: '87 ' },
          { title: 'Mikro - Fælles oprykningsmøde', date: '2021-08-17', id: '88 ' },
          { title: 'Mini - Fælles oprykningsmøde', date: '2021-08-17', id: '89 ' },
          { title: 'Junior - Fælles oprykningsmøde', date: '2021-08-17', id: '90 ' },
          { title: 'Trop - Fælles oprykningsmøde', date: '2021-08-17', id: '91 ' },
          { title: 'Senior - Fælles oprykningsmøde', date: '2021-08-17', id: '92 ' },
          { title: 'Forældre - Fælles oprykningsmøde', date: '2021-08-17', id: '93 ' },
          { title: 'Mikro - Sct. Georgsløb', date: '2021-09-18', id: '94 ' },
          { title: 'Mini - Sct. Georgsweekend', date: '2021-09-18', id: '95 ' },
          { title: 'Junior - Sct. Georgsweekend', date: '2021-09-18', id: '96 ' },
          { title: 'Junior - Sct. Georgsweekend', date: '2021-09-19', id: '97 ' },
          { title: 'Trop - Sct. Georgsweekend', date: '2021-09-18', id: '98 ' },
          { title: 'Trop - Sct. Georgsweekend', date: '2021-09-19', id: '99 ' },
          { title: 'Forældre - Gruppestyrelsesmøde', date: '2021-09-01', id: '100 ' },
          { title: 'Junior - Divisionsweekend', date: '2021-10-01', id: '101 ' },
          { title: 'Junior - Divisionsweekend', date: '2021-10-02', id: '102 ' },
          { title: 'Junior - Divisionsweekend', date: '2021-10-03', id: '103 ' },
          { title: 'Trop - Divisionsweekend', date: '2021-10-01', id: '104 ' },
          { title: 'Trop - Divisionsweekend', date: '2021-10-02', id: '105 ' },
          { title: 'Trop - Divisionsweekend', date: '2021-10-03', id: '106 ' },
          { title: 'Mikro - Juletur', date: '2021-11-27', id: '107 ' },
          { title: 'Mini - Juletur', date: '2021-11-27', id: '108 ' },
          { title: 'Junior - Juletur', date: '2021-11-26', id: '109 ' },
          { title: 'Junior - Juletur', date: '2021-11-27', id: '110 ' },
          { title: 'Junior - Juletur', date: '2021-11-28', id: '111 ' },
          { title: 'Trop - Divisionsjuletur', date: '2021-11-27', id: '112 ' },
          { title: 'Trop - Divisionsjuletur', date: '2021-11-28', id: '113 ' },
          { title: 'Forældre - Gruppestyrelsesmøde', date: '2021-11-03', id: '114 ' },
          
        ]
      }
    }
  },
  methods: {
    handleEventClick: function(info) {

      let event = this.calanderApi.getEventById(info.event.id)
      let dateStr =  ` ${event.start.getDate()}-${event.start.getMonth()}-${event.start.getFullYear()}`
      alert(info.event.title + dateStr)
    }
  },
  mounted() {
    this.calanderApi = this.$refs.calenderEl.getApi()
  }
}
</script>
<template>
    <div id="calendarbody">
        <h2 id="calendartitle">
            {{ $t('calendar.title') }}
        </h2>
        <div id="calendar">
            <FullCalendar ref="calenderEl" :options="calendarOptions" />
        </div>
    </div>
</template>

<style lang="scss">
@import url("https://use.typekit.net/srn1jpl.css");
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

#calendarbody {
    height: auto;
    background-color: #133454 ;
    padding: 30px;
}

#calendartitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 2em;
        color: white;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }

#calendar {
    display: flex;
    justify-content: center;
}

.fc {
    background-color: white;
    height: auto;
    width: 900px;
    border-radius: 15px;
    padding: 20px;
}

@media only screen and (min-width: 688px) {
    #calendarbody {
        height: auto;
        background-color: #133454 ;
        padding: 30px;
    }

    #calendartitle {
        font-family: 'Alfa Slab One', cursive;
        font-size: 3em;
        color: white;
        margin-top: 40px;
        margin-bottom: 90px;
        letter-spacing: 3px;
    }
}

</style>