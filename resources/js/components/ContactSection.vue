<template>
    <section id="contact" class=" flex items-center justify-center bg-gray-800 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-8">聯絡我</h2>
            <p>電子郵件：{{ contact.email }}</p>
            <p>電話：{{ contact.phone }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactSection',
    props: {
        contact: {
            type: Object,
            required: true,
        },

    },
};
</script>
