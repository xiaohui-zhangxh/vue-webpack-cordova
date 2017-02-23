import Home from 'views/Home'
import NotFound from 'views/NotFound'
import Login from 'views/Login'

export default [
  { path: '/index.html', name: 'root', component: Home, alias: '/' },
  { path: '/login', name: 'login', component: Login },
  { path: '*', component: NotFound }
]
