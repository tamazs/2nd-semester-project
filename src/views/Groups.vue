<template>
  <div>
    <Group1 />
    <Group2 />
    <Group3 />
    <Group4 />
    <Group5 />
  </div>
</template>

<script>
import Group1 from '../components/Group1'
import Group2 from '../components/Group2'
import Group3 from '../components/Group3'
import Group4 from '../components/Group4'
import Group5 from '../components/Group5'

  export default {
    name: 'Groups',

    components: {
      Group1,
      Group2,
      Group3,
      Group4,
      Group5
    },
  }
</script>