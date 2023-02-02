<template>

  <q-dialog v-model="isOpen">
    <div class="flex column justify-center bg-white q-pa-xl q-py-sm box">
      <span class="text-h6 self-start">Delete Directory</span>
      <span>do you want to delete this direcotry?</span>
      <div class="row q-gutter-sm full-width">
        <q-btn class="btn" color="black" outline v-close-popup dense>cancel</q-btn>
        <q-btn class="q-px-sm btn" color="black" dense>Delete</q-btn>
      </div>
    </div>
  </q-dialog>

</template>

<script>
export default {
  name: 'DeleteModal',
  props: {
    show: Boolean
  },
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    'show' () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
</style>
