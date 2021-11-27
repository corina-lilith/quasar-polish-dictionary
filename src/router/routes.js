
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
      { path: '/food', component: () => import('src/pages/food/food.vue') },
      { path: '/food/bread', component: () => import('src/pages/food/bread.vue') },
      { path: '/food/dairy', component: () => import('src/pages/food/dairy.vue') },
      { path: '/food/FandV', component: () => import('src/pages/food/FandV.vue') },
      { path: '/food/frozen', component: () => import('src/pages/food/frozen.vue') },
      { path: '/food/grains', component: () => import('src/pages/food/grains.vue') },
      { path: '/food/HandS', component: () => import('src/pages/food/HandS.vue') },
      { path: '/food/meat', component: () => import('src/pages/food/meat.vue') },
      { path: '/food/seafood', component: () => import('src/pages/food/seafood.vue') },
      { path: '/food/sweets', component: () => import('src/pages/food/sweets.vue') },
      { path: '/hobbies', component: () => import('src/pages/hobbies.vue') },
      { path: '/numbers', component: () => import('src/pages/numbers.vue') },
      { path: '/occupations', component: () => import('src/pages/occupations.vue') },
      { path: '/people', component: () => import('src/pages/people.vue') },
      { path: '/time', component: () => import('src/pages/time.vue') },
      { path: '/timeHome', component: () => import('src/pages/timeHome.vue') },
      { path: '/months', component: () => import('src/pages/months.vue') },
      { path: '/days', component: () => import('src/pages/days.vue') },
      { path: '/transport', component: () => import('src/pages/transport.vue') },
      { path: '/weather', component: () => import('src/pages/weather.vue') },
      { path: '/verbs', component: () => import('src/pages/verbs.vue') }

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
