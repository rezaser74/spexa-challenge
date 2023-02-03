// global setter for commits
export function setter (state, [key, value]) {
  state[key] = value

  if (key === 'token' || key === 'refresh') {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    localStorage.setItem('userInfo', JSON.stringify({
      ...userInfo,
      token: state.token,
      refresh: state.refresh
    }))
  }
}
