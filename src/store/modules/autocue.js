import * as types from '../mutation-types'

const state = {
  message: 'A ocho días de que se disuelvan las Cortes si no resulta investido antes, el líder del PP, Mariano Rajoy, puede respirar tranquilo. El Comité Federal (CF) del PSOE, en una decisión histórica, ha acordado por 139 votos frente a 96 abstenerse sin condiciones en segunda votación para que pueda gobernar el Partido Popular y evitar así terceras elecciones, aunque la fórmula en que se ejecutará, si en bloque o parcial, está aún por definirse.',
  content: '',
  lastKey: null,
  isWritting: false
}

export default {
  state,
  mutations: {
    [types.SET_LASTKEY_EVENT] (state, event) {
      state.content = event.target.value
      state.lastKey = event.which || event.keyCode
    },

    [types.START_WRITTING] (state) {
      state.isWritting = true
    },

    [types.STOP_WRITTING] (state) {
      state.isWritting = false
    }
  }
}
