// src-pwa/register-service-worker.js file

import { register } from 'register-service-worker'
import { Notify } from 'quasar'
register(process.env.SERVICE_WORKER_FILE, {
  ready (registration) {
    console.log('Service worker is active.')
  },

  registered (registration) {
    console.log('Service worker has been registered.')
  },

  cached (registration) {
    console.log('Content has been cached for offline use.')
  },

  updatefound (registration) {
    console.log('New content is downloading.')
  },

  updated (registration) {
    console.log('New content is available; please refresh.')
    return Notify.create('wait for Updating...')
  },

  offline () {
    console.log('No internet connection found. App is running in offline mode.')
    return Notify.create({
      message: 'You are Offline',
      color: 'red'
    })
  },

  error (error) {
    console.error('Error during service worker registration:', error)
  }
})
