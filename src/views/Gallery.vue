<template>
  <div id="gallery">
    <Gallery1 />
    <Gallery2 />
    <Gallery3 />
    <Gallery4 />
    <Gallery5 />
    <Gallery6 />
    <Gallery7 />
  </div>
</template>

<script>
  import Gallery1 from '../components/Gallery1'
  import Gallery2 from '../components/Gallery2'
  import Gallery3 from '../components/Gallery3'
  import Gallery4 from '../components/Gallery4'
  import Gallery5 from '../components/Gallery5'
  import Gallery6 from '../components/Gallery6'
  import Gallery7 from '../components/Gallery7'

  export default {
    name: 'Gallery',

    components: {
      Gallery1,
      Gallery2,
      Gallery3,
      Gallery4,
      Gallery5,
      Gallery6,
      Gallery7
    },
  }
</script>