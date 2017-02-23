let ready = function (fn) {
  document.addEventListener('deviceready', fn, false)
}

let setup = function () {
  ready(function () {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      window.StatusBar.styleLightContent()
    }
  })
}

export default { ready, setup }
