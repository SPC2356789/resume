<template>
    <section id="works" class="min-h-screen flex items-center justify-center bg-gray-100 py-16">
        <div class="max-w-7xl mx-auto ">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">作品</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pa-12">
                <div v-for="work in works" :key="work.id" class="bg-white p-6 rounded-lg shadow-md pa-4 sm:pa-6 lg:pa-8">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ work.title }}</h3>
                    <p class="text-gray-600 mb-4">{{ work.description }}</p>
                    <div class="flex ga-5">

                        <a :href="work.gitLink" target="_blank" class="text-primary hover:underline">{{work.gitText??'GitHub'}}</a>
                        <a :href="work.siteLink" target="_blank" class="text-primary hover:underline">瀏覽</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    // name: 'Works',
    props: {
        works: {
            type: Array,
            required: true,
        },
    },
};
</script>
