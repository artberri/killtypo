import Home from './pages/Home'
import Game from './pages/Game'
import Mode from './pages/Mode'
import NotFound from './pages/NotFound'

export default [
  {
    path: '/',
    component: Home,
    name: 'home-en',
    meta: {
      lang: 'en'
    }
  },
  {
    path: '/game',
    component: Game,
    name: 'game-en',
    meta: {
      lang: 'en'
    }
  },
  {
    path: '/mode',
    component: Mode,
    name: 'mode-en',
    meta: {
      lang: 'en'
    }
  },

  {
    path: '/es',
    component: Home,
    name: 'home-es',
    meta: {
      lang: 'es'
    }
  },
  {
    path: '/es/juego',
    component: Game,
    name: 'game-es',
    meta: {
      lang: 'es'
    }
  },
  {
    path: '/es/modo',
    component: Mode,
    name: 'mode-es',
    meta: {
      lang: 'es'
    }
  },
  {
    path: '/es/*',
    component: NotFound,
    name: 'notfound-es',
    meta: {
      lang: 'es'
    }
  },
  {
    path: '*',
    component: NotFound,
    name: 'notfound-en',
    meta: {
      lang: 'en'
    }
  }
]
