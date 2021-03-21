<template>
  <div class="modal">
    <div class="overlay" @click="emit('closeModal')"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    setup(props, {emit}) {
      let onKeydown = (event) => {
        console.log(event.key);
      }
      window.addEventListener('keydown', onKeydown)
      return { 
	      emit
      }
    }
  }
</script>