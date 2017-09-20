import VueRouter from 'vue-router';


let routes = [{
        name: 'Auth',
        path: '/',
        component: require('./components/Auth.vue')
    },
    {
        name: 'Home',
        path: '/home',
        component: require('./components/Home.vue')
    },
    {
        name: 'About',
        path: '/about',
        component: require('./components/About.vue')
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active',
    history: true
});