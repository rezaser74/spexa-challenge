<template>
  <q-page class="flex flex-center">
    <div class="full-width  flex column items-center q-col-gutter">
      <span class="text-weight-bold text-center q-ma-lg">try the product out for free</span>
      <q-form class="flex column items-center justify-center form q-col-gutter-y" @click.prevent="loginUser">
        <q-input dense class="full-width" outlined v-model="data.email" type="email" placeholder="email"
                 :rules="[val => !!val || 'Email is missing']"/>
        <q-input dense class="full-width" outlined type="password" v-model="data.password" placeholder="password"
                 :rules="[val=>!!val||'Password is missing']"/>
        <q-btn type="submit" color="black" align="center" class="full-width">Login/Register</q-btn>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser () {
      this.$router.push('/directories')
    }
  }
})
</script>
<style>
.form {
  min-width: 20vw;
}
</style>
