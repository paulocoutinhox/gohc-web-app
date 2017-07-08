import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import HealthcheckList from '@/components/HealthcheckList'
import Dashboard from '@/components/Dashboard'

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/healthcheck/list',
			name: 'HealthcheckList',
			component: HealthcheckList
		},
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: Dashboard
		}
	]
});
