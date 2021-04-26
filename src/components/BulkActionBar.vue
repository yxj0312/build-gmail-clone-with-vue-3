<template>
  <div class="bulk-action-bar">
      <span class="checkbox">
        <input type="checkbox" 
        :checked="allEmailsSelected" 
        :class="[someEmailsSelected ? 'partial-check' : '']" 
        @click="bulkSelect"
        />
        <span class="buttons">
            <!-- [...] transform set to an array, so that .every could be used -->
            <!-- All are disabled when no emails are selected, and mark read/mark unread are disabled when all selected emails are read/unread. -->
            <button @click="emailSelection.markRead()"
                :disabled="[...emailSelection.emails].every(e => e.read)">Mark Read</button>
            <button @click="emailSelection.markUnread()"
                :disabled="[...emailSelection.emails].every(e => !e.read)">Mark Unread</button>
            <button @click="emailSelection.archive()"
                :disabled="numberSelected === 0">Archive</button>
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

// When we switch to the archived view and select all the emails by hand, the ‘select all’ checkbox shows as only partially selected. It’s still comparing it to the number of emails in the ‘inbox’ view.
// That’s because we forgot to make numberEmails in BulkActionBar.vue a computed property!
        let numberEmails = computed(() => props.emails.length)
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
            bulkSelect,
            emailSelection,
            numberSelected
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