// global setter for commits
export function setter (state, [key, value]) {
  state[key] = value
  if (state[key] === 'token' || state[key] === 'refresh') {
    localStorage.setItem(state[key], value)
  }
}
