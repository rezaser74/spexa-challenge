import { api } from 'boot/axios'

export async function CreateDirectory ({
  state,
  commit,
  actions
}, title) {
  await api.post(`/directory/${state.id}`, {
    title
  })
  try {
    await actions.getDirectory()
  } catch (e) {
    console.log(e)
  }
}

export async function getDirectory ({
  state,
  commit
}) {
  const res = await api.post(`/directory/${state.childId}`)
  try {
    commit('directories/setter', ['directory', res.data.directories])
  } catch (e) {
    console.log(e)
  }
}

export async function deleteDirectory ({
  state,
  commit,
  actions
}, title) {
  await api.delete(`/directory/${state.childId}`, {
    title
  })
  try {
    await actions.getDirectory()
  } catch (e) {
    console.log(e)
  }
}
