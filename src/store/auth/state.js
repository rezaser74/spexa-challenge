export default function () {
  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  return {
    token: userInfo?.token || '',
    refresh: userInfo?.refresh || ''
  }
}
