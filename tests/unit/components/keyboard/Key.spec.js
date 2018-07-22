import { expect } from 'chai'
import Vue from 'vue'
import Vuex from 'vuex'
import Key from '@/components/keyboard/Key'

Vue.use(Vuex)

function getComponent (Component, propsData, autocueState) {
  const defaultState = {
    letters: {
      wrong: '',
      left: '',
      nextLetter: ''
    },
    isWritting: false
  }
  const defaultProps = {
    keyobj: {
      letters: ['a'],
      type: 'num',
      dual: false,
      keyCode: 49
    }
  }
  autocueState = autocueState || defaultState
  propsData = propsData || defaultProps

  const Ctor = Vue.extend(Component)
  const vm = new Ctor({
    propsData,
    store: new Vuex.Store({
      state: {
        autocue: autocueState
      }
    })
  }).$mount()

  return vm
}

describe('Key.vue', () => {
  describe('computed properties', () => {
    describe('letters()', () => {
      it('should return autocue letters', () => {
        const vm = getComponent(Key, null, {
          letters: {
            wrong: 'a',
            left: 'b',
            nextLetter: 'c'
          },
          isWritting: false
        })
        expect(vm.letters)
          .to.eql({
            wrong: 'a',
            left: 'b',
            nextLetter: 'c'
          })
      })
    })

    describe('nextLetter()', () => {
      it('should return autocue next letter', () => {
        const vm = getComponent(Key, null, {
          letters: {
            wrong: 'a',
            left: 'b',
            nextLetter: 'z'
          },
          isWritting: false
        })
        expect(vm.nextLetter)
          .to.equal('z')
      })
    })

    describe('isWritting()', () => {
      it('should return if writting phase has started', () => {
        const vm = getComponent(Key, null, {
          letters: {
            wrong: 'a',
            left: 'b',
            nextLetter: 'z'
          },
          isWritting: true
        })
        expect(vm.isWritting)
          .to.equal(true)
      })
    })

    describe('classObject()', () => {
      it('should return the proper class objects', () => {
        const vm = getComponent(Key,
          {
            keyobj: {
              letters: ['a', 'b'],
              dual: false,
              keyCode: 49
            }
          },
          {
            letters: {
              wrong: 'a',
              left: 'b',
              nextLetter: 'z'
            },
            isWritting: true
          }
        )

        expect(vm.classObject)
          .to.eql({
            key: true,
            dual: false,
            trial: undefined,
            slash: undefined,
            left: undefined,
            right: undefined,
            next: false
          })
      })

      it('should return the proper type class', () => {
        const vm = getComponent(Key,
          {
            keyobj: {
              letters: ['a', 'b'],
              type: 'num',
              dual: true,
              keyCode: 49
            }
          },
          {
            letters: {
              wrong: 'a',
              left: 'b',
              nextLetter: 'z'
            },
            isWritting: true
          }
        )

        expect(vm.classObject.num)
          .to.equal(true)
      })

      it('should return the proper dual class', () => {
        const vm = getComponent(Key,
          {
            keyobj: {
              letters: ['a', 'b'],
              type: 'num',
              dual: true,
              keyCode: 49
            }
          },
          {
            letters: {
              wrong: 'a',
              left: 'b',
              nextLetter: 'z'
            },
            isWritting: true
          }
        )

        expect(vm.classObject.dual)
          .to.equal(true)
      })

      it('should return the proper trial class', () => {
        const vm = getComponent(Key,
          {
            keyobj: {
              letters: ['a', 'b'],
              type: 'num',
              dual: false,
              trial: true,
              keyCode: 49
            }
          },
          {
            letters: {
              wrong: 'a',
              left: 'b',
              nextLetter: 'z'
            },
            isWritting: true
          }
        )

        expect(vm.classObject.trial)
          .to.equal(true)
      })

      it('should return the proper slash class', () => {
        const vm = getComponent(Key,
          {
            keyobj: {
              letters: ['a', 'b'],
              type: 'num',
              dual: false,
              slash: true,
              keyCode: 49
            }
          },
          {
            letters: {
              wrong: 'a',
              left: 'b',
              nextLetter: 'z'
            },
            isWritting: true
          }
        )

        expect(vm.classObject.slash)
          .to.equal(true)
      })

      it('should return the proper left class', () => {
        const vm = getComponent(Key,
          {
            keyobj: {
              letters: ['a', 'b'],
              type: 'num',
              dual: false,
              left: true,
              keyCode: 49
            }
          },
          {
            letters: {
              wrong: 'a',
              left: 'b',
              nextLetter: 'z'
            },
            isWritting: true
          }
        )

        expect(vm.classObject.left)
          .to.equal(true)
      })

      it('should return the proper right class', () => {
        const vm = getComponent(Key,
          {
            keyobj: {
              letters: ['a', 'b'],
              type: 'num',
              dual: false,
              right: true,
              keyCode: 49
            }
          },
          {
            letters: {
              wrong: 'a',
              left: 'b',
              nextLetter: 'z'
            },
            isWritting: true
          }
        )

        expect(vm.classObject.right)
          .to.equal(true)
      })

      it('should not return the next class when the game is not started even the key is next', () => {
        const vm = getComponent(Key,
          {
            keyobj: {
              letters: ['A', 'B'],
              type: 'num',
              dual: false,
              right: true,
              keyCode: 49
            }
          },
          {
            letters: {
              wrong: 'a',
              left: 'b',
              nextLetter: 'a'
            },
            isWritting: false
          }
        )

        expect(vm.classObject.next)
          .to.equal(false)
      })

      it('should return the next class when the game is started and the key is next', () => {
        const vm = getComponent(Key,
          {
            keyobj: {
              letters: ['A', 'B'],
              type: 'num',
              dual: false,
              right: true,
              keyCode: 49
            }
          },
          {
            letters: {
              wrong: 'a',
              left: 'b',
              nextLetter: 'a'
            },
            isWritting: true
          }
        )

        expect(vm.classObject.next)
          .to.equal(true)
      })
    })
  })

  describe('rendering html content', () => {
    it('should render correct normal key html', () => {
      const vm = getComponent(Key, {
        keyobj: {
          letters: ['a'],
          type: 'num',
          dual: false,
          keyCode: 49
        }
      })
      expect(vm.$el.innerHTML)
        .to.equal('a')
    })

    it('should render correct dual key html', () => {
      const vm = getComponent(Key, {
        keyobj: {
          letters: ['a', 'b'],
          type: 'num',
          dual: true,
          keyCode: 49
        }
      })
      expect(vm.$el.innerHTML)
        .to.equal('a<br>b')
    })

    it('should render correct trial key html', () => {
      const vm = getComponent(Key, {
        keyobj: {
          letters: ['a', 'b', 'c'],
          type: 'num',
          trial: true,
          keyCode: 49
        }
      })
      expect(vm.$el.innerHTML)
        .to.equal('a<br>b&nbsp;&nbsp;c')
    })
  })
})
