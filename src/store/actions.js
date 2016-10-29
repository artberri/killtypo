import * as types from './mutation-types'

export const startClock = ({ commit }, limit) => {
  let deadline = new Date(Date.parse(new Date()) + limit * 1000)

  commit(types.SET_DEADLINE, deadline)
}

export const pressKey = ({ commit }, event) => {
  commit(types.SET_LASTKEY_EVENT, event)
}
