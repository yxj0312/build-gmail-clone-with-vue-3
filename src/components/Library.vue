<template>
  <Book>
    <template v-slot:title="slotProps">
      <!-- How do we get the bookTitle from Book.vue? -->
      <h1>{{ slotProps.bookTitle }}</h1>
    </template>
  </Book>
</template>

<script setup>
import  Book  from "./Book.vue";
</script>