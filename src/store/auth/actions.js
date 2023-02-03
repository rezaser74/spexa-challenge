import { api } from 'boot/axios'

export async function registerUser ({ commit }, form) {
  let res = await fetch('https://challenge.spexa.dev/user/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })

  try {
    res = await res.json()
    commit('example/setUser', form.email, { root: true })
    commit('setter', ['token', res.data.access_token])
    commit('setter', ['refresh', res.data.refresh_token])
    commit('directories/pushToList', {
      title: 'Home',
      id: res.data.root_directory_id
    }, { root: true })
    commit('directories/setter', ['id', res.data.root_directory_id], { root: true })
  } catch (e) {
    console.log(res.data)
  }
}

export async function refreshToken ({
  state,
  commit
}) {
  const res = await api.post('/user/refresh', { refresh_token: state.token })
  try {
    commit('auth/setter', ['token', res.data.access_token])
    commit('auth/setter', ['refresh', res.data.refresh_token])
  } catch (e) {
    console.log(e)
  }
}
