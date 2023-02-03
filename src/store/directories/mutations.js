// global setter for commits
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
  const isFound = state.directories.some(element => {
    if (element.id === id) {
      return true
    }

    return false
  })
  if (isFound) {
    state.directoryList.filter(a => a.id !== id)
  }

  localStorage.setItem('list', JSON.stringify(state.directoryList))
}

export function setBC (state, value) {
  state.directoryList = value
  localStorage.setItem('list', JSON.stringify(state.directoryList))
}

export function emptyList (state, value) {
  state.directoryList = value
  localStorage.setItem('list', JSON.stringify([]))
}
