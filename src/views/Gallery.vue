<template>
  <div id="gallery">
    <Gallery1 />
    <Gallery2 />
    <Gallery3 />
  </div>
</template>

<script>
  import Gallery1 from '../components/Gallery1'
  import Gallery2 from '../components/Gallery2'
  import Gallery3 from '../components/Gallery3'

  export default {
    name: 'Gallery',

    components: {
      Gallery1,
      Gallery2,
      Gallery3
    },
  }
</script>