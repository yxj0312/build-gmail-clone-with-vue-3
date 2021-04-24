<template>
  <div class="bulk-action-bar">
      <span class="checkbox">
        <input type="checkbox" 
        :checked="allEmailsSelected" 
        :class="[someEmailsSelected ? 'partial-check' : '']" 
        @click="bulkSelect"
        />
        <span class="buttons">
            <button>Click Me</button>
        </span>
      </span>
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
        let someEmailsSelected = computed(() => {
            return numberSelected.value > 0 && numberSelected.value < numberEmails
        })
        let bulkSelect = function() {
            if (allEmailsSelected.value) {
                emailSelection.clear()
            } else {
                emailSelection.addMultiple(props.emails)
            }
        }
        return {
            // These will be not working, cause this value will be only calculated once,
            // We need a computed value
            // allEmailsSelected: numberSelected === numberEmails,
            // someEmailsSelected: numberSelected > 0 && numberSelected < numberEmails

            allEmailsSelected,
            someEmailsSelected,
            bulkSelect
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