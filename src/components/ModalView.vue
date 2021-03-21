<template>
  <div class="modal">
    <div class="overlay" @click="emit('closeModal')"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
  import { onBeforeUnmount } from 'vue';
  let useKeydown = (keyPressed, fn) => {
     let onKeydown = (event) => {
        if (event.key == keyPressed) {
          fn()
        }
      }
      window.addEventListener('keydown', onKeydown);

      // This hook will be called every time we unmount the modal, removing the event listener.
      onBeforeUnmount(() => {
        window.removeEventListener('keydown', onKeydown)
      })
  }
  export default {
    // Close it down, and open it up again… 
    // and notice that it’s logging twice per key press. Then close it down, and notice it’s still logging twice per key press. 
    // That’s because we’re not removing the event listeners, so they stick around after closing the modal, and stack up every time we open the modal again.
    setup(props, {emit}) {
      useKeydown('Escape', () => {emit('closeModal')})
      useKeydown('Enter', () => {console.log('A different function')})

      return { 
	      emit
      }
    }
  }
</script>