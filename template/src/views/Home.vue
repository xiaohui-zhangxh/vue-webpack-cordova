<template>
  <div id="app">
    <cordova></cordova>
    <hello></hello>
  </div>
</template>

<script>
import Hello from 'components/Hello'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
import Cordova from 'components/Cordova'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}

export default {
  name: 'app',
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    Cordova{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
