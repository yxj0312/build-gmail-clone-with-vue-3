<template>
  <div>
      {{ totalEmails }}
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
    }
}
</script>