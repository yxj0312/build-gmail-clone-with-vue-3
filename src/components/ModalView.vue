<template>
  <div class="modal">
    <div class="overlay" @click="emit('closeModal')"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
  import useKeydown from '../composables/use-keydown'

  export default {
    // Close it down, and open it up again… 
    // and notice that it’s logging twice per key press. Then close it down, and notice it’s still logging twice per key press. 
    // That’s because we’re not removing the event listeners, so they stick around after closing the modal, and stack up every time we open the modal again.
    setup(props, {emit}) {
      useKeydown([
        {key: 'Escape', fn: () => {emit('closeModal')}},
        // {key: 'Enter', fn: () => { console.log('logging for demonstration purposes') }}
      ])

      return { 
	      emit
      }
    }
  }
</script>