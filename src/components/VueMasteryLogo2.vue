<template>
    <!-- <img v-on:click="openGallery" v-on:mouseover="showTooltip" /> -->
     <!-- <img v-on="{ click: openGallery, mouseover: showTooltip }" /> -->
      <img v-on="inputEvents" />
</template>

<script>
export default {
    computed: {
        inputEvents: {
        click: this.openGallery,
        mouseover: this.showTooltip
        }
    },
    methods: {
        openGallery() {  },
        showTooltip() {  }
    }
}
</script>