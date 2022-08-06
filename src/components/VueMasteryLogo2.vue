<template>
    <!-- <img v-on:click="openGallery" v-on:mouseover="showTooltip" /> -->
     <img v-on="{ click: openGallery, mouseover: showTooltip }" />
</template>

<script>
export default {
  methods: {
    openGallery() {  },
    showTooltip() {  }
  }
}
</script>