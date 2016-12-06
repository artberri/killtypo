import Home from './pages/Home'
import Game from './pages/Game'
import Mode from './pages/Mode'
import User from './pages/User'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
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
    path: '/user/:userId',
    component: User,
    name: 'user-en',
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
    path: '/privacy',
    component: Privacy,
    name: 'privacy-en',
    meta: {
      lang: 'en'
    }
  },
  {
    path: '/cookies',
    component: Cookies,
    name: 'cookies-en',
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
    path: '/es/usuario/:userId',
    component: User,
    name: 'user-es',
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
    path: '/es/privacidad',
    component: Privacy,
    name: 'privacy-es',
    meta: {
      lang: 'es'
    }
  },
  {
    path: '/es/cookies',
    component: Cookies,
    name: 'cookies-es',
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
