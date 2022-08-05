<template>
    <img v-bind:src="imageAttrs.src" v-bind:alt="imageAttrs.alt">
</template>

<script>
export default {
    data() {
        return {
            imageAttrs: {
                src: '/vue-mastery-logo.png'
                alt: 'Vue Mastery Logo'
            }
        }
    }
}
</script>