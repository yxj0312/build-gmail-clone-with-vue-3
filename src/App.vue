<!-- Gmail -->
<!-- <template>
  <h1>VMail Inbox</h1>
  <Suspense>
    <template #default>
      <MailTable />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>
  
<script>
import MailTable from '@/components/MailTable.vue';
import useEmailSelection from '@/composables/use-email-selection'

export default {
  name: 'App',
  components: {
    MailTable
  },
  setup() {
    return {
      emailSelection: useEmailSelection(),
    }
  }
};
</script> -->


<!-- Component Design Patterns Vue -->
<!-- <script setup>
import { useMouse } from './composables/mouse';
import { useTitle, useRefHistory, useInterval, useNow } from '@vueuse/core'
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from './components/BaseButton.vue';
import BlogLayout from './components/BlogLayout.vue';
import Library from './components/Library.vue';

const { x, y } = useMouse()
// use a ref
// const title = useTitle('Green Socks', { titleTemplate: '%s | My Store'})
// use a primitive
const title = useTitle('This ios the title')
title.value = 'New title Please'

const state = ref({});
const { undo } = useRefHistory(state, {
  deep:true,
  capacity: 15
})

//  count will increase every 200ms
// const counter =  useInterval(200)

// const {counter, pause, resume } = useInterval(200, { controls: true})
const { now, pause, resume } = useNow({ controls: true })


const layout = [
        { name: 'header', content: 'My Blog Title' },
        { name: 'default', content: 'Main body content' },
        { name: 'sidebar', content: 'Footer contet' }
      ]
</script>

<template>
// Mouse position is at : {{ x }}, {{ y }}
  <h1>Title Composable</h1>
  <input v-model="title" type="text"> -->
  <!-- <div>{{ counter }}</div>
  <button @click="pause">Pause</button>
  <button @click="resume">Resume</button> -->
  <!-- <div>{{ now }}</div>
  <button @click="pause">Pause</button>
  <button @click="resume">Resume</button> -->
<!-- 
  <BaseButton>Cancel</BaseButton>

  <Library></Library> -->

  <!-- <BlogLayout>
    <template v-slot:header>
      <h1>My Blog Title</h1>
    </template>
    <template>
      <p>Main body content</p>
    </template>
    <template v-slot:sidebar>
      <p>Footer content</p>
    </template>
  </BlogLayout> -->

  <!-- <BlogLayout>
    <template 
      v-for="section in layout" 
      v-slot:[section.name]
      :key="`blog-section-${section.name}`"
    >
      {{ section.content }}
    </template>
  </BlogLayout>
</template> -->

<!-- Learn Vue 3: Step by Step -->
<script setup>
import { ref } from 'vue';

let message = ref("Hello, world");

setTimeout(() => {
  message.value = "I Have Been Changed"
}, 2000);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Global Styles */

button {
  font-size: 16px;
  padding: 8px;
  border-radius: 3px;
  margin: 5px 10px 5px 0px;
  cursor: pointer;
}

button:disabled {
  cursor: auto;
}

button.selected {
  cursor: auto;
  color: black;
  border-color: black;
  border-width: 2px;
}

.clickable {
  cursor: pointer;
}

input[type='checkbox'] {
  -webkit-appearance:none;
  cursor: pointer;
  width:24px;
  height:24px;
  background:white;
  border-radius: 2px;
  border: 1px solid #555;
  position: relative;
  vertical-align: middle;
  padding: 10px;
}

input[type='checkbox'].partial-check {
  background: #ABC;
}

input[type='checkbox']:checked {
  background: #679;
}

.mb-0 {
  margin-bottom: 0;
}

/* Modal */

.modal, .overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
}

/* Email Modal */

.email-display {
  text-align: left;
}

/* Mail Table */

.mail-table {
  max-width: 1000px;
  margin: auto;
  border-collapse: collapse;
}
.mail-table tr.read {
  background-color: #EEE;
}
.mail-table tr {
  height: 40px;
}
.mail-table td {
  border-bottom: 1px solid black;
  padding: 5px;
  text-align: left;
}
.mail-table tr:first-of-type td {
  border-top: 1px solid black;
}
.mail-table td p {
  max-height: 1.2em;
  overflow-y: hidden;
  margin: 0;
}

.mail-table td.date {
  width: 120px;
}

/* Bulk Action Bar */

.bulk-action-bar {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  text-align: left;
  padding-bottom: 8px;
}

.bulk-action-bar input {
  margin: 5px;
}

.bulk-action-bar .checkbox {
  margin-right: 6px;
  margin-left: 3px;
}
</style>
