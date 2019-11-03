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
    // this generates a separate chunk (answer.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "answer" */ '../views/Answer.vue'),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
