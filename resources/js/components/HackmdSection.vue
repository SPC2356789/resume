<script setup>
import {ref, onMounted} from 'vue';
import axios from "axios";
defineOptions({
    name: 'Hackmd'
})
const notes = ref([]);
const error = ref(null);


async function fetchNotes() {

        try {
            const response = await axios.get('/hackmd/notes');
            // console.log( response.data);
            // console.log(1);
            notes.value = response.data;
        } catch (err) {
            // console.log(0);
            error.value = err.response?.data?.error || err.message;
        }

}

onMounted(fetchNotes);
</script>

<template>
    <section class="pa-12 flex flex-col justify-center items-center min-h-screen" id="hackmd">
        <h2 class="text-2xl font-bold mb-4 text-center">我的 HackMD 筆記(API動態載入)</h2>
        <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
        <ul v-else class="grid grid-cols-3 gap-2">
            <li v-for="note in notes" :key="note.id" class="border p-4 rounded-lg text-center py-8">
                <a :href="note.publishLink" target="_blank" class="text-neutral-800 hover:underline ">
                    {{ note.title || '未命名筆記' }}
                </a>
            </li>
        </ul>
    </section>
</template>

<style scoped>
/* 使用 Tailwind CSS */
</style>
