
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/home.vue') },
      { path: '/alphabet', component: () => import('src/pages/alphabet.vue') },
      { path: '/animals', component: () => import('src/pages/animals.vue') },
      { path: '/colours', component: () => import('src/pages/colours.vue') },
      { path: '/drinks', component: () => import('src/pages/drinks.vue') },
      { path: '/food', component: () => import('src/pages/food.vue') },
      { path: '/hobbies', component: () => import('src/pages/hobbies.vue') },
      { path: '/numbers', component: () => import('src/pages/numbers.vue') },
      { path: '/occupations', component: () => import('src/pages/occupations.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
