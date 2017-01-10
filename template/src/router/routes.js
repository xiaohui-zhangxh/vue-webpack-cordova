import Home from 'views/Home'
import NotFound from 'views/NotFound'

export default [
  { path: '/', name: 'root', component: Home },
  { path: '*', component: NotFound }
]
