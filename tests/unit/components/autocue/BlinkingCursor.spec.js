import { expect } from 'chai'
import Vue from 'vue'
import Vuex from 'vuex'
import BlinkingCursor from '@/components/autocue/BlinkingCursor'

Vue.use(Vuex)

function getComponent (autocueState) {
  const defaultState = {
    isWritting: false
  }
  autocueState = autocueState || defaultState

  const Ctor = Vue.extend(BlinkingCursor)
  const vm = new Ctor({
    store: new Vuex.Store({
      state: {
        autocue: autocueState
      }
    })
  }).$mount()

  return vm
}

describe('BlinkingCursor.vue', () => {
  describe('computed properties', () => {
    describe('isWritting()', () => {
      it('should return the isWritting state', () => {
        const vm = getComponent({
          isWritting: 'hola'
        })

        expect(vm.isWritting)
          .to.equal('hola')
      })
    })
  })

  describe('rendering html content', () => {
    it('should not add the show class when user is not writting', () => {
      const vm = getComponent({
        isWritting: false
      })

      expect(vm.$el.className)
        .to.equal('')
    })

    it('should the show class when user is writting', () => {
      const vm = getComponent({
        isWritting: true
      })

      expect(vm.$el.className)
        .to.equal('show')
    })
  })
})
