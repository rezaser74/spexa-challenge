<template>
  <router-view />
</template>

<script>
import { Notify } from 'quasar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  mounted () {
    let deferredPrompt
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevents the default mini-infobar or install dialog from appearing on mobile
      e.preventDefault()
      // Save the event because you'll need to trigger it later.
      deferredPrompt = e
      // Show your customized install prompt for your PWA
      // Your own UI doesn't have to be a single element, you
      // can have buttons in different locations, or wait to prompt
      // as part of a critical journey.
      Notify({
        message: 'do you want to install our app?',
        color: 'black',
        closeBtn: true,
        actions: [
          {

            label: 'install',
            color: 'green',
            handler: () => {
              return deferredPrompt
            }
          }
        ]
      })
    })
  }
})
</script>
