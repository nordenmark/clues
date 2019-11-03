import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Person from '../views/Person.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  { path: '/person/:id', name: 'person', component: Person },
  {
    path: '/answer',
    name: 'answer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Answer.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
