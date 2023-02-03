<template>
  <div>
    <q-dialog v-model="isOpen">
      <div class="flex column justify-center bg-white q-px-xl q-py-lg q-py-sm q-col-gutter-y-md box">
        <span class="text-h6 self-start">Create Directory</span>
        <q-input v-model="name" dense outlined placeholder="title"/>
        <div class="row q-gutter-sm full-width">
          <q-btn v-close-popup color="black btn" dense outline>cancel</q-btn>
          <q-btn @click.prevent="$store.dispatch('directories/CreateDirectory', this.name, this.id)" class="q-px-xl" color="black" dense >Create</q-btn>
        </div>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CreateModal',
  props: {
    show: Boolean
  },
  data () {
    return {
      isOpen: false,
      name: '',
      open: true
    }
  },
  computed: {
    ...mapGetters({
      id: 'directories/rootId'
    })
  },
  watch: {
    'show' () {
      this.isOpen = !this.isOpen
    }
  },
  methods: {
    async create () {
      console.log('hi')
    }
  }
}
</script>

<style scoped>
.box {
  min-width: 20vw;
  gap: 2em;
}

.btn {
  flex: 1;
}

</style>
