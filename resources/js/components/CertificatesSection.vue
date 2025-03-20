
<script>
export default {
    // name: 'Certificates',
    props: {
        certificates: {
            type: Object,
            required: true,
        },
    },
};
</script>
<!-- CertificatesSection.vue -->
<template>
    <section class="py-12 " id="Certificates">
        <div class="mx-auto px-4 min-h-screen flex flex-col justify-center">
            <h2 class="text-3xl font-bold text-center mb-8">我的證照</h2>
            <div class="flex flex-col bg-white p-6 rounded-lg shadow-md text-center items-center ">
                <p class="mt-4 text-gray-600 w-full sm:w-1/2 px-5 text-start">{{certificates.cont}}</p>
                <a
                    color="gray"
                    :href="certificates.credlyUrl"
                    target="_blank"
                    class=" bg-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-700"
                >
                    瀏覽我的 Credly 證書
                </a>
                <p class="mt-4 text-neutral-500">點擊上方按鈕，查看我在 Credly 上獲得的所有專業認證。</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* 使用 Tailwind CSS */
</style>
