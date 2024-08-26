<template>
    <div class="flex items-center justify-between h-80 mt-20">
        <div class="bg-center">
            <p class="text-xl mb-4">
                Hi i'm a 
                <span class="bg-green-400 p-2 rounded-md text-dark-bg">
                    {{ position }}
                </span>
            </p>
            <h1 class="text-7xl font-bold mb-4">
                Wilard Matias
            </h1>
            <div class="flex item-center justify-center gap-10">
                <button class="bg-green-400 p-2 rounded-md text-dark-bg hover:bg-dark-bg hover:border border-green-400 hover:text-dark-text">
                    Contact Me
                </button>
                <button class="p-2 rounded-md border border-green-400 hover:bg-green-400 hover:text-dark-bg">
                    Download My CV
                </button>
            </div>
        </div>
        <div class="w-1/2">
            <img :src="Me" alt="me" class="w-96 mx-auto">
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import Me from '@/assets/images/me.png';

    const position = ref('Front-end Developer');
    const positions = [
        'Front-end Developer',
        'Full-stack Developer',
    ];

    const updatePosition = () => {
        const currentIndex = positions.indexOf(position.value);
        const nextIndex = (currentIndex + 1) % positions.length;
        position.value = positions[nextIndex];
    };

    onMounted(() => {
        setInterval(updatePosition, 30000);
    });
</script>

<style scoped>

</style>