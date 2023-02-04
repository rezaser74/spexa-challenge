import { Notify } from 'quasar'

export function someAction (/* context */) {
}

export function showNotif (message) {
  Notify.show(message)
}
