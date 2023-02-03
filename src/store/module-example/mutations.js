export function someMutation (/* state */) {
}

export function setId (state, id) {
  state.id = id
}

export function setUser (state, user) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  localStorage.setItem('userInfo', JSON.stringify({
    ...userInfo,
    username: user
  }))
  state.username = user
}
