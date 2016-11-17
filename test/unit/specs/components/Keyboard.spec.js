import Vue from 'vue'
import Vuex from 'vuex'
import Keyboard from 'src/components/Keyboard'
import keyboards from 'src/keyboards/'

Vue.use(Vuex)

function getComponent (optionsState) {
  const defaultState = {
    keyboard: 'qwertyus'
  }
  optionsState = optionsState || defaultState

  const Ctor = Vue.extend(Keyboard)
  const vm = new Ctor({
    store: new Vuex.Store({
      state: {
        options: optionsState
      }
    }),
    components: {
      'key': {
        template: '<div class="keymock"></div>'
      }
    }
  }).$mount()

  return vm
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
