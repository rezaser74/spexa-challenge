import { api } from 'boot/axios'

export async function registerUser ({ commit }, form) {
  const res = await api.post('/user/login', { form })
  try {
    commit('example/setUser', form.email)
  } catch (e) {
    console.log(res.data)
  }
}
