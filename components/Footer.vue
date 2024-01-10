<template>
    <footer class=" text-white p-4 flex justify-between items-center h-1/5 fixed bottom-0 left-0 right-0">
        <div>
            <p class="text-lg font-bold">Dhimas Maheswara</p>
        </div>
        <div>
            <nav>
                <ul class="flex space-x-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects">Projects</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>
                    <li><a href="https://www.linkedin.com/in/username-linkedin" target="_blank"
                            rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
footer{
    background-color: #2D2D2B;
}
</style>