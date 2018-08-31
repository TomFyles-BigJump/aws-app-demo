
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { name : "home", path: '', component: () => import('pages/index') },
      { name : "about", path: 'about', component: () => import('pages/about') }
      
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/auth'),
    children: [
      { name: "login", path: 'login', component: () => import('pages/login') },
      { name: "callback", path: 'callback', component: () => import('pages/callback') }      
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
