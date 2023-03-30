<script >
import Navbar from '../components/NavbarComp.vue';
import About from '../components/AboutUs.vue';
export default{
    components:{
        Navbar,
        About

    }
}

</script> 

<template>
    <div class="w-full h-full  bg-gray-300">
      <Navbar />
      <About />
    </div>
  </template>