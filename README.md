# vue-webpack-cordova

Create a basic framework for Vue + Webpack + Cordova

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

> This template only supports Vue 2.0

## Usage


``` bash
# we prefer the latest vue-cli, because this tempate requires vue-cli > 2.8.1,
# prior versions don't support `complete` function in meta.js
$ npm install vuejs/vue-cli -g
$ npm install yarn -g # use yarn manage nodejs packages
$ vue init xiaohui-zhangxh/vue-webpack-cordova my-project
$ cd my-project
$ yarn
$ npm run dev # run dev server
$ npm run build # build production files to cordova/www/
$ cd cordova && cordova emulate ios # open app in ios emulator
```

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
