<template>
  <div>
      <h1>{{ emails.length }}</h1>
      <h1>{{ emailSelection.emails.size }}</h1>
      <input type="checkbox" :checked="allEmailsSelected" :class="[someEmailsSelected ? 'partial-check' : '']" />
  </div>
</template>

<script>
import useEmailSelection from '@/composables/use-email-selection'
import { computed } from 'vue'
export default {
    setup(props) {
        let emailSelection = useEmailSelection();
        let numberSelected = computed(() => emailSelection.emails.size)
        let numberEmails = props.emails.length
        // we must use .value here, because numberSelected value is a reactive refs
        let allEmailsSelected = computed(() => numberSelected.value === numberEmails)
        let someEmailsSelected = computed( () => {
            return numberSelected.value > 0 && numberSelected.value < numberEmails
        })
        return {
            // These will be not working, cause this value will be only calculated once,
            // We need a computed value
            // allEmailsSelected: numberSelected === numberEmails,
            // someEmailsSelected: numberSelected > 0 && numberSelected < numberEmails

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