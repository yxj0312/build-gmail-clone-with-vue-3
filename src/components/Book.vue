<template>
  <div class="book">
    <slot name="title"></slot>
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