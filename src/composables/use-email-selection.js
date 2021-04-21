import { reactive } from 'vue';

export const useEmailSelection = function () {
    // emailSeIected and removeSelection() would each take multiple lines, or at least one longer line, to implement if we used in Array… but if we use a Set, then they both come built-in
    // has , delete, and add do exactly what you’d expect.
    // A value in the Set may only occur once, it is unique in the Set's collection
    let emails = reactive(new Set())
    let toggle = function(email) {
            if (emails.has(email)) {
                emails.delete(email)
            } else {
                emails.add(email)
            }
        }
    return {
        emails,
        toggle
    }
}

export default useEmailSelection
