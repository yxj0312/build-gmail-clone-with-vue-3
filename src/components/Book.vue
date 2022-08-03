<template>
  <div class="book">
    <slot name="title"
        :bookTitle="bookTitle"></slot>
    <slot name="description" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookTitle: 'Child Providing Data'
    }
  }
}
</script>