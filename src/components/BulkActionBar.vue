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
        let emailSelection = useEmailSelection();
        let numberSelected = emailSelection.emails.size
        let numberEmails = props.emails.length
        return {
            // This will be not working, cause this value will be only calculated once,
            // We need a computed value
            allEmailsSelected: numberSelected === numberEmails,
            someEmailsSelected: numberSelected > 0 && numberSelected < numberEmails
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