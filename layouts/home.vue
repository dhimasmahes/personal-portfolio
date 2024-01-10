<template>
    <div class="flex min-h-screen">

        <!-- Konten Halaman -->
        <div class="flex-1 flex justify-center items-center h-dvh">
            <slot />
        </div>

        <!-- Footer -->
    </div>
    <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Footer,
    },
}
</script>

<style>
body{
    background-color: #F2F2ED;
}
</style>