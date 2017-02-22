function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

let setup = function() {
  ready(init)
}

function init (){
  console.log('setting up cordova')
  if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if (window.StatusBar) {
    // org.apache.cordova.statusbar required
    StatusBar.styleLightContent();
  }
}

export default { setup }
