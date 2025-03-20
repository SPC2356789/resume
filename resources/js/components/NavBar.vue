<template>
    <v-layout>
        <v-navigation-drawer v-model="drawer" color="black" disable-resize-watcher>
            <v-list nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.name"
                    :title="item.name"
                    :href="`${item.base??'/'}${item.link}`"
                />
            </v-list>
        </v-navigation-drawer>

        <v-app-bar color="gray" flat class="pe-14">
            <template #prepend>
                <v-app-bar-nav-icon
                    v-if="$vuetify.display.smAndDown"
                    @click="drawer = !drawer"

                />
            </template>

            <div class="d-flex flex-1-1-0 ps-md-4">
                <img src="@/assets/logo.png" alt="SPC Logo" class="w-8 h-8"/>
                <span class="text-2xl font-bold text-gray-800">PC網頁設計</span>
            </div>

            <div class="d-md-flex d-none ga-4 mx-auto">
                <a
                    v-for="item in items"
                    :key="item"
                    class="text-none"
                    :href="`${item.base??'/'}${item.link}`"
                    variant="text"
                >
                    {{ item.name }}
                </a>
            </div>

        </v-app-bar>
    </v-layout>
</template>

<script setup>
import {shallowRef, watch} from 'vue'
import {useDisplay} from 'vuetify';

defineOptions({
    name: 'NavBar'
})
const drawer = shallowRef(false);
const display = useDisplay(); // 使用 Vuetify 的 display 工具

// 監聽螢幕大小變化，當變為 mdAndUp 時關閉抽屜
watch(() => display.smAndDown.value, (newValue) => {
    if (!newValue && drawer.value) {
        drawer.value = false; // 當螢幕變大且抽屜開啟時，關閉抽屜
    }
});
const items = [
    {
        name: '首頁',
        link: 'home',
        base:'/#'
    },
    {
        name: '關於我',
        link: 'about'
    },
    {
        name: '證照',
        link: 'certificates'
    },
    {
        name: '作品',
        link: 'works'
    },
    {
        name: '筆記',
        link: 'hackmd'
    },
    {
        name: '聯絡',
        link: 'contact',
        base:'/#'
    }
]


</script>

<style scoped>

</style>
