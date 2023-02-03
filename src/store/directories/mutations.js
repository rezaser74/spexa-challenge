export function setter (state, [key, value]) {
  state[key] = value
}

// our list of directories for our axios
export function pushToList (state, {
  title,
  id
}) {
  state.directoryList = [...state.directoryList, {
    title,
    id
  }]
}
