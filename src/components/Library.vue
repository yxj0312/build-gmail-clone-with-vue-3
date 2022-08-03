<template>
  <Book>
    <!-- <template v-slot:title="slotProps"> -->
    <template v-slot:title="{ bookTitle }">
      <!-- How do we get the bookTitle from Book.vue? -->
      <!-- <h1>{{ slotProps.bookTitle }}</h1> -->
      <h1>{{ bookTitle }}</h1>
    </template>
    <template v-slot:description>
      <p>My Description</p>
    </template>
  </Book>
</template>

<script setup>
import  Book  from "./Book.vue";
</script>