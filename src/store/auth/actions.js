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
    // set Email to username
    commit('example/setUser', form.email, { root: true })
    // set token to state
    commit('setter', ['token', res.data.access_token])
    localStorage.setItem('token', res.data.access_token)
    // set token to refresh token
    commit('setter', ['refresh', res.data.refresh_token])
    // to set a list from our directories
    commit('directories/pushToList', {
      title: 'Home',
      id: res.data.root_directory_id
    }, { root: true })
    // root directory id
    commit('directories/setter', ['id', res.data.root_directory_id], { root: true })
    return res
  } catch (e) {
    return res.message
  }
}

/*
* this function made for refreshing the token
* it send refresh token from our state to server
* get the new token set in into our state
* to change token in another HTTP requests
* in directories
*/
export async function refreshToken ({
  state,
  commit
}, callBack) {
  let res = await fetch('https://challenge.spexa.dev/user/refresh', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      refresh_token: state.refresh
    })
  })
  res = await res.json()
  try {
    commit('setter', ['token', res.data.access_token])
    commit('setter', ['refresh', res.data.refresh_token])
    // callback as target request
    return await callBack()
  } catch (e) {
    commit('setter', ['token', ''])
    commit('setter', ['refresh', ''])
    return res.message
  }
}
