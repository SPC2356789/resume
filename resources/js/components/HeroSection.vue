<template>
    <section
        id="home"
        class="min-h-screen text-white flex items-center justify-center py-16 mt-12 bg-cover bg-center"
        :style="{ backgroundImage: 'url(https://media.istockphoto.com/id/1390650720/zh/%E7%85%A7%E7%89%87/digital-network-connection-abstract-connection-of-dots-and-lines-technology-background-plexus.jpg?b=1&s=612x612&w=0&k=20&c=khmFDWUoOj28upsGkqwBtHYV04K1qhyzwWtqCHYar_U=)' }"
    >
        <div class="text-center bg-neutral-900 opacity-80 p-6 rounded-lg w-full sm:w-1/2 py-8 px-10 mx-6">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">{{ hero.wel }}</h1>
            <div class="flex flex-col sm:flex-row justify-center gap-8 mt-8">
                <div class="">
                    <img
                        :src="hero.image || '/default-photo.jpg'"
                        alt="生活照"
                        class="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover"
                    >
                </div>
                <p class="text-lg md:text-xl mb-6 w-full sm:w-1/2 text-start">{{ hero.im }}</p>
            </div>
            <p class="text-lg md:text-xl mb-6 text-neutral-500">{{ hero.drc }}</p>
            <a href="#about"
               class="bg-white text-neutral-500 pa-6  me-n2 rounded-full font-semibold hover:bg-neutral-700">{{
                    hero.about
                }}</a>
        </div>
    </section>
</template>

<script setup>
import { shallowRef } from 'vue'

const drawer = shallowRef(false)

const items = [
    'Products',
    'Services',
    'About',
    'Contact',
]
</script>

<style scoped>

</style>



<script>
export default {
    name: 'HeroSection',
    props: {
        hero: {
            type: Object,
            required: true,
        },
    },
};
</script>
