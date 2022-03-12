<template>
    <Nav/>
    <Carousel/>

    <main>
      <Features/>
      <Services/>
    </main>
  <router-view/>
</template>

<style>

</style>

<script>
import Nav from '@/components/NavBar.vue'
import Carousel from '@/components/CarouselSlide.vue'
import Features from '@/components/FeatureDesign.vue'
import Services from '@/components/ServiceSection.vue'

export default {
  components: {
    Nav,
    Carousel,
    Features,
    Services
  },
  data () {
  }
}

</script>
