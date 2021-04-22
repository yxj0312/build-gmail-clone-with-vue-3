<template>
  <div>
      {{ emails.length }}
      {{ emailSelection.emails.size }}
  </div>
</template>

<script>
import useEmailSelection from '@/composables/use-email-selection'
export default {
    setup(props) {
        return {
            emailSelection: useEmailSelection()
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