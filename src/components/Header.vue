<template>
  <q-header class="bg-white">
    <q-toolbar class="q-ma-lg-xl">
      <q-toolbar-title class="text-caption text-black ">
        <q-btn outline color="black text-caption q-mr-md q-px-lg" dense @click="Logout">logout</q-btn>
        {{ user }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TheHeader',
  computed: {
    ...mapGetters({
      user: 'example/getUser'
    })
  },
  methods: {
    ...mapActions({ removeToken: 'auth/Logout' }),
    async Logout () {
      await this.removeToken()
      await this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
