<template>
  <q-layout class="flex column full-width q-col-gutter-y-xl layout">
    <the-header/>
    <!--if there is no directory-->
    <Directories v-if="directories.length" :level="level" :folders="directories" :key="directories"
                 transition-show="jump-down"
                 transition-hide="jump-up"
    />
    <CreateDirectory v-else :key="directories"/>

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
        directoryList: []
      }
    }
  },

  computed: {
    ...mapGetters({
      access_token: 'auth/AccessToken',
      getDirectoryList: 'directories/getDirList',
      directories: 'directories/getDirectories'
    })
  }
}
</script>

<style scoped>
</style>
