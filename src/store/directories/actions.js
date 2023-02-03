/* eslint-disable */
export async function CreateDirectory (store, {
  title,
  id
}) {

  const name = {
    'title': title
  }
  let res = await fetch(`https://challenge.spexa.dev/directory/${id}`, {

    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token') || store.rootState.auth.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    },
    body: JSON.stringify(name)
  })
  const response = await res.json()
  if (response.message === 'jwt expired') {
    // when our response return 401 status or refreshToken will refresh token and callback our function again
    store.dispatch('auth/refreshToken', '', { root: true })
    await CreateDirectory(store, {
      title,
      id
    })
  }
  try {
    res = response
    await store.commit('setter', ['directories', res.data.directories])
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

  if (response.message.includes('expired')) {
    // when our response return 401 status or refreshToken will refresh token and callback our function again
    await store.dispatch('auth/refreshToken', '', { root: true })
    await getDirectory(store, id)
  }

  try {
    res = response
    await store.commit('setter', ['directories', res.data.directories])
    return res
  } catch (e) {
    console.log(res)

    return res.message
  }
}

export async function deleteDirectory (store, {
  title,
  id
}) {
  console.log(id)
  const name = {
    'title': title
  }
  let res = await fetch(`https://challenge.spexa.dev/directory/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem('token') || store.rootState.auth.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    }),
    body: JSON.stringify(name)

  })
  const parentId = store.state.id
  console.log(parentId)
  const response = await res.json()
  if (response.message === 'jwt expired') {
    // when our response return 401 status or refreshToken will refresh token and callback our function again
    store.dispatch('auth/refreshToken', '', { root: true })
    store.dispatch('getDirectory',parentId)

  }

  try {
    res = response
    store.dispatch('getDirectory',parentId)
    return res.data
  } catch {
    return res.message
  }
}
