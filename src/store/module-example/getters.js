// export function someGetter (/* state */) {
//
// }
export function getUser (state) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  return userInfo.username || state.username
}
