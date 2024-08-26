<template>
    <nav class="bg-dark-bg text-dark-text px-4 py-2 md:p-4">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="font-bold md:text-4xl">
                    {{ title }}
                </h1>
            </div>
            <div>
                <ul class="flex">
                    <li v-for="(item, index) in links" :key="index" class="w-full px-10 p-2 cursor-pointer rounded-md hover:bg-dark-bg-sec   hover:text-dark-text ">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script setup>
    import { ref } from 'vue';

    const title = '<Wil/>'
    const links = ref([
        'Home', 
        'About',
        'Projects',
        'Technologies',
        'Contact'
    ]);
</script>
  
<style scoped>
    
</style>
  