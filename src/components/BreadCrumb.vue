<template>
  <div class="q-mb-lg">
    <q-breadcrumbs>
      <q-breadcrumbs-el class="cursor-pointer" v-for="(directory,index) in directories"
                        :icon="index===0?'home' : 'folder'" :key="index"
                        @click.prevent="goToDirectory(directory)">
        {{ directory.title }}
      </q-breadcrumbs-el>

    </q-breadcrumbs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BreadCrumb',
  computed: {
    ...mapGetters({
      directories: 'directories/getDirList'
    })
  },
  methods: {
    async goToDirectory (item) {
      const array = this.directories.map(a => a)
      const Index = array.indexOf(item)
      const target = array.splice(0, (Index + 1))
      await this.$router.push(`/directories/${item.title}`)
      await this.$store.commit('directories/setter', ['id', item.id])
      await this.$store.dispatch('directories/getDirectory', item.id)
      await this.$store.commit('directories/setBC', target)
    }
  }
}
</script>

<style scoped>

</style>
