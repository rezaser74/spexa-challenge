export function someMutation (/* state */) {
}

export function setId (state, id) {
  state.id = id
  console.log(state.id)
}

export function setUser (state, user) {
  state.username = user
}
