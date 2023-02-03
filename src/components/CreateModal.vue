<template>
  <div>
    <q-dialog v-model="isOpen">
      <div class="flex column justify-center bg-white q-px-xl q-py-lg q-py-sm q-col-gutter-y-md box">
        <span class="text-h6 self-start">Create Directory</span>
        <q-input v-model="title" dense outlined placeholder="title"/>
        <div class="row q-gutter-sm full-width">
          <q-btn v-close-popup color="black btn" dense outline>cancel</q-btn>
          <q-btn :disable="!title" @click.prevent="create" class="q-px-xl confirm" color="black" dense>Create</q-btn>
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
      title: '',
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
      const id = this.id
      const title = this.title

      await this.$store.dispatch('directories/CreateDirectory', { id, title })
    }
  }
}
</script>

<style scoped>
.confirm {
  z-index: 10;
}

.box {
  min-width: 20vw;
  gap: 2em;
}

.btn {
  flex: 1;
}

</style>
