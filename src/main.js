// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/fonts/iconfont.css';
import Element from 'element-ui';
import '@/styles/element_variables.scss';
import '@/styles/index.scss';
import '@/permission';
import 'babel-polyfill';
import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import * as utils from '@/utils/utils';

Vue.config.productionTip = false;
Vue.prototype.$utils = {...utils};

Vue.use(Element, {
    size: 'medium' // set element-ui default size
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});

