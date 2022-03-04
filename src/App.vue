<template>
    <Nav/>
    <Carousel/>
  <router-view/>
</template>

<style>

</style>

<script>
import Nav from '@/components/NavBar.vue'
import Carousel from '@/components/CarouselSlide.vue'

export default {
  components: {
    Nav,
    Carousel
  },
  data () {
  }
}

</script>
