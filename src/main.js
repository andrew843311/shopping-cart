import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import CategoryBlock from './components/CategoryBlock.vue'
import ProductBlock from './components/ProductBlock.vue'
import CartContainer from './components/CartContainer.vue'
import OpenCartBtn from './components/OpenCartBtn.vue'
import Home from './components/Home.vue'

Vue.component('home', Home);
Vue.component('category-block', CategoryBlock);
Vue.component('product-block', ProductBlock);
Vue.component('cart-container', CartContainer);
Vue.component('open-cart-btn', OpenCartBtn);

Vue.use(VueRouter);
export const router = new VueRouter({
    mode: 'history',
    routes:[
        {path: '/', component: Home},
        {path: '/category/:index/:name', component: CategoryBlock },
        {path: '/cart-container/', component: CartContainer },
    ]
});

new Vue({
    router,

  el: '#app',
  render: h => h(App)
})
