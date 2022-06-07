<script setup lang="ts">

</script>
<template>
  <Navbar />

  <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
    <!--Left Col-->
    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
      <h1 class="font-bold text-3xl my-4 uppercase">come, fighting, and be a champion</h1>
      <p class="leading-normal mb-4 uppercase">To be a great champion, compete with the best. But, to become the
        greatest
        champion, compete with yourself.</p>
      <router-link to="/signup">
        <button
          class="bg-[#00296B] hover:bg-[#00509D] hover:text-[#FFD500]  text-white rounded-full font-bold shadow  py-2 px-4  ">Register
        </button>
      </router-link>
    </div>
    <!--Right Col-->
    <div class="w-full lg:w-1/2 lg:py-6 text-center">
      <!--Add your product image here-->
      <img src="../../assets/gaming.svg" alt="gaming">
    </div>
  </div>

  <Footer />
</template>