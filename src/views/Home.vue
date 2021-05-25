<template>
  <div id="home">
    <Landing />
    <Counter />
    <Location />
    <Calendar />
  </div>
</template>

<script>
  import Counter from '../components/Counter'
  import Landing from '../components/Landing'
  import Location from '../components/Location'
  import Calendar from '../components/Calendar'

  export default {
    name: 'Home',

    components: {
      Counter,
      Landing,
      Location,
      Calendar
      
    },
  }
</script>
