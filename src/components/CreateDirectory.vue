<template>
  <q-page class="flex column justify-center items-center">
    <bread-crumb/>
    <div class="flex flex-center column  items-center box">
      <q-icon name="create_new_folder" color="black" size="10em"></q-icon>
      <span class="">there is nothing to show</span>
      <q-btn class="text-caption q-px-xl q-py-md" color="black" @click.prevent="isOpen=!isOpen">create directory</q-btn>
    </div>
  </q-page>
  <div>
    <create-modal :show="isOpen"/>
  </div>
</template>

<script>
import CreateModal from 'components/CreateModal.vue'
import BreadCrumb from 'components/BreadCrumb.vue'

export default {
  name: 'CreateDirectory',
  components: { BreadCrumb, CreateModal },
  data () {
    return {
      isOpen: false,
      title: ''
    }
  },
  methods: {
    create () {
      console.log('created')
    }
  }
}
</script>

<style scoped>

</style>
