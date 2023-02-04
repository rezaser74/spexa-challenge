<template>
  <q-page-container>

    <div class="container">
      <bread-crumb/>
      <q-page>
        <div class="row  full-height">

          <div class="flex q-gutter-lg items-center">

            <div class="flex column justify-center items-center cursor-pointer" v-for="folder of folders" :key="folder">
              <div class="self-end">
                <q-icon name="more_horiz" label="Basic Menu"></q-icon>
                <q-menu>
                  <q-list style="min-width: 100px">
                    <q-item @click="openFolder(folder.id,folder.title)" clickable v-close-popup>
                      <q-item-section>
      <span>
            <q-icon name="open_in_new"/>
          <span class="q-ml-sm">open</span>
      </span>
                      </q-item-section>
                    </q-item>
                    <q-separator/>
                    <q-item @click="()=>{openDel=!openDel;id=folder.id;title=folder.title}" clickable v-close-popup>
                      <q-item-section>
<span>
            <q-icon name="delete"></q-icon>
       <span class="q-ml-sm">delete</span>
</span>

                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </div>
              <q-icon name="folder" size="5em"></q-icon>
              <span>{{ folder.title }}</span>

            </div>
            <q-icon class="cursor-pointer" name="add" size="2em" @click="openAdd=!openAdd"></q-icon>

            <create-modal :show="openAdd" />
            <delete-modal :show="openDel" :id="id" :title="title"/>
          </div>
        </div>
      </q-page>
    </div>

  </q-page-container>
</template>

<script>

import CreateModal from 'components/CreateModal.vue'
import DeleteModal from 'components/DeleteModal.vue'
import BreadCrumb from 'components/BreadCrumb.vue'

export default {

  name: 'DirComponent',
  components: {
    BreadCrumb,
    DeleteModal,
    CreateModal
  },
  props: {
    level: {
      type: Number,
      default: 1
    },
    folders: { required: true }
  },
  data () {
    return {
      openAdd: false,
      openDel: true,
      id: '',
      title: ''
    }
  },
  methods: {

    async openFolder (id, title) {
      await this.$router.push(`/directories/${title}`)
      await this.$store.dispatch('directories/getDirectory', id)
      await this.$store.commit('directories/setter', ['id', id])
      await this.$store.commit('directories/pushToList', { title, id })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
