export async function registerUser ({ commit, state }, form) {
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
    // set Email to username

    await commit('auth/setter', ['token', res.data.access_token], { root: true })
    // set token to refresh token
    await commit('auth/setter', ['refresh', res.data.refresh_token], { root: true })
    if (res.status === 1) {
      await commit('example/setUser', form.email, { root: true })
      // set token to state
      // to set a list from our directories
      await commit('directories/pushToList', {
        title: 'Home',
        id: res.data.root_directory_id
      }, { root: true })
      // root directory id
      await commit('directories/setter', ['id', res.data.root_directory_id], { root: true })
    }
    console.log(state)
    return res
  } catch (e) {
    console.log(e)
    return res
  }
}

/*
* this function made for refreshing the token
* it send refresh token from our state to server
* get the new token set in into our state
* to change token in another HTTP requests
* in directories
*/
export async function refreshToken ({ state, commit }) {
  console.log(state)
  let res = await fetch('https://challenge.spexa.dev/user/refresh', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },

    body: JSON.stringify({
      refresh_token: `${state.refresh}`
    })
  })
  res = await res.json()
  try {
    commit('setter', ['token', res.data.access_token])
    commit('setter', ['refresh', res.data.refresh_token])
    // callback as target request
  } catch (e) {
    // commit('setter', ['token', ''])
    // commit('setter', ['refresh', ''])
    return res.message
  }
}

export async function Logout ({ commit }) {
  commit('setter', ['token', ''])
  commit('setter', ['refresh', ''])
  commit('directories/emptyList', [], { root: true })
  await localStorage.setItem('userInfo', JSON.stringify({}))
}
