<template>
  <div id="home">
    <Landing />
    <Counter />
    <Location />
    <Calendar />
    <Sponsor />
  </div>
</template>

<script>
  import Counter from '../components/Counter'
  import Landing from '../components/Landing'
  import Location from '../components/Location'
  import Calendar from '../components/Calendar'
  import Sponsor from '../components/Sponsor'

  export default {
    name: 'Home',

    components: {
      Counter,
      Landing,
      Location,
      Calendar,
      Sponsor
      
    },
  }
</script>
