<template>
  <q-page class="flex  justify-center items-center">
    <div class="flex flex-center column  items-center box">
      <q-icon name="create_new_folder" color="black" size="10em"></q-icon>
      <span class="">there is nothing to show</span>
      <q-btn class="text-caption q-px-xl q-py-md" color="black" @click.prevent="isOpen=!isOpen">create directory</q-btn>
    </div>
  </q-page>
  <div>
    <q-dialog v-model="isOpen">
      <div class="flex column justify-center bg-white q-px-xl q-py-sm q-col-gutter-y-md">
        <span class="text-h6 self-start">Create Directory</span>
        <q-input v-model="name" placeholder="title"/>
        <div class="row q-gutter-sm">
          <q-btn color="black" outline v-close-popup dense>cancel</q-btn>
          <q-btn class="q-px-sm" color="black" dense>Create</q-btn>
        </div>
      </div>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'CreateDirectory',
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>

</style>
