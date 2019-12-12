import Vue from 'vue';
import App from './components/App';
import axios from 'axios';
import {VueMasonryPlugin} from 'vue-masonry';
import BootstrapVue from 'bootstrap-vue';
import './scss/app.scss';
import ScrollLoader from 'vue-scroll-loader';
Vue.use(ScrollLoader);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
//extend("required", required);
//Vue.use(infiniteScroll);
//const VueMasonryPlugin = require('vue-masonry').VueMasonryPlugin
Vue.use(VueMasonryPlugin);
Vue.prototype.$http = axios;
new Vue({
    render: h => h(App)
}).$mount('#app');