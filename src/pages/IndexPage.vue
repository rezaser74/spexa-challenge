<template>
  <q-page class="flex flex-center">
    <div class="full-width  flex column items-center q-col-gutter">
      <span class="text-weight-bold text-center q-ma-lg">try the product out for free</span>
      <q-form class="flex column items-center justify-center form q-col-gutter-y" @submit.prevent="loginUser">
        <q-input v-model="data.email" :rules="[val => !!val || 'Email is missing']" class="full-width" dense outlined
                 placeholder="email"
                 type="email"/>
        <q-input v-model="data.password" :rules="[val=>!!val||'Password is missing']" class="full-width" dense outlined
                 placeholder="password"
                 type="password"/>
        <q-btn :disable="!data.email || !data.password" align="center" class="full-width" color="black" type="submit">
          Login/Register
        </q-btn>
      </q-form>
    </div>
  </q-page>
</template>

<script>
/* eslint-disable */
import {Notify} from 'quasar'

export default {
  data () {
    return {
      data: {
        email: '',
        password: ''
      },
      userLists: []
    }
  },
  methods: {
    //login the form and push our user to json list
    async submit () {
      const res = await this.$store.dispatch('auth/registerUser', this.data)
      if (res.status === 1) {
        await this.$router.push('/directories/Home')
        await this.$api.post('/users', {
          id: Math.floor(Math.random() * 100) * (Date.now()),
          email: this.data.email
        })
      } else {
        console.log(res.message)
      }
    },
    async loginUser () {
      const Found = this.userLists.find(el => el.email === this.data.email) || null
      if (!Found) {
        await this.submit()
      }
      else {
Notify.create({
  message:'your user Exists Logging in...',
  color: 'red',
  spinner: true,
  timeout:1000

})
        await this.submit()
      }
    }
  },
  mounted () {
    this.$api.get('/users').then(res => this.userLists = res.data)
  }
}
</script>
<style>
.form {
  min-width: 20vw;
}
</style>
