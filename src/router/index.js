import Vue from 'vue';
import Router from 'vue-router';
import layouts from '@/layouts/the_layouts';

/**
 * 模块导入
 * @param path
 * @returns {function()}
 * @private
 */
function _import(path) {
    return () => import(`@/pages/${path}`);
}

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            meta: {title: 'documentation1', icon: 'documentation', noCache: true},
            component: _import('login')
        },
        {
            path: '/home',
            name: 'layouts',
            redirect: '/page1',
            components: {
                default: layouts
            },
            children: [
                {
                    path: '/page1',
                    name: 'page1',
                    component: _import('page1')
                },
                {
                    path: '/page2',
                    name: 'page2',
                    component: _import('page2')
                }
            ]
        }
    ]
});
