export default function () {
  return {
    token: localStorage.getItem('token') || '',
    refresh: localStorage.getItem('refresh') || ''
  }
}
