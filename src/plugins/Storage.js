import localForage from 'localforage'

class StoragePlugin {
  constructor (conf) {
    localForage.config(conf)
  }
}

const install = function (Vue, conf) {
  if (!Vue.$storage) {
    Vue.$storage = new StoragePlugin(conf)
  }
}

export default { install }
