import { onBeforeUnmount } from 'vue';
  // let useKeydown = (keyPressed, fn) => {
  let useKeydown = (keyCombos) => {
        let onkey = function(event) {
          let kc = keyCombos.find(kc => kc.key == event.key )
          if(kc) {
            kc.fn()
          }
      }
      window.addEventListener('keydown', onkey);

      // This hook will be called every time we unmount the modal, removing the event listener.
      onBeforeUnmount(() => {
        window.removeEventListener('keydown', onkey)
      })
  }

  export default useKeydown;