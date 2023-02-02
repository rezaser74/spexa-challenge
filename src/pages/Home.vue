<template>
  <q-layout class="flex column full-width q-col-gutter-y-xl layout">
    <q-header class="bg-white">
      <q-toolbar class="q-ma-lg-xl">
        <q-toolbar-title class="text-caption text-black ">
          <q-btn outline color="black text-caption q-mr-md q-px-lg" dense>logout</q-btn>
          {{ user }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <!--if there is no directory-->
    <CreateDirectory v-if="!folders.directories.length"/>
    <Directories v-else :level="level" :folders="folders.directories" @add="addFolder()"/>
  </q-layout>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CreateDirectory from 'components/CreateDirectory.vue'
import Directories from 'components/Directories.vue'

export default {
  name: 'HomePage',
  components: {
    Directories,
    CreateDirectory
  },
  data () {
    return {
      level: 1,
      folders: {
        directories: [
          {
            id: 'JUZyOtKXSYW3-y2zpLf8rw',
            title: 'test',
            parent: 'MuAtC7ooQcWdKMMD8PnuqQ'
          },
          {
            id: 'JUZyOtKXSYW3-y2zpLf8rw',
            title: 'music',
            parent: 'MuAtC7ooQcWdKMMD8PnuqQ'
          }
        ]
      }
    }
  },

  computed: {
    ...mapGetters({
      user: 'example/getUser'
    })

  },
  methods: {
    ...mapActions({
      todo: 'example/getFolder'
    })
  },
  mounted () {

  }
}
</script>

<style scoped>
.page-container {
  margin-top: 8em;
}

</style>
