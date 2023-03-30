import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/HomePage.vue'),
	},
	{
		path: '/About',
		name: 'About',
		component: () => import('../views/AboutPage.vue'),
	},
	{

		
			path: '/Login',
			name: 'Login',
			component: () => import('../views/LoginPage.vue'),
		
	},
	{

		
		path: '/SignUp',
		name: 'SignUp',
		component: () => import('../views/SignupPage.vue'),
	
},
	
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
