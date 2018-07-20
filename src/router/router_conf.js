import layout from '@/layouts/the_layout';

/**
 * 模块导入
 * @param path
 * @returns {function()}
 * @private
 */
function _import(path) {
    return () => import(`@/pages/${path}`);
}

// 通用路由
export const constantRouterMap = [
    {path: '/login', component: _import('login/login'), hidden: true},
    {path: '/authredirect', component: _import('login/authredirect'), hidden: true},
    {path: '/404', component: _import('error_page/404'), hidden: true},
    {path: '/401', component: _import('error_page/401'), hidden: true}
];

export const asyncRouterMap = [
    {
        path: '',
        component: layout,
        redirect: '/home',
        meta: {title: '首1页', icon: 'iconfont icon-home', noCache: true},
        children: [{
            path: 'home',
            component: _import('home'),
            name: 'home',
            meta: {title: '首页', icon: 'iconfont icon-home', noCache: true}
        }]
    },
    {
        path: '/charts',
        component: layout,
        name: 'charts',
        redirect: 'noredirect',
        meta: {title: '图表', icon: 'iconfont icon-chart'},
        children: [
            {
                path: 'map',
                component: _import('charts/map'),
                name: 'map',
                meta: {title: 'map', icon: 'el-icon-location', noCache: true}
            },
            {
                path: 'line',
                component: _import('charts/line'),
                name: 'line',
                meta: {title: 'line', icon: 'el-icon-location', noCache: true}
            }
        ]
    },
    {path: '*', redirect: '/404', hidden: true}
];
