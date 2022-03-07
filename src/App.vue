<template>
    <Nav/>
    <Carousel/>

    <main>
      <Features/>
    </main>
  <router-view/>
</template>

<style>

</style>

<script>
import Nav from '@/components/NavBar.vue'
import Carousel from '@/components/CarouselSlide.vue'
import Features from '@/components/FeatureDesign.vue'

export default {
  components: {
    Nav,
    Carousel,
    Features
  },
  data () {
  }
}

</script>
