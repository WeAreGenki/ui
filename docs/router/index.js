import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

// import Blank from '../components/Blank';
import Overview from '../components/Overview';
import Error404 from '../components/Error404';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Overview },
    { path: '*', component: Error404 },
  ],
});
