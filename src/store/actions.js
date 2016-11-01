import * as types from './mutation-types'
import settings from '../settings'

export const pressKey = ({ commit, state }, event) => {
  commit(types.SET_LASTKEY_EVENT, event)

  let keyCode = event.which || event.keyCode
  let content = state.autocue.content
  let message = state.autocue.message
  let response = {
    left: message
  }
  let wrongAmount

  // Letters Left
  for (let i = 0; i < content.length; i++) {
    if (content[i] !== message[i]) {
      break
    }

    response.left = response.left.substring(1)
  }

  // Letters Wrong
  wrongAmount = content.length - (message.length - response.left.length)
  if (wrongAmount > 0) {
    if (keyCode !== 8) { // Not back space
      commit(types.INCREMENT_WRONG, response)
    }
    response.wrong = response.left.substring(0, wrongAmount)
    response.left = response.left.substring(wrongAmount)
    response.nextLetter = 'Backspace'
  } else {
    commit(types.INCREMENT_CHAR, response)
    response.wrong = ''
    response.nextLetter = response.left.substring(0, 1)
  }

  // Minimize printed text
  response.left = response.left.substring(0, settings.autocueLength)

  commit(types.SET_LETTERS, response)
}
