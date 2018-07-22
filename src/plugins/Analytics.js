/* global ga */
class AnalyticsPlugin {
  constructor (conf) {
    this.conf = conf
  }

  loaded () {
    return typeof ga !== 'undefined'
  }

  /**
   * Dispatch an analytics event
   *
   * @param category
   * @param action
   * @param label
   * @param value
   * @param fieldsObject
   */
  trackEvent (category, action, label, value, fieldsObject) {
    if (this.loaded()) {
      ga('send', 'event', category, action, label, value, fieldsObject)
    }
  }
}

const install = function (Vue, conf) {
  if (!Vue.$ga) {
    Vue.$ga = new AnalyticsPlugin(conf)
  }
}

export default { install }
