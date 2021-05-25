<template>
  <div id="home">
    <Landing />
    <Counter />
    <Location />
  </div>
</template>

<script>
  import Counter from '../components/Counter'
  import Landing from '../components/Landing'
  import Location from '../components/Location'

  export default {
    name: 'Home',

    components: {
      Counter,
      Landing,
      Location
      
    },
  }
</script>
