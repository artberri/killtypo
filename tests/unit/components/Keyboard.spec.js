import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Keyboard from '@/components/Keyboard'
import keyboards from '@/keyboards/'

Vue.use(Vuex)

function getComponent (optionsState) {
  const defaultState = {
    keyboard: 'qwertyus'
  }
  optionsState = optionsState || defaultState

  const $store = new Vuex.Store({
    state: {
      options: optionsState
    }
  })

  const wrapper = shallowMount(Keyboard, {
    mocks: {
      $store
    },
    stubs: {
      key: {
        template: '<div class="keymock"></div>'
      }
    }
  })

  return wrapper.vm
}

describe('Keyboard.vue', () => {
  describe('computed properties', () => {
    describe('keys()', () => {
      it('should return the letters of the chosen keyboard', () => {
        const vm = getComponent()

        expect(vm.keys)
          .to.eql(keyboards['qwertyus'].keys)
      })
    })
  })

  describe('rendering html content', () => {
    it('should render one key component for each key in keyboard', () => {
      const vm = getComponent()

      expect(vm.$el.querySelectorAll('.keymock').length)
        .to.equal(keyboards['qwertyus'].keys.length)
    })
  })
})
