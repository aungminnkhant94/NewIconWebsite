<template>
    <Nav/>
    <Carousel/>

    <main>
      <Features/>
      <About1/>
      <About2/>
      <About3/>
      <Services/>
      <Review/>
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
import About1 from '@/components/AboutSection1.vue'
import About2 from '@/components/AboutSection2.vue'
import About3 from '@/components/AboutSection3.vue'
import Review from '@/components/ReviewSection.vue'

export default {
  components: {
    Nav,
    Carousel,
    Features,
    Services,
    About1,
    About2,
    About3,
    Review
  },
  data () {
  }
}

</script>
