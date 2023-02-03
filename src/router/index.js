import { route } from 'quasar/wrappers'
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function ({ store }) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({
      left: 0,
      top: 0
    }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })
  Router.beforeEach(async (to, from, next) => {
    const token = store.state.auth.token
    const id = store.state.directories.id
    if (to.name === 'directories') {
      if (!token) {
        await Router.push('/')
      } else {
        if (id) {
          await store.dispatch('directories/getDirectory', id)
        } else if (!id) {
          const list = JSON.parse(localStorage.getItem('list'))
          store.commit('directories/setter', ['directoryList', list])
          const search = list.find(route => route.title.includes(to.params.path)).id
          console.log('search', search)
          await store.commit('directories/setter', ['id', search], { root: true })
          await store.dispatch('directories/getDirectory', search)
        }
      }
    }
    next()
  }
  )
  return Router
})
