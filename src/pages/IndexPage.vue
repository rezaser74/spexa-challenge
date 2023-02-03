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

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const data = ref({
  email: '',
  password: ''
})

const loginUser = async () => {
  const { value: userInfo } = data
  const res = await store.dispatch('auth/registerUser', userInfo)
  if (res.status === 1) {
    await router.push('/directories/Home')
  } else {
    console.log(res.message)
  }
}
</script>
<style>
.form {
  min-width: 20vw;
}
</style>
