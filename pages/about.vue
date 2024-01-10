<template>
    <div v-html="data[0].content.rendered">
    </div>
</template>

<script setup>

const { data, pending, error, refresh } = await useFetch('/wp-json/wp/v2/pages?slug=about');
console.log(data[0].content.rendered)

</script>