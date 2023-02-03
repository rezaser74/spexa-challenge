export async function CreateDirectory (store, title, id) {
  let res = await fetch(`https://challenge.spexa.dev/directory/${id}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token') || store.rootState.auth.token}`
    },
    body: JSON.stringify({ title })
  })
  const response = await res.json()
  if (response.message === 'jwt expired') {
    // when our response return 401 status or refreshToken will refresh token and callback our function again
    store.dispatch('auth/refreshToken', '', { root: true })
    await deleteDirectory(store, title, id)
  }
  try {
    res = await res.json()
    store.commit('setter', ['directory', res.data.directories])
    return res
  } catch (e) {
    return res.message
  }
}

export async function getDirectory (store, id) {
  let res = await fetch(`https://challenge.spexa.dev/directory/${id}`, {
    method: 'GET',
    mode: 'cors',

    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem('token') || store.rootState.auth.token}`

    })
  })
  // handling 401 error

  const response = await res.json()

  if (response.message === 'jwt expired') {
    // when our response return 401 status or refreshToken will refresh token and callback our function again
    store.dispatch('auth/refreshToken', '', { root: true })
    await getDirectory(store, id)
  }

  try {
    res = response
    store.commit('setter', ['directory', res.data.directories])
    return res
  } catch (e) {
    console.log(res)

    return res.message
  }
}

export async function deleteDirectory (store, title, id) {
  let res = await fetch(`https://challenge.spexa.dev/directory/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem('token') || store.rootState.auth.token}`

    })

  })
  const response = await res.json()
  if (response.message === 'jwt expired') {
    // when our response return 401 status or refreshToken will refresh token and callback our function again
    store.dispatch('auth/refreshToken', '', { root: true })
    await deleteDirectory(store, title, id)
  }

  try {
    res = response
    return res.data
  } catch {
    return res.message
  }
}
