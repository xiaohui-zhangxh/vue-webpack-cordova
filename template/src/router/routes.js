import Home from 'views/Home'
import NotFound from 'views/NotFound'

export default [
  { path: '/index.html', name: 'root', component: Home, alias: '/' },
  { path: '*', component: NotFound }
]
