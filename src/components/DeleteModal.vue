<template>

  <q-dialog v-model="isOpen">
    <div class="flex column justify-center bg-white q-pa-xl q-py-sm box">
      <span class="text-h6 self-start">Delete Directory</span>
      <span>do you want to delete this direcotry?</span>
      <div class="row q-gutter-sm full-width">
        <q-btn class="btn" color="black" outline v-close-popup dense>cancel</q-btn>
        <q-btn class="q-px-sm btn" color="black" dense @click.prevent="deleteIt">Delete</q-btn>
      </div>
    </div>
  </q-dialog>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DeleteModal',
  props: {
    show: Boolean,
    id: String,
    title: String
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
  },
  methods: {
    ...mapActions({
      deleteItem: 'directories/deleteDirectory'
    }),
    async deleteIt () {
      const id = this.id
      const title = this.title
      console.log(this.title, this.id)
      await this.deleteItem({ title, id })
    }
  }
}
</script>

<style scoped>
</style>
