<template>
    <div class="md:w-10/12 mx-auto">
        <Navigation />  
         <div class="bg-dark-bg mx-auto max-w-screen-2xl p-2 min-h-screen">
             <slot></slot>
         </div>
        <Footer />
    </div>
 </template>

<script setup lang="ts">
    import Navigation from '@/components/commons/Navigation/Index.vue';
    import Footer from '@/components/commons/Footer/Index.vue';
</script>