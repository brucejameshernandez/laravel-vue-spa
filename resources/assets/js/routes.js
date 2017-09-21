import VueRouter from 'vue-router';
import axios from 'axios';

let routes = [{
        name: 'Auth',
        path: '/',
        component: require('./components/Auth.vue')
    },
    {
        name: 'Home',
        path: '/home',
        component: require('./components/Home.vue'),
        beforeEnter: (to, from, next) => {
            let authenticate = false;
            axios.get('/checkLogin').then((response) => {
                console.log('authenticated: ' + response.data);
                authenticate = response.data;
                if (authenticate) {
                    next();
                } else {
                    next('/');
                }
            });
        }
    },
    {
        name: 'About',
        path: '/about',
        component: require('./components/About.vue'),
        beforeEnter: (to, from, next) => {
            let authenticate = false;
            axios.get('/checkLogin').then((response) => {
                console.log('authenticated: ' + response.data);
                authenticate = response.data;
                if (authenticate) {
                    next();
                } else {
                    next('/');
                }
            });
        }
    }
];

const router = new VueRouter({
    routes,
    linkActiveClass: 'is-active',
    history: true
});

export default router;