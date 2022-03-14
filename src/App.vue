<template>
    <Nav/>
    <Carousel/>

    <main>
      <Features/>
      <About1/>
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
import About1 from '@/components/AboutSection.vue'

export default {
  components: {
    Nav,
    Carousel,
    Features,
    Services,
    About1
  },
  data () {
  }
}

</script>
