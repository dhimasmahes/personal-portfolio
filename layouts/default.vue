<template>
    <div class="flex min-h-screen">
        <!-- Header -->
        <Header />

        <!-- Konten Halaman -->
        <div class="flex-1 flex justify-center items-center h-dvh">
            <slot />
        </div>

        <!-- Footer -->
    </div>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Header,
        Footer,
    },
}
</script>

<style>
body{
    background-color: #F2F2ED;
}
</style>