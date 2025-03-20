<template>
    <section
        id="home"
        class="min-h-screen text-white flex items-center justify-center py-16 mt-12 bg-cover bg-center"
        :style="{ backgroundImage: 'url(https://media.istockphoto.com/id/1390650720/zh/%E7%85%A7%E7%89%87/digital-network-connection-abstract-connection-of-dots-and-lines-technology-background-plexus.jpg?b=1&s=612x612&w=0&k=20&c=khmFDWUoOj28upsGkqwBtHYV04K1qhyzwWtqCHYar_U=)' }"
    >
        <div class="flex flex-col sm:flex-row px-5 justify-center items-center ga-2">

                <iframe loading="lazy"
                        class="sm:w-1/2 w-full h-96"
                        src="https://www.canva.com/design/DAGiJ8JJJw0/cJoj9TTUhs5ZqR_oRhkNgw/view?embed"
                        allowfullscreen="allowfullscreen" allow="fullscreen">
                </iframe>

            <div class="text-center bg-neutral-900 opacity-80  rounded-lg sm:w-1/2 w-full pa-5">

                <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">{{ hero.wel }}</h1>
                <p class="text-lg md:text-xl mb-6 w-full  text-start">{{ hero.im }}</p>
                <p class="text-lg md:text-xl mb-6 text-neutral-500">{{ hero.drc }}</p>
                <v-btn href="#about"
                       class="bg-white text-neutral-500 rounded-full font-semibold hover:bg-neutral-700 pa-3 ms-1 cursor-pointer">
                    {{
                        hero.about
                    }}
                </v-btn>
            </div>
        </div>
    </section>
</template>

<script setup>
import {shallowRef} from 'vue'

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
