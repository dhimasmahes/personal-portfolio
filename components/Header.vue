<template>
    <header class="text-gray-800 flex flex-col items-start justify-between fixed top-0 left-0 h-4/5 p-5">
        <div>
            <!-- Burger Menu untuk Semua Tampilan Layar -->
            <button @click="toggleMenu" class="focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
        <p class="transform -rotate-180 text-lg">DHIMAS MAHESWARA</p>
        <p class="transform -rotate-180 text-lg">{{ currentPage }}</p>

        <div v-if="isMenuOpen" class="fixed inset-0 bg-gray-800 z-50">
            <div class="flex justify-end p-4">
                <button @click="toggleMenu" class="text-white focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="flex flex-col items-center text-white">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/projects">Projects</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    computed: {
        currentPage() {
            // Mendapatkan nama halaman yang sedang diakses
            // Sesuaikan dengan cara mendapatkan nama halaman di proyek Nuxt Anda
            return 'Nama Halaman'; // Ganti dengan logika yang sesuai
        },
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
}
</script>

<style scoped>
p {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    @apply font-serif
}
</style>