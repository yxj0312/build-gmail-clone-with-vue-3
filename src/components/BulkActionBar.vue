<template>
  <div>
      <h1>{{ emails.length }}</h1>
      <h1>{{ emailSelection.emails.size }}</h1>
      <input type="checkbox" :checked="allEmailsSelected" :class="[someEmailsSelected ? 'partial-check' : '']" />
  </div>
</template>

<script>
import useEmailSelection from '@/composables/use-email-selection'
export default {
    setup(props) {
        return {
            emailSelection: useEmailSelection(),
            allEmailsSelected,
            someEmailsSelected
        }
    },

    props: {
        emails: {
            type: Array,
            required: true
        }
    }
}
</script>