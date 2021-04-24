import { reactive } from 'vue';
import axios from 'axios';

// If this is in the useEmailSelection
// Because a new Set has been created for each usage of useEmailSelection. It’s not a global state.
let emails = reactive(new Set())
export const useEmailSelection = function () {
    // emailSeIected and removeSelection() would each take multiple lines, or at least one longer line, to implement if we used in Array… but if we use a Set, then they both come built-in
    // has , delete, and add do exactly what you’d expect.
    // A value in the Set may only occur once, it is unique in the Set's collection
    let toggle = function(email) {
            if (emails.has(email)) {
                emails.delete(email)
            } else {
                emails.add(email)
            }
        }
    let clear = () => {
        emails.clear()
    }
    let addMultiple = (newEmails) => {
        newEmails.forEach(email => {
            emails.add(email)
        });
    }
    // We don't need to pass any arguments, because all the emails are the reactive sets
    let markRead = () => {
        emails.forEach(email => {
            email.read = false
            axios.put(`http://localhost:3000/emails/${email.id}`, email)
        })
    }
    return {
        emails,
        toggle,
        clear,
        addMultiple,
        markRead
    }
}

export default useEmailSelection
