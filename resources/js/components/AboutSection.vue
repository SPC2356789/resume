<template>
    <section id="about" class="min-h-screen flex items-center justify-center bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <!-- 標題 -->
            <h2 class="text-3xl font-bold text-gray-800 mb-8">關於我</h2>
            <!-- 自我介紹 -->
            <p class="text-gray-600 max-w-2xl mx-auto mb-12">{{ aboutText }}</p>

            <!-- 相關經歷（時間線） -->
            <div>
                <h3 class="text-2xl font-semibold text-gray-800 mb-8">相關經歷</h3>
                <div class="max-w-2xl mx-auto relative">
                    <!-- 時間線垂直線 -->
                    <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300"></div>

                    <!-- 經驗項目 -->
                    <div
                        v-for="(exp, index) in experience"
                        :key="index"
                        class="mb-8 flex flex-col md:flex-row items-start relative"
                    >
                        <!-- 時間點（圓點） -->
                        <div
                            class="absolute w-4 h-4 bg-gray-800 rounded-full -left-1.5 md:left-1/2 md:-translate-x-1/2 z-10"
                            :style="{ top: '8px' }"
                        ></div>

                        <!-- 內容 -->
                        <div
                            class="w-full md:w-1/2 pl-8 md:pl-0 md:pe-12 md:text-left"
                            :class="{ 'md:order-1 md:pl-8 md:text-left': index % 2 !== 0 }"
                        >
                            <h4 class="text-xl font-medium text-gray-700">{{ exp.role }}</h4>
                            <p class="text-gray-600">{{ exp.company }}</p>
                            <p class="text-gray-500 text-sm">{{ exp.period }}</p>
                            <p class="text-gray-500 mt-2">{{ exp.description }}</p>
                        </div>

                        <!-- 空白區（大螢幕時用於平衡佈局） -->
                        <div class="hidden md:block w-1/2"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutSection',
    props: {
        aboutText: {
            type: String,
            required: true,
        },
        experience: {
            type: Array,
            required: true,
        },
    },
    mounted() {
        // // 在組件掛載時記錄 props
        // console.log('AboutSection 組件已掛載');
        // console.log('aboutText:', this.aboutText);

    },
};

</script>
