
const LoginTemplate = () => import('../../../view/pro001/login');


const Login = { template: LoginTemplate };

// const Login = { template: "<p>login</p>" };
const Bar = { template: '<div>bar</div>' };

const router = new VueRouter({
    routes: [
        { path: '/', name: 'login', component: Login },
        { path: '/bar', component: Bar }
    ]
});


const app = new Vue({
    router,
    el: '#app',
})
