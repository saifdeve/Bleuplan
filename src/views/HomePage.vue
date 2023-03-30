<script >
import Navbar from '../components/NavbarComp.vue';
import Hero from '../components/Hero.vue';
import Pricing from '../components/Pricing.vue';
import Service from '../components/Service.vue';
import Faq from '../components/Faq.vue';
import Footer from '../components/Footer.vue';
export default{
    components:{
        Navbar,
        Hero,
        Pricing,
        Service,
        Faq,
        Footer

    }
}

</script> 

<template>
    <div class="w-full h-full  bg-gray-300">
      <Navbar />
      <Hero />
      <Pricing />
      <Service />
      <Faq />
      <Footer />
    </div>
  </template>
