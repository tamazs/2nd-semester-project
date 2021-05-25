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
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        selectable:true,
        events: [
          { title: 'Forældre - Gruppestyrelses-møde', date: '2021-05-26' },
          { title: 'event 2', date: '2019-04-02' }
        ]
      }
    }
  },
  methods: {
    handleDateClick: function(arg) {
        /* alert(arg.dateStr + ' ' + arg.el.title) */
        console.log(arg)
    }
  }
}
</script>
<template>
    <div id="calendarbody">
        <h2 id="calendartitle">
            {{ $t('calendar.title') }}
        </h2>
        <div id="calendar">
            <FullCalendar :options="calendarOptions" />
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