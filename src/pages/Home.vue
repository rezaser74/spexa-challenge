<template>
  <q-layout class="flex column full-width q-col-gutter-y-xl layout">
    <the-header/>
    <!--if there is no directory-->
    <CreateDirectory v-if=" !folders.directories.length"/>
    <Directories v-else :level="level" :folders="folders.directories" @add="addFolder()"/>
  </q-layout>

</template>

<script>
import { mapGetters } from 'vuex'
import CreateDirectory from 'components/CreateDirectory.vue'
import Directories from 'components/Directories.vue'
import TheHeader from 'components/Header.vue'

export default {
  name: 'HomePage',
  components: {
    TheHeader,
    Directories,
    CreateDirectory
  },
  data () {
    return {
      level: 1,
      folders: {
        directories: [
          // {
          //   id: 'JUZyOtKXSYW3-y2zpLf8rw',
          //   title: 'test',
          //   parent: 'MuAtC7ooQcWdKMMD8PnuqQ'
          // },
          // {
          //   id: 'JUZyOtKXSYW3-y2zpLf8rw',
          //   title: 'music',
          //   parent: 'MuAtC7ooQcWdKMMD8PnuqQ'
          // }
        ],
        directoryList: []
      }
    }
  },

  computed: {
    ...mapGetters({
      access_token: 'auth/AccessToken',
      getDirectoryList: 'directories/getDirList'
    })
  },
  methods: {
    // ...mapActions({
    //   directory: 'directories/getDirectory'
    // })
  },
  beforeMount () {
  }
}
</script>

<style scoped>
</style>
